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
  const analyticsCopy = {
    ja: ['このサイトの閲覧数を把握するため、同意した場合だけ Google Analytics を使用します。', '同意する', '同意しない', '分析の設定'],
    'en-GB': ['We use Google Analytics to measure visits to this website only if you agree.', 'Agree', 'Decline', 'Analytics settings'],
    'zh-Hans': ['仅在你同意后，我们才使用 Google Analytics 统计本网站的访问量。', '同意', '不同意', '分析设置'],
    'zh-Hant': ['只有在你同意後，我們才使用 Google Analytics 統計本網站的瀏覽量。', '同意', '不同意', '分析設定'],
    de: ['Wir verwenden Google Analytics zur Messung der Website-Besuche nur mit deiner Einwilligung.', 'Zustimmen', 'Ablehnen', 'Analyse-Einstellungen'],
    es: ['Solo si aceptas, usamos Google Analytics para medir las visitas a este sitio web.', 'Aceptar', 'Rechazar', 'Ajustes de análisis'],
    fr: ['Nous utilisons Google Analytics pour mesurer les visites de ce site uniquement avec votre accord.', 'Accepter', 'Refuser', 'Paramètres d’analyse'],
    nl: ['We gebruiken Google Analytics alleen met jouw toestemming om websitebezoeken te meten.', 'Toestaan', 'Weigeren', 'Analyse-instellingen'],
    it: ['Usiamo Google Analytics per misurare le visite al sito solo con il tuo consenso.', 'Accetta', 'Rifiuta', 'Impostazioni analisi'],
    'pt-BR': ['Usamos o Google Analytics para medir as visitas a este site somente com seu consentimento.', 'Aceitar', 'Recusar', 'Configurações de análise'],
    'pt-PT': ['Usamos o Google Analytics para medir as visitas a este site apenas com o teu consentimento.', 'Aceitar', 'Recusar', 'Definições de análise'],
    pl: ['Używamy Google Analytics do pomiaru odwiedzin strony tylko za Twoją zgodą.', 'Zgadzam się', 'Odmawiam', 'Ustawienia analityki'],
    ko: ['동의한 경우에만 Google Analytics로 이 웹사이트의 방문 수를 측정합니다.', '동의', '거부', '분석 설정'],
    vi: ['Chúng tôi chỉ dùng Google Analytics để đo lượt truy cập trang web khi bạn đồng ý.', 'Đồng ý', 'Từ chối', 'Cài đặt phân tích'],
    th: ['เราใช้ Google Analytics วัดจำนวนผู้เข้าชมเว็บไซต์นี้เมื่อคุณยินยอมเท่านั้น', 'ยินยอม', 'ไม่ยินยอม', 'การตั้งค่าการวิเคราะห์']
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
  const preferenceKey = 'dartsfinish-site-analytics-consent';
  let consentUi;
  let tagLoaded = false;
  const getPreference = () => {
    try { return localStorage.getItem(preferenceKey); } catch { return null; }
  };
  const savePreference = value => {
    try { localStorage.setItem(preferenceKey, value); } catch { /* Continue for this page only. */ }
  };
  function loadAnalytics() {
    if (tagLoaded) return;
    tagLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
      analytics_storage: 'granted', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied'
    });
    window.gtag('js', new Date());
    window.gtag('config', 'G-38JWXT48JK', {
      page_title: document.title,
      page_location: location.origin + location.pathname
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-38JWXT48JK';
    document.head.append(script);
  }
  function updateConsentCopy(locale) {
    if (!consentUi) return;
    const copy = analyticsCopy[locale];
    consentUi.message.textContent = copy[0];
    consentUi.accept.textContent = copy[1];
    consentUi.decline.textContent = copy[2];
    consentUi.settings.textContent = copy[3];
    consentUi.policy.textContent = labels[locale][2];
    consentUi.policy.href = `privacy-${locale}.html`;
  }
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
    updateConsentCopy(chosen);
    return chosen;
  }

  const initial = candidates.map(resolve).find(Boolean) || 'ja';
  show(initial);
  const footer = document.querySelector('.footer-inner');
  const settings = document.createElement('button');
  settings.type = 'button';
  settings.className = 'analytics-settings';
  footer.append(settings);
  const banner = document.createElement('aside');
  banner.className = 'analytics-banner';
  banner.setAttribute('aria-label', 'Analytics consent');
  banner.hidden = true;
  const message = document.createElement('p');
  const policy = document.createElement('a');
  const actions = document.createElement('div');
  actions.className = 'analytics-actions';
  const decline = document.createElement('button');
  const accept = document.createElement('button');
  decline.type = accept.type = 'button';
  accept.className = 'analytics-accept';
  actions.append(decline, accept);
  banner.append(message, policy, actions);
  document.body.append(banner);
  consentUi = { settings, banner, message, policy, decline, accept };
  updateConsentCopy(initial);
  settings.addEventListener('click', () => { banner.hidden = false; decline.focus(); });
  decline.addEventListener('click', () => {
    const wasAccepted = getPreference() === 'accepted' || tagLoaded;
    savePreference('denied');
    banner.hidden = true;
    if (wasAccepted) {
      window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
      location.reload();
    }
  });
  accept.addEventListener('click', () => {
    savePreference('accepted');
    banner.hidden = true;
    loadAnalytics();
  });
  if (getPreference() === 'accepted') loadAnalytics();
  else if (getPreference() !== 'denied') banner.hidden = false;
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
