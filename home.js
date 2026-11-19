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
      f2t: '本数ごとに覚える', f2b: '1本・2本・3本で上がれる数字を順番に練習できます。再生ボタンを押すと、答えのルートが盤面で順に再生されます。',
      f3t: 'アレンジ一覧', f3b: 'すべての点数のルートを一覧で確認できます。鉛筆ボタンで答えを編集して、自分の好きなルートにできます。',
      f4t: '上がれないときの残し方', f4b: 'このラウンドで上がれないときに、次のラウンドで上がりやすい数字を残す方法も練習できます。',
      f5t: 'ルールと配色を選べる', f5b: 'ブルの種類（Fat Bull／Separate Bull）やアウトの条件（Master Out など）を切り替えられます。ダーツボードはダーツライブ・フェニックス・ハードダーツの配色から選べて、ダークモードにも対応しています。',
      p1t: '73言語に対応', p1b: '端末の言語に合わせて表示され、アプリの中でも切り替えられます。',
      p2t: '記録は端末の中だけ', p2b: '設定や覚えた印は端末の中だけに保存されます。アカウント登録、広告、外部への送信はありません。',
      ctaTitle: 'さっそく練習をはじめよう',
      videoLabel: 'アプリの操作動画'
    },
    'en-GB': {
      tagline: 'Watch, copy, remember',
      appStoreSmall: 'Download on the',
      playSmall: 'Get it on',
      soon: 'Coming soon',
      featuresTitle: 'What you can do',
      f1t: 'Random quiz', f1b: 'Get a random score to finish. Tap the numbers on the dartboard to pick your targets and check your answer straight away. You can show or hide the answer at any time.',
      f2t: 'Learn by number of darts', f2b: 'Practise the scores you can finish with one, two or three darts, step by step. Press play to watch the route thrown on the board, dart by dart.',
      f3t: 'Checkout list', f3b: 'See the route for every score in one list. Use the pencil button to edit an answer and make it your own preferred route.',
      f4t: 'Leave a good score', f4b: 'When you cannot finish this turn, practise leaving a score that is easier to finish on your next turn.',
      f5t: 'Choose your rules and colours', f5b: 'Switch the bull type (Fat Bull / Separate Bull) and the out rule (Master Out and more). Choose DARTSLIVE, PHOENIX or steel-tip board colours, with dark mode too.',
      p1t: '73 languages', p1b: 'The app follows your device language, and you can change it inside the app.',
      p2t: 'Stays on your device', p2b: 'Settings and progress are saved only on your device. No account, no ads, nothing sent anywhere.',
      ctaTitle: 'Start practising today',
      videoLabel: 'App demo video'
    },
    'zh-Hans': {
      tagline: '看、模仿、记住',
      appStoreSmall: '下载自',
      playSmall: '下载自',
      soon: '即将推出',
      featuresTitle: '主要功能',
      f1t: '随机出题', f1b: '随机给出剩余分数。点击镖盘上的数字选择目标，立即核对答案。也可以随时显示或隐藏答案。',
      f2t: '按镖数学习', f2b: '按一镖、两镖、三镖可以收镖的分数逐步练习。按下播放键，答案路线会在镖盘上依次演示。',
      f3t: '收镖路线一览', f3b: '在一个列表中查看所有分数的路线。点击铅笔按钮即可编辑答案，改成自己喜欢的路线。',
      f4t: '无法收镖时的留分', f4b: '当这一轮无法收镖时，也能练习如何留下下一轮更容易收镖的分数。',
      f5t: '可选规则和配色', f5b: '可以切换牛眼类型（Fat Bull／Separate Bull）和收镖条件（Master Out 等）。镖盘可选 DARTSLIVE、PHOENIX 或硬镖配色，并支持深色模式。',
      p1t: '支持 73 种语言', p1b: '自动跟随设备语言，也可以在应用内切换。',
      p2t: '数据只保存在设备上', p2b: '设置和学习记录只保存在你的设备中。无需注册账号，没有广告，也不会向外发送数据。',
      ctaTitle: '现在就开始练习吧',
      videoLabel: '应用演示视频'
    },
    'zh-Hant': {
      tagline: '看、模仿、記起來',
      appStoreSmall: '下載自',
      playSmall: '下載自',
      soon: '即將推出',
      featuresTitle: '主要功能',
      f1t: '隨機出題', f1b: '隨機出現剩餘分數。點選鏢靶上的數字選擇目標，馬上對答案。也可以隨時顯示或隱藏答案。',
      f2t: '依鏢數學習', f2b: '依一鏢、兩鏢、三鏢可以結鏢的分數循序練習。按下播放鍵，答案路線會在鏢靶上依序示範。',
      f3t: '結鏢路線一覽', f3b: '在一個清單中查看所有分數的路線。點選鉛筆按鈕即可編輯答案，改成自己喜歡的路線。',
      f4t: '無法結鏢時的留分', f4b: '這一輪無法結鏢時，也能練習如何留下下一輪更容易結鏢的分數。',
      f5t: '可選規則與配色', f5b: '可以切換紅心類型（Fat Bull／Separate Bull）與結鏢條件（Master Out 等）。鏢靶可選 DARTSLIVE、PHOENIX 或硬鏢配色，也支援深色模式。',
      p1t: '支援 73 種語言', p1b: '自動配合裝置語言，也可以在 App 內切換。',
      p2t: '資料只存在裝置上', p2b: '設定與學習紀錄只儲存在你的裝置中。不需註冊帳號，沒有廣告，也不會向外傳送資料。',
      ctaTitle: '現在就開始練習吧',
      videoLabel: 'App 示範影片'
    },
    de: {
      tagline: 'Zusehen, nachmachen, einprägen',
      appStoreSmall: 'Laden im',
      playSmall: 'Jetzt bei',
      soon: 'Demnächst',
      featuresTitle: 'Das kannst du üben',
      f1t: 'Zufallsquiz', f1b: 'Du bekommst einen zufälligen Rest. Tippe auf die Zahlen der Dartscheibe, um deine Ziele zu wählen, und prüfe die Antwort sofort. Die Lösung lässt sich jederzeit ein- und ausblenden.',
      f2t: 'Nach Anzahl der Darts lernen', f2b: 'Übe Schritt für Schritt die Reste, die du mit einem, zwei oder drei Darts auscheckst. Mit der Wiedergabe-Taste wird der Weg Dart für Dart auf der Scheibe gezeigt.',
      f3t: 'Checkout-Liste', f3b: 'Sieh dir den Weg für jeden Rest in einer Liste an. Mit dem Stift bearbeitest du eine Antwort und machst sie zu deinem Lieblingsweg.',
      f4t: 'Gut stehen lassen', f4b: 'Wenn du in dieser Aufnahme nicht auschecken kannst, übst du, einen Rest stehen zu lassen, der in der nächsten Aufnahme leichter geht.',
      f5t: 'Regeln und Farben wählen', f5b: 'Wechsle die Bull-Art (Fat Bull / Separate Bull) und die Out-Regel (Master Out u. a.). Wähle DARTSLIVE-, PHOENIX- oder Steeldart-Farben für die Scheibe, auch im Dunkelmodus.',
      p1t: '73 Sprachen', p1b: 'Die App folgt der Sprache deines Geräts und lässt sich in der App umstellen.',
      p2t: 'Bleibt auf deinem Gerät', p2b: 'Einstellungen und Fortschritt werden nur auf deinem Gerät gespeichert. Kein Konto, keine Werbung, keine Datenübertragung.',
      ctaTitle: 'Jetzt mit dem Üben loslegen',
      videoLabel: 'Demovideo der App'
    },
    es: {
      tagline: 'Mira, imita y memoriza',
      appStoreSmall: 'Descárgalo en el',
      playSmall: 'Disponible en',
      soon: 'Próximamente',
      featuresTitle: 'Qué puedes hacer',
      f1t: 'Preguntas al azar', f1b: 'Recibe una puntuación al azar para cerrar. Toca los números de la diana para elegir tus objetivos y comprueba la respuesta al momento. Puedes mostrar u ocultar la respuesta cuando quieras.',
      f2t: 'Aprende por número de dardos', f2b: 'Practica paso a paso las puntuaciones que se cierran con uno, dos o tres dardos. Pulsa reproducir para ver la ruta dardo a dardo en la diana.',
      f3t: 'Lista de cierres', f3b: 'Consulta la ruta de cada puntuación en una sola lista. Con el lápiz puedes editar una respuesta y convertirla en tu ruta preferida.',
      f4t: 'Deja una buena puntuación', f4b: 'Si no puedes cerrar en este turno, practica cómo dejar una puntuación más fácil de cerrar en el siguiente.',
      f5t: 'Elige reglas y colores', f5b: 'Cambia el tipo de bull (Fat Bull / Separate Bull) y la regla de salida (Master Out y más). Elige los colores de diana DARTSLIVE, PHOENIX o de punta de acero, también en modo oscuro.',
      p1t: '73 idiomas', p1b: 'La app sigue el idioma de tu dispositivo y puedes cambiarlo dentro de la app.',
      p2t: 'Todo queda en tu dispositivo', p2b: 'Los ajustes y tu progreso se guardan solo en tu dispositivo. Sin cuenta, sin anuncios y sin enviar datos.',
      ctaTitle: 'Empieza a practicar hoy',
      videoLabel: 'Vídeo de demostración de la app'
    },
    fr: {
      tagline: 'Regarder, imiter, retenir',
      appStoreSmall: 'Télécharger dans l’',
      playSmall: 'Disponible sur',
      soon: 'Bientôt disponible',
      featuresTitle: 'Ce que vous pouvez faire',
      f1t: 'Quiz aléatoire', f1b: 'Un score à finir est tiré au hasard. Touchez les numéros de la cible pour choisir vos zones et vérifiez la réponse aussitôt. Vous pouvez afficher ou masquer la réponse à tout moment.',
      f2t: 'Apprendre par nombre de fléchettes', f2b: 'Entraînez-vous pas à pas sur les scores qui se finissent en une, deux ou trois fléchettes. Appuyez sur lecture pour voir le parcours fléchette par fléchette sur la cible.',
      f3t: 'Liste des finitions', f3b: 'Retrouvez le parcours de chaque score dans une seule liste. Le bouton crayon permet de modifier une réponse pour en faire votre parcours préféré.',
      f4t: 'Laisser un bon reste', f4b: 'Quand vous ne pouvez pas finir sur cette volée, entraînez-vous à laisser un score plus facile à finir à la suivante.',
      f5t: 'Règles et couleurs au choix', f5b: 'Changez le type de bull (Fat Bull / Separate Bull) et la règle de sortie (Master Out, etc.). Choisissez les couleurs de cible DARTSLIVE, PHOENIX ou pointe acier, avec mode sombre.',
      p1t: '73 langues', p1b: 'L’app suit la langue de votre appareil, et vous pouvez la changer dans l’app.',
      p2t: 'Tout reste sur votre appareil', p2b: 'Les réglages et la progression sont enregistrés uniquement sur votre appareil. Pas de compte, pas de publicité, aucune donnée envoyée.',
      ctaTitle: 'Commencez à vous entraîner',
      videoLabel: 'Vidéo de démonstration de l’app'
    },
    nl: {
      tagline: 'Kijken, nadoen, onthouden',
      appStoreSmall: 'Download in de',
      playSmall: 'Ontdek het op',
      soon: 'Binnenkort',
      featuresTitle: 'Wat je kunt doen',
      f1t: 'Willekeurige quiz', f1b: 'Je krijgt een willekeurige score om uit te gooien. Tik op de nummers van het bord om je doelen te kiezen en controleer meteen je antwoord. Het antwoord kun je altijd tonen of verbergen.',
      f2t: 'Leren per aantal darts', f2b: 'Oefen stap voor stap de scores die je met één, twee of drie darts uitgooit. Druk op afspelen om de route pijl voor pijl op het bord te zien.',
      f3t: 'Uitgooilijst', f3b: 'Bekijk de route voor elke score in één lijst. Met de potloodknop pas je een antwoord aan tot jouw favoriete route.',
      f4t: 'Een goede rest laten staan', f4b: 'Lukt uitgooien deze beurt niet, oefen dan hoe je een score laat staan die je de volgende beurt makkelijker uitgooit.',
      f5t: 'Kies regels en kleuren', f5b: 'Wissel het type bull (Fat Bull / Separate Bull) en de uitgooiregel (Master Out en meer). Kies DARTSLIVE-, PHOENIX- of steeltip-kleuren voor het bord, ook in donkere modus.',
      p1t: '73 talen', p1b: 'De app volgt de taal van je apparaat, en je kunt die in de app wijzigen.',
      p2t: 'Blijft op je apparaat', p2b: 'Instellingen en voortgang worden alleen op je apparaat bewaard. Geen account, geen advertenties, niets wordt verstuurd.',
      ctaTitle: 'Begin vandaag met oefenen',
      videoLabel: 'Demovideo van de app'
    },
    it: {
      tagline: 'Guarda, imita, memorizza',
      appStoreSmall: 'Scarica su',
      playSmall: 'Disponibile su',
      soon: 'Prossimamente',
      featuresTitle: 'Cosa puoi fare',
      f1t: 'Quiz casuale', f1b: 'Ricevi un punteggio casuale da chiudere. Tocca i numeri del bersaglio per scegliere i tuoi obiettivi e controlla subito la risposta. Puoi mostrare o nascondere la risposta quando vuoi.',
      f2t: 'Impara per numero di freccette', f2b: 'Esercitati passo dopo passo sui punteggi che si chiudono con una, due o tre freccette. Premi play per vedere il percorso freccetta per freccetta sul bersaglio.',
      f3t: 'Elenco delle chiusure', f3b: 'Consulta il percorso di ogni punteggio in un unico elenco. Con la matita puoi modificare una risposta e renderla il tuo percorso preferito.',
      f4t: 'Lascia un buon punteggio', f4b: 'Quando non puoi chiudere in questo turno, esercitati a lasciare un punteggio più facile da chiudere al turno successivo.',
      f5t: 'Scegli regole e colori', f5b: 'Cambia il tipo di bull (Fat Bull / Separate Bull) e la regola di chiusura (Master Out e altre). Scegli i colori del bersaglio DARTSLIVE, PHOENIX o steel, anche in modalità scura.',
      p1t: '73 lingue', p1b: 'L’app segue la lingua del dispositivo e puoi cambiarla dall’app.',
      p2t: 'Resta sul tuo dispositivo', p2b: 'Impostazioni e progressi sono salvati solo sul tuo dispositivo. Nessun account, nessuna pubblicità, nessun dato inviato.',
      ctaTitle: 'Inizia ad allenarti oggi',
      videoLabel: 'Video dimostrativo dell’app'
    },
    'pt-BR': {
      tagline: 'Veja, imite, memorize',
      appStoreSmall: 'Baixar na',
      playSmall: 'Disponível no',
      soon: 'Em breve',
      featuresTitle: 'O que você pode fazer',
      f1t: 'Quiz aleatório', f1b: 'Receba uma pontuação aleatória para fechar. Toque nos números do alvo para escolher seus objetivos e confira a resposta na hora. Você pode mostrar ou ocultar a resposta quando quiser.',
      f2t: 'Aprenda por número de dardos', f2b: 'Pratique passo a passo as pontuações que fecham com um, dois ou três dardos. Toque em reproduzir para ver a rota dardo a dardo no alvo.',
      f3t: 'Lista de fechamentos', f3b: 'Veja a rota de cada pontuação em uma única lista. Com o lápis, você edita uma resposta e a transforma na sua rota preferida.',
      f4t: 'Deixe uma boa sobra', f4b: 'Quando não der para fechar nesta rodada, pratique como deixar uma pontuação mais fácil de fechar na próxima.',
      f5t: 'Escolha regras e cores', f5b: 'Troque o tipo de bull (Fat Bull / Separate Bull) e a regra de saída (Master Out e outras). Escolha as cores de alvo DARTSLIVE, PHOENIX ou steel, também no modo escuro.',
      p1t: '73 idiomas', p1b: 'O app segue o idioma do seu aparelho, e você pode trocar dentro do app.',
      p2t: 'Fica no seu aparelho', p2b: 'Configurações e progresso ficam salvos só no seu aparelho. Sem conta, sem anúncios, nada é enviado.',
      ctaTitle: 'Comece a praticar hoje',
      videoLabel: 'Vídeo de demonstração do app'
    },
    'pt-PT': {
      tagline: 'Ver, imitar, memorizar',
      appStoreSmall: 'Descarregar na',
      playSmall: 'Disponível no',
      soon: 'Brevemente',
      featuresTitle: 'O que pode fazer',
      f1t: 'Questionário aleatório', f1b: 'Receba uma pontuação aleatória para fechar. Toque nos números do alvo para escolher os seus objetivos e confirme logo a resposta. Pode mostrar ou ocultar a resposta quando quiser.',
      f2t: 'Aprender por número de dardos', f2b: 'Pratique passo a passo as pontuações que se fecham com um, dois ou três dardos. Toque em reproduzir para ver o percurso dardo a dardo no alvo.',
      f3t: 'Lista de fechos', f3b: 'Consulte o percurso de cada pontuação numa única lista. Com o lápis, edita uma resposta e torna-a o seu percurso preferido.',
      f4t: 'Deixar um bom resto', f4b: 'Quando não consegue fechar nesta jogada, pratique como deixar uma pontuação mais fácil de fechar na seguinte.',
      f5t: 'Escolha regras e cores', f5b: 'Mude o tipo de bull (Fat Bull / Separate Bull) e a regra de saída (Master Out e outras). Escolha as cores de alvo DARTSLIVE, PHOENIX ou steel, também no modo escuro.',
      p1t: '73 idiomas', p1b: 'A app segue o idioma do seu dispositivo, e pode alterá-lo na app.',
      p2t: 'Fica no seu dispositivo', p2b: 'As definições e o progresso ficam guardados apenas no seu dispositivo. Sem conta, sem anúncios, nada é enviado.',
      ctaTitle: 'Comece a praticar hoje',
      videoLabel: 'Vídeo de demonstração da app'
    },
    pl: {
      tagline: 'Patrz, naśladuj, zapamiętuj',
      appStoreSmall: 'Pobierz w',
      playSmall: 'Pobierz z',
      soon: 'Wkrótce',
      featuresTitle: 'Co możesz robić',
      f1t: 'Losowy quiz', f1b: 'Dostajesz losowy wynik do zamknięcia. Stuknij liczby na tarczy, aby wybrać cele, i od razu sprawdź odpowiedź. Odpowiedź możesz w każdej chwili pokazać lub ukryć.',
      f2t: 'Nauka według liczby lotek', f2b: 'Ćwicz krok po kroku wyniki, które zamkniesz jedną, dwiema lub trzema lotkami. Naciśnij odtwarzanie, aby zobaczyć trasę lotka po lotce na tarczy.',
      f3t: 'Lista zamknięć', f3b: 'Zobacz trasę dla każdego wyniku na jednej liście. Ołówkiem edytujesz odpowiedź i ustawiasz własną ulubioną trasę.',
      f4t: 'Zostaw dobrą resztę', f4b: 'Gdy w tej kolejce nie da się zamknąć, ćwicz zostawianie wyniku, który łatwiej zamknąć w następnej.',
      f5t: 'Wybierz zasady i kolory', f5b: 'Zmieniaj rodzaj bulla (Fat Bull / Separate Bull) i zasadę zamknięcia (Master Out i inne). Wybierz kolory tarczy DARTSLIVE, PHOENIX lub stalowej, także w trybie ciemnym.',
      p1t: '73 języki', p1b: 'Aplikacja używa języka urządzenia, a zmienisz go też w aplikacji.',
      p2t: 'Zostaje na urządzeniu', p2b: 'Ustawienia i postępy są zapisywane tylko na urządzeniu. Bez konta, bez reklam, nic nie jest wysyłane.',
      ctaTitle: 'Zacznij ćwiczyć już dziś',
      videoLabel: 'Film demonstracyjny aplikacji'
    },
    ko: {
      tagline: '보고, 따라 하고, 익히기',
      appStoreSmall: '다운로드하기',
      playSmall: '다운로드하기',
      soon: '출시 예정',
      featuresTitle: '이런 걸 할 수 있어요',
      f1t: '랜덤 출제', f1b: '남은 점수가 랜덤으로 출제됩니다. 다트보드의 숫자를 탭해 노릴 곳을 고르고 바로 정답을 확인하세요. 정답은 언제든 보이거나 숨길 수 있습니다.',
      f2t: '다트 개수별로 익히기', f2b: '1개·2개·3개로 끝낼 수 있는 점수를 차례로 연습합니다. 재생 버튼을 누르면 정답 루트가 보드 위에서 한 발씩 재생됩니다.',
      f3t: '어레인지 목록', f3b: '모든 점수의 루트를 한 목록에서 확인할 수 있습니다. 연필 버튼으로 정답을 편집해 내가 좋아하는 루트로 바꿀 수 있습니다.',
      f4t: '못 끝낼 때 남기는 법', f4b: '이번 라운드에 끝낼 수 없을 때, 다음 라운드에 끝내기 쉬운 점수를 남기는 방법도 연습할 수 있습니다.',
      f5t: '규칙과 배색 선택', f5b: '불의 종류(Fat Bull / Separate Bull)와 아웃 조건(Master Out 등)을 바꿀 수 있습니다. 다트보드는 DARTSLIVE·PHOENIX·하드 다트 배색 중에서 고를 수 있고 다크 모드도 지원합니다.',
      p1t: '73개 언어 지원', p1b: '기기 언어에 맞춰 표시되며, 앱 안에서도 바꿀 수 있습니다.',
      p2t: '기록은 기기 안에만', p2b: '설정과 학습 기록은 기기 안에만 저장됩니다. 계정 가입, 광고, 외부 전송이 없습니다.',
      ctaTitle: '지금 바로 연습을 시작하세요',
      videoLabel: '앱 데모 영상'
    },
    vi: {
      tagline: 'Xem, bắt chước, ghi nhớ',
      appStoreSmall: 'Tải về trên',
      playSmall: 'Tải về trên',
      soon: 'Sắp ra mắt',
      featuresTitle: 'Bạn có thể làm gì',
      f1t: 'Câu hỏi ngẫu nhiên', f1b: 'Nhận một số điểm ngẫu nhiên cần kết thúc. Chạm vào các số trên bảng phi tiêu để chọn mục tiêu và kiểm tra đáp án ngay. Bạn có thể hiện hoặc ẩn đáp án bất cứ lúc nào.',
      f2t: 'Học theo số phi tiêu', f2b: 'Luyện từng bước các số điểm kết thúc được bằng một, hai hoặc ba phi tiêu. Nhấn phát để xem lộ trình được ném lần lượt trên bảng.',
      f3t: 'Danh sách kết thúc', f3b: 'Xem lộ trình của mọi số điểm trong một danh sách. Dùng nút bút chì để sửa đáp án thành lộ trình bạn thích.',
      f4t: 'Để lại số điểm tốt', f4b: 'Khi không thể kết thúc ở lượt này, hãy luyện cách để lại số điểm dễ kết thúc hơn ở lượt sau.',
      f5t: 'Chọn luật và màu sắc', f5b: 'Đổi loại bull (Fat Bull / Separate Bull) và luật kết thúc (Master Out, v.v.). Chọn màu bảng DARTSLIVE, PHOENIX hoặc phi tiêu đầu thép, có cả chế độ tối.',
      p1t: '73 ngôn ngữ', p1b: 'Ứng dụng theo ngôn ngữ của thiết bị, và bạn có thể đổi ngay trong ứng dụng.',
      p2t: 'Chỉ lưu trên thiết bị', p2b: 'Cài đặt và tiến độ chỉ được lưu trên thiết bị của bạn. Không tài khoản, không quảng cáo, không gửi dữ liệu đi đâu.',
      ctaTitle: 'Bắt đầu luyện tập ngay hôm nay',
      videoLabel: 'Video giới thiệu ứng dụng'
    },
    th: {
      tagline: 'ดู ทำตาม แล้วจำให้ได้',
      appStoreSmall: 'ดาวน์โหลดบน',
      playSmall: 'ดาวน์โหลดบน',
      soon: 'เร็วๆ นี้',
      featuresTitle: 'ทำอะไรได้บ้าง',
      f1t: 'สุ่มโจทย์', f1b: 'สุ่มคะแนนที่เหลือมาให้ปิดเกม แตะตัวเลขบนกระดานปาเป้าเพื่อเลือกจุดเล็ง แล้วตรวจคำตอบได้ทันที แสดงหรือซ่อนคำตอบได้ตลอดเวลา',
      f2t: 'ฝึกตามจำนวนลูกดอก', f2b: 'ฝึกทีละขั้นกับคะแนนที่ปิดได้ด้วย 1, 2 หรือ 3 ลูก กดเล่นเพื่อดูเส้นทางบนกระดานทีละลูก',
      f3t: 'รายการเส้นทางปิดเกม', f3b: 'ดูเส้นทางของทุกคะแนนในรายการเดียว ใช้ปุ่มดินสอแก้คำตอบให้เป็นเส้นทางที่คุณชอบ',
      f4t: 'เหลือแต้มให้ปิดง่าย', f4b: 'เมื่อปิดเกมในรอบนี้ไม่ได้ ก็ฝึกวิธีเหลือคะแนนที่ปิดง่ายขึ้นในรอบถัดไปได้',
      f5t: 'เลือกกติกาและสี', f5b: 'สลับประเภทบูล (Fat Bull / Separate Bull) และเงื่อนไขการปิด (Master Out ฯลฯ) เลือกสีกระดานแบบ DARTSLIVE, PHOENIX หรือดาร์ทหัวเหล็ก และรองรับโหมดมืด',
      p1t: 'รองรับ 73 ภาษา', p1b: 'แอปแสดงตามภาษาของอุปกรณ์ และเปลี่ยนได้ในแอป',
      p2t: 'ข้อมูลอยู่ในเครื่องเท่านั้น', p2b: 'การตั้งค่าและความคืบหน้าบันทึกไว้ในอุปกรณ์ของคุณเท่านั้น ไม่ต้องสมัครบัญชี ไม่มีโฆษณา ไม่มีการส่งข้อมูลออกไป',
      ctaTitle: 'เริ่มฝึกกันเลยวันนี้',
      videoLabel: 'วิดีโอสาธิตแอป'
    }
  };

  // 言語ごとのスクリーンショット（img/<フォルダ>/0N.webp）。ないものは英語版を使う。
  const shotFolders = new Set(['ar', 'bn', 'ca', 'cs', 'da', 'de', 'el', 'es', 'fi', 'fr', 'gu', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kn', 'ko', 'ml', 'mr', 'ms', 'nb', 'nl', 'or', 'pa', 'pl', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl', 'sv', 'ta', 'te', 'th', 'tr', 'uk', 'ur', 'vi', 'zh-Hans', 'zh-Hant']);
  // 動画（video/<名前>.mp4）。ないときは静止画のまま。
  const videos = window.DARTS_FINISH_VIDEOS || {};

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
    const folder = shotFolders.has(locale) ? locale : 'en';
    document.querySelectorAll('img[data-shot]').forEach(img => {
      const src = `img/${folder}/${img.dataset.shot}.webp`;
      if (img.getAttribute('src') !== src) img.setAttribute('src', src);
    });
    document.querySelectorAll('[data-store="app-store"]').forEach(link => { link.href = APP_STORE_URL; });

    const video = document.querySelector('video[data-demo]');
    if (video) {
      const name = videos[locale] || videos[folder] || videos.en;
      const poster = `img/${folder}/${video.dataset.poster}.webp`;
      video.poster = poster;
      if (name && !reduceMotion.matches) {
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
    }
  }

  apply(document.documentElement.lang || 'ja');
  document.addEventListener('site:locale', event => apply(event.detail));
  reduceMotion.addEventListener?.('change', () => apply(document.documentElement.lang));
})();
