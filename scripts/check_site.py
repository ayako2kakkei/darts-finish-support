"""Check that every published language page has working local navigation."""

import html
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
LOCALES = (
    'ja', 'en-GB', 'zh-Hans', 'zh-Hant', 'de', 'es', 'fr', 'nl', 'it',
    'pt-BR', 'pt-PT', 'pl', 'ko', 'vi', 'th',
)


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.sections = []
        self.options = []
        self.assets = []

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        if tag == 'a' and 'href' in values:
            self.links.append(values['href'])
        if tag == 'section' and 'data-locale-section' in values:
            self.sections.append(values['data-locale-section'])
        if tag == 'option' and 'value' in values:
            self.options.append(values['value'])
        if tag in ('img', 'source'):
            self.assets.append(values.get('src') or values.get('srcset'))


def author_bios():
    """Return the author bio per locale from site.js."""
    script = (ROOT / 'site.js').read_text(encoding='utf-8')
    found = re.findall(r'\n    "([\w-]+)": \["[^"]*", "([^"]*)"\]', script)
    return {locale: json.loads(f'"{text}"') for locale, text in found}


def main():
    bios = author_bios()
    assert set(bios) == set(LOCALES), sorted(bios)
    files = [ROOT / name for name in ('index.html', 'support.html', 'privacy.html')]
    files += [ROOT / f'privacy-{locale}.html' for locale in LOCALES]
    for file in files:
        page = Page()
        page.feed(file.read_text(encoding='utf-8'))
        assert page.options == list(LOCALES) * 2, file
        if file.name in ('index.html', 'support.html'):
            assert page.sections == list(LOCALES), file
        for target in page.links + page.assets:
            if not target or target.startswith(('http:', 'https:', 'mailto:', '#')):
                continue
            assert (ROOT / urlsplit(target).path).exists(), (file.name, target)
        assert 'site.js' in file.read_text(encoding='utf-8'), file
        # The static footer bio must match site.js for the page's own locale.
        locale = file.stem.removeprefix('privacy-') if file.stem.startswith('privacy-') else 'ja'
        static = re.search(r'data-author-bio>([^<]*)', file.read_text(encoding='utf-8'))
        assert static and html.unescape(static.group(1)) == bios[locale], (file.name, 'author bio differs from site.js')
    print(f'Checked {len(files)} pages and {len(LOCALES)} locales')


if __name__ == '__main__':
    main()
