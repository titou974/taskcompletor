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
      title: "",
      sections: ""
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
      title: "",
      sections: ""
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
      title: "",
      sections: ""
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
      title: "",
      sections: ""
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
