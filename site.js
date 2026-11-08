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
    "ja": ["作者について", "2026年にJAPAN LADIESのプロライセンスを取得。普段はUIデザイナーとして働いています。自分自身のために、ダーツの上がり方を覚える練習アプリとして Darts Finish を作りました。引き算が苦手。"],
    "en-GB": ["About the creator", "In 2026, she earned a JAPAN LADIES professional darts licence. She usually works as a UI designer. She built Darts Finish for herself as a practice app to learn how to finish in darts. Subtraction is not her strong suit."],
    "zh-Hans": ["关于作者", "她于 2026 年取得 JAPAN LADIES 职业飞镖执照，平时从事 UI 设计工作。她为自己制作了 Darts Finish，用来练习记住飞镖收镖路线。减法不太拿手。"],
    "zh-Hant": ["關於作者", "她於 2026 年取得 JAPAN LADIES 職業飛鏢執照，平時從事 UI 設計工作。她為自己製作了 Darts Finish，用來練習記住飛鏢結鏢路線。不太擅長減法。"],
    "de": ["Über die Entwicklerin", "2026 erwarb sie die Profi-Lizenz von JAPAN LADIES. Im Alltag arbeitet sie als UI-Designerin. Sie entwickelte Darts Finish für sich selbst als Übungsapp, um sich Checkout-Wege beim Darts einzuprägen. Kopfrechnen mit Minus fällt ihr schwer."],
    "es": ["Sobre la creadora", "En 2026 obtuvo la licencia profesional de dardos JAPAN LADIES. Normalmente trabaja como diseñadora de interfaces. Creó Darts Finish para sí misma como app de práctica para memorizar los cierres. Las restas no se le dan muy bien."],
    "fr": ["À propos de la créatrice", "En 2026, elle a obtenu la licence professionnelle de fléchettes JAPAN LADIES. Elle travaille habituellement comme designer d’interfaces. Elle a créé Darts Finish pour elle-même, afin de s’entraîner à mémoriser les finitions. Les soustractions, ce n’est pas son fort."],
    "nl": ["Over de maker", "In 2026 behaalde ze de professionele dartslicentie van JAPAN LADIES. Doorgaans werkt ze als UI-ontwerper. Ze maakte Darts Finish voor zichzelf als oefenapp om checkouts te leren onthouden. Aftrekken is niet haar sterkste punt."],
    "it": ["Chi ha creato l’app", "Nel 2026 ha ottenuto la licenza professionistica di freccette JAPAN LADIES. Di solito lavora come UI designer. Ha creato Darts Finish per sé come app di allenamento per memorizzare le chiusure. Le sottrazioni non sono il suo forte."],
    "pt-BR": ["Sobre a criadora", "Em 2026, obteve a licença profissional de dardos JAPAN LADIES. No dia a dia, trabalha como designer de interfaces. Criou o Darts Finish para si mesma como app de treino para memorizar os fechamentos. Subtração não é o seu forte."],
    "pt-PT": ["Sobre a criadora", "Em 2026, obteve a licença profissional de dardos JAPAN LADIES. No dia a dia, trabalha como designer de interfaces. Criou o Darts Finish para si própria como aplicação de treino para memorizar os fechos. As subtrações não são o seu forte."],
    "pl": ["O autorce", "W 2026 roku zdobyła licencję zawodową JAPAN LADIES w darcie. Na co dzień pracuje jako projektantka interfejsów. Stworzyła Darts Finish dla siebie jako aplikację do ćwiczenia i zapamiętywania sposobów kończenia lega. Odejmowanie nie jest jej mocną stroną."],
    "ko": ["제작자 소개", "2026년에 JAPAN LADIES 프로 다트 라이선스를 취득했습니다. 평소에는 UI 디자이너로 일합니다. 자신이 다트 체크아웃 방법을 익히기 위한 연습 앱으로 Darts Finish를 만들었습니다. 뺄셈은 좀 약합니다."],
    "vi": ["Về người sáng tạo", "Năm 2026, cô nhận giấy phép thi đấu darts chuyên nghiệp JAPAN LADIES. Công việc thường ngày của cô là thiết kế giao diện. Cô tạo Darts Finish cho chính mình như một ứng dụng luyện tập để ghi nhớ cách kết thúc ván darts. Cô không giỏi phép trừ."],
    "th": ["เกี่ยวกับผู้สร้าง", "ได้รับใบอนุญาตนักปาลูกดอกอาชีพ JAPAN LADIES ในปี 2026 ปกติทำงานเป็นนักออกแบบ UI และสร้าง Darts Finish ให้ตัวเองเพื่อฝึกจำวิธีปิดเกมปาลูกดอก แต่ไม่ถนัดการลบเลข"]
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
