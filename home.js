// トップページ（LP）の文言・スクリーンショット・動画を言語に合わせて切り替える。
// 言語の決定は site.js が行い、決まるたびに `site:locale` イベントを送ってくる。
(() => {
  const APP_STORE_URL = 'https://apps.apple.com/app/id6831528166';

  // 文言がない言語は en-GB を使う。
  const copy = {
    ja: {
      tagline: '見て、真似て、身につける',
      appStoreSmall: 'iPhone・iPad版',
      playSmall: 'Android版',
      soon: '近日公開',
      featuresTitle: 'できること',
      f1t: 'ランダム出題', f1b: '残り点数がランダムに出題されます。ダーツボードの数字をタップして狙う場所を選び、その場で答え合わせ。答えの表示・非表示も切り替えられます。',
      f2t: 'お手本を再生して覚える', f2b: '1本・2本・3本で上がれる数字を順番に練習できます。', f2h: '再生ボタンを押すと、答えのルートが盤面で順に再生されます。',
      f3t: 'アレンジ一覧', f3b: 'すべての点数のルートを一覧で確認できます。鉛筆ボタンで答えを編集して、自分の好きなルートにできます。',
      f4t: '上がれないときの残し方', f4b: 'このラウンドで上がれないときに、次のラウンドで上がりやすい数字を残す方法も練習できます。',
      rt: 'ルールを選べる', rb: '大会やお店のルールに合わせて、ブルの種類やアウトの条件を切り替えて練習できます。選べるルールは次の4つです。',
      dt: 'ダークモードにも対応', db: 'ダークモードで表示できます。ダーツボードは、ダーツライブ・フェニックス・ハードダーツの配色から選べます。',
      p2t: '情報を取得しないから安心', p2b: 'アプリは、個人情報や使い方の記録を一切取得しません。アカウント登録も広告もないので、安心して使えます。',
      ctaTitle: 'さっそくアレンジを覚えよう',
      videoLabel: 'アプリの操作動画'
    },
    'en-GB': {
      tagline: 'Watch, copy, remember',
      appStoreSmall: 'Download on the',
      playSmall: 'Get it on',
      soon: 'Coming soon',
      featuresTitle: 'What you can do',
      f1t: 'Random quiz', f1b: 'Get a random score to finish. Tap the numbers on the dartboard to pick your targets and check your answer straight away. You can show or hide the answer at any time.',
      f2t: 'Watch the route, then learn it', f2b: 'Practise the scores you can finish with one, two or three darts, step by step.', f2h: 'Press play to watch the route thrown on the board, dart by dart.',
      f3t: 'Checkout list', f3b: 'See the route for every score in one list. Use the pencil button to edit an answer and make it your own preferred route.',
      f4t: 'Leave a good score', f4b: 'When you cannot finish this turn, practise leaving a score that is easier to finish on your next turn.',
      rt: 'Choose your rules', rb: 'Switch the bull type (Fat Bull / Separate Bull) and the out rule (Master Out and more), and practise for the rules you play.',
      dt: 'Dark mode too', db: 'Use the app in dark mode. Choose DARTSLIVE, PHOENIX or steel-tip colours for the dartboard.',
      p2t: 'No data collected', p2b: 'The app collects no personal data and does not track how you use it. No account and no ads, so you can use it with peace of mind.',
      ctaTitle: 'Start learning your checkouts',
      videoLabel: 'App demo video'
    },
    'zh-Hans': {
      tagline: '看、模仿、记住',
      appStoreSmall: '下载自',
      playSmall: '下载自',
      soon: '即将推出',
      featuresTitle: '主要功能',
      f1t: '随机出题', f1b: '随机给出剩余分数。点击镖盘上的数字选择目标，立即核对答案。也可以随时显示或隐藏答案。',
      f2t: '看示范路线来记忆', f2b: '按一镖、两镖、三镖可以收镖的分数逐步练习。', f2h: '按下播放键，答案路线会在镖盘上依次演示。',
      f3t: '收镖路线一览', f3b: '在一个列表中查看所有分数的路线。点击铅笔按钮即可编辑答案，改成自己喜欢的路线。',
      f4t: '无法收镖时的留分', f4b: '当这一轮无法收镖时，也能练习如何留下下一轮更容易收镖的分数。',
      rt: '可选择规则', rb: '可以切换牛眼类型（Fat Bull／Separate Bull）和收镖条件（Master Out 等），按你比赛的规则练习。',
      dt: '支持深色模式', db: '可以用深色模式显示。镖盘可选 DARTSLIVE、PHOENIX 或硬镖配色。',
      p2t: '不收集任何信息', p2b: '不收集个人信息，也不记录你的使用情况。无需注册账号，没有广告，可以放心使用。',
      ctaTitle: '现在就来记住收镖路线吧',
      videoLabel: '应用演示视频'
    },
    'zh-Hant': {
      tagline: '看、模仿、記起來',
      appStoreSmall: '下載自',
      playSmall: '下載自',
      soon: '即將推出',
      featuresTitle: '主要功能',
      f1t: '隨機出題', f1b: '隨機出現剩餘分數。點選鏢靶上的數字選擇目標，馬上對答案。也可以隨時顯示或隱藏答案。',
      f2t: '看示範路線來記憶', f2b: '依一鏢、兩鏢、三鏢可以結鏢的分數循序練習。', f2h: '按下播放鍵，答案路線會在鏢靶上依序示範。',
      f3t: '結鏢路線一覽', f3b: '在一個清單中查看所有分數的路線。點選鉛筆按鈕即可編輯答案，改成自己喜歡的路線。',
      f4t: '無法結鏢時的留分', f4b: '這一輪無法結鏢時，也能練習如何留下下一輪更容易結鏢的分數。',
      rt: '可選擇規則', rb: '可以切換紅心類型（Fat Bull／Separate Bull）與結鏢條件（Master Out 等），依你比賽的規則練習。',
      dt: '支援深色模式', db: '可以用深色模式顯示。鏢靶可選 DARTSLIVE、PHOENIX 或硬鏢配色。',
      p2t: '不蒐集任何資訊', p2b: '不蒐集個人資訊，也不記錄你的使用情況。不需註冊帳號，沒有廣告，可以安心使用。',
      ctaTitle: '現在就來記住結鏢路線吧',
      videoLabel: 'App 示範影片'
    },
    de: {
      tagline: 'Zusehen, nachmachen, einprägen',
      appStoreSmall: 'Laden im',
      playSmall: 'Jetzt bei',
      soon: 'Demnächst',
      featuresTitle: 'Das kannst du üben',
      f1t: 'Zufallsquiz', f1b: 'Du bekommst einen zufälligen Rest. Tippe auf die Zahlen der Dartscheibe, um deine Ziele zu wählen, und prüfe die Antwort sofort. Die Lösung lässt sich jederzeit ein- und ausblenden.',
      f2t: 'Den Weg ansehen und einprägen', f2b: 'Übe Schritt für Schritt die Reste, die du mit einem, zwei oder drei Darts auscheckst.', f2h: 'Mit der Wiedergabe-Taste wird der Weg Dart für Dart auf der Scheibe gezeigt.',
      f3t: 'Checkout-Liste', f3b: 'Sieh dir den Weg für jeden Rest in einer Liste an. Mit dem Stift bearbeitest du eine Antwort und machst sie zu deinem Lieblingsweg.',
      f4t: 'Gut stehen lassen', f4b: 'Wenn du in dieser Aufnahme nicht auschecken kannst, übst du, einen Rest stehen zu lassen, der in der nächsten Aufnahme leichter geht.',
      rt: 'Regeln wählen', rb: 'Wechsle die Bull-Art (Fat Bull / Separate Bull) und die Out-Regel (Master Out u. a.) und übe nach den Regeln, die du spielst.',
      dt: 'Auch im Dunkelmodus', db: 'Nutze die App im Dunkelmodus. Für die Dartscheibe wählst du DARTSLIVE-, PHOENIX- oder Steeldart-Farben.',
      p2t: 'Keine Datenerfassung', p2b: 'Die App erfasst keine persönlichen Daten und verfolgt nicht, wie du sie nutzt. Kein Konto, keine Werbung – du kannst sie ganz unbesorgt verwenden.',
      ctaTitle: 'Jetzt Checkout-Wege lernen',
      videoLabel: 'Demovideo der App'
    },
    es: {
      tagline: 'Mira, imita y memoriza',
      appStoreSmall: 'Descárgalo en el',
      playSmall: 'Disponible en',
      soon: 'Próximamente',
      featuresTitle: 'Qué puedes hacer',
      f1t: 'Preguntas al azar', f1b: 'Recibe una puntuación al azar para cerrar. Toca los números de la diana para elegir tus objetivos y comprueba la respuesta al momento. Puedes mostrar u ocultar la respuesta cuando quieras.',
      f2t: 'Mira la ruta y memorízala', f2b: 'Practica paso a paso las puntuaciones que se cierran con uno, dos o tres dardos.', f2h: 'Pulsa reproducir para ver la ruta dardo a dardo en la diana.',
      f3t: 'Lista de cierres', f3b: 'Consulta la ruta de cada puntuación en una sola lista. Con el lápiz puedes editar una respuesta y convertirla en tu ruta preferida.',
      f4t: 'Deja una buena puntuación', f4b: 'Si no puedes cerrar en este turno, practica cómo dejar una puntuación más fácil de cerrar en el siguiente.',
      rt: 'Elige las reglas', rb: 'Cambia el tipo de bull (Fat Bull / Separate Bull) y la regla de salida (Master Out y más) y practica con las reglas que juegas.',
      dt: 'También en modo oscuro', db: 'Usa la app en modo oscuro. Para la diana, elige los colores DARTSLIVE, PHOENIX o de punta de acero.',
      p2t: 'Sin recogida de datos', p2b: 'La app no recoge datos personales ni registra cómo la usas. Sin cuenta y sin anuncios, para que la uses con total tranquilidad.',
      ctaTitle: 'Empieza a memorizar tus cierres',
      videoLabel: 'Vídeo de demostración de la app'
    },
    fr: {
      tagline: 'Regarder, imiter, retenir',
      appStoreSmall: 'Télécharger dans l’',
      playSmall: 'Disponible sur',
      soon: 'Bientôt disponible',
      featuresTitle: 'Ce que vous pouvez faire',
      f1t: 'Quiz aléatoire', f1b: 'Un score à finir est tiré au hasard. Touchez les numéros de la cible pour choisir vos zones et vérifiez la réponse aussitôt. Vous pouvez afficher ou masquer la réponse à tout moment.',
      f2t: 'Regardez le parcours, puis retenez-le', f2b: 'Entraînez-vous pas à pas sur les scores qui se finissent en une, deux ou trois fléchettes.', f2h: 'Appuyez sur lecture pour voir le parcours fléchette par fléchette sur la cible.',
      f3t: 'Liste des finitions', f3b: 'Retrouvez le parcours de chaque score dans une seule liste. Le bouton crayon permet de modifier une réponse pour en faire votre parcours préféré.',
      f4t: 'Laisser un bon reste', f4b: 'Quand vous ne pouvez pas finir sur cette volée, entraînez-vous à laisser un score plus facile à finir à la suivante.',
      rt: 'Règles au choix', rb: 'Changez le type de bull (Fat Bull / Separate Bull) et la règle de sortie (Master Out, etc.) pour vous entraîner selon vos règles.',
      dt: 'Mode sombre aussi', db: 'Utilisez l’app en mode sombre. Pour la cible, choisissez les couleurs DARTSLIVE, PHOENIX ou pointe acier.',
      p2t: 'Aucune donnée collectée', p2b: 'L’app ne collecte aucune donnée personnelle et ne suit pas votre utilisation. Pas de compte, pas de publicité : utilisez-la en toute tranquillité.',
      ctaTitle: 'Mémorisez vos finitions dès maintenant',
      videoLabel: 'Vidéo de démonstration de l’app'
    },
    nl: {
      tagline: 'Kijken, nadoen, onthouden',
      appStoreSmall: 'Download in de',
      playSmall: 'Ontdek het op',
      soon: 'Binnenkort',
      featuresTitle: 'Wat je kunt doen',
      f1t: 'Willekeurige quiz', f1b: 'Je krijgt een willekeurige score om uit te gooien. Tik op de nummers van het bord om je doelen te kiezen en controleer meteen je antwoord. Het antwoord kun je altijd tonen of verbergen.',
      f2t: 'Bekijk de route en onthoud hem', f2b: 'Oefen stap voor stap de scores die je met één, twee of drie darts uitgooit.', f2h: 'Druk op afspelen om de route pijl voor pijl op het bord te zien.',
      f3t: 'Uitgooilijst', f3b: 'Bekijk de route voor elke score in één lijst. Met de potloodknop pas je een antwoord aan tot jouw favoriete route.',
      f4t: 'Een goede rest laten staan', f4b: 'Lukt uitgooien deze beurt niet, oefen dan hoe je een score laat staan die je de volgende beurt makkelijker uitgooit.',
      rt: 'Kies je regels', rb: 'Wissel het type bull (Fat Bull / Separate Bull) en de uitgooiregel (Master Out en meer) en oefen met de regels die jij speelt.',
      dt: 'Ook in donkere modus', db: 'Gebruik de app in donkere modus. Kies voor het bord DARTSLIVE-, PHOENIX- of steeltip-kleuren.',
      p2t: 'Geen gegevens verzameld', p2b: 'De app verzamelt geen persoonsgegevens en houdt niet bij hoe je hem gebruikt. Geen account en geen advertenties, dus zorgeloos te gebruiken.',
      ctaTitle: 'Begin met het leren van je uitgooiroutes',
      videoLabel: 'Demovideo van de app'
    },
    it: {
      tagline: 'Guarda, imita, memorizza',
      appStoreSmall: 'Scarica su',
      playSmall: 'Disponibile su',
      soon: 'Prossimamente',
      featuresTitle: 'Cosa puoi fare',
      f1t: 'Quiz casuale', f1b: 'Ricevi un punteggio casuale da chiudere. Tocca i numeri del bersaglio per scegliere i tuoi obiettivi e controlla subito la risposta. Puoi mostrare o nascondere la risposta quando vuoi.',
      f2t: 'Guarda il percorso e memorizzalo', f2b: 'Esercitati passo dopo passo sui punteggi che si chiudono con una, due o tre freccette.', f2h: 'Premi play per vedere il percorso freccetta per freccetta sul bersaglio.',
      f3t: 'Elenco delle chiusure', f3b: 'Consulta il percorso di ogni punteggio in un unico elenco. Con la matita puoi modificare una risposta e renderla il tuo percorso preferito.',
      f4t: 'Lascia un buon punteggio', f4b: 'Quando non puoi chiudere in questo turno, esercitati a lasciare un punteggio più facile da chiudere al turno successivo.',
      rt: 'Scegli le regole', rb: 'Cambia il tipo di bull (Fat Bull / Separate Bull) e la regola di chiusura (Master Out e altre) e allenati con le regole che giochi.',
      dt: 'Anche in modalità scura', db: 'Usa l’app in modalità scura. Per il bersaglio scegli i colori DARTSLIVE, PHOENIX o steel.',
      p2t: 'Nessun dato raccolto', p2b: 'L’app non raccoglie dati personali e non traccia come la usi. Nessun account e nessuna pubblicità: usala in tutta tranquillità.',
      ctaTitle: 'Inizia a memorizzare le tue chiusure',
      videoLabel: 'Video dimostrativo dell’app'
    },
    'pt-BR': {
      tagline: 'Veja, imite, memorize',
      appStoreSmall: 'Baixar na',
      playSmall: 'Disponível no',
      soon: 'Em breve',
      featuresTitle: 'O que você pode fazer',
      f1t: 'Quiz aleatório', f1b: 'Receba uma pontuação aleatória para fechar. Toque nos números do alvo para escolher seus objetivos e confira a resposta na hora. Você pode mostrar ou ocultar a resposta quando quiser.',
      f2t: 'Veja a rota e memorize', f2b: 'Pratique passo a passo as pontuações que fecham com um, dois ou três dardos.', f2h: 'Toque em reproduzir para ver a rota dardo a dardo no alvo.',
      f3t: 'Lista de fechamentos', f3b: 'Veja a rota de cada pontuação em uma única lista. Com o lápis, você edita uma resposta e a transforma na sua rota preferida.',
      f4t: 'Deixe uma boa sobra', f4b: 'Quando não der para fechar nesta rodada, pratique como deixar uma pontuação mais fácil de fechar na próxima.',
      rt: 'Escolha as regras', rb: 'Troque o tipo de bull (Fat Bull / Separate Bull) e a regra de saída (Master Out e outras) e pratique com as regras que você joga.',
      dt: 'Também no modo escuro', db: 'Use o app no modo escuro. Para o alvo, escolha as cores DARTSLIVE, PHOENIX ou steel.',
      p2t: 'Nenhum dado coletado', p2b: 'O app não coleta dados pessoais nem registra como você o usa. Sem conta e sem anúncios, para usar com tranquilidade.',
      ctaTitle: 'Comece a memorizar seus fechamentos',
      videoLabel: 'Vídeo de demonstração do app'
    },
    'pt-PT': {
      tagline: 'Ver, imitar, memorizar',
      appStoreSmall: 'Descarregar na',
      playSmall: 'Disponível no',
      soon: 'Brevemente',
      featuresTitle: 'O que pode fazer',
      f1t: 'Questionário aleatório', f1b: 'Receba uma pontuação aleatória para fechar. Toque nos números do alvo para escolher os seus objetivos e confirme logo a resposta. Pode mostrar ou ocultar a resposta quando quiser.',
      f2t: 'Veja o percurso e memorize-o', f2b: 'Pratique passo a passo as pontuações que se fecham com um, dois ou três dardos.', f2h: 'Toque em reproduzir para ver o percurso dardo a dardo no alvo.',
      f3t: 'Lista de fechos', f3b: 'Consulte o percurso de cada pontuação numa única lista. Com o lápis, edita uma resposta e torna-a o seu percurso preferido.',
      f4t: 'Deixar um bom resto', f4b: 'Quando não consegue fechar nesta jogada, pratique como deixar uma pontuação mais fácil de fechar na seguinte.',
      rt: 'Escolha as regras', rb: 'Mude o tipo de bull (Fat Bull / Separate Bull) e a regra de saída (Master Out e outras) e pratique com as regras que joga.',
      dt: 'Também no modo escuro', db: 'Use a app no modo escuro. Para o alvo, escolha as cores DARTSLIVE, PHOENIX ou steel.',
      p2t: 'Nenhum dado recolhido', p2b: 'A app não recolhe dados pessoais nem regista como a utiliza. Sem conta e sem anúncios, para usar com toda a tranquilidade.',
      ctaTitle: 'Comece a memorizar os seus fechos',
      videoLabel: 'Vídeo de demonstração da app'
    },
    pl: {
      tagline: 'Patrz, naśladuj, zapamiętuj',
      appStoreSmall: 'Pobierz w',
      playSmall: 'Pobierz z',
      soon: 'Wkrótce',
      featuresTitle: 'Co możesz robić',
      f1t: 'Losowy quiz', f1b: 'Dostajesz losowy wynik do zamknięcia. Stuknij liczby na tarczy, aby wybrać cele, i od razu sprawdź odpowiedź. Odpowiedź możesz w każdej chwili pokazać lub ukryć.',
      f2t: 'Zobacz trasę i ją zapamiętaj', f2b: 'Ćwicz krok po kroku wyniki, które zamkniesz jedną, dwiema lub trzema lotkami.', f2h: 'Naciśnij odtwarzanie, aby zobaczyć trasę lotka po lotce na tarczy.',
      f3t: 'Lista zamknięć', f3b: 'Zobacz trasę dla każdego wyniku na jednej liście. Ołówkiem edytujesz odpowiedź i ustawiasz własną ulubioną trasę.',
      f4t: 'Zostaw dobrą resztę', f4b: 'Gdy w tej kolejce nie da się zamknąć, ćwicz zostawianie wyniku, który łatwiej zamknąć w następnej.',
      rt: 'Wybierz zasady', rb: 'Zmieniaj rodzaj bulla (Fat Bull / Separate Bull) i zasadę zamknięcia (Master Out i inne) i ćwicz według zasad, w które grasz.',
      dt: 'Także tryb ciemny', db: 'Korzystaj z aplikacji w trybie ciemnym. Dla tarczy wybierz kolory DARTSLIVE, PHOENIX lub stalowej.',
      p2t: 'Bez zbierania danych', p2b: 'Aplikacja nie zbiera danych osobowych i nie śledzi, jak z niej korzystasz. Bez konta i bez reklam – możesz używać jej spokojnie.',
      ctaTitle: 'Zacznij zapamiętywać zamknięcia',
      videoLabel: 'Film demonstracyjny aplikacji'
    },
    ko: {
      tagline: '보고, 따라 하고, 익히기',
      appStoreSmall: '다운로드하기',
      playSmall: '다운로드하기',
      soon: '출시 예정',
      featuresTitle: '이런 걸 할 수 있어요',
      f1t: '랜덤 출제', f1b: '남은 점수가 랜덤으로 출제됩니다. 다트보드의 숫자를 탭해 노릴 곳을 고르고 바로 정답을 확인하세요. 정답은 언제든 보이거나 숨길 수 있습니다.',
      f2t: '시범 루트를 보고 익히기', f2b: '1개·2개·3개로 끝낼 수 있는 점수를 차례로 연습합니다.', f2h: '재생 버튼을 누르면 정답 루트가 보드 위에서 한 발씩 재생됩니다.',
      f3t: '어레인지 목록', f3b: '모든 점수의 루트를 한 목록에서 확인할 수 있습니다. 연필 버튼으로 정답을 편집해 내가 좋아하는 루트로 바꿀 수 있습니다.',
      f4t: '못 끝낼 때 남기는 법', f4b: '이번 라운드에 끝낼 수 없을 때, 다음 라운드에 끝내기 쉬운 점수를 남기는 방법도 연습할 수 있습니다.',
      rt: '규칙 선택', rb: '불의 종류(Fat Bull / Separate Bull)와 아웃 조건(Master Out 등)을 바꿔, 내가 치는 규칙에 맞춰 연습할 수 있습니다.',
      dt: '다크 모드 지원', db: '다크 모드로 표시할 수 있습니다. 다트보드는 DARTSLIVE·PHOENIX·하드 다트 배색 중에서 고를 수 있습니다.',
      p2t: '정보 수집 없음', p2b: '개인정보나 이용 기록을 전혀 수집하지 않습니다. 계정 가입도 광고도 없어 안심하고 사용할 수 있습니다.',
      ctaTitle: '지금 바로 어레인지를 익혀 보세요',
      videoLabel: '앱 데모 영상'
    },
    vi: {
      tagline: 'Xem, bắt chước, ghi nhớ',
      appStoreSmall: 'Tải về trên',
      playSmall: 'Tải về trên',
      soon: 'Sắp ra mắt',
      featuresTitle: 'Bạn có thể làm gì',
      f1t: 'Câu hỏi ngẫu nhiên', f1b: 'Nhận một số điểm ngẫu nhiên cần kết thúc. Chạm vào các số trên bảng phi tiêu để chọn mục tiêu và kiểm tra đáp án ngay. Bạn có thể hiện hoặc ẩn đáp án bất cứ lúc nào.',
      f2t: 'Xem lộ trình mẫu rồi ghi nhớ', f2b: 'Luyện từng bước các số điểm kết thúc được bằng một, hai hoặc ba phi tiêu.', f2h: 'Nhấn phát để xem lộ trình được ném lần lượt trên bảng.',
      f3t: 'Danh sách kết thúc', f3b: 'Xem lộ trình của mọi số điểm trong một danh sách. Dùng nút bút chì để sửa đáp án thành lộ trình bạn thích.',
      f4t: 'Để lại số điểm tốt', f4b: 'Khi không thể kết thúc ở lượt này, hãy luyện cách để lại số điểm dễ kết thúc hơn ở lượt sau.',
      rt: 'Chọn luật chơi', rb: 'Đổi loại bull (Fat Bull / Separate Bull) và luật kết thúc (Master Out, v.v.) để luyện theo đúng luật bạn chơi.',
      dt: 'Có chế độ tối', db: 'Dùng ứng dụng ở chế độ tối. Chọn màu bảng DARTSLIVE, PHOENIX hoặc phi tiêu đầu thép.',
      p2t: 'Không thu thập dữ liệu', p2b: 'Ứng dụng không thu thập dữ liệu cá nhân và không theo dõi cách bạn sử dụng. Không cần tài khoản, không quảng cáo, nên bạn có thể yên tâm sử dụng.',
      ctaTitle: 'Bắt đầu ghi nhớ cách kết thúc ngay',
      videoLabel: 'Video giới thiệu ứng dụng'
    },
    th: {
      tagline: 'ดู ทำตาม แล้วจำให้ได้',
      appStoreSmall: 'ดาวน์โหลดบน',
      playSmall: 'ดาวน์โหลดบน',
      soon: 'เร็วๆ นี้',
      featuresTitle: 'ทำอะไรได้บ้าง',
      f1t: 'สุ่มโจทย์', f1b: 'สุ่มคะแนนที่เหลือมาให้ปิดเกม แตะตัวเลขบนกระดานปาเป้าเพื่อเลือกจุดเล็ง แล้วตรวจคำตอบได้ทันที แสดงหรือซ่อนคำตอบได้ตลอดเวลา',
      f2t: 'ดูเส้นทางตัวอย่างแล้วจำ', f2b: 'ฝึกทีละขั้นกับคะแนนที่ปิดได้ด้วย 1, 2 หรือ 3 ลูก', f2h: 'กดเล่นเพื่อดูเส้นทางบนกระดานทีละลูก',
      f3t: 'รายการเส้นทางปิดเกม', f3b: 'ดูเส้นทางของทุกคะแนนในรายการเดียว ใช้ปุ่มดินสอแก้คำตอบให้เป็นเส้นทางที่คุณชอบ',
      f4t: 'เหลือแต้มให้ปิดง่าย', f4b: 'เมื่อปิดเกมในรอบนี้ไม่ได้ ก็ฝึกวิธีเหลือคะแนนที่ปิดง่ายขึ้นในรอบถัดไปได้',
      rt: 'เลือกกติกาได้', rb: 'สลับประเภทบูล (Fat Bull / Separate Bull) และเงื่อนไขการปิด (Master Out ฯลฯ) เพื่อฝึกตามกติกาที่คุณเล่น',
      dt: 'รองรับโหมดมืด', db: 'ใช้แอปในโหมดมืดได้ เลือกสีกระดานแบบ DARTSLIVE, PHOENIX หรือดาร์ทหัวเหล็ก',
      p2t: 'ไม่เก็บข้อมูลใดๆ', p2b: 'แอปไม่เก็บข้อมูลส่วนตัวและไม่ติดตามการใช้งานของคุณ ไม่ต้องสมัครบัญชีและไม่มีโฆษณา จึงใช้งานได้อย่างสบายใจ',
      ctaTitle: 'เริ่มจำเส้นทางปิดเกมกันเลย',
      videoLabel: 'วิดีโอสาธิตแอป'
    }
  };

  // 選べるルール（名前・補足）。アプリの翻訳（darts-finish-app の src/i18n/locales の rules.*）から転記。
  const ruleList = {"af":[["Dik bulsoog · Meester-uitgooi","JAPAN se onewe fases, JAPAN LADIES, PERFECT-vroue, ens."],["Geskeide bulsoog · Meester-uitgooi","Standaard Meester-uitgooi (nie op buitenste bulsoogring nie)"],["Geskeide bulsoog · JAPAN Meester-uitgooi","JAPAN se ewe fases, ens."],["Geskeide bulsoog · Dubbel-uitgooi","PERFECT-mans, PDC, ens."]],"am":[["Fat Bull · Master Out","የJAPAN ነጠላ ደረጃዎች፣ JAPAN LADIES፣ የPERFECT ሴቶች ወዘተ"],["Separate Bull · Master Out","መደበኛ Master Out (በውጫዊው ቡል አይጨርስም)"],["Separate Bull · JAPAN Master Out","የJAPAN ጥንድ ደረጃዎች ወዘተ"],["Separate Bull · Double Out","የPERFECT ወንዶች፣ PDC ወዘተ"]],"ar":[["Fat Bull · Master Out","مراحل JAPAN الفردية، وJAPAN LADIES، وPERFECT للسيدات وغيرها"],["Separate Bull · Master Out","Master Out القياسي (لا إنهاء على البول الخارجي)"],["Separate Bull · JAPAN Master Out","مراحل JAPAN الزوجية وغيرها"],["Separate Bull · Double Out","PERFECT للرجال، وPDC وغيرها"]],"az":[["Fat Bull · Master Out","JAPAN tək mərhələləri, JAPAN LADIES, PERFECT qadınlar və s."],["Separate Bull · Master Out","Standart Master Out (xarici bull ilə çıxış yoxdur)"],["Separate Bull · JAPAN Master Out","JAPAN cüt mərhələləri və s."],["Separate Bull · Double Out","PERFECT kişilər, PDC və s."]],"be":[["Fat Bull · Master Out","Няцотныя этапы JAPAN, JAPAN LADIES, жанчыны PERFECT і інш."],["Separate Bull · Master Out","Звычайны Master Out (вонкавы бул не закрывае)"],["Separate Bull · JAPAN Master Out","Цотныя этапы JAPAN і інш."],["Separate Bull · Double Out","Мужчыны PERFECT, PDC і інш."]],"bg":[["Fat Bull · Master Out","Нечетни етапи на JAPAN, JAPAN LADIES, жени в PERFECT и др."],["Separate Bull · Master Out","Стандартен Master Out (без завършване на външен бул)"],["Separate Bull · JAPAN Master Out","Четни етапи на JAPAN и др."],["Separate Bull · Double Out","Мъже в PERFECT, PDC и др."]],"bn":[["Fat Bull · Master Out","JAPAN-এর বিজোড় স্টেজ, JAPAN LADIES, PERFECT মহিলা বিভাগ ইত্যাদি"],["Separate Bull · Master Out","সাধারণ Master Out (আউটার বুলে শেষ করা যায় না)"],["Separate Bull · JAPAN Master Out","JAPAN-এর জোড় স্টেজ ইত্যাদি"],["Separate Bull · Double Out","PERFECT পুরুষ বিভাগ, PDC ইত্যাদি"]],"ca":[["Fat Bull · Master Out","Etapes senars JAPAN, JAPAN LADIES, PERFECT dones, etc."],["Separate Bull · Master Out","Master Out estàndard (no s’acaba al bull exterior)"],["Separate Bull · JAPAN Master Out","Etapes parells JAPAN, etc."],["Separate Bull · Double Out","PERFECT homes, PDC, etc."]],"cs":[["Fat Bull · Master Out","Lichá kola JAPAN, JAPAN LADIES, ženy PERFECT aj."],["Separate Bull · Master Out","Běžný Master Out (vnější bull nezavírá)"],["Separate Bull · JAPAN Master Out","Sudá kola JAPAN aj."],["Separate Bull · Double Out","Muži PERFECT, PDC aj."]],"da":[["Fat Bull · Master Out","JAPANs ulige runder, JAPAN LADIES, PERFECT kvinder m.fl."],["Separate Bull · Master Out","Almindelig Master Out (ikke udgang på ydre bull)"],["Separate Bull · JAPAN Master Out","JAPANs lige runder m.fl."],["Separate Bull · Double Out","PERFECT mænd, PDC m.fl."]],"de":[["Fat Bull · Master Out","Ungerade JAPAN-Etappen, JAPAN LADIES, PERFECT Damen usw."],["Separate Bull · Master Out","Standard-Master-Out (kein Finish auf dem äußeren Bull)"],["Separate Bull · JAPAN Master Out","Gerade JAPAN-Etappen usw."],["Separate Bull · Double Out","PERFECT Herren, PDC usw."]],"el":[["Fat Bull · Master Out","Μονοί γύροι JAPAN, JAPAN LADIES, γυναίκες PERFECT κ.ά."],["Separate Bull · Master Out","Τυπικό Master Out (χωρίς κλείσιμο στο εξωτερικό bull)"],["Separate Bull · JAPAN Master Out","Ζυγοί γύροι JAPAN κ.ά."],["Separate Bull · Double Out","Άνδρες PERFECT, PDC κ.ά."]],"en-GB":[["Fat Bull · Master Out","JAPAN odd stages, JAPAN LADIES, PERFECT women, etc."],["Separate Bull · Master Out","Standard Master Out (no finishing on the outer bull)"],["Separate Bull · JAPAN Master Out","JAPAN even stages, etc."],["Separate Bull · Double Out","PERFECT men, PDC, etc."]],"es":[["Fat Bull · Master Out","Etapas impares de JAPAN, JAPAN LADIES, PERFECT femenino, etc."],["Separate Bull · Master Out","Master Out estándar (sin cierre con el centro exterior)"],["Separate Bull · JAPAN Master Out","Etapas pares de JAPAN, etc."],["Separate Bull · Double Out","PERFECT masculino, PDC, etc."]],"et":[["Fat Bull · Master Out","JAPAN-i paaritud etapid, JAPAN LADIES, PERFECT-i naised jne"],["Separate Bull · Master Out","Tavaline Master Out (välimise bulliga ei saa lõpetada)"],["Separate Bull · JAPAN Master Out","JAPAN-i paarisetapid jne"],["Separate Bull · Double Out","PERFECT-i mehed, PDC jne"]],"eu":[["Fat Bull · Master Out","JAPAN txapelketa bakoitietako etapak, JAPAN LADIES, PERFECT emakumeak eta abar"],["Separate Bull · Master Out","Master Out estandarra (kanpoko bullarekin ezin da amaitu)"],["Separate Bull · JAPAN Master Out","JAPAN txapelketa bikoitietako etapak eta abar"],["Separate Bull · Double Out","PERFECT gizonezkoak, PDC eta abar"]],"fa":[["Fat Bull · Master Out","مراحل فرد JAPAN، بخش JAPAN LADIES، زنان PERFECT و موارد مشابه"],["Separate Bull · Master Out","Master Out معمولی (بدون فینیش با بول خارجی)"],["Separate Bull · JAPAN Master Out","مراحل زوج JAPAN و موارد مشابه"],["Separate Bull · Double Out","مردان PERFECT، PDC و موارد مشابه"]],"fi":[["Fat Bull · Master Out","JAPANin parittomat kierrokset, JAPAN LADIES, PERFECT-naiset ym."],["Separate Bull · Master Out","Tavallinen Master Out (ulompi bull ei lopeta)"],["Separate Bull · JAPAN Master Out","JAPANin parilliset kierrokset ym."],["Separate Bull · Double Out","PERFECT-miehet, PDC ym."]],"fil":[["Fat Bull · Master Out","Mga odd stage ng JAPAN, JAPAN LADIES, PERFECT women, atbp."],["Separate Bull · Master Out","Karaniwang Master Out (hindi puwedeng mag-finish sa outer bull)"],["Separate Bull · JAPAN Master Out","Mga even stage ng JAPAN, atbp."],["Separate Bull · Double Out","PERFECT men, PDC, atbp."]],"fr":[["Fat Bull · Master Out","Étapes impaires JAPAN, JAPAN LADIES, PERFECT dames, etc."],["Separate Bull · Master Out","Master Out standard (la bulle extérieure ne permet pas de finir)"],["Separate Bull · JAPAN Master Out","Étapes paires JAPAN, etc."],["Separate Bull · Double Out","PERFECT hommes, PDC, etc."]],"gl":[["Fat Bull · Master Out","Etapas impares de JAPAN, JAPAN LADIES, mulleres de PERFECT, etc."],["Separate Bull · Master Out","Master Out estándar (sen pechar co bull exterior)"],["Separate Bull · JAPAN Master Out","Etapas pares de JAPAN, etc."],["Separate Bull · Double Out","Homes de PERFECT, PDC, etc."]],"gu":[["Fat Bull · Master Out","JAPAN ના ઓડ સ્ટેજ, JAPAN LADIES, PERFECT મહિલાઓ વગેરે."],["Separate Bull · Master Out","સામાન્ય Master Out (આઉટર બુલ પર પૂરું થતું નથી)"],["Separate Bull · JAPAN Master Out","JAPAN ના ઇવન સ્ટેજ વગેરે."],["Separate Bull · Double Out","PERFECT પુરુષો, PDC વગેરે."]],"he":[["Fat Bull · Master Out","שלבים אי-זוגיים של JAPAN, JAPAN LADIES, PERFECT נשים ועוד"],["Separate Bull · Master Out","Master Out רגיל (אין סיום על הבול החיצוני)"],["Separate Bull · JAPAN Master Out","שלבים זוגיים של JAPAN ועוד"],["Separate Bull · Double Out","PERFECT גברים, PDC ועוד"]],"hi":[["फ़ैट बुल · मास्टर आउट","JAPAN ऑड स्टेज, JAPAN LADIES, PERFECT महिला वर्ग आदि"],["सेपरेट बुल · मास्टर आउट","मानक मास्टर आउट (आउटर बुल पर फ़िनिश नहीं)"],["सेपरेट बुल · JAPAN मास्टर आउट","JAPAN ईवन स्टेज आदि"],["सेपरेट बुल · डबल आउट","PERFECT पुरुष वर्ग, PDC आदि"]],"hr":[["Fat Bull · Master Out","JAPAN neparne etape, JAPAN LADIES, PERFECT žene itd."],["Separate Bull · Master Out","Standardni Master Out (bez završetka na vanjskom bullu)"],["Separate Bull · JAPAN Master Out","JAPAN parne etape itd."],["Separate Bull · Double Out","PERFECT muškarci, PDC itd."]],"hu":[["Fat Bull · Master Out","JAPAN páratlan szakaszok, JAPAN LADIES, PERFECT nők stb."],["Separate Bull · Master Out","Szokásos Master Out (külső bullal nincs kiszálló)"],["Separate Bull · JAPAN Master Out","JAPAN páros szakaszok stb."],["Separate Bull · Double Out","PERFECT férfiak, PDC stb."]],"hy":[["Fat Bull · Master Out","JAPAN-ի կենտ փուլեր, JAPAN LADIES, PERFECT կանայք և այլն"],["Separate Bull · Master Out","Սովորական Master Out (արտաքին bull-ով ելք չկա)"],["Separate Bull · JAPAN Master Out","JAPAN-ի զույգ փուլեր և այլն"],["Separate Bull · Double Out","PERFECT տղամարդիկ, PDC և այլն"]],"id":[["Fat Bull · Master Out","Stage ganjil JAPAN, JAPAN LADIES, PERFECT putri, dll."],["Separate Bull · Master Out","Master Out standar (tidak boleh menyelesaikan di outer bull)"],["Separate Bull · JAPAN Master Out","Stage genap JAPAN, dll."],["Separate Bull · Double Out","PERFECT putra, PDC, dll."]],"is":[["Fat Bull · Master Out","Oddatalsumferðir JAPAN, JAPAN LADIES, konur í PERFECT o.fl."],["Separate Bull · Master Out","Venjulegt Master Out (ekki hægt að klára á ytra bull)"],["Separate Bull · JAPAN Master Out","Slétttalsumferðir JAPAN o.fl."],["Separate Bull · Double Out","Karlar í PERFECT, PDC o.fl."]],"it":[["Fat Bull · Master Out","Tappe dispari JAPAN, JAPAN LADIES, donne PERFECT, ecc."],["Bull separato · Master Out","Master Out standard (niente chiusura sul bull esterno)"],["Bull separato · JAPAN Master Out","Tappe pari JAPAN, ecc."],["Bull separato · Double Out","Uomini PERFECT, PDC, ecc."]],"ja":[["Fat Bull・Master Out","JAPAN 奇数 STAGE・JAPAN LADIES・PERFECT 女子 など"],["Separate Bull・Master Out","一般的なマスターアウト。アウターブル（25点）では上がれません。"],["Separate Bull・JAPAN Master Out","JAPAN 偶数 STAGE など。アウターブル（25点）でも上がれます。"],["Separate Bull・Double Out","PERFECT 男子・PDC など"]],"ka":[["Fat Bull · Master Out","JAPAN-ის კენტი ეტაპები, JAPAN LADIES, PERFECT-ის ქალთა კატეგორია და სხვ."],["Separate Bull · Master Out","სტანდარტული Master Out (გარე ბულით ფინიში არ შეიძლება)"],["Separate Bull · JAPAN Master Out","JAPAN-ის ლუწი ეტაპები და სხვ."],["Separate Bull · Double Out","PERFECT-ის მამაკაცთა კატეგორია, PDC და სხვ."]],"kk":[["Fat Bull · Master Out","JAPAN тақ кезеңдері, JAPAN LADIES, PERFECT әйелдер санаты және т.б."],["Separate Bull · Master Out","Әдеттегі Master Out (сыртқы буллмен финиш жоқ)"],["Separate Bull · JAPAN Master Out","JAPAN жұп кезеңдері және т.б."],["Separate Bull · Double Out","PERFECT ерлер санаты, PDC және т.б."]],"km":[["Fat Bull · Master Out","វគ្គលេខសេសរបស់ JAPAN, JAPAN LADIES, ផ្នែកនារី PERFECT ជាដើម"],["Separate Bull · Master Out","Master Out ធម្មតា (មិនអាចបញ្ចប់លើប៊ុលខាងក្រៅ)"],["Separate Bull · JAPAN Master Out","វគ្គលេខគូរបស់ JAPAN ជាដើម"],["Separate Bull · Double Out","ផ្នែកបុរស PERFECT, PDC ជាដើម"]],"kn":[["Fat Bull · Master Out","JAPAN ಬೆಸ ಸ್ಟೇಜ್‌ಗಳು, JAPAN LADIES, PERFECT ಮಹಿಳೆಯರು ಇತ್ಯಾದಿ"],["Separate Bull · Master Out","ಸಾಮಾನ್ಯ Master Out (ಔಟರ್ ಬುಲ್‌ನಿಂದ ಮುಗಿಸಲಾಗದು)"],["Separate Bull · JAPAN Master Out","JAPAN ಸಮ ಸ್ಟೇಜ್‌ಗಳು ಇತ್ಯಾದಿ"],["Separate Bull · Double Out","PERFECT ಪುರುಷರು, PDC ಇತ್ಯಾದಿ"]],"ko":[["Fat Bull · Master Out","JAPAN 홀수 스테이지, JAPAN LADIES, PERFECT 여자 부문 등"],["Separate Bull · Master Out","표준 Master Out(아우터 불로 마무리 불가)"],["Separate Bull · JAPAN Master Out","JAPAN 짝수 스테이지 등"],["Separate Bull · Double Out","PERFECT 남자 부문, PDC 등"]],"ky":[["Fat Bull · Master Out","JAPANдын так баскычтары, JAPAN LADIES, PERFECT аялдар бөлүмү ж.б."],["Separate Bull · Master Out","Кадимки Master Out (тышкы булл менен бүтүрүүгө болбойт)"],["Separate Bull · JAPAN Master Out","JAPANдын жуп баскычтары ж.б."],["Separate Bull · Double Out","PERFECT эркектер бөлүмү, PDC ж.б."]],"lo":[["Fat Bull · Master Out","ຮອບເລກຄີກຂອງ JAPAN, JAPAN LADIES, ປະເພດຍິງຂອງ PERFECT ແລະ ອື່ນໆ"],["Separate Bull · Master Out","Master Out ມາດຕະຖານ (ປິດເກມດ້ວຍບູລວົງນອກບໍ່ໄດ້)"],["Separate Bull · JAPAN Master Out","ຮອບເລກຄູ່ຂອງ JAPAN ແລະ ອື່ນໆ"],["Separate Bull · Double Out","ປະເພດຊາຍຂອງ PERFECT, PDC ແລະ ອື່ນໆ"]],"lt":[["Fat Bull · Master Out","JAPAN nelyginiai etapai, JAPAN LADIES, PERFECT moterų varžybos ir kt."],["Separate Bull · Master Out","Standartinis Master Out (negalima užbaigti išoriniu buliumi)"],["Separate Bull · JAPAN Master Out","JAPAN lyginiai etapai ir kt."],["Separate Bull · Double Out","PERFECT vyrų varžybos, PDC ir kt."]],"lv":[["Fat Bull · Master Out","JAPAN nepāra posmi, JAPAN LADIES, PERFECT sievietes u. c."],["Separate Bull · Master Out","Standarta Master Out (ar ārējo bull iziet nevar)"],["Separate Bull · JAPAN Master Out","JAPAN pāra posmi u. c."],["Separate Bull · Double Out","PERFECT vīrieši, PDC u. c."]],"mk":[["Fat Bull · Master Out","Непарни етапи на JAPAN, JAPAN LADIES, жени во PERFECT итн."],["Separate Bull · Master Out","Стандарден Master Out (без затворање на надворешниот бул)"],["Separate Bull · JAPAN Master Out","Парни етапи на JAPAN итн."],["Separate Bull · Double Out","Мажи во PERFECT, PDC итн."]],"ml":[["Fat Bull · Master Out","JAPAN ഒറ്റ സ്റ്റേജുകൾ, JAPAN LADIES, PERFECT വനിതകൾ തുടങ്ങിയവ"],["Separate Bull · Master Out","സാധാരണ Master Out (ഔട്ടർ ബുളിൽ ഫിനിഷ് ചെയ്യാനാകില്ല)"],["Separate Bull · JAPAN Master Out","JAPAN ഈവൻ സ്റ്റേജുകൾ തുടങ്ങിയവ"],["Separate Bull · Double Out","PERFECT പുരുഷന്മാർ, PDC തുടങ്ങിയവ"]],"mn":[["Fat Bull · Master Out","JAPAN-ы сондгой шат, JAPAN LADIES, PERFECT эмэгтэйчүүд гэх мэт"],["Separate Bull · Master Out","Энгийн Master Out (гадна буллаар дуусгахгүй)"],["Separate Bull · JAPAN Master Out","JAPAN-ы тэгш шат гэх мэт"],["Separate Bull · Double Out","PERFECT эрэгтэйчүүд, PDC гэх мэт"]],"mr":[["Fat Bull · Master Out","JAPAN विषम स्टेज, JAPAN LADIES, PERFECT महिला इत्यादी"],["Separate Bull · Master Out","प्रमाणित Master Out (आउटर बुलवर फिनिश नाही)"],["Separate Bull · JAPAN Master Out","JAPAN सम स्टेज इत्यादी"],["Separate Bull · Double Out","PERFECT पुरुष, PDC इत्यादी"]],"ms":[["Fat Bull · Master Out","Peringkat ganjil JAPAN, JAPAN LADIES, PERFECT wanita, dll."],["Separate Bull · Master Out","Master Out standard (tidak boleh tamat pada outer bull)"],["Separate Bull · JAPAN Master Out","Peringkat genap JAPAN, dll."],["Separate Bull · Double Out","PERFECT lelaki, PDC, dll."]],"my":[["Fat Bull · Master Out","JAPAN မဂဏန်းအဆင့်များ၊ JAPAN LADIES၊ PERFECT အမျိုးသမီးများ စသည်"],["Separate Bull · Master Out","ပုံမှန် Master Out (အပြင်ဘူးလ်ဖြင့် အဆုံးသတ်မရ)"],["Separate Bull · JAPAN Master Out","JAPAN စုံဂဏန်းအဆင့်များ စသည်"],["Separate Bull · Double Out","PERFECT အမျိုးသားများ၊ PDC စသည်"]],"nb":[["Fat Bull · Master Out","JAPANs odde runder, JAPAN LADIES, PERFECT damer m.fl."],["Separate Bull · Master Out","Vanlig Master Out (ytre bull avslutter ikke)"],["Separate Bull · JAPAN Master Out","JAPANs partallsrunder m.fl."],["Separate Bull · Double Out","PERFECT herrer, PDC m.fl."]],"ne":[["Fat Bull · Master Out","JAPAN का बिजोर चरण, JAPAN LADIES, PERFECT महिला आदि।"],["Separate Bull · Master Out","सामान्य Master Out (बाहिरी बुलमा समाप्त हुँदैन)"],["Separate Bull · JAPAN Master Out","JAPAN का जोर चरण आदि।"],["Separate Bull · Double Out","PERFECT पुरुष, PDC आदि।"]],"nl":[["Fat Bull · Master Out","JAPAN oneven etappes, JAPAN LADIES, PERFECT-vrouwen, enz."],["Gescheiden bull · Master Out","Standaard Master Out (niet eindigen op buitenste bull)"],["Gescheiden bull · JAPAN Master Out","JAPAN even etappes, enz."],["Gescheiden bull · Double Out","PERFECT-mannen, PDC, enz."]],"or":[["Fat Bull · Master Out","JAPAN ଅଯୁଗ୍ମ ଷ୍ଟେଜ୍, JAPAN LADIES, PERFECT ମହିଳା ଇତ୍ୟାଦି"],["Separate Bull · Master Out","ସାଧାରଣ Master Out (ବାହାର ବୁଲ୍‌ରେ ଶେଷ ହୁଏ ନାହିଁ)"],["Separate Bull · JAPAN Master Out","JAPAN ଯୁଗ୍ମ ଷ୍ଟେଜ୍ ଇତ୍ୟାଦି"],["Separate Bull · Double Out","PERFECT ପୁରୁଷ, PDC ଇତ୍ୟାଦି"]],"pa":[["Fat Bull · Master Out","JAPAN ਦੇ ਔਡ ਸਟੇਜ, JAPAN LADIES, PERFECT ਔਰਤਾਂ ਆਦਿ।"],["Separate Bull · Master Out","ਆਮ Master Out (ਆਊਟਰ ਬੁੱਲ ਤੇ ਖ਼ਤਮ ਨਹੀਂ ਹੁੰਦਾ)"],["Separate Bull · JAPAN Master Out","JAPAN ਦੇ ਈਵਨ ਸਟੇਜ ਆਦਿ।"],["Separate Bull · Double Out","PERFECT ਮਰਦ, PDC ਆਦਿ।"]],"pl":[["Fat Bull · Master Out","Nieparzyste etapy JAPAN, JAPAN LADIES, kobiety PERFECT itd."],["Separate Bull · Master Out","Standardowe Master Out (bez zakończenia zewnętrznym bullem)"],["Separate Bull · JAPAN Master Out","Parzyste etapy JAPAN itd."],["Separate Bull · Double Out","Mężczyźni PERFECT, PDC itd."]],"pt-BR":[["Fat Bull · Master Out","Etapas ímpares da JAPAN, JAPAN LADIES, mulheres da PERFECT etc."],["Bull separado · Master Out","Master Out padrão (sem fechar no bull externo)"],["Bull separado · JAPAN Master Out","Etapas pares da JAPAN etc."],["Bull separado · Double Out","Homens da PERFECT, PDC etc."]],"pt-PT":[["Fat Bull · Master Out","Etapas ímpares da JAPAN, JAPAN LADIES, mulheres da PERFECT etc."],["Bull separado · Master Out","Master Out padrão (sem fechar no bull externo)"],["Bull separado · JAPAN Master Out","Etapas pares da JAPAN etc."],["Bull separado · Double Out","Homens da PERFECT, PDC etc."]],"rm":[["Fat Bull · Master Out","Etappas spèras da JAPAN, JAPAN LADIES, dunnas da PERFECT, etc."],["Separate Bull · Master Out","Master Out standard (senza terminar sin il bull extern)"],["Separate Bull · JAPAN Master Out","Etappas pèras da JAPAN, etc."],["Separate Bull · Double Out","Umens da PERFECT, PDC, etc."]],"ro":[["Fat Bull · Master Out","etapele impare JAPAN, JAPAN LADIES, PERFECT feminin etc."],["Separate Bull · Master Out","Master Out standard (nu se finisează pe bull-ul exterior)"],["Separate Bull · JAPAN Master Out","etapele pare JAPAN etc."],["Separate Bull · Double Out","PERFECT masculin, PDC etc."]],"ru":[["Fat Bull · Master Out","Нечётные этапы JAPAN, JAPAN LADIES, женский PERFECT и др."],["Separate Bull · Master Out","Обычный Master Out (внешний булл не завершает игру)"],["Separate Bull · JAPAN Master Out","Чётные этапы JAPAN и др."],["Separate Bull · Double Out","Мужской PERFECT, PDC и др."]],"si":[["Fat Bull · Master Out","JAPAN ඔත්තේ අදියර, JAPAN LADIES, PERFECT කාන්තා අංශය ආදිය."],["Separate Bull · Master Out","සාමාන්‍ය Master Out (පිටත බුල් එකෙන් අවසන් කළ නොහැක)"],["Separate Bull · JAPAN Master Out","JAPAN ඉරට්ටේ අදියර ආදිය."],["Separate Bull · Double Out","PERFECT පිරිමි අංශය, PDC ආදිය."]],"sk":[["Fat Bull · Master Out","nepárne etapy JAPAN, JAPAN LADIES, PERFECT ženy a ďalšie"],["Separate Bull · Master Out","Štandardný Master Out (vonkajší bull neukončuje)"],["Separate Bull · JAPAN Master Out","párne etapy JAPAN a ďalšie"],["Separate Bull · Double Out","PERFECT muži, PDC a ďalšie"]],"sl":[["Fat Bull · Master Out","lihe stopnje JAPAN, JAPAN LADIES, ženske PERFECT itd."],["Separate Bull · Master Out","Standardni Master Out (brez zaključka na zunanjem bullu)"],["Separate Bull · JAPAN Master Out","sode stopnje JAPAN itd."],["Separate Bull · Double Out","moški PERFECT, PDC itd."]],"sq":[["Fat Bull · Master Out","Fazat teke të JAPAN, JAPAN LADIES, femrat e PERFECT etj."],["Separate Bull · Master Out","Master Out standard (pa mbyllje me bull-in e jashtëm)"],["Separate Bull · JAPAN Master Out","Fazat çifte të JAPAN etj."],["Separate Bull · Double Out","Meshkujt e PERFECT, PDC etj."]],"sr":[["Fat Bull · Master Out","Непарне фазе JAPAN, JAPAN LADIES, жене у PERFECT и др."],["Separate Bull · Master Out","Стандардни Master Out (без завршетка на спољашњи бул)"],["Separate Bull · JAPAN Master Out","Парне фазе JAPAN и др."],["Separate Bull · Double Out","Мушкарци у PERFECT, PDC и др."]],"sv":[["Fat Bull · Master Out","JAPAN:s udda omgångar, JAPAN LADIES, PERFECT damer m.fl."],["Separate Bull · Master Out","Vanlig Master Out (yttre bull avslutar inte)"],["Separate Bull · JAPAN Master Out","JAPAN:s jämna omgångar m.fl."],["Separate Bull · Double Out","PERFECT herrar, PDC m.fl."]],"sw":[["Fat Bull · Master Out","Hatua za namba witiri za JAPAN, JAPAN LADIES, wanawake wa PERFECT, n.k."],["Separate Bull · Master Out","Master Out ya kawaida (huwezi kumalizia kwa bull ya nje)"],["Separate Bull · JAPAN Master Out","Hatua za namba shufwa za JAPAN, n.k."],["Separate Bull · Double Out","Wanaume wa PERFECT, PDC, n.k."]],"ta":[["Fat Bull · Master Out","JAPAN ஒற்றைப்படை நிலைகள், JAPAN LADIES, PERFECT பெண்கள் போன்றவை"],["Separate Bull · Master Out","நிலையான Master Out (அவுட்டர் புல்லில் முடிக்க முடியாது)"],["Separate Bull · JAPAN Master Out","JAPAN இரட்டைப்படை நிலைகள் போன்றவை"],["Separate Bull · Double Out","PERFECT ஆண்கள், PDC போன்றவை"]],"te":[["Fat Bull · Master Out","JAPAN బేసి స్టేజ్‌లు, JAPAN LADIES, PERFECT మహిళలు మొదలైనవి"],["Separate Bull · Master Out","ప్రామాణిక Master Out (ఔటర్ బుల్‌తో ముగించలేరు)"],["Separate Bull · JAPAN Master Out","JAPAN సరి స్టేజ్‌లు మొదలైనవి"],["Separate Bull · Double Out","PERFECT పురుషులు, PDC మొదలైనవి"]],"th":[["Fat Bull · Master Out","เช่น JAPAN รอบเลขคี่, JAPAN LADIES และ PERFECT รุ่นหญิง"],["Separate Bull · Master Out","Master Out มาตรฐาน (ปิดเกมด้วยบูลวงนอกไม่ได้)"],["Separate Bull · JAPAN Master Out","เช่น JAPAN รอบเลขคู่"],["Separate Bull · Double Out","เช่น PERFECT รุ่นชาย และ PDC"]],"tr":[["Fat Bull · Master Out","JAPAN tek sayılı aşamalar, JAPAN LADIES, PERFECT kadınlar vb."],["Separate Bull · Master Out","Standart Master Out (dış bull ile bitirilmez)"],["Separate Bull · JAPAN Master Out","JAPAN çift sayılı aşamalar vb."],["Separate Bull · Double Out","PERFECT erkekler, PDC vb."]],"uk":[["Fat Bull · Master Out","Непарні етапи JAPAN, JAPAN LADIES, PERFECT (жінки) тощо"],["Separate Bull · Master Out","Стандартний Master Out (закривати на зовнішній булл не можна)"],["Separate Bull · JAPAN Master Out","Парні етапи JAPAN тощо"],["Separate Bull · Double Out","PERFECT (чоловіки), PDC тощо"]],"ur":[["Fat Bull · Master Out","JAPAN کے طاق مراحل، JAPAN LADIES، PERFECT خواتین وغیرہ"],["Separate Bull · Master Out","معیاری Master Out (بیرونی بُل پر ختم کرنا شامل نہیں)"],["Separate Bull · JAPAN Master Out","JAPAN کے جفت مراحل وغیرہ"],["Separate Bull · Double Out","PERFECT مرد، PDC وغیرہ"]],"vi":[["Fat Bull · Master Out","Các chặng lẻ JAPAN, JAPAN LADIES, hạng nữ PERFECT, v.v."],["Separate Bull · Master Out","Master Out tiêu chuẩn (không kết thúc bằng tâm ngoài)"],["Separate Bull · JAPAN Master Out","Các chặng chẵn JAPAN, v.v."],["Separate Bull · Double Out","Hạng nam PERFECT, PDC, v.v."]],"zh-Hans":[["Fat Bull · Master Out","适用于 JAPAN 奇数站、JAPAN LADIES、PERFECT 女子组等"],["Separate Bull · Master Out","标准 Master Out（外靶心不能收镖）"],["Separate Bull · JAPAN Master Out","适用于 JAPAN 偶数站等"],["Separate Bull · Double Out","适用于 PERFECT 男子组、PDC 等"]],"zh-Hant":[["Fat Bull · Master Out","JAPAN 奇數站、JAPAN LADIES、PERFECT 女子組等。"],["Separate Bull · Master Out","一般 Master Out（外圈紅心無法結鏢）"],["Separate Bull · JAPAN Master Out","JAPAN 偶數站等。"],["Separate Bull · Double Out","PERFECT 男子組、PDC 等。"]]};

  // 言語ごとのスクリーンショット（img/<フォルダ>/0N.webp）。ないものは英語版を使う。
  const shotFolders = new Set(['ar', 'bn', 'ca', 'cs', 'da', 'de', 'el', 'es', 'fi', 'fr', 'gu', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kn', 'ko', 'ml', 'mr', 'ms', 'nb', 'nl', 'or', 'pa', 'pl', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl', 'sv', 'ta', 'te', 'th', 'tr', 'uk', 'ur', 'vi', 'zh-Hans', 'zh-Hant']);
  // 「覚える」のお手本再生の動画（video/<名前>.mp4）。日本語以外は英語版を使う。
  const videos = { ja: 'ja-learn', en: 'en-learn' };

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function apply(locale) {
    const text = copy[locale] || copy['en-GB'];
    document.querySelectorAll('[data-t]').forEach(node => {
      const value = text[node.dataset.t] ?? copy['en-GB'][node.dataset.t];
      if (value != null) node.textContent = value;
    });
    document.querySelectorAll('[data-t-label]').forEach(node => {
      const value = text[node.dataset.tLabel] ?? copy['en-GB'][node.dataset.tLabel];
      if (value != null) node.setAttribute('aria-label', value);
    });
    const rules = ruleList[locale] || ruleList['en-GB'];
    document.querySelectorAll('[data-rule-list]').forEach(list => {
      list.replaceChildren(...rules.map(([name, note]) => {
        const item = document.createElement('li');
        const title = document.createElement('strong');
        const detail = document.createElement('span');
        title.textContent = name;
        detail.textContent = note;
        item.append(title, detail);
        return item;
      }));
    });
    const folder = shotFolders.has(locale) ? locale : 'en';
    document.querySelectorAll('img[data-shot]').forEach(img => {
      const src = `img/${folder}/${img.dataset.shot}.webp`;
      if (img.getAttribute('src') !== src) img.setAttribute('src', src);
    });
    // 表示設定の画面（ダークモード・ボード配色）は日本語版と英語版だけ。
    document.querySelectorAll('img[data-settings]').forEach(img => {
      const src = `img/settings/${locale === 'ja' ? 'ja' : 'en'}-dark.webp`;
      if (img.getAttribute('src') !== src) img.setAttribute('src', src);
    });
    document.querySelectorAll('[data-store="app-store"]').forEach(link => { link.href = APP_STORE_URL; });

    document.querySelectorAll('video[data-demo]').forEach(video => {
      const videoLocale = videos[locale] ? locale : 'en';
      const name = videos[videoLocale];
      // 動きを減らす設定のときは、その言語の静止画だけを見せる。
      const posterFolder = reduceMotion.matches ? folder : videoLocale;
      video.poster = `img/${posterFolder}/${video.dataset.poster}.webp`;
      if (!reduceMotion.matches) {
        const src = `video/${name}.mp4`;
        if (video.getAttribute('src') !== src) {
          video.setAttribute('src', src);
          video.load();
          video.play().catch(() => {});
        }
      } else {
        video.removeAttribute('src');
        video.load();
      }
    });
  }

  apply(document.documentElement.lang || 'ja');
  document.addEventListener('site:locale', event => apply(event.detail));
  reduceMotion.addEventListener?.('change', () => apply(document.documentElement.lang));
})();
