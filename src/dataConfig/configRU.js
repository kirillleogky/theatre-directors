const developers = [
  {
    id: 'D0',
    name: 'Екатерина Руденко',
    github: 'https://github.com/Rekaterina',
    telegram: 'https://t.me/rekaterina',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/rudenko.jpg',
    contribution: '➤Created the basic structure of the project.\n ➤Implemented the transition between pages using react router.\n ➤Implemented a website translation into three languages (the whole team wrote the text).',
  },
  {
    id: 'D1',
    name: 'Владимир Серко',
    github: 'https://github.com/Vir45',
    telegram: 'https://t.me/Vova_Serko',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/serko.jpg',
    contribution: '➤Created the basic structure of the project.\n ➤Implemented the transition between pages using react router.\n ➤Implemented a website translation into three languages (the whole team wrote the text).',
  },
  {
    id: 'D2',
    name: 'Екатерина Якубовская',
    github: 'https://github.com/Katsiaryna31',
    telegram: 'https://t.me/KatsiarynaYa',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/yakubovskaya.jpg',
    contribution: '➤Created the basic structure of the project.\n ➤Implemented the transition between pages using react router.\n ➤Implemented a website translation into three languages (the whole team wrote the text).',
  },
  {
    id: 'D3',
    name: 'Антон Ясько',
    github: 'https://github.com/antonyasko',
    telegram: 'https://t.me/anton_yasko',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/yasko.jpg',
    contribution: '➤Created the basic structure of the project.\n ➤Implemented the transition between pages using react router.\n ➤Implemented a website translation into three languages (the whole team wrote the text).',
  },
  {
    id: 'D4',
    name: 'Кирилл Лёгкий',
    github: 'https://github.com/kirillleogky',
    telegram: 'https://t.me/KirillLeogky',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/leogky.jpg',
    contribution: '➤Created the basic structure of the project.\n ➤Implemented the transition between pages using react router.\n ➤Implemented a website translation into three languages (the whole team wrote the text).',
  },
  {
    id: 'D5',
    name: 'Роман Гончаров',
    github: 'https://github.com/RomaSRS',
    telegram: 'https://t.me/RomanSRS',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/goncharov.jpg',
    contribution: '➤Created the basic structure of the project.\n ➤Implemented the transition between pages using react router.\n ➤Implemented a website translation into three languages (the whole team wrote the text).',
  },
];

const directors = [
  {
    id: '0',
    url: 'mirovich',
    name: 'Евстигней Афиногенович Мирович',
    born: '10 августа 1878',
    deceased: '16 февраля 1952',
    description: 'Белорусский драматург и театральный режиссёр',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Mirovich_03.jpg',
    placeOfBirth: 'Санкт-Петербург',
    placeOfDeath: 'Минск',
    shortBiography : 'Евстигней Афиногенович Мирович (настоящая фамилия — Дунаев; 29 июля [10 августа] 1878, Санкт-Петербург - 16 февраля 1952, Минск) — российский и белорусский советский актёр, режиссёр, драматург, педагог, профессор (1945). Народный артист Белорусской ССР (1940). Один из основателей белорусского театрального искусства, белорусского театра им. Янки Купалы. Участвовал в создании Белорусского театрально-художественного института (ныне — Белорусская государственная академия искусств).',
    timeline: [
      {date: '1900', text: 'Начал работать в петербургских театрах актером, затем режиссером.'},
      {date: '1906', text: 'Стал действующим членом Санкт-Петербургского союза драматических и музыкальных писателей.'},
      {date: '1919', text: 'Начал работать в театрах Беларуси'},
      {date: '1921—1931', text: 'Работает художественным руководителем в театрах Беларуси.'},
      {date: '1932—1935', text: 'Художественный руководитель Гомельского театра рабочей молодежи.'},
      {date: '1937—1940', text: 'Художественный руководитель Белорусского театра юного зрителя имени Н. Крупской.'},
      {date: '1941—1945', text: 'Работает режиссером Белорусского театра им. Я. Купалы (БГТ-1).'},
    ],
    project: [
      {date: '1923', text: '«Кастусь Калиновский»'},
      {date: '1927', text: '«Мятеж» по Д. Фурманову'},
      {date: '1929', text: '«Мост» Е. Романовича'},
      {date: '1930', text: '«Гута» Кобеца'},
      {date: '1937', text: '«Как закалялась сталь» по Н. Островскому'},
      {date: '1939', text: '«Чудесная дудка» Вольского'},
    ],
    // video: '',
    mapData: {
      center: [53.9226577, 27.6010486],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/ru/b/b1/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D0%B0%D0%BA%D1%82%D1%91%D1%80%D0%B0_%D0%95%D0%B2%D1%81%D1%82%D0%B8%D0%B3%D0%BD%D0%B5%D1%8F_%D0%9C%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87%D0%B0.JPG',
        // width: 4,
        // height: 3,
        // title: 'Могила Мировича',
        text: 'Могила Мировича на Военном кладбище Минска.'
      },
      {
        num: 1,
        src: 'https://img.tyt.by/n/obshchestvo/0b/4/08_mirovich-1952_620.jpg',
        // width: 4,
        // height: 3,
        // title: 'Портрет Мировича',
        text: 'Портрет кисти народного художника БССР Ивана Ахремчика.'
      },
      {
        num: 2,
        src: 'https://img.tyt.by/n/obshchestvo/06/0/09_mirovich_doska_620.jpg',
        // width: 4,
        // height: 3,
        // title: 'Барельеф Мировича',
        text: 'Барельеф Мировича на фасаде Белорусского академии искусств.'
      },
    ],
  },
  {
    id: '1',
    url: 'galubok',
    name: 'Владислав Иосифович Голубок',
    born: '15 мая 1882',
    deceased: '28 сентября 1937',
    description: 'Белорусский драматург, прозаик, режиссер, актер, художник.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Vladislav_Golubok.jpg',
    placeOfBirth: 'Ст. Лесная, Новогрудский уезд, Минская губерния',
    placeOfDeath: 'Минск',
    shortBiography : 'Голубо́к Владисла́в Ио́сифович (также известен под фамилиями Голуб, Голубев; 3 [15] мая 1882 — 28 сентября 1937) — белорусский советский актёр, режиссёр, писатель, художник, декоратор, первый народный артист Белорусской ССР (1928), один из основателей белорусского национального театра, художественный руководитель и директор Белорусского государственного театра.',
    timeline: [
      {date: '1896', text: 'Впервые попал в настоящий театр.'},
      {date: '1906', text: 'На страницах «Нашей Нивы» появились его первые стихи и рассказы.'},
      {date: '1913', text: 'В Петербурге вышла первая книжка «Рассказы».'},
      {date: '1917', text: 'возрождено «Первое белорусское общество драмы и комедии», ранее запрещено властями Российской Империи. Голубок вступает в общество вместе с женой и детьми и делает первые попытки в драматургии. За одну только осень 1917 г. Голубок пишет три пьесы, которые сразу ставит его трупа.'},
      {date: '1920', text: 'возглавил Драматическую секцию культурно-просветительской организации «Цветок папоротника» в Слуцке.'},
      {date: '1924', text: 'издан приказ Наркомата просвещения о превращении трупы Голубка в Белорусский государственный труппу.'},
      {date: '1928', text: 'Присвоено звание народного артиста республики. Голубок стал первым белорусским народным артистом.'},
      {date: '1931', text: 'Театр Голубка реорганизуют, его называют БГТ-3 (Белорусский третий государственный театр) и «прописывают» в Гомеле. Гастроли по округам, тем не менее, продолжались.'},
      {date: '1933', text: 'БГТ-3 ставит пьесу «Белое оружие». Пьеса повествует о вредительской деятельности «врагов народа» на одном из заводов.'},
      {date: '1935', text: 'широко отмечался 15-летний юбилей театра Владислава Голубка, многие актеры получили почетные звания, Голубок был награжден автомобилем и творческой командировкой в Москву и Ленинград.'},
    ],
    project: [
      {date: '1917', text: '«Последнее свидание»'},
      {date: '1920', text: '«Суд»'},
      {date: '1921', text: '«Белый венок»'},
      {date: '1927', text: '«Краб»'},
      {date: '1933', text: '«Белое оружие»'},
    ],
    video: 'https://www.youtube.com/watch?v=FQ054q0969g',
    mapData: {
      center: [53.9032207, 27.5344804],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/%D0%A3%D0%BB%D0%B0%D0%B4%D1%8B%D1%81%D0%BB%D0%B0%D1%9E_%D0%93%D0%B0%D0%BB%D1%83%D0%B1%D0%BE%D0%BA.jpg',
        // width: 4,
        // height: 3,
        // title: 'Афиша',
        text: 'Афиша 1929 года'
      },
      {
        num: 1,
        src: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Haluboktheatre4.jpg',
        // width: 4,
        // height: 3,
        // title: 'Сцена из спектакля',
        text: 'Сцена из спектакля «Мой друг» М. Погодина, 1932 год.'
      },
      {
        num: 2,
        src: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/%D0%A3%D0%BB%D0%B0%D0%B4%D0%B7%D1%96%D1%81%D0%BB%D0%B0%D1%9E_%D0%93%D0%B0%D0%BB%D1%83%D0%B1%D0%BE%D0%BA._%D0%A4%D0%BE%D1%82%D0%B0.jpg',
        // width: 4,
        // height: 3,
        // title: 'Фотопортрет',
        text: 'Владислав Голубок. Фотопортрет'
      },
    ],
  },
  {
    id: '2',
    url: 'bujnicki',
    name: 'Игнат Терентьевич Буйницкий',
    born: '22 августа 1861',
    deceased: '22 сентября 1917',
    description: 'белорусский актер, режиссер, театральный деятель, создатель национального профессионального театра, участник литературной жизни.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Ihnat_Bujnicki.jpg',
    placeOfBirth: 'усадьба Поливачи Прозорокской волости, ныне Глубокский район Витебской области',
    placeOfDeath: 'д. Полочаны, Молодечненский район, Минской области',
    shortBiography : 'Игна́т (Игна́тий) Тере́нтьевич (Тарквиньевич) Буйни́цкий (10 (22) августа 1861, усадьба Поливачи Прозорокской волости, ныне Глубокского района Витебской области — 9 (22) сентября 1917) — белорусский актёр, режиссёр, театральный деятель, основатель первого профессионального национального белорусского театра.\nТеатр Буйницкого показывал спектакли в местечках и деревнях Белоруссии, гастролировал в Вильнюсе, Минске, Полоцке, Санкт-Петербурге, Варшаве и других городах. Его деятельность заложила основы белорусского профессионального театрального искусства. Большинство спектаклей Игнат Буйницкий ставил сам. В 1917 году был одним из инициаторов создания «Первого товарищества белорусской драмы и комедии» в Минске.',
    timeline: [
      {date: '1907', text: 'в своей усадьбе в Паливачах (около Прозороки) основал самодеятельный театр, где сначала принимали участие его родственники.'},
      {date: '1910', text: 'В Вильнюсе 12 февраля театр Буйничского по специальному приглашению редакции «Нашей Нивы» принял участие в представлении, которое вошло в историю под названием «Первая белорусская вечеринка в Вильно».'},
      {date: '1910—1913', text: 'театр гастролировал по Беларуси (Минск, Слуцк, Полоцк, Дисна, Свенцяны, Поставы, Несвиж, Ляховичи), дважды выступал в Петербурге (1911, 1912), а также в Варшаве (1913).'},
      {date: '1913', text: 'Из-за материальных трудностей и давления царских властей деятельность труппы была прекращена.'},
      {date: '1914', text: 'попытался создать новую труппу, однако 1-я мировая война помешала осуществить этот замысел.'},
      {date: '1917', text: 'Во время Первой мировой войны отправился на Западный фронт, был на военной службе в Молодечно.'},
    ],
    project: [
      {date: '1910', text: '«Первая белорусская вечеринка в Вильно'},
    ],
    video: 'https://www.youtube.com/watch?v=ACDGr4TUkvs&feature=emb_logo',
    mapData: {
      center: [55.2899866, 28.220279],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Buinicki.jpg',
        // width: 4,
        // height: 3,
        // title: 'Буйницкий с дочерьми',
        text: 'И. Буйницкий с дочерьми Вандой (слева) и Еленой'
      },
      {
        num: 1,
        src: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Bujnicki2.jpg',
        // width: 4,
        // height: 3,
        // title: 'Буйницкий с дочерью',
        text: 'И. Буйницкий с дочерью Вандой во время выступления на Первой белорусскоой вечеринки в Вильно. 1910 г.'
      },
      {
        num: 2,
        src: 'https://upload.wikimedia.org/wikipedia/commons/2/20/%D0%9F%D1%80%D0%B0%D0%B7%D0%B0%D1%80%D0%BE%D0%BA%D1%96._%D0%9F%D0%BE%D0%BC%D0%BD%D1%96%D0%BA_%D0%86%D0%B3%D0%BD%D0%B0%D1%82%D1%83_%D0%91%D1%83%D0%B9%D0%BD%D1%96%D1%86%D0%BA%D0%B0%D0%BC%D1%83.jpg',
        // width: 4,
        // height: 3,
        // title: 'Памятник на могиле',
        text: 'Памятник на могиле И. Ц. Буйничского в д. Прозороки'
      },
    ],
  },
  {
    id: '3',
    url: 'pinigin',
    name: 'Николай Николаевич Пинигин',
    born: '6 августа 1957',
    deceased: 'наши дни',
    description: 'Белорусский режиссер, заслуженный деятель искусств Республики Беларусь.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Pinigin.JPG',
    placeOfBirth: 'Изюм, Харьковская область, СССР',
    placeOfDeath: ' ',
    shortBiography : 'Николай Николаевич Пинигин (6 августа 1957, Изюм, Харьковская область, Украина) - белорусский театральный режиссер, художественный руководитель Национального академического театра имени Янки Купалы, заслуженный деятель искусств Республики Беларусь.',
    timeline: [
      {date: '1979', text: 'Окончил режиссерском факультет Белорусский театрально-художественный институт.'},
      {date: '1980—1982', text: 'работал в Русском драматическом театре им. М. Горького (Минск).'},
      {date: '1985', text: 'режиссер Национального академического театра имени Янки Купалы.'},
      {date: '1985-1987', text: 'преподаватель кафедры «Мастерство актера и режиссуры» в Белорусском академии искусств.'},
      {date: '1998', text: 'Режиссер Большого драматического театра им. Г. А. Товстоногова (Санкт-Петербург)'},
      {date: '2008', text: 'назначен главным режиссером Национального академического театра имени Янки Купалы.'},
    ],
    project: [
      {date: '1979', text: '«Ночной дилижанс»'},
      {date: '1984', text: '«Женщина с моря»'},
      {date: '1990', text: '«Здешние» Я. Купалы'},
      {date: '1997', text: '«Прихоти Марианны» А. Мюссе'},
      {date: '1999', text: '«Калифорнийская сюита» Нил Саймон'},
      {date: '2000', text: '«Ложь на длинных ногах» Э. де Филиппо'},
      {date: '2001', text: '«Таланты и поклонники» А. Н. Островского'},
    ],
    video: 'https://www.youtube.com/watch?v=lexVZsR-GF0',
    mapData: {
      center: [59.927614, 30.330527],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://minsknews.by/wp-content/uploads/2018/07/DSC_0237-copy-696x464.jpg',
        // width: 4,
        // height: 3,
        // title: 'Фотография',
        text: 'Фотография'
      },
      {
        num: 1,
        src: 'https://cdn12.img.sputnik.by/images/102328/96/1023289681.jpg',
        // width: 4,
        // height: 3,
        // title: 'Фотография',
        text: 'Фотография'
      },
      {
        num: 2,
        src: 'https://s13.stc.all.kpcdn.net/share/i/12/11199960/inx960x640.jpg',
        // width: 4,
        // height: 3,
        // title: 'Фотография',
        text: 'Фотография'
      },
    ],
  },
  {
    id: '4',
    url: 'aleksandrouskaja',
    name: 'Лариса Помпеевна Александровская',
    born: '15 февраля 1904',
    deceased: '23 мая 1980',
    description: 'Белорусская оперная певица (сопрано), театральный режиссер, режиссер и общественный деятель',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/%C5%81arysa_Aleksandro%C5%ADskaja._%D0%9B%D0%B0%D1%80%D1%8B%D1%81%D0%B0_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D1%9E%D1%81%D0%BA%D0%B0%D1%8F_%281937%29.jpg',
    placeOfBirth: 'Минск',
    placeOfDe6ath: 'Минск',
    shortBiography : 'Лари́са Помпе́евна Александро́вская (2 (15) февраля 1902 года (по официальным данным — 1904) Минск — 23 мая 1980) — белорусская советская оперная певица (сопрано), режиссёр, публицист и общественный деятель. Народная артистка СССР (1940).',
    timeline: [
      {date: '1919-1924', text: 'участница организованной ею самодеятельного труппы при политотделе Западного фронта.'},
      {date: '1927', text: 'исполняет белорусские народные песни на Международной музыкальной выставке во Франкфурте-на-Майне.'},
      {date: '1933', text: 'артистка Белорусского театра оперы и балета.'},
      {date: '1946', text: 'Назначена председателем Белорусского театрального объединения.'},
      {date: '1951—1960', text: 'главный режиссер Белорусского театра оперы и балета.'},
      {date: '1976', text: 'Назначена почетным председателем Белорусского театрального объединения.'},
    ],
    project: [
      {date: '1951', text: '«Запорожец за Дунаем» С. Гулак-Артемовского'},
      {date: '1952', text: '«Страшный двор» С. Монюшко'},
      {date: '1953', text: '«Аида» Джузеппе Верди'},
      {date: '1954', text: '«Борис Годунов» М. Мусоргского'},
      {date: '1957', text: '«Михась Подгорный» Е. Тикоцкого'},
      {date: '1960', text: '«Пиковая дама» П. Чайковского'},
    ],
    video: 'https://www.youtube.com/watch?v=eDYuC8m5wsw&feature=youtu.be',
    mapData: {
      center: [53.9103046, 27.5615253],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/ru/6/62/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D0%BF%D0%B5%D0%B2%D0%B8%D1%86%D1%8B_%D0%9B%D0%B0%D1%80%D0%B8%D1%81%D1%8B_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B9.JPG',
        // width: 4,
        // height: 3,
        // title: 'Могила Александровской',
        text: 'Могила Александровской на Восточном кладбище Минска.'
      },
      {
        num: 1,
        src: 'https://minsknews.by/wp-content/uploads/2018/03/4-9.jpg',
        // width: 4,
        // height: 3,
        // title: 'Образе Кармен',
        text: 'Певица в образе Кармен.'
      },
      {
        num: 2,
        src: 'https://www.sb.by/upload/medialibrary/377/3775af02273a590150a1e89012960225.jpg',
        // width: 4,
        // height: 3,
        // title: 'Юбилей',
        text: '70 лет.'
      },
    ],
  },
  {
    id: '5',
    url: 'lutsenka',
    name: 'Борис Иванович Луценко',
    born: '16 сентября 1937',
    deceased: '5 февраля 2020',
    description: 'Белорусский театральный режиссер, народный артист Беларуси.',
    image: 'https://www.rustheatre.by/images/stories/administration/lutsenko_black.jpg',
    placeOfBirth: 'Майкоп, Адыгейск автономная область, СССР',
    placeOfDe6ath: 'Минск',
    shortBiography : 'Борис Иванович Луценко (16 сентября 1937, Майкоп, Краснодарский край — 5 февраля 2020, Минск) — советский и белорусский режиссёр-постановщик театра и кино. Народный артист Республики Беларусь (1995). Заслуженный деятель искусств Белорусской ССР (1975).',
    timeline: [
      {date: '1962—1967', text: 'учился в Белорусском театрально-художественном институте.'},
      {date: '1967', text: 'принят в Белорусский театр имени Я. Купалы.'},
      {date: '1970', text: 'Начал преподавать в Белорусском академии искусств.'},
      {date: '1973-1981', text: 'главный режиссер Государственного русского драматического театра имени М. Горького.'},
      {date: '1981-1982', text: 'режиссер Купаловского театра.'},
      {date: '1982—1991', text: 'главный режиссер Театра-студии киноактера.'},
      {date: '1991-2007', text: 'художественный руководитель Национального академического драматического театра имени М. Горького.'},
    ],
    project: [
      {date: '1970', text: '«Память сердца» Александра Корнейчук'},
      {date: '1976', text: '«Трехгрошовая опера» Бертольда Брехта'},
      {date: '1979', text: '«Трагедия человека» Имре Мадача'},
      {date: '1985', text: '"Не боюсь Вирджинии Вульф» Эдварда Олби'},
      {date: '1990', text: '«Генералы в юбках» Жана Ануя'},
    ],
    video: 'https://www.youtube.com/watch?v=C3TMCDZA2rY',
    mapData: {
      center: [53.898314, 27.5507955],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Alexey_Kuzmich_Portrait_of_national_actor_Boris_Lutsenko_2001.JPG',
        // width: 4,
        // height: 3,
        // title: 'Портрет Бориса Луценко',
        text: 'Портрет Бориса Луценко кисти белорусского художника Алексея Кузьмича, 2001 год.'
      },
      {
        num: 1,
        src: 'http://images.aif.by/007/667/03b8ec457923e6c67efae3f6275f67cd.JPG',
        // width: 4,
        // height: 3,
        // title: 'В театре',
        text: 'Режиссер в театре.'
      },
      {
        num: 2,
        src: 'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2020-02/TASS_18992976%20copy.jpg?itok=LmXoBDLI',
        // width: 4,
        // height: 3,
        // title: 'Фотография',
        text: 'Фотография'
      },
    ],
  },
  {
    id: '6',
    url: 'kryzanowski',
    name: 'Евгений Анатольевич Крыжановский',
    born: '6 июня 1955',
    deceased: 'наши дни',
    description: 'белорусский актер и главный режиссер Минского театра сатиры и юмора "Христофор", заслуженный артист Республики Беларусь.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Kryzanowski.jpg',
    placeOfBirth: 'Николаев, Николаевская область, УССР, СССР',
    placeOfDe6ath: ' ',
    shortBiography : 'Евгений Анатольевич Крыжановский (род. 6 июня 1955 года, Николаев, Украинская ССР, СССР) — советский и белорусский юморист, актёр и главный режиссёр Минского театра сатиры и юмора «Христофор» (1986-2016). Художественный руководитель телевизионного проекта «Юморинка» (2015-2019). Художественный руководитель "Киноцентра Евгения Крыжановского". Заслуженный артист Республики Беларусь (2015).',
    timeline: [
      {date: '1972', text: 'Окончил школу в Козельске (РСФСР).'},
      {date: '1973', text: 'поступил в Белорусский театрально-художественный институт на актерское отделение.'},
      {date: '1977', text: 'принят в труппу Академического театра имени Янки Купалы.'},
      {date: '1986', text: 'создал театр сатиры и юмора «Христофор». Сыграл более 30 больших и главных ролей.'},
    ],
    project: [
      {date: '1982', text: '«Купальская ночь»'},
      {date: '1985', text: '«Иди и смотри»'},
    ],
    video: 'https://www.youtube.com/watch?v=2q_HkfBF3AY',
    mapData: {
      center: [53.9008774, 27.5626722],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Jaugen_Kryzhanouski_and_his_daughter_-_on_an_International_book_exhibition_in_Minsk_city_-_14_February_2015_AD_-_1.JPG',
        // width: 4,
        // height: 3,
        // title: 'Евгений Крыжановский и его дочь',
        text: 'Евгений Крыжановский и его дочь - на XXII Международной книжной выставке в Минске (Беларусь), 14 февраля 2015 г.'
      },
      {
        num: 1,
        src: 'http://kryzhanovski.tripod.com/images/photo/pic8.jpg',
        // width: 4,
        // height: 3,
        // title: 'С Анатолием Длуским',
        text: 'С Анатолием Длуским.'
      },
      {
        num: 2,
        src: 'http://kryzhanovski.tripod.com/images/photo/pic3.jpg',
        // width: 4,
        // height: 3,
        // title: 'С семьей.',
        text: 'С семьей.'
      },
    ],
  },
];

const mainText = 'Профессия театрального режиссера в том виде, в каком мы привыкли ее видеть, сложилась во второй половине XIX века. Но концепция режиссуры появилась гораздо раньше - в 1742 году. Режиссер театра определяет общую идею, которая будет раскрыта во время спектакля. Этот творческий работник объединяет усилия всех остальных - декораторов и актеров, композиторов и визажистов. Именно он должен объединить всех театральных деятелей, наполнить их смыслом, поместить их душу в производство. Для этого режиссер должен быть хорошим психологом, уметь контролировать себя. Режиссер театра - сложная профессия. Чтобы стать одним, нужно обладать настойчивостью, серьезностью, грамотностью, умом и оригинальностью. Этот человек интерпретирует пьесы - конечно, согласно его видению, чтобы они звучали по-новому, интересовали зрителей.';

const directorOfTheDay = 'Режиссёр дня';

export default {
  developers,
  directors,
  directorsLink: 'Режиссёры',
  developersLink: 'Разработчики',
  homePageLink: 'Главная',
  worklogLink: 'Часопіс падзей',
  styleguideLink: 'Гід па стылі',
  searchLabel: 'Имя или место рождения',
  directorsOfTheDayButton: 'Подробнее',
  timelineTitle: 'Временные события',
  otherInfo: {
    lang: 'ru',
    title: 'Театральные режиссёры Беларуси',
    description: 'Театральные режиссёры Беларуси: биография и их работы.',
  },
  mainText,
  directorOfTheDay,
}