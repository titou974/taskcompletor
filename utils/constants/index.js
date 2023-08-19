export const navLinks = [
  {
    id: "completor",
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
    id: "exercice",
    title: "Exercice",
    description: "Réponses à des questions/consignes dans n'importe quel domaine",
    benefits: ["Résoudre n'importe quel exercice basé sur du texte", "Donné une forme de réponse adapté selon un niveau"],
    generation_time: "30 secs - 1 minute",
    example: {
      title: "",
      sections: ""
    }
  },
  {
    id: "rapport",
    title: "Rapport",
    description: "Rapport d'environ 2 pages sur un sujet quelconque.",
    benefits: ["Faire un résumé rapide sur un sujet donné", "Obtenir un plan pour un rapport plus détaillé"],
    generation_time: "1 minute",
    example: {
      title: "",
      sections: ""
    }
  },
  {
    id: "email",
    title: "Email",
    description: "Générer un email professionel ou personnel en quelques secondes",
    benefits: ["Pratique pour les mails administratifs (entreprise, école, paperasse)", "Mail clair, concis et sans faute"],
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
    benefits: ["Gain de temps lors de la recherche d'un travail", "Mise en avant du profil basé sur ses compétences et expériences"],
    generation_time: "30 secs",
    example: {
      title: "",
      sections: ""
    }
  },
  {
    id: "fiche de révision",
    title: "Fiche de révision",
    description: "Générer vos fiches de révision pour ses examens en donnant une matière et un/des chapitre(s)",
    benefits: ["Pratique lorsqu'on a pas la main sur ses cours...", "Avoir un plan détaillé du chapitre"],
    generation_time: "1 minute",
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
    description: "Le rapport utilise un language spécifique au sujet"
  },
  {
    id: "informel",
    title: "Informel 📢",
    description: "Le rapport utilise un language courant"
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
