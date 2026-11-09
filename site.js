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
    ja: ['このサイトの閲覧数を把握するため、同意した場合だけ Google Analytics を使用します。', '同意する', '同意しない', 'Cookieの設定'],
    'en-GB': ['We use Google Analytics to measure visits to this website only if you agree.', 'Agree', 'Decline', 'Cookie settings'],
    'zh-Hans': ['仅在你同意后，我们才使用 Google Analytics 统计本网站的访问量。', '同意', '不同意', 'Cookie 设置'],
    'zh-Hant': ['只有在你同意後，我們才使用 Google Analytics 統計本網站的瀏覽量。', '同意', '不同意', 'Cookie 設定'],
    de: ['Wir verwenden Google Analytics zur Messung der Website-Besuche nur mit deiner Einwilligung.', 'Zustimmen', 'Ablehnen', 'Cookie-Einstellungen'],
    es: ['Solo si aceptas, usamos Google Analytics para medir las visitas a este sitio web.', 'Aceptar', 'Rechazar', 'Ajustes de cookies'],
    fr: ['Nous utilisons Google Analytics pour mesurer les visites de ce site uniquement avec votre accord.', 'Accepter', 'Refuser', 'Paramètres des cookies'],
    nl: ['We gebruiken Google Analytics alleen met jouw toestemming om websitebezoeken te meten.', 'Toestaan', 'Weigeren', 'Cookie-instellingen'],
    it: ['Usiamo Google Analytics per misurare le visite al sito solo con il tuo consenso.', 'Accetta', 'Rifiuta', 'Impostazioni cookie'],
    'pt-BR': ['Usamos o Google Analytics para medir as visitas a este site somente com seu consentimento.', 'Aceitar', 'Recusar', 'Configurações de cookies'],
    'pt-PT': ['Usamos o Google Analytics para medir as visitas a este site apenas com o teu consentimento.', 'Aceitar', 'Recusar', 'Definições de cookies'],
    pl: ['Używamy Google Analytics do pomiaru odwiedzin strony tylko za Twoją zgodą.', 'Zgadzam się', 'Odmawiam', 'Ustawienia plików cookie'],
    ko: ['동의한 경우에만 Google Analytics로 이 웹사이트의 방문 수를 측정합니다.', '동의', '거부', '쿠키 설정'],
    vi: ['Chúng tôi chỉ dùng Google Analytics để đo lượt truy cập trang web khi bạn đồng ý.', 'Đồng ý', 'Từ chối', 'Cài đặt cookie'],
    th: ['เราใช้ Google Analytics วัดจำนวนผู้เข้าชมเว็บไซต์นี้เมื่อคุณยินยอมเท่านั้น', 'ยินยอม', 'ไม่ยินยอม', 'การตั้งค่าคุกกี้']
  };
  const authorCopy = {
    "ja": ["作者について", "2026年に🎯JAPAN LADIESのライセンスを取得した、UIデザイナーです。\nダーツのアレンジを覚えるために、アプリ「Darts Finish」を作りました。\n引き算が苦手。足し算も苦手。（暗算が早い人かっこいい）"],
    "en-GB": ["About the creator", "In 2026, she earned a 🎯JAPAN LADIES licence. She is a UI designer.\nShe made the app “Darts Finish” to learn darts checkout routes.\nSubtraction is not her strong suit. Nor is addition. (People who are quick at mental maths are cool.)"],
    "zh-Hans": ["关于作者", "2026 年取得了 🎯JAPAN LADIES 执照的 UI 设计师。\n为了记住飞镖的收镖路线，她制作了应用「Darts Finish」。\n不擅长减法，也不擅长加法。（心算快的人好帅）"],
    "zh-Hant": ["關於作者", "2026 年取得了 🎯JAPAN LADIES 執照的 UI 設計師。\n為了記住飛鏢的結鏢路線，她製作了 App「Darts Finish」。\n不擅長減法，也不擅長加法。（心算快的人好帥）"],
    "de": ["Über die Entwicklerin", "2026 erwarb sie die Lizenz von 🎯JAPAN LADIES. Sie ist UI-Designerin.\nUm sich Checkout-Wege beim Darts einzuprägen, entwickelte sie die App „Darts Finish“.\nSubtrahieren fällt ihr schwer. Addieren auch. (Wer schnell im Kopf rechnen kann, ist cool.)"],
    "es": ["Sobre la creadora", "En 2026 obtuvo la licencia 🎯JAPAN LADIES. Es diseñadora de interfaces.\nCreó la app «Darts Finish» para aprender las rutas de cierre en los dardos.\nLas restas no se le dan bien. Las sumas tampoco. (Quien calcula rápido de cabeza es genial.)"],
    "fr": ["À propos de la créatrice", "En 2026, elle a obtenu la licence 🎯JAPAN LADIES. Elle est designer d’interfaces.\nElle a créé l’app « Darts Finish » pour apprendre les routes de finition aux fléchettes.\nLes soustractions, ce n’est pas son fort. Les additions non plus. (Ceux qui calculent vite de tête sont trop classe.)"],
    "nl": ["Over de maker", "In 2026 behaalde ze de 🎯JAPAN LADIES-licentie. Ze is UI-ontwerper.\nZe maakte de app ‘Darts Finish’ om checkoutroutes te leren onthouden.\nAftrekken is niet haar sterkste punt. Optellen ook niet. (Wie snel hoofdrekent, is stoer.)"],
    "it": ["Chi ha creato l’app", "Nel 2026 ha ottenuto la licenza 🎯JAPAN LADIES. È una UI designer.\nHa creato l’app «Darts Finish» per imparare i percorsi di chiusura nelle freccette.\nLe sottrazioni non sono il suo forte. Nemmeno le addizioni. (Chi sa fare i calcoli a mente in fretta è figo.)"],
    "pt-BR": ["Sobre a criadora", "Em 2026, obteve a licença 🎯JAPAN LADIES. É designer de interfaces.\nCriou o app “Darts Finish” para aprender as rotas de fechamento no dardo.\nSubtração não é o seu forte. Adição também não. (Quem faz conta de cabeça rápido é legal.)"],
    "pt-PT": ["Sobre a criadora", "Em 2026, obteve a licença 🎯JAPAN LADIES. É designer de interfaces.\nCriou a aplicação “Darts Finish” para aprender as rotas de fecho nos dardos.\nAs subtrações não são o seu forte. As somas também não. (Quem faz contas de cabeça depressa é fixe.)"],
    "pl": ["O autorce", "W 2026 roku zdobyła licencję 🎯JAPAN LADIES. Jest projektantką interfejsów.\nStworzyła aplikację „Darts Finish”, aby nauczyć się dróg kończenia lega.\nOdejmowanie nie jest jej mocną stroną. Dodawanie też nie. (Ludzie, którzy szybko liczą w pamięci, są super.)"],
    "ko": ["제작자 소개", "2026년에 🎯JAPAN LADIES 라이선스를 취득한 UI 디자이너입니다.\n다트 체크아웃 루트를 익히기 위해 앱 'Darts Finish'를 만들었습니다.\n뺄셈이 약합니다. 덧셈도 약합니다. (암산이 빠른 사람은 멋져요.)"],
    "vi": ["Về người sáng tạo", "Năm 2026, cô nhận giấy phép 🎯JAPAN LADIES. Cô là nhà thiết kế giao diện (UI).\nCô tạo ứng dụng “Darts Finish” để ghi nhớ các đường kết thúc ván darts.\nCô không giỏi phép trừ. Phép cộng cũng vậy. (Người tính nhẩm nhanh thật ngầu.)"],
    "th": ["เกี่ยวกับผู้สร้าง", "ได้รับใบอนุญาต 🎯JAPAN LADIES ในปี 2026 เป็นนักออกแบบ UI\nสร้างแอป “Darts Finish” เพื่อฝึกจำเส้นทางปิดเกมปาลูกดอก\nไม่ถนัดการลบเลข และไม่ถนัดการบวกเลขด้วย (คนที่คิดเลขในใจเร็วนี่เท่จังเลย)"]
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
      send_page_view: false,
      page_title: document.title,
      page_location: location.origin + location.pathname
    });
    window.gtag('event', 'page_view', {
      send_to: 'G-38JWXT48JK',
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
    consentUi.settings.forEach(button => { button.textContent = copy[3]; });
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
  const settings = document.querySelectorAll('[data-cookie-settings]');
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
  settings.forEach(button => button.addEventListener('click', () => { closeMenu(); banner.hidden = false; decline.focus(); }));
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
