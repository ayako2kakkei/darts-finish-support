(() => {
  const labels = {
    ja: ['トップ', 'サポート', 'プライバシーポリシー', 'メニュー'],
    'en-GB': ['Home', 'Support', 'Privacy Policy', 'Menu'],
    'zh-Hans': ['首页', '支持', '隐私政策', '菜单'],
    'zh-Hant': ['首頁', '支援', '隱私權政策', '選單'],
    de: ['Startseite', 'Support', 'Datenschutzerklärung', 'Menü'],
    es: ['Inicio', 'Ayuda', 'Política de privacidad', 'Menú'],
    fr: ['Accueil', 'Assistance', 'Politique de confidentialité', 'Menu'],
    nl: ['Start', 'Ondersteuning', 'Privacyverklaring', 'Menu'],
    it: ['Home', 'Supporto', 'Informativa sulla privacy', 'Menu'],
    'pt-BR': ['Início', 'Suporte', 'Política de Privacidade', 'Menu'],
    'pt-PT': ['Início', 'Apoio', 'Política de Privacidade', 'Menu'],
    pl: ['Strona główna', 'Pomoc', 'Polityka prywatności', 'Menu'],
    ko: ['홈', '지원', '개인정보 처리방침', '메뉴'],
    vi: ['Trang chủ', 'Hỗ trợ', 'Chính sách quyền riêng tư', 'Menu'],
    th: ['หน้าแรก', 'ช่วยเหลือ', 'นโยบายความเป็นส่วนตัว', 'เมนู']
  };
  const authorCopy = {
    "ja": ["作者について", "主にUIデザイナーとして働いています。JAPAN レディースのプロライセンスを取得し、自分がダーツの上がり方を覚えるために欲しかった練習アプリとして Darts Finish を作りました。引き算が苦手。"],
    "en-GB": ["About the creator", "She mainly works as a UI designer. She earned a JAPAN Ladies professional darts licence in Japan and built Darts Finish as the practice app she wanted for learning checkouts herself. Subtraction is not her strong suit."],
    "zh-Hans": ["关于作者", "她主要从事 UI 设计工作，已取得日本 JAPAN 女子组的职业飞镖执照。Darts Finish 是她为了学习收镖而制作的练习应用。减法不太拿手。"],
    "zh-Hant": ["關於作者", "她主要從事 UI 設計工作，已取得日本 JAPAN 女子組的職業飛鏢執照。Darts Finish 是她為了學習結鏢而製作的練習 App。不太擅長減法。"],
    "de": ["Über die Entwicklerin", "Sie arbeitet hauptsächlich als UI-Designerin. Sie hat die Profi-Lizenz der JAPAN Ladies im Darts erworben und Darts Finish entwickelt, weil sie selbst eine App zum Üben von Checkouts wollte. Kopfrechnen mit Minus fällt ihr schwer."],
    "es": ["Sobre la creadora", "Trabaja principalmente como diseñadora de interfaces. Obtuvo en Japón la licencia profesional de dardos JAPAN Ladies y creó Darts Finish porque quería una app para aprender a cerrar partidas. Las restas no se le dan muy bien."],
    "fr": ["À propos de la créatrice", "Elle travaille principalement comme designer d’interfaces. Elle a obtenu au Japon la licence professionnelle de fléchettes JAPAN Ladies et a créé Darts Finish parce qu’elle voulait une app pour apprendre les finitions. Les soustractions, ce n’est pas son fort."],
    "nl": ["Over de maker", "Ze werkt vooral als UI-ontwerper. Ze behaalde in Japan de professionele dartslicentie van JAPAN Ladies en maakte Darts Finish omdat ze zelf een app wilde om checkouts te leren. Aftrekken is niet haar sterkste punt."],
    "it": ["Chi ha creato l’app", "Lavora principalmente come UI designer. Ha ottenuto in Giappone la licenza professionistica JAPAN Ladies di freccette e ha creato Darts Finish perché voleva un’app per imparare le chiusure. Le sottrazioni non sono il suo forte."],
    "pt-BR": ["Sobre a criadora", "Trabalha principalmente como designer de interfaces. Obteve no Japão a licença profissional de dardos JAPAN Ladies e criou o Darts Finish porque queria um app para aprender a fechar partidas. Subtração não é o seu forte."],
    "pt-PT": ["Sobre a criadora", "Trabalha sobretudo como designer de interfaces. Obteve no Japão a licença profissional de dardos JAPAN Ladies e criou o Darts Finish porque queria uma aplicação para aprender a fechar partidas. As subtrações não são o seu forte."],
    "pl": ["O autorce", "Na co dzień pracuje głównie jako projektantka interfejsów. Zdobyła w Japonii licencję zawodową JAPAN Ladies w darcie i stworzyła Darts Finish, bo sama chciała aplikacji do nauki kończenia lega. Odejmowanie nie jest jej mocną stroną."],
    "ko": ["제작자 소개", "주로 UI 디자이너로 일합니다. 일본 JAPAN 레이디스 프로 다트 라이선스를 취득했으며, 직접 체크아웃을 익힐 때 필요했던 연습 앱으로 Darts Finish를 만들었습니다.뺄셈은 좀 약합니다."],
    "vi": ["Về người sáng tạo", "Công việc chính của cô là thiết kế giao diện. Cô đã nhận giấy phép thi đấu darts chuyên nghiệp JAPAN Ladies tại Nhật Bản và tạo Darts Finish vì chính cô muốn có một ứng dụng để luyện cách kết thúc ván. Cô không giỏi phép trừ."],
    "th": ["เกี่ยวกับผู้สร้าง", "ทำงานหลักด้านการออกแบบ UI ได้รับใบอนุญาตนักปาลูกดอกอาชีพ JAPAN Ladies ในญี่ปุ่น และสร้าง Darts Finish เพราะอยากมีแอปสำหรับฝึกปิดเกมด้วยตัวเองแต่ไม่ถนัดการลบเลข"]
  };
  const page = document.body.dataset.page;
  const candidates = [
    page === 'support' ? location.hash.slice(1) : null,
    page === 'home' ? new URLSearchParams(location.search).get('lang') : null,
    page === 'privacy' ? document.body.dataset.locale : null,
    navigator.language,
    navigator.language.split('-')[0]
  ];
  const resolve = value => {
    if (labels[value]) return value;
    if (value && value.startsWith('en')) return 'en-GB';
    if (value && value.startsWith('es')) return 'es';
    if (value && /^pt-(PT|AO|MZ|CV|GW|ST|TL)$/i.test(value)) return 'pt-PT';
    if (value && value.startsWith('pt')) return 'pt-BR';
    if (value && value.startsWith('zh')) return /Hant|TW|HK|MO/i.test(value) ? 'zh-Hant' : 'zh-Hans';
    return null;
  };
  const menu = document.getElementById('mobile-menu');
  const toggle = document.querySelector('.menu-toggle');
  const backdrop = document.querySelector('.menu-backdrop');
  const menuClose = document.querySelector('.menu-close');
  const closeMenu = () => {
    menu.hidden = true;
    backdrop.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  };
  toggle.addEventListener('click', () => {
    const open = menu.hidden;
    menu.hidden = !open;
    backdrop.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
  });
  backdrop.addEventListener('click', closeMenu);
  menuClose.addEventListener('click', () => { closeMenu(); toggle.focus(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) {
      closeMenu();
      toggle.focus();
    }
  });

  function show(locale) {
    const chosen = resolve(locale) || 'ja';
    document.documentElement.lang = chosen;
    document.querySelector('[data-author-name]').textContent = ['ja', 'zh-Hans', 'zh-Hant'].includes(chosen)
      ? '片岡 彩子（Ayako Kataoka）' : 'Ayako Kataoka';
    document.querySelector('[data-author-title]').textContent = authorCopy[chosen][0];
    document.querySelector('[data-author-bio]').textContent = authorCopy[chosen][1];
    document.querySelectorAll('[data-locale-section]').forEach(section => {
      section.hidden = section.dataset.localeSection !== chosen;
    });
    document.querySelectorAll('.language-select').forEach(select => { select.value = chosen; });
    const urls = {
      home: `index.html?lang=${encodeURIComponent(chosen)}`,
      support: `support.html#${chosen}`,
      privacy: `privacy-${chosen}.html`
    };
    document.querySelector('.brand').href = urls.home;
    document.querySelectorAll('[data-nav]').forEach(link => {
      const key = link.dataset.nav;
      link.href = urls[key];
      link.textContent = labels[chosen][{ home: 0, support: 1, privacy: 2 }[key]];
      if (key === page) link.setAttribute('aria-current', 'page');
    });
    toggle.setAttribute('aria-label', labels[chosen][3]);
    document.querySelectorAll('[data-privacy-link]').forEach(link => { link.href = urls.privacy; });
    document.querySelectorAll('[data-support-link]').forEach(link => { link.href = urls.support; });
    return chosen;
  }

  const initial = candidates.map(resolve).find(Boolean) || 'ja';
  show(initial);
  document.querySelectorAll('.language-select').forEach(select => {
    select.addEventListener('change', () => {
      const chosen = select.value;
      if (page === 'privacy') {
        location.href = `privacy-${chosen}.html`;
      } else if (page === 'support') {
        location.hash = chosen;
        show(chosen);
        closeMenu();
      } else {
        history.replaceState(null, '', `index.html?lang=${chosen}`);
        show(chosen);
        closeMenu();
      }
    });
  });
  if (page === 'support') window.addEventListener('hashchange', () => show(location.hash.slice(1)));
})();
