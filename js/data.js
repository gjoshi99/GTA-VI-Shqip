/*
 * GTA VI SHQIP — CONTENT DATABASE
 * Language: Albanian
 *
 * Status:
 * confirmed   = supported by official Rockstar material
 * reported    = published by a third-party source
 * leaked      = unofficial leaked information
 * speculation = unconfirmed theory
 *
 * Images: Rockstar Games official media CDN.
 * The website is unofficial and is not affiliated with Rockstar Games.
 */

const ROCKSTAR = "https://www.rockstargames.com/VI";
const MEDIA = `${ROCKSTAR}/media`;
const SCREENSHOTS = `${MEDIA}/screenshots`;
const ARTWORK = `${MEDIA}/artwork-wallpapers`;

const IMAGES = {
  jasonLucia:
    "https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_Beach_landscape.0419q._86ukpt.jpg?akim=1&imdensity=1&imwidth=3840",

  cal: "https://www.rockstargames.com/VI/_next/static/media/Cal_Hampton_landscape.17k7bnt3myg.2.jpg?akim=1&imdensity=1&imwidth=3840",
  boobie:
    "https://www.rockstargames.com/VI/_next/static/media/Boobie_Ike_landscape.0ldnbn87k-8mq.jpg?akim=1&imdensity=1&imwidth=3840",
  drequan:
    "https://www.rockstargames.com/VI/_next/static/media/DreQuan_Priest_landscape.0_b7hszyze6cy.jpg?akim=1&imdensity=1&imwidth=3840",
  realDimez:
    "https://www.rockstargames.com/VI/_next/static/media/Real_Dimez_landscape.0637akp_a5a_q.jpg?akim=1&imdensity=1&imwidth=3840",
  raul: "https://www.rockstargames.com/VI/_next/static/media/Raul_Bautista_landscape.11_3hd0fr69~j.jpg?akim=1&imdensity=1&imwidth=3840",
  brian:
    "https://www.rockstargames.com/VI/_next/static/media/Brian_Heder_landscape.0a-egj5b8yo1q.jpg?akim=1&imdensity=1&imwidth=3840",

  viceCity:
    "https://www.rockstargames.com/VI/_next/static/media/Vice_City_Postcard_landscape.0v2njmlk2n-qm.jpg?akim=1&imdensity=1&imwidth=3840",
  keys: "https://www.rockstargames.com/VI/_next/static/media/Leonida_Keys_Postcard_landscape.05oezf2h--~ed.jpg?akim=1&imdensity=1&imwidth=3840",
  portGellhorn:
    "https://www.rockstargames.com/VI/_next/static/media/Port_Gellhorn_Postcard_landscape.176c2o75nmcr8.jpg?akim=1&imdensity=1&imwidth=3840",
  ambrosia:
    "https://www.rockstargames.com/VI/_next/static/media/Ambrosia_Postcard_landscape.0gd~9a41ia-rt.jpg?akim=1&imdensity=1&imwidth=3840",
  grassrivers:
    "https://www.rockstargames.com/VI/_next/static/media/Grassrivers_Postcard_landscape.15-10i39nhex2.jpg?akim=1&imdensity=1&imwidth=3840",
  mountKalaga:
    "https://www.rockstargames.com/VI/_next/static/media/Mount_Kalaga_National_Park_Postcard_landscape.0c1cb4ocq16n3.jpg?akim=1&imdensity=1&imwidth=3840",

  grottiCheetah:
    "https://www.rockstargames.com/VI/_next/static/media/ULTIMATE_EDITION_GROTTI_CHEETAH_01.0a.wy3s_ogjey.jpg?akim=1&imdensity=1&imwidth=3840",
  dinkaEnduro:
    "https://www.rockstargames.com/VI/_next/static/media/ULTIMATE_EDITION_SAFEHOUSE_VEHICLES_02.0-2n5rm9n8.rq.jpg?akim=1&imdensity=1&imwidth=3840",
  crestKayak:
    "https://www.rockstargames.com/VI/_next/static/media/ULTIMATE_EDITION_SAFEHOUSE_VEHICLES_03.0c9.qtpdi.tf..jpg?akim=1&imdensity=1&imwidth=3840",
  ganadoRetro:
    "https://www.rockstargames.com/VI/_next/static/media/ULTIMATE_EDITION_VAPID_GANADO_RETRO_BUILD_01.062dgvkwdynw5.jpg?akim=1&imdensity=1&imwidth=3840",
  dominatorBuggy:
    "https://www.rockstargames.com/VI/_next/static/media/ULTIMATE_EDITION_VAPID_BUGGY_01.0jxfiql~371ik.jpg?akim=1&imdensity=1&imwidth=3840",
  vapidStanier:
    "https://www.rockstargames.com/VI/_next/static/media/VINTAGE_VICE_CITY_PACK_VAPID_STANIER_01.004m_8d1~qngy.jpg?akim=1&imdensity=1&imwidth=3840",
};

window.GTAVI_DATABASE = {
  site: {
    name: "GTA VI Shqip",
    language: "sq",
    updated: "18 nëntor 2026",
    officialWebsite: ROCKSTAR,
    disclaimer:
      "GTA VI Shqip është projekt jozyrtar. Grand Theft Auto VI dhe materialet përkatëse janë pronë e Rockstar Games.",
  },

  categories: [
    {
      id: "cheats",
      title: "Cheat codes",
      subtitle: "Komanda dhe kombinime butonash",
      icon: "⌘",
    },
    {
      id: "characters",
      title: "Personazhet",
      subtitle: "Personazhet dhe rolet në histori",
      icon: "♙",
    },
    {
      id: "locations",
      title: "Lokacionet",
      subtitle: "Rajonet e shtetit Leonida",
      icon: "⌖",
    },
    {
      id: "vehicles",
      title: "Automjetet",
      subtitle: "Automjete të paraqitura zyrtarisht",
      icon: "▰",
    },
    {
      id: "missions",
      title: "Misionet",
      subtitle: "Historia dhe struktura e misioneve",
      icon: "◈",
    },
    {
      id: "activities",
      title: "Aktivitetet",
      subtitle: "Aktivitete dhe eksplorim",
      icon: "◎",
    },
    {
      id: "gameplay",
      title: "Gameplay",
      subtitle: "Mekanika dhe informacionet e lojës",
      icon: "◉",
    },
    {
      id: "news",
      title: "Lajmet",
      subtitle: "Njoftime dhe publikime",
      icon: "▤",
    },
  ],

  characters: [
    {
      id: "jason-duval",
      title: "Jason Duval",
      category: "characters",
      subtitle: "Protagonist",
      image: IMAGES.jasonLucia,
      imageAlt: "Jason dhe Lucia në materialet zyrtare të GTA VI",
      description:
        "Jason është njëri nga dy protagonistët kryesorë të Grand Theft Auto VI. Ai është rritur mes njerëzve me histori të vështira dhe ka shërbyer në ushtri. Më vonë vendoset në rajonin Keys të Leonida-s. Njohja me Lucia Caminos bëhet një pikë e rëndësishme në jetën e tij.",
      details: [
        "Emri: Jason Duval",
        "Roli: Protagonist kryesor",
        "Vendndodhja e lidhur me të: Leonida Keys",
        "Personazh i lidhur ngushtë me Lucia Caminos",
        "Ka një të kaluar në ushtri",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Personazhet",
      sourceUrl: `${ROCKSTAR}/only-in-leonida`,
      imageCredit: "Rockstar Games",
    },
    {
      id: "lucia-caminos",
      title: "Lucia Caminos",
      category: "characters",
      subtitle: "Protagoniste",
      image: IMAGES.jasonLucia,
      imageAlt: "Jason dhe Lucia në materialet zyrtare të GTA VI",
      description:
        "Lucia Caminos është protagonistja tjetër kryesore. Ajo është rritur në Liberty City dhe ka kaluar kohë në burgun e Leonida-s. Pas lirimit, dëshiron të ndërtojë një jetë më të mirë për veten dhe familjen e saj. Marrëdhënia dhe bashkëpunimi me Jason janë në qendër të historisë.",
      details: [
        "Emri: Lucia Caminos",
        "Roli: Protagoniste kryesore",
        "Ka lidhje familjare me Liberty City",
        "Ka qenë e burgosur në Leonida Penitentiary",
        "Historia e saj lidhet ngushtë me Jason Duval",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Personazhet",
      sourceUrl: `${ROCKSTAR}/only-in-leonida`,
      imageCredit: "Rockstar Games",
    },
    {
      id: "cal-hampton",
      title: "Cal Hampton",
      category: "characters",
      subtitle: "Mik i Jason",
      image: IMAGES.cal,
      imageAlt: "Cal Hampton — artwork zyrtar",
      description:
        "Cal Hampton është mik i Jason dhe njihet për natyrën e tij dyshuese dhe interesimin për teoritë e internetit. Ai preferon një jetë më të qetë dhe është pjesë e rrethit të personazheve që lidhen me Jason.",
      details: [
        "Emri: Cal Hampton",
        "Roli: Personazh dytësor",
        "Lidhja: Mik i Jason",
        "Karakteristikë: Dyshues dhe i interesuar për teori online",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Personazhet",
      sourceUrl: `${ROCKSTAR}/only-in-leonida`,
      imageCredit: "Rockstar Games",
    },
    {
      id: "boobie-ike",
      title: "Boobie Ike",
      category: "characters",
      subtitle: "Biznesmen në Vice City",
      image: IMAGES.boobie,
      imageAlt: "Boobie Ike — artwork zyrtar",
      description:
        "Boobie Ike është një figurë e njohur në Vice City. Ai ka ndërtuar një biznes që përfshin pasuri të paluajtshme, argëtim dhe një studio regjistrimi. Një nga marrëdhëniet e tij të rëndësishme është partneriteti me Dre'Quan Priest.",
      details: [
        "Emri: Boobie Ike",
        "Roli: Personazh dytësor",
        "Vendndodhja: Vice City",
        "Fusha: Biznes dhe argëtim",
        "Partneriteti: Dre'Quan Priest dhe Only Raw Records",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Personazhet",
      sourceUrl: `${ROCKSTAR}/only-in-leonida`,
      imageCredit: "Rockstar Games",
    },
    {
      id: "drequan-priest",
      title: "Dre'Quan Priest",
      category: "characters",
      subtitle: "Sipërmarrës i muzikës",
      image: IMAGES.drequan,
      imageAlt: "Dre'Quan Priest — artwork zyrtar",
      description:
        "Dre'Quan Priest është një sipërmarrës i ri i muzikës, i cili synon të zgjerojë ndikimin e tij në skenën muzikore të Vice City. Ai lidhet me label-in Only Raw Records dhe me Boobie Ike.",
      details: [
        "Emri: Dre'Quan Priest",
        "Roli: Personazh dytësor",
        "Fusha: Muzikë dhe industrinë e argëtimit",
        "Label: Only Raw Records",
        "Ka nënshkruar me grupin Real Dimez",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Personazhet",
      sourceUrl: `${ROCKSTAR}/only-in-leonida`,
      imageCredit: "Rockstar Games",
    },
    {
      id: "real-dimez",
      title: "Real Dimez",
      category: "characters",
      subtitle: "Dyshja muzikore",
      image: IMAGES.realDimez,
      imageAlt: "Real Dimez — artwork zyrtar",
      description:
        "Real Dimez është një dyshe muzikore e përbërë nga Bae-Luxe dhe Roxy. Ato janë shoqe që nga shkolla e mesme dhe synojnë të arrijnë sukses në muzikë përmes këngëve dhe pranisë së tyre në rrjetet sociale.",
      details: [
        "Emri i grupit: Real Dimez",
        "Anëtaret: Bae-Luxe dhe Roxy",
        "Roli: Dyshe muzikore",
        "Label: Only Raw Records",
        "Kanë bashkëpunuar më parë me reperin lokal DWNPLY",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Personazhet",
      sourceUrl: `${ROCKSTAR}/only-in-leonida`,
      imageCredit: "Rockstar Games",
    },
    {
      id: "raul-bautista",
      title: "Raul Bautista",
      category: "characters",
      subtitle: "Personazh dytësor",
      image: IMAGES.raul,
      imageAlt: "Raul Bautista — artwork zyrtar",
      description:
        "Raul Bautista përshkruhet nga Rockstar si një personazh me përvojë, vetëbesim dhe aftësi për të lexuar situata të vështira. Ai kërkon njerëz të gatshëm të marrin pjesë në planet e tij dhe sjell tension në historinë e lojës.",
      details: [
        "Emri: Raul Bautista",
        "Roli: Personazh dytësor",
        "Karakteristika: Vetëbesim dhe përvojë",
        "Lidhja: Ngjarjet kryesore të historisë së Leonida-s",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Personazhet",
      sourceUrl: `${ROCKSTAR}/only-in-leonida`,
      imageCredit: "Rockstar Games",
    },
    {
      id: "brian-heder",
      title: "Brian Heder",
      category: "characters",
      subtitle: "Banor i Leonida Keys",
      image: IMAGES.brian,
      imageAlt: "Brian Heder — artwork zyrtar",
      description:
        "Brian Heder është një personazh i lidhur me jetën bregdetare të Leonida Keys. Ai zotëron një kantier varkash dhe i lejon Jason të qëndrojë në një nga pronat e tij, në këmbim të ndihmës me punët lokale.",
      details: [
        "Emri: Brian Heder",
        "Roli: Personazh dytësor",
        "Vendndodhja: Leonida Keys",
        "Biznesi: Kantier varkash",
        "Lidhja: Jason Duval",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Personazhet",
      sourceUrl: `${ROCKSTAR}/only-in-leonida`,
      imageCredit: "Rockstar Games",
    },
  ],

  locations: [
    {
      id: "leonida",
      title: "Leonida",
      category: "locations",
      subtitle: "Shteti imagjinar",
      image: IMAGES.viceCity,
      imageAlt: "Pamje zyrtare nga bota e Leonida-s",
      description:
        "Leonida është shteti imagjinar ku zhvillohet Grand Theft Auto VI. Bota e lojës përfshin qytete, zona bregdetare, ishuj, zona rurale dhe hapësira natyrore. Vice City është një nga qendrat kryesore të saj.",
      details: [
        "Emri: Leonida",
        "Lloji: Shtet imagjinar",
        "Përfshin Vice City dhe rajone të tjera",
        "Inspirimi i përgjithshëm: Florida dhe jugu i SHBA-së",
        "Burimi i emrit dhe rajoneve: materialet zyrtare të Rockstar",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Only in Leonida",
      sourceUrl: `${ROCKSTAR}/only-in-leonida`,
      imageCredit: "Rockstar Games",
    },
    {
      id: "vice-city",
      title: "Vice City",
      category: "locations",
      subtitle: "Qyteti kryesor",
      image: IMAGES.viceCity,
      imageAlt: "Kartolinë zyrtare e Vice City",
      description:
        "Vice City është qyteti i njohur me rrugë të ndriçuara nga neonët, ndërtesa të larta, plazhe dhe jetë urbane. Rockstar e paraqet si një qendër të rëndësishme të botës së GTA VI.",
      details: [
        "Rajoni: Leonida",
        "Lloji: Qytet",
        "Elemente vizuale: Neon, plazhe, ndërtesa urbane dhe rrugë të ngarkuara",
        "Është një nga zonat kryesore të promovuara nga Rockstar",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Artwork & Wallpapers",
      sourceUrl: ARTWORK,
      imageCredit: "Rockstar Games",
    },
    {
      id: "leonida-keys",
      title: "Leonida Keys",
      category: "locations",
      subtitle: "Ishujt dhe bregdeti",
      image: IMAGES.keys,
      imageAlt: "Kartolinë zyrtare e Leonida Keys",
      description:
        "Leonida Keys është rajon ishullor dhe bregdetar i Leonida-s. Materialet zyrtare tregojnë ujëra, ishuj, porte të vogla dhe një atmosferë të lidhur me jetën pranë detit.",
      details: [
        "Rajoni: Leonida",
        "Lloji: Zonë ishullore dhe bregdetare",
        "Personazhe të lidhur: Jason Duval dhe Brian Heder",
        "Elemente të paraqitura: Ujëra, varka dhe prona pranë bregdetit",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Artwork & Wallpapers",
      sourceUrl: ARTWORK,
      imageCredit: "Rockstar Games",
    },
    {
      id: "port-gellhorn",
      title: "Port Gellhorn",
      category: "locations",
      subtitle: "Qytet bregdetar",
      image: IMAGES.portGellhorn,
      imageAlt: "Kartolinë zyrtare e Port Gellhorn",
      description:
        "Port Gellhorn është një nga zonat e emërtuara zyrtarisht në Leonida. Rockstar e ka paraqitur përmes materialeve vizuale të veçanta, duke e përfshirë në hartën më të gjerë të lojës.",
      details: [
        "Rajoni: Leonida",
        "Lloji: Zonë urbane/bregdetare",
        "Statusi: Emër i konfirmuar në materialet zyrtare",
        "Detajet e plota të hartës nuk janë publikuar në këtë databazë",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Artwork & Wallpapers",
      sourceUrl: ARTWORK,
      imageCredit: "Rockstar Games",
    },
    {
      id: "ambrosia",
      title: "Ambrosia",
      category: "locations",
      subtitle: "Rajon i Leonida-s",
      image: IMAGES.ambrosia,
      imageAlt: "Kartolinë zyrtare e Ambrosia",
      description:
        "Ambrosia është një nga rajonet e emërtuara të Leonida-s. Ajo paraqitet në koleksionin zyrtar të kartolinave dhe pamjeve të GTA VI.",
      details: [
        "Rajoni: Leonida",
        "Lloji: Zonë e veçantë e hartës",
        "Emri është konfirmuar nga Rockstar",
        "Përshkrimi i plotë i zonës mbetet për t'u zgjeruar me materiale zyrtare",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Artwork & Wallpapers",
      sourceUrl: ARTWORK,
      imageCredit: "Rockstar Games",
    },
    {
      id: "grassrivers",
      title: "Grassrivers",
      category: "locations",
      subtitle: "Rajon me ligatina",
      image: IMAGES.grassrivers,
      imageAlt: "Kartolinë zyrtare e Grassrivers",
      description:
        "Grassrivers është një rajon i Leonida-s i paraqitur në materialet zyrtare. Pamjet e publikuara tregojnë një ambient me ujëra, bimësi dhe zona natyrore.",
      details: [
        "Rajoni: Leonida",
        "Lloji: Zonë natyrore dhe ligatinore",
        "Elemente vizuale: Ujëra dhe bimësi",
        "Emri është konfirmuar në faqen zyrtare të lojës",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Artwork & Wallpapers",
      sourceUrl: ARTWORK,
      imageCredit: "Rockstar Games",
    },
    {
      id: "mount-kalaga",
      title: "Mount Kalaga National Park",
      category: "locations",
      subtitle: "Park kombëtar",
      image: IMAGES.mountKalaga,
      imageAlt: "Kartolinë zyrtare e Mount Kalaga National Park",
      description:
        "Mount Kalaga National Park është një zonë natyrore e emërtuar në materialet zyrtare të GTA VI. Emri tregon se bëhet fjalë për një park kombëtar brenda shtetit imagjinar Leonida.",
      details: [
        "Rajoni: Leonida",
        "Lloji: Park kombëtar",
        "Emri është konfirmuar nga Rockstar",
        "Detajet e aktiviteteve dhe hartës nuk janë publikuar plotësisht",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Artwork & Wallpapers",
      sourceUrl: ARTWORK,
      imageCredit: "Rockstar Games",
    },
  ],

  vehicles: [
    {
      id: "grotti-cheetah-95",
      title: "’95 Grotti Cheetah",
      category: "vehicles",
      subtitle: "Automjet sportiv",
      image: IMAGES.grottiCheetah,
      imageAlt: "’95 Grotti Cheetah në materialet zyrtare",
      description:
        "’95 Grotti Cheetah është një automjet i emërtuar në materialet zyrtare të edicionit të lojës. Emri dhe pamja e tij shfaqen në galerinë zyrtare të Rockstar.",
      details: [
        "Prodhuesi në lojë: Grotti",
        "Emri: Cheetah",
        "Viti në emërtim: 1995",
        "Kategoria e përafërt: Automjet sportiv",
        "Statistikat dhe performanca nuk janë konfirmuar këtu",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Media Gallery",
      sourceUrl: ARTWORK,
      imageCredit: "Rockstar Games",
    },
    {
      id: "dinka-enduro",
      title: "Dinka Enduro",
      category: "vehicles",
      subtitle: "Motoçikletë",
      image: IMAGES.dinkaEnduro,
      imageAlt: "Dinka Enduro në materialet zyrtare",
      description:
        "Dinka Enduro është një motoçikletë e identifikuar në galerinë zyrtare të materialeve të GTA VI.",
      details: [
        "Prodhuesi në lojë: Dinka",
        "Modeli: Enduro",
        "Lloji: Motoçikletë",
        "Statistikat e shpejtësisë dhe kontrollit nuk janë publikuar në këtë databazë",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Media Gallery",
      sourceUrl: ARTWORK,
      imageCredit: "Rockstar Games",
    },
    {
      id: "crest-kayak",
      title: "Crest Kayak",
      category: "vehicles",
      subtitle: "Mjet ujor",
      image: IMAGES.crestKayak,
      imageAlt: "Crest Kayak në materialet zyrtare",
      description:
        "Crest Kayak është një mjet ujor i paraqitur në galerinë zyrtare të Rockstar. Ai është pjesë e materialeve vizuale të lidhura me përmbajtjen e edicionit të lojës.",
      details: [
        "Emri: Crest Kayak",
        "Lloji: Kajak",
        "Kategoria: Mjet ujor",
        "Detajet e kontrollit dhe përdorimit në lojë nuk janë publikuar këtu",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Media Gallery",
      sourceUrl: ARTWORK,
      imageCredit: "Rockstar Games",
    },
    {
      id: "vapid-ganado-retro",
      title: "Vapid Ganado Retro Build",
      category: "vehicles",
      subtitle: "Automjet retro",
      image: IMAGES.ganadoRetro,
      imageAlt: "Vapid Ganado Retro Build në materialet zyrtare",
      description:
        "Vapid Ganado Retro Build është një automjet i emërtuar në galerinë zyrtare të materialeve të GTA VI.",
      details: [
        "Prodhuesi në lojë: Vapid",
        "Modeli: Ganado Retro Build",
        "Kategoria: Automjet",
        "Performanca dhe modifikimet e disponueshme nuk janë konfirmuar këtu",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Media Gallery",
      sourceUrl: ARTWORK,
      imageCredit: "Rockstar Games",
    },
    {
      id: "vapid-dominator-buggy",
      title: "’67 Vapid Dominator Buggy",
      category: "vehicles",
      subtitle: "Buggy",
      image: IMAGES.dominatorBuggy,
      imageAlt: "Vapid Dominator Buggy në materialet zyrtare",
      description:
        "’67 Vapid Dominator Buggy është një automjet i emërtuar në galerinë zyrtare të Rockstar.",
      details: [
        "Prodhuesi në lojë: Vapid",
        "Modeli: Dominator Buggy",
        "Viti në emërtim: 1967",
        "Kategoria: Buggy",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Media Gallery",
      sourceUrl: ARTWORK,
      imageCredit: "Rockstar Games",
    },
    {
      id: "vapid-stanier-55",
      title: "’55 Vapid Stanier",
      category: "vehicles",
      subtitle: "Automjet klasik",
      image: IMAGES.vapidStanier,
      imageAlt: "Vapid Stanier në materialet zyrtare",
      description:
        "’55 Vapid Stanier është një automjet klasik i paraqitur në materialet zyrtare të Vintage Vice City Pack.",
      details: [
        "Prodhuesi në lojë: Vapid",
        "Modeli: Stanier",
        "Viti në emërtim: 1955",
        "Kategoria: Automjet klasik",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Media Gallery",
      sourceUrl: ARTWORK,
      imageCredit: "Rockstar Games",
    },
  ],

  missions: [
    {
      id: "main-story",
      title: "Historia kryesore",
      category: "missions",
      subtitle: "Jason dhe Lucia",
      image: IMAGES.jasonLucia,
      imageAlt: "Jason dhe Lucia në materialet zyrtare",
      description:
        "Historia e GTA VI ndjek Jason Duval dhe Lucia Caminos. Sipas përshkrimit zyrtar, një plan që duhej të ishte i thjeshtë shkon keq dhe i përfshin në një konspiracion kriminal që shtrihet në të gjithë shtetin Leonida.",
      details: [
        "Protagonistët: Jason Duval dhe Lucia Caminos",
        "Vendndodhja: Shteti Leonida",
        "Tema kryesore: Besimi, bashkëpunimi dhe mbijetesa",
        "Përshkrimi zyrtar nuk përmban listë të plotë misionesh",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — GTA VI",
      sourceUrl: ROCKSTAR,
      imageCredit: "Rockstar Games",
    },
    {
      id: "mission-list-status",
      title: "Lista e misioneve",
      category: "missions",
      subtitle: "Statusi i informacionit",
      description:
        "Një listë e plotë dhe e verifikuar e emrave të misioneve nuk është përfshirë në këtë version të databazës. Emrat e misioneve nuk do të shpiken ose të merren nga thashethemet pa burime.",
      details: [
        "Misionet kryesore: Lista e plotë nuk është dokumentuar këtu",
        "Misionet dytësore: Kërkojnë burime të veçanta",
        "Walkthrough: Do të shtohet pasi të ketë informacion të verifikueshëm",
        "Kjo faqe do të përditësohet kur të ketë burime të besueshme",
      ],
      status: "unverified",
      sourceName: "Rockstar Games",
      sourceUrl: ROCKSTAR,
    },
  ],

  activities: [
    {
      id: "music-radio",
      title: "Muzika dhe radiot",
      category: "activities",
      subtitle: "Soundtrack dhe radio në lojë",
      description:
        "Rockstar ka publikuar një seksion të veçantë për muzikën, radion në lojë dhe soundtrack-un zyrtar të GTA VI.",
      details: [
        "Rockstar ka konfirmuar përmbajtje të lidhur me muzikën dhe radion",
        "Faqja zyrtare përmban informacion për stacionet radiofonike",
        "Lista e plotë e këngëve dhe stacioneve duhet kontrolluar në burimin zyrtar",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Music",
      sourceUrl: `${ROCKSTAR}/music`,
      imageCredit: "Rockstar Games",
    },
    {
      id: "vehicle-customisation",
      title: "Personalizimi i automjeteve",
      category: "activities",
      subtitle: "Mod shops në materialet zyrtare",
      description:
        "Galeria zyrtare përmban pamje të disa dyqaneve të modifikimit të automjeteve. Kjo konfirmon se këto ambiente janë pjesë e materialeve vizuale të lojës, por detajet e plota të mekanikës së personalizimit duhen verifikuar.",
      details: [
        "Rideout Customs Mod Shop shfaqet në galerinë zyrtare",
        "One-Eyed Willie’s Mod Shop shfaqet në galerinë zyrtare",
        "Lista e plotë e pjesëve dhe opsioneve nuk është dokumentuar këtu",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Media Gallery",
      sourceUrl: ARTWORK,
    },
    {
      id: "clothing-personalisation",
      title: "Veshjet dhe pamja",
      category: "activities",
      subtitle: "Dyqane dhe stil",
      description:
        "Materialet zyrtare paraqesin dyqane veshjesh dhe ambiente të lidhura me kujdesin personal. Këto pamje tregojnë një pjesë të botës komerciale të Leonida-s.",
      details: [
        "Stock 305 Clothing Store shfaqet në galerinë zyrtare",
        "Goodtime Gear shfaqet në galerinë zyrtare",
        "Sara’s Unisex Salon shfaqet në galerinë zyrtare",
        "Opsionet e plota të personalizimit duhen dokumentuar veçmas",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Media Gallery",
      sourceUrl: ARTWORK,
    },
    {
      id: "water-exploration",
      title: "Eksplorimi ujor",
      category: "activities",
      subtitle: "Mjediset ujore të Leonida-s",
      description:
        "Materialet zyrtare përfshijnë një kajak dhe mjete të tjera ujore. Kjo tregon se mjediset ujore janë pjesë e paraqitjes së botës së lojës.",
      details: [
        "Crest Kayak është emërtuar në galerinë zyrtare",
        "Leonida përfshin rajone bregdetare dhe ishullore",
        "Mekanika e plotë e eksplorimit ujor nuk është përshkruar këtu",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Media Gallery",
      sourceUrl: ARTWORK,
    },
  ],

  gameplay: [
    {
      id: "dual-protagonists",
      title: "Dy protagonistë",
      category: "gameplay",
      description:
        "GTA VI ka dy protagonistë kryesorë: Jason Duval dhe Lucia Caminos. Historia zyrtare thekson marrëdhënien dhe bashkëpunimin mes tyre.",
      details: [
        "Jason Duval",
        "Lucia Caminos",
        "Historia e tyre zhvillohet në Leonida",
        "Detajet e plota të ndërrimit mes personazheve duhen verifikuar në lojë",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games",
      sourceUrl: ROCKSTAR,
    },
    {
      id: "game-world",
      title: "Bota e Leonida-s",
      category: "gameplay",
      description:
        "Bota e GTA VI përfshin qytete, ishuj, zona bregdetare, rajone natyrore dhe hapësira të tjera të emërtuara nga Rockstar.",
      details: [
        "Vice City",
        "Leonida Keys",
        "Port Gellhorn",
        "Ambrosia",
        "Grassrivers",
        "Mount Kalaga National Park",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Only in Leonida",
      sourceUrl: `${ROCKSTAR}/only-in-leonida`,
    },
    {
      id: "in-game-footage",
      title: "Pamje të kapura nga loja",
      category: "gameplay",
      description:
        "Rockstar ka deklaruar se Trailer 2 është kapur tërësisht nga loja në PlayStation 5 dhe përmban pamje gameplay dhe skena kinematografike.",
      details: [
        "Burimi: Trailer 2",
        "Platforma e regjistrimit: PlayStation 5",
        "Përmbajtja: Gameplay dhe cutscenes",
        "Trailer-i nuk zëvendëson dokumentimin e plotë të mekanikave",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games — Trailer 2",
      sourceUrl: "https://www.youtube.com/watch?v=VQRLujxTm3c",
    },
    {
      id: "platforms",
      title: "Platformat",
      category: "gameplay",
      description:
        "Faqja zyrtare e Rockstar liston PlayStation 5 dhe Xbox Series X|S si platformat për Grand Theft Auto VI.",
      details: [
        "PlayStation 5",
        "Xbox Series X",
        "Xbox Series S",
        "PC nuk është i listuar në faqen zyrtare të përdorur për këtë informacion",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games",
      sourceUrl: ROCKSTAR,
    },
    {
      id: "release-date",
      title: "Data e publikimit",
      category: "gameplay",
      description:
        "Rockstar Games ka publikuar datën 19 nëntor 2026 për Grand Theft Auto VI.",
      details: [
        "Data: 19 nëntor 2026",
        "Botuesi: Rockstar Games",
        "Zhvilluesi: Rockstar Games",
        "Platformat e listuara: PS5 dhe Xbox Series X|S",
      ],
      status: "confirmed",
      sourceName: "Rockstar Games",
      sourceUrl: ROCKSTAR,
    },
  ],

  news: [
    {
      id: "launch-gallery-november-2026",
      title: "Rockstar publikon Launch Gallery",
      category: "news",
      subtitle: "5 nëntor 2026",
      description:
        "Rockstar publikoi një koleksion të ri imazhesh nga Vice City dhe rajonet e tjera të Leonida-s përpara publikimit të lojës.",
      details: [
        "Publikuar më: 5 nëntor 2026",
        "Përmbajtja: Pamje nga Vice City dhe më gjerë",
        "Galeria është në faqen zyrtare të GTA VI",
      ],
      status: "confirmed",
      sourceName: "Rockstar Newswire",
      sourceUrl:
        "https://www.rockstargames.com/newswire/article/39ak81277255o9/explore-the-grand-theft-auto-vi-launch-gallery",
    },
    {
      id: "preload-november-2026",
      title: "Nis periudha e preload",
      category: "news",
      subtitle: "10 nëntor 2026",
      description:
        "Rockstar publikoi njoftimin për nisjen e preload të Grand Theft Auto VI.",
      details: [
        "Njoftimi zyrtar: 10 nëntor 2026",
        "Detajet varen nga platforma dhe versioni i blerë",
        "Kontrollo dyqanin zyrtar të platformës për informacionin e llogarisë tënde",
      ],
      status: "confirmed",
      sourceName: "Rockstar Newswire",
      sourceUrl: ROCKSTAR,
    },
    {
      id: "extended-look-august-2026",
      title: "An Extended Look",
      category: "news",
      subtitle: "27 gusht 2026",
      description:
        "Rockstar publikoi një material të zgjeruar video të kapur nga loja, duke treguar më shumë nga bota dhe përmbajtja e GTA VI.",
      details: [
        "Publikuar më: 27 gusht 2026",
        "Pamjet janë kapur nga loja në PlayStation 5",
        "Materiali është publikuar në kanalet zyrtare të Rockstar",
      ],
      status: "confirmed",
      sourceName: "Rockstar Newswire",
      sourceUrl:
        "https://www.rockstargames.com/newswire/article/4k138k8okkk483/grand-theft-auto-vi-an-extended-look-now-playing",
    },
  ],

  cheats: [
    {
      id: "money-250000",
      title: "$250,000",
      category: "cheats",
      group: "Lojtari",
      description: "Komandë e raportuar për shtimin e parave në lojë.",
      effect: "Shton 250,000 dollarë sipas raportimit.",
      input: ["UP", "RIGHT", "DOWN", "LEFT", "UP", "LEFT", "DOWN", "RIGHT"],
      platform: ["PS5"],
      activation:
        "Sipas artikullit: hap telefonin me D-pad ↑, mbaj L1 dhe shtyp R1, pastaj fut kombinimin.",
      unlock: "Kushti i zhbllokimit nuk është konfirmuar.",
      status: "reported",
      sourceName: "PC Gamer",
      sourceUrl:
        "https://www.pcgamer.com/games/grand-theft-auto/gta-6-cheats-list/",
      sourceDate: "18 nëntor 2026",
    },
    {
      id: "raise-heat",
      title: "Raise Heat Level",
      category: "cheats",
      group: "Lojtari",
      description: "Komandë e raportuar për ndryshimin e nivelit Heat.",
      effect: "Rrit nivelin Heat sipas raportimit.",
      input: ["LEFT", "DOWN", "RIGHT", "DOWN", "UP", "DOWN", "UP"],
      platform: ["PS5"],
      activation:
        "Sipas artikullit: hap telefonin me D-pad ↑, mbaj L1 dhe shtyp R1, pastaj fut kombinimin.",
      unlock: "Kushti i zhbllokimit nuk është konfirmuar.",
      status: "reported",
      sourceName: "PC Gamer",
      sourceUrl:
        "https://www.pcgamer.com/games/grand-theft-auto/gta-6-cheats-list/",
      sourceDate: "18 nëntor 2026",
    },
    {
      id: "unlimited-focus",
      title: "Unlimited Focus",
      category: "cheats",
      group: "Lojtari",
      description: "Komandë e raportuar për Focus të pakufizuar.",
      effect: "Focus nuk shteron sipas raportimit.",
      input: [
        "DOWN",
        "UP",
        "UP",
        "DOWN",
        "UP",
        "DOWN",
        "UP",
        "DOWN",
        "UP",
        "RIGHT",
      ],
      platform: ["PS5"],
      activation:
        "Sipas artikullit: hap telefonin me D-pad ↑, mbaj L1 dhe shtyp R1, pastaj fut kombinimin.",
      unlock: "Kushti i zhbllokimit nuk është konfirmuar.",
      status: "reported",
      sourceName: "PC Gamer",
      sourceUrl:
        "https://www.pcgamer.com/games/grand-theft-auto/gta-6-cheats-list/",
      sourceDate: "18 nëntor 2026",
    },
    {
      id: "cycle-weather",
      title: "Cycle Weather",
      category: "cheats",
      group: "Mjedisi",
      description: "Komandë e raportuar për ndryshimin e motit.",
      effect: "Ndryshon kushtet e motit sipas raportimit.",
      input: ["DOWN", "RIGHT", "UP", "DOWN", "RIGHT", "UP", "RIGHT"],
      platform: ["PS5"],
      activation:
        "Sipas artikullit: hap telefonin me D-pad ↑, mbaj L1 dhe shtyp R1, pastaj fut kombinimin.",
      unlock: "Kushti i zhbllokimit nuk është konfirmuar.",
      status: "reported",
      sourceName: "PC Gamer",
      sourceUrl:
        "https://www.pcgamer.com/games/grand-theft-auto/gta-6-cheats-list/",
      sourceDate: "18 nëntor 2026",
    },
    {
      id: "dollhouse",
      title: "Dollhouse",
      category: "cheats",
      group: "Efektet vizuale",
      description: "Komandë e raportuar për një efekt vizual.",
      effect: "Aplikon një ndryshim vizual në ekran sipas raportimit.",
      input: [
        "DOWN",
        "DOWN",
        "UP",
        "RIGHT",
        "RIGHT",
        "UP",
        "LEFT",
        "LEFT",
        "DOWN",
        "RIGHT",
      ],
      platform: ["PS5"],
      activation:
        "Sipas artikullit: hap telefonin me D-pad ↑, mbaj L1 dhe shtyp R1, pastaj fut kombinimin.",
      unlock: "Kushti i zhbllokimit nuk është konfirmuar.",
      status: "reported",
      sourceName: "PC Gamer",
      sourceUrl:
        "https://www.pcgamer.com/games/grand-theft-auto/gta-6-cheats-list/",
      sourceDate: "18 nëntor 2026",
    },
  ],
};

window.GTAVI_FAQ = [
  {
    question: "A është GTA VI Shqip faqe zyrtare e Rockstar Games?",
    answer:
      "Jo. Është projekt i pavarur në gjuhën shqipe dhe nuk është i lidhur me Rockstar Games.",
  },
  {
    question: "Cilat platforma janë konfirmuar?",
    answer:
      "Faqja zyrtare e Rockstar liston PlayStation 5 dhe Xbox Series X|S.",
  },
  {
    question: "Kur publikohet GTA VI?",
    answer: "Data e publikuar nga Rockstar Games është 19 nëntor 2026.",
  },
  {
    question: "Çfarë do të thotë statusi I konfirmuar?",
    answer:
      "Informacioni është publikuar në materialet zyrtare të Rockstar Games.",
  },
  {
    question: "Çfarë do të thotë statusi I raportuar?",
    answer:
      "Informacioni është publikuar nga një burim i palës së tretë, por nuk është verifikuar në mënyrë të pavarur nga kjo faqe.",
  },
  {
    question: "A janë të gjitha cheat codes të verifikuara?",
    answer:
      "Jo. Komandat në këtë version janë shënuar si të raportuara. Duhet testim real në lojë për t'i shënuar si të verifikuara.",
  },
  {
    question: "Pse nuk ka ende listë të plotë misionesh?",
    answer:
      "Nuk do të publikojmë emra misionesh ose walkthrough të sajuara. Kjo kategori zgjerohet kur ka burime të besueshme.",
  },
  {
    question: "A ruhen imazhet në serverin e kësaj faqeje?",
    answer:
      "Në këtë version, imazhet ngarkohen nga serverët e Rockstar Games. Nëse URL-të ndryshojnë, imazhet mund të mos shfaqen.",
  },
];

window.GTAVI_SOURCES = [
  {
    name: "Rockstar Games — Faqja zyrtare GTA VI",
    url: ROCKSTAR,
    type: "Zyrtar",
  },
  {
    name: "Rockstar Games — Screenshots",
    url: SCREENSHOTS,
    type: "Zyrtar",
  },
  {
    name: "Rockstar Games — Artwork & Wallpapers",
    url: ARTWORK,
    type: "Zyrtar",
  },
  {
    name: "Rockstar Games — Only in Leonida",
    url: `${ROCKSTAR}/only-in-leonida`,
    type: "Zyrtar",
  },
  {
    name: "Rockstar Games — Newswire",
    url: "https://www.rockstargames.com/newswire",
    type: "Zyrtar",
  },
  {
    name: "PC Gamer — GTA VI cheats",
    url: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-cheats-list/",
    type: "Media / raportim",
  },
];
