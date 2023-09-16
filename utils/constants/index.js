export const navLinks = [
  {
    id: "generator",
    title: "Générer un document",
  },
  {
    id: "about",
    title: "À Propos",
  },
  {
    id: "faq",
    title: "FAQ",
  },
];

export const docType = [
  {
    id: "rapport",
    title: "Rapport",
    description: "Rapport d'environ 2 pages sur un sujet quelconque.",
    benefits: [
      [
        "Faire un résumé rapide sur un sujet donné",
        "recap fast",

      ],
      [
        "Obtenir un plan pour un rapport plus détaillé",
        "detailed report",
      ],
    ],
    generation_time: "1 minute",
    example: {
      title: "Rapport sur le musée de l'art et de l'espace",
      sections: [
        ["", "1. Introduction", "Le Musée de l'Art et de l'Espace est un établissement culturel unique qui combine l'art contemporain avec des expositions sur l'exploration spatiale. Situé au cœur de la ville, ce musée offre une expérience immersive et éducative pour les visiteurs de tous âges. Ce rapport vise à présenter les principales caractéristiques de ce musée et à souligner son importance culturelle."],
        ["", "2. Les expositions d'art", "Le Musée de l'Art et de l'Espace abrite une collection d'œuvres d'art contemporain de renommée mondiale. Ces expositions sont soigneusement sélectionnées pour représenter la diversité des mouvements artistiques actuels. Les visiteurs peuvent admirer des peintures, des sculptures, des installations et des photographies, créées par des artistes émergents et établis. Les expositions sont régulièrement renouvelées, offrant ainsi aux visiteurs une expérience artistique dynamique et enrichissante."],
        ["", "3. Les expositions sur l'exploration spatiale", "En plus des expositions d'art, le musée propose également des expositions sur l'exploration spatiale. Ces expositions offrent aux visiteurs l'opportunité de découvrir l'histoire de l'exploration spatiale, les avancées scientifiques et les projets futurs. Des modèles de fusées, des répliques de satellites et des artefacts uniques sont exposés, permettant aux visiteurs de se plonger dans le monde fascinant de l'espace. Des présentations audiovisuelles et des visites guidées sont également proposées pour approfondir les connaissances des visiteurs sur ce sujet captivant."],
        ["", "4. Les activités et événements spéciaux", "Le Musée de l'Art et de l'Espace propose une variété d'activités et d'événements spéciaux pour enrichir l'expérience des visiteurs. Des ateliers artistiques, des conférences, des projections de films et des rencontres avec des artistes sont régulièrement organisés. De plus, le musée accueille des expositions temporaires mettant en avant des artistes et des projets innovants. Ces activités et événements spéciaux contribuent à créer une atmosphère dynamique et stimulante au sein du musée."],
        ["", "5. L'importance culturelle du musée", "Le Musée de l'Art et de l'Espace joue un rôle essentiel dans la promotion de l'art contemporain et de l'exploration spatiale. Il offre aux visiteurs une occasion unique de découvrir et d'apprécier ces deux domaines importants de la culture moderne. En encourageant le dialogue entre l'art et la science, le musée favorise la compréhension et l'appréciation de ces disciplines auprès du public. De plus, il contribue à la préservation et à la diffusion du patrimoine culturel en exposant des œuvres d'art et des artefacts liés à l'exploration spatiale."],
        ["", "6. Conclusion", "En conclusion, le Musée de l'Art et de l'Espace offre une expérience culturelle riche et unique en combinant l'art contemporain avec des expositions sur l'exploration spatiale. Grâce à ses expositions d'art diversifiées, ses expositions sur l'exploration spatiale, ses activités et événements spéciaux, ce musée joue un rôle crucial dans la promotion de la culture et de la connaissance. Il mérite d'être reconnu comme un lieu incontournable pour les amateurs d'art et les passionnés d'exploration spatiale."]
      ]
    }
  },
  {
    id: "message",
    title: "Message",
    description: "Message bref ou long, basé sur une émotion",
    benefits: [
      [
        "Générer un message pertinent rapidement",
        "accurate",
      ],
      [
        "Sélectionner la taille qui convient",
        "covenance",
      ],
      [
        "Sélectionner la langue",
        "selectlanguage",
      ]],
    generation_time: "30 secondes",
    example: {
      title: "Rapport sur le musée de l'art et de l'espace en 1970",
      sections: [["", ""], ["", ""], ["", ""]]
    }
  },
  {
    id: "email",
    title: "Email",
    description: "Générer un email professionel ou personnel en quelques secondes",
    benefits: [
      [
        "Pratique pour les mails administratifs (entreprise, école, paperasse)",
        "mailtype",
      ],
      [
        "Mail clair, concis et sans faute",
        "correction",
      ]
    ],
    generation_time: "30 secs",
    example: {
      title: "Rapport sur le musée de l'art et de l'espace en 1970",
      sections: [["", ""], ["", ""], ["", ""]]
    }
  },
  {
    id: "lettre de motivation",
    title: "Lettre de motivation",
    description: "Générer une belle lettre de motivation pour décrocher un job rapidement",
    benefits: [
      [
        "Gain de temps lors de la recherche d'un travail",
        "time efficiency",
      ],
      [
        "Mise en avant du profil basé sur ses compétences et expériences",
        "competences & experiences",
      ]
    ],
    generation_time: "30 secs",
    example: {
      title: "Rapport sur le musée de l'art et de l'espace en 1970",
      sections: [["", ""], ["", ""], ["", ""]]
    }
  },
];

export const langType = [
  {
    id: "formel",
    title: "Formel 📝",
    description: "Le rapport utilise un language soutenu et spécifique au sujet"
  },
  {
    id: "informel",
    title: "Informel 📢",
    description: "Le rapport utilise un language familier et vulgarise le sujet"
  },
];

export const persoType = [
  {
    id: "élève",
    title: "Élève 👩‍🎓",
    description: "Répondez aux questions comme un étudiant",
  },
  {
    id: "professeur",
    title: "Professeur 👨‍🏫",
    description: "Répondez aux questions comme un professeur",
  },
  {
    id: "expert",
    title: "Expert 👨‍💼",
    description: "Répondez aux questions comme un expert",
  },
];

export const emotions = [
  {
    id: "joie",
    title: "Joie 😂",
  },
  {
    id: "gratitude",
    title: "Gratitude 🙏",
  },
  {
    id: "tristesse",
    title: "Tristesse 😥",
  },
  {
    id: "colère",
    title: "Colère 😡",
  },
  {
    id: "inquiétude",
    title: "Inquiétude 😟"
  }
];

export const mailTypeIndex = [
  {
    id: "école",
    title: "École 👩‍🎓",
    description: "Génère un mail pour une école"
  },
  {
    id: "entreprise",
    title: "Entreprise 💼",
    description: "Génère un mail pour une entreprise",
  },
  {
    id: "administratif",
    title: "Administratif 📝",
    description: "Génère un mail pour des démarches administratives"
  },
  {
    id: "personnel",
    title: "Personnel ✌️",
    description: "Génère un mail pour un(e) proche"
  }
];

export const languageIndex = [
  {
    id: "français",
    title: "Français 🇫🇷"
  },
  {
    id: "anglais",
    title: "Anglais 🇬🇧"
  },
  {
    id: "espagnol",
    title: "Espagnol 🇪🇸"
  },
  {
    id: "chinois",
    title: "Chinois 🇨🇳"
  }
];

export const messageLengthIndex = [
  {
    id: "court",
    title: "Court 1️⃣",
    description: "Génère un message bref"
  },
  {
    id: "moyen",
    title: "Moyen 2️⃣",
    description: "Génère un message de taille moyenne"
  },
  {
    id: "long",
    title: "Long 3️⃣",
    description: "Genère un message long"
  }
]
