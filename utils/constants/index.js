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
    id: "présentation",
    title: "Présentation",
    description: "Présentation d'environ 2 pages sur un sujet quelconque.",
    benefits: [
      [
        "Faire un résumé rapide sur un sujet donné",
        "recap fast",

      ],
      [
        "Obtenir un plan pour une présentation plus détaillée",
        "detailed report",
      ],
    ],
    generation_time: "40 secondes",
    example: {
      title: "Rapport sur le musée de l'art et de l'espace",
      sections: [
        ["", "1. Introduction", "Le Musée de l'Art et de l'Espace est un établissement culturel unique qui combine l'art contemporain avec des expositions sur l'exploration spatiale. Situé au cœur de la ville, ce musée offre une expérience immersive et éducative pour les visiteurs de tous âges. Ce rapport vise à présenter les principales caractéristiques de ce musée et à souligner son importance culturelle."],
        ["", "2. Les expositions d'art", "Le Musée de l'Art et de l'Espace abrite une collection d'œuvres d'art contemporain de renommée mondiale. Ces expositions sont soigneusement sélectionnées pour représenter la diversité des mouvements artistiques actuels. Les visiteurs peuvent admirer des peintures, des sculptures, des installations et des photographies, créées par des artistes émergents et établis. Les expositions sont régulièrement renouvelées, offrant ainsi aux visiteurs une expérience artistique dynamique et enrichissante."],
        ["", "3. Les expositions sur l'exploration spatiale", "En plus des expositions d'art, le musée propose également des expositions sur l'exploration spatiale. Ces expositions offrent aux visiteurs l'opportunité de découvrir l'histoire de l'exploration spatiale, les avancées scientifiques et les projets futurs. Des modèles de fusées, des répliques de satellites et des artefacts uniques sont exposés, permettant aux visiteurs de se plonger dans le monde fascinant de l'espace. Des présentations audiovisuelles et des visites guidées sont également proposées pour approfondir les connaissances des visiteurs sur ce sujet captivant."],
        ["", "4. Les activités et événements spéciaux", "Le Musée de l'Art et de l'Espace propose une variété d'activités et d'événements spéciaux pour enrichir l'expérience des visiteurs. Des ateliers artistiques, des conférences, des projections de films et des rencontres avec des artistes sont régulièrement organisés. De plus, le musée accueille des expositions temporaires mettant en avant des artistes et des projets innovants. Ces activités et événements spéciaux contribuent à créer une atmosphère dynamique et stimulante au sein du musée."],
        ["", "5. L'importance culturelle du musée", "Le Musée de l'Art et de l'Espace joue un rôle essentiel dans la promotion de l'art contemporain et de l'exploration spatiale. Il offre aux visiteurs une occasion unique de découvrir et d'apprécier ces deux domaines importants de la culture moderne. En encourageant le dialogue entre l'art et la science, le musée favorise la compréhension et l'appréciation de ces disciplines auprès du public. De plus, il contribue à la préservation et à la diffusion du patrimoine culturel en exposant des œuvres d'art et des artefacts liés à l'exploration spatiale."],
        ["", "6. Conclusion", "En conclusion, le Musée de l'Art et de l'Espace offre une expérience culturelle riche et unique en combinant l'art contemporain avec des expositions sur l'exploration spatiale. Grâce à ses expositions d'art diversifiées, ses expositions sur l'exploration spatiale, ses activités et événements spéciaux, ce musée joue un rôle crucial dans la promotion de la culture et de la connaissance. Il mérite d'être reconnu comme un lieu incontournable pour les amateurs d'art et les passionnés d'exploration spatiale."]
      ],
      length: 6,
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
    generation_time: "15 secondes",
    example: {
      dest: "Mary",
      messageText: "Hey Mary,\nI just wanted to take a moment to thank you for inviting me to your last party. I had such a great time and it meant a lot to me that you thought of me. The atmosphere was amazing, the food was delicious, and the company was fantastic. I truly appreciate your hospitality and the effort you put into making everyone feel welcome. It was definitely a night to remember.\nOnce again, thank you so much for including me. I'm incredibly grateful and I can't wait for the next get-together.\nTake care,\nLucas"
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
    generation_time: "30 secondes",
    example: {
      name: "M. Pablo",
      fullmail: "Asunto: Solicitud de aumento salarial y autorización para fumar en las oficinas de la empresa\nEstimado Sr. Escobar,\nEspero que este correo electrónico le encuentre bien. Me dirijo a usted en calidad de empleado de nuestra empresa para plantearle dos solicitudes importantes.\nEn primer lugar, me gustaría solicitar una revisión salarial y una posible aumento en mi remuneración. He estado desempeñando mis funciones con compromiso y dedicación, y considero que mi contribución ha sido valiosa para el crecimiento y éxito de la empresa. Por lo tanto, me gustaría solicitar una evaluación salarial justa y equitativa de acuerdo con mi desempeño y responsabilidades actuales.\nEn segundo lugar, me gustaría solicitar su consideración para permitir fumar cigarrillos en las oficinas de la empresa. Entiendo que existen restricciones legales y preocupaciones relacionadas con la salud, pero considero que esta medida podría contribuir a un ambiente más relajado y productivo para los fumadores.\nQuedo a la espera de su respuesta y agradezco de antemano su atención a mis solicitudes.\nAtentamente,\nM. Pablo",
      language: "espagnol"
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
    generation_time: "50 secondes",
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
    description: "Utilise un language soutenu et spécifique au sujet"
  },
  {
    id: "informel",
    title: "Informel 📢",
    description: "Utilise un language familier et vulgarise le sujet"
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

export const languageIndexMessage = [
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

export const languageIndexEmail = [
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

export const graduateAnswersList = [
  {
    id: "yes",
    title: "Oui, Je suis diplomé(e) 🎓",
    graduate: true,
  },
  {
    id: "no",
    title: "Non, je suis étudiant 👨‍🎓",
    graduate: false,
  }
]

export const contractNameList = [
  {
    id: "internship",
    title: "Stage 👩‍💼",
  },
  {
    id: "apprenticeship",
    title: "Alternance 📄",
  },
  {
    id: "contract",
    title: "CDD ou CDI 📝",
  }
]


export const abreviations_etudes = [
  "Bac",
  "BTS",
  "DUT",
  "CPGE",
  "L1",
  "L2",
  "L3",
  "LP",
  "M1",
  "M2",
  "MS",
  "MBA",
  "PhD",
  "Ing",
  "DCG"
]

export const domaines_etudes = [
  "Aéronautique",
  "Agriculture",
  "Anthropologie",
  "Architecture",
  "Art",
  "Astrophysique",
  "Biologie",
  "Chimie",
  "Cinéma",
  "Communication",
  "Culinaire",
  "Danse",
  "Dentaire",
  "Design",
  "Développement Durable",
  "Droit",
  "Économie",
  "Éducation",
  "Électronique",
  "Énergétique",
  "Enseignement",
  "Études Internationales",
  "Finance",
  "Génie Civil",
  "Géographie",
  "Gestion",
  "Histoire",
  "Hôtellerie",
  "Ingénierie",
  "Informatique",
  "Journalisme",
  "Kinésithérapie",
  "Langues",
  "Littérature",
  "Logistique",
  "Management",
  "Marketing",
  "Mathématiques",
  "Médecine",
  "Métiers de la Beauté",
  "Mode",
  "Musique",
  "Nutrition",
  "Pharmacie",
  "Philosophie",
  "Physique",
  "Psychologie",
  "Relations Internationales",
  "Ressources Humaines",
  "Réseaux et Télécommunications",
  "Robotique",
  "Science des Matériaux",
  "Science Politique",
  "Sciences Humaines",
  "Sciences de l'Éducation",
  "Sciences de l'Environnement",
  "Sciences Sociales",
  "Sécurité",
  "Sociologie",
  "Sport",
  "Théâtre",
  "Tourisme",
  "Traduction",
  "Vétérinaire"
]

export const competences = [
  "A/B Testing",
  "Accessibilité",
  "Adaptabilité",
  "Agilité",
  "Analyse coût-bénéfice",
  "Analyse concurrentielle",
  "Analyse de données",
  "Analyse de la valeur",
  "Analyse de marché",
  "Analyse des besoins clients",
  "Analyse des risques",
  "Analyse financière",
  "Analyse juridique",
  "Analyse prédictive",
  "Analyse rétrospective",
  "Analyse SWOT",
  "Analytics",
  "Anglais professionnel",
  "Argumentation",
  "Assurance qualité",
  "Audit",
  "Audit externe",
  "Audit interne",
  "Automatisation des processus",
  "Benchmarking",
  "Biologie moléculaire",
  "Biotechnologies",
  "Blockchain",
  "Branding personnel",
  "Budget management",
  "Budgétisation",
  "Business development",
  "Cadrage de projet",
  "Chimie analytique",
  "Ciblage",
  "Coaching professionnel",
  "Collaboration internationale",
  "Commerce international",
  "Communication écrite",
  "Communication interne et externe",
  "Communication orale",
  "Community Management",
  "Compliance",
  "Comptabilité",
  "Conception de produit",
  "Conception graphique",
  "Conduite de réunion",
  "Conduite de tests",
  "Conformité réglementaire",
  "Connaissance des API",
  "Connaissance des systèmes de paiement en ligne",
  "Connaissance du protocole HTTP",
  "Conseil juridique",
  "Content Management",
  "Contrôle interne",
  "CRM",
  "Créativité",
  "Création de storyboard",
  "Création de valeur",
  "Création de wireframes",
  "Cybersécurité",
  "Cybersécurité",
  "Data mining",
  "Déploiement continu",
  "Développement backend",
  "Développement de jeux vidéo",
  "Développement de partenariats",
  "Développement de plugins",
  "Développement durable",
  "Développement frontend",
  "Développement mobile",
  "Développement personnel",
  "Développement web",
  "Diplomatie",
  "Design de service",
  "Design Thinking",
  "Droit de l'environnement",
  "Droit de la propriété intellectuelle",
  "Droit des contrats",
  "Droit des sociétés",
  "Droit du travail",
  "Droit fiscal",
  "Droit international",
  "Durabilité",
  "E-commerce",
  "Economie circulaire",
  "Économétrie",
  "Économies d'échelle",
  "Économies de gamme",
  "Écoute active",
  "Édition vidéo",
  "Élaboration de personas",
  "Élaboration de scénarios",
  "Empathie",
  "Entreprenariat",
  "Énergies renouvelables",
  "Esprit critique",
  "Éthique des affaires",
  "Éthique professionnelle",
  "Étude de cas",
  "Évaluation de projets",
  "Événementiel",
  "Expertise sectorielle",
  "Expérimentation",
  "Expérience utilisateur (UX)",
  "Facilitation",
  "Facilitation d'atelier",
  "Finance comportementale",
  "Finance d'entreprise",
  "Flexibilité cognitive",
  "Fiscalité",
  "Forecasting",
  "Formation",
  "Gestion d'équipe",
  "Gestion de backlog",
  "Gestion de base de données",
  "Gestion de communauté",
  "Gestion de conflit",
  "Gestion de contenu web",
  "Gestion de crise",
  "Gestion de l'énergie",
  "Gestion de l'expérience client",
  "Gestion de la chaîne logistique",
  "Gestion de la diversité",
  "Gestion de la performance",
  "Gestion de la qualité",
  "Gestion de la relation client",
  "Gestion de l'énergie",
  "Gestion de marque",
  "Gestion de patrimoine",
  "Gestion de produits",
  "Gestion de projet",
  "Gestion de projet",
  "Gestion des besoins clients",
  "Gestion des brevets",
  "Gestion des coûts",
  "Gestion des conflits",
  "Gestion des fournisseurs",
  "Gestion des incidents",
  "Gestion des interventions techniques",
  "Gestion des opérations",
  "Gestion des prototypes",
  "Gestion des ressources",
  "Gestion des retours clients",
  "Gestion des risques",
  "Gestion des risques financiers",
  "Gestion des risques opérationnels",
  "Gestion des stocks",
  "Gestion des talents",
  "Gestion des workflows",
  "Gestion du changement",
  "Gestion du stress",
  "Gestion du temps",
  "Gestion financière",
  "Gouvernance d'entreprise",
  "Imagerie digitale",
  "Informatique",
  "Ingénierie des connaissances",
  "Ingénierie financière",
  "Innovation managériale",
  "Innovation produit",
  "Innovation stratégique",
  "Intelligence artificielle",
  "Intelligence émotionnelle",
  "Interprétation",
  "Interprétation légale",
  "Intégrité",
  "Intégration continue",
  "Journey mapping",
  "Leadership",
  "Lean Management",
  "Logistique internationale",
  "Logistique verte",
  "Machine Learning",
  "Macroéconomie",
  "Management à distance",
  "Management de l'innovation",
  "Management de la performance",
  "Management de la qualité",
  "Management du changement",
  "Management interculturel",
  "Marketing d'influence",
  "Marketing digital",
  "Marketing relationnel",
  "Maîtrise des logiciels de CAO",
  "Mediation",
  "Mentorat",
  "Microéconomie",
  "Mobilité internationale",
  "Multilinguisme",
  "Multimédia",
  "Négociation",
  "Négociation contractuelle",
  "Neurosciences",
  "Normes internationales",
  "Optimisation de processus",
  "Optimisation des coûts",
  "Optimisation des moteurs de recherche",
  "Optimisation du stockage de données",
  "Paiements mobiles",
  "Parler en public",
  "Partenariats stratégiques",
  "Performance commerciale",
  "Planification de projet",
  "Planification financière",
  "Planification stratégique",
  "Planification successorale",
  "Podcasting",
  "Prise de décision",
  "Prise de décision basée sur les données",
  "Prise de décision collective",
  "Prise de décision stratégique",
  "Procurement",
  "Product management",
  "Product Ownership",
  "Programmation",
  "Programmation d'applications mobiles",
  "Programmation Python",
  "Programmation web",
  "Programmation en C++",
  "Programmation en Java",
  "Project Management",
  "Psychologie",
  "Réalisation de prototypes",
  "Recherche et développement",
  "Recherche utilisateur",
  "Recrutement",
  "Relation client",
  "Relation client multicanal",
  "Relations interpersonnelles",
  "Relations publiques",
  "Relations internationales",
  "Relations presse",
  "Rémunération et avantages",
  "Réseautage",
  "Responsabilité sociale d'entreprise",
  "Ressources humaines",
  "RetD",
  "Réunion à distance",
  "Santé et sécurité au travail",
  "Science des données",
  "Scrum",
  "Sécurité informatique",
  "Sécurité du réseau",
  "Sens du détail",
  "Service client",
  "Services Web RESTful",
  "Services Web SOAP",
  "Soins de santé",
  "Sourcing",
  "Startups",
  "Stratégie de contenu",
  "Stratégie de marque",
  "Stratégie de prix",
  "Stratégie d'entreprise",
  "Stratégie digitale",
  "Stratégie e-commerce",
  "Stratégie marketing",
  "Stratégie omni-canal",
  "Stratégie produit",
  "Support client",
  "Techniques de vente",
  "Technologies blockchain",
  "Télétravail",
  "Test utilisateur",
  "Trading",
  "Transformation digitale",
  "Transformation organisationnelle",
  "Travail d'équipe",
  "UX Design",
  "Vente",
  "Vente B2B",
  "Vente B2C",
  "Vente de solutions complexes",
  "Vente en ligne",
  "Vente internationale",
  "Visualisation de données",
  "Web Design",
  "Webmarketing",
];
