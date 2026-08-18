import type { HomePageContent } from "../../types/site";

export const frHome: HomePageContent = {
  locale: "fr",
  metadata: {
    title: "Le Fitness Loft Inc.",
    description:
      "Optimisez vos performances tout en évitant les blessures! Atteignez vos objectifs physiques plus rapidement et en toute sécurité grâce à nos services",
    ogLocale: "fr_FR",
  },
  nav: [
    { label: "À propos", href: "#a-propos" },
    { label: "Cours & programmes", href: "#programmes" },
    { label: "Équipe", href: "#equipe" },
    { label: "Contact", href: "#contact" },
  ],
  headerCta: "Contactez-nous",
  hero: {
    title: "Votre clinique sportive",
    description:
      "Optimisez vos performances tout en évitant les blessures! Atteignez vos objectifs physiques plus rapidement et en toute sécurité grâce à nos services sur-mesure de kinésiologie, physiothérapie et entraînement privé.",
    cta: "Nos services",
  },
  about: {
    watermark: "À propos",
    title: "Votre centre sportif à Pointe-Claire",
    paragraphs: [
      "Que vous soyez un athlète de compétition, un passionné de sport ou que vous cherchiez simplement à améliorer votre condition physique, notre centre à Pointe-Claire vous propose des services sur mesure, adaptés à tous les niveaux.",
      "Nous offrons des évaluations de santé complètes, de l'entraînement, des cours collectifs ainsi que des programmes de santé pour les entreprises.",
    ],
    ctaServices: "Nos services",
    ctaContact: "Nous contacter",
  },
  services: {
    watermark: "Services",
    title: "Cours et programmes",
    intro:
      "Évaluations de santé, entraînements individuels et semi-privés, massothérapie et plus encore! Commencez dès maintenant votre parcours de santé avec l'un de nos entraîneurs personnels ou kinésiologues certifiés.",
    items: [
      {
        id: "evaluation",
        catalogId: "health-assessment",
        title: "Évaluation de la condition physique",
        description:
          "La première étape vers vos objectifs de santé est notre Évaluation de santé complète. Nos experts analysent votre condition physique à travers des mesures corporelles, des tests musculaires, de mobilité, de bio-impédance et cardiosquelettiques, afin de personnaliser votre programme et garantir votre succès.",
        images: [
          "evaluation-sante-03",
          "evaluation-sante-02",
          "evaluation-sante-01",
        ],
        cta: "Nous contacter",
      },
      {
        id: "kinesiology",
        catalogId: "private-training",
        title: "Kinésiologie & entraînement privé",
        description:
          "Que vous souhaitiez un accompagnement exclusif ou profiter de l'énergie d'un petit groupe, nos coachs qualifiés adapteront chaque séance à vos besoins spécifiques. Rejoignez-nous pour un suivi sur mesure et commencez à transformer votre forme physique dès aujourd'hui!",
        images: [
          "entrainement-prive-01",
          "entrainement-prive-02",
          "entrainement-prive-03",
        ],
        cta: "Nous contacter",
      },
      {
        id: "corporate",
        catalogId: "group-classes",
        title: "Cours de groupe corporatif",
        description:
          "Pour les entreprises, nous proposons des solutions de bien-être pour améliorer la productivité et la satisfaction des employés, tout en favorisant un environnement de travail plus sain et performant.",
        images: ["cours-groupe-03", "cours-groupe-02", "cours-groupe"],
        cta: "Nous contacter",
      },
      {
        id: "therapy",
        catalogId: "massage-therapy",
        title: "Physiothérapie, kinésithérapie & massothérapie",
        description:
          "Nous offrons des traitements spécialisés pour soulager vos douleurs, restaurer vos fonctions corporelles et améliorer votre mobilité. Notre équipe de physiothérapeutes et massothérapeutes vous propose des soins adaptés à vos besoins spécifiques.",
        images: ["masso-02", "kine-sportive", "masso-01"],
        cta: "Nous contacter",
      },
    ],
  },
  featuredProgram: {
    panels: [
      {
        title: "Booster votre vie active",
        description:
          "Transformez votre approche du vieillissement avec des entraînements adaptés à vos besoins et objectifs.",
        image: "programme-femme",
        variant: "image-left",
      },
      {
        title: "Adaptez votre entraînement",
        description:
          "Conçu pour vous accompagner tout au long de votre parcours de vie active.",
        image: "programme-femme-02",
        variant: "primary-panel",
      },
    ],
  },
  sportsTeam: {
    watermark: "Programme",
    title: "entraînement d'équipes sportives",
    description:
      "Les entraîneurs du Fitness Loft, experts en sciences du sport, aident les athlètes à atteindre leurs objectifs grâce à leur expérience dans des sports variés comme le hockey, le soccer, le golf et plus encore. Nous proposons des programmes personnalisés pour les équipes, incluant des entraînements spécifiques, des sessions en ligne, ou sur place.",
    cta: "Nous contacter",
    panels: [
      {
        title: "Performance",
        description:
          "Renforcez la performance de vos athlètes avec des entraînements ciblés et adaptés à leur sport.",
        image: "Athletics",
        variant: "image-left",
      },
      {
        title: "Protection",
        description:
          "Minimiser les risques de blessures et maximiser la performance avec des entraînements spécifiques.",
        image: "gym-44",
        variant: "primary-panel",
      },
    ],
    partners: {
      title: "Nos partenaires",
      items: [
        { id: "ringuette-quebec", name: "Ringuette Québec" },
        { id: "ringuette-pointe-claire", name: "Ringuette Pointe-Claire" },
        { id: "ringuette-lsll", name: "Ringuette LSLL" },
        { id: "owls-head", name: "Club de Ski Owl's Head" },
      ],
    },
  },
  golfTpi: {
    title: "Golf TPI",
    subtitle: "(Institut de performance Titleist)",
    description:
      "Au Fitness Loft, grâce à nos diplômes en kinésiologie et certifications TPI, nous répondons aux besoins des golfeurs en évaluant la biomécanique de chaque joueur pour optimiser leur performance. Nos kinésiologues certifiés TPI utilisent des tests de dépistage pour identifier rapidement les zones à améliorer, en augmentant la flexibilité, la force et l'athlétisme global. Notre équipe travaillera avec vous pour dépasser vos limites et améliorer votre jeu, afin de vous offrir votre meilleure saison de golf.",
    cta: "Nous contacter",
  },
  team: {
    watermark: "Équipe",
    title: "Notre équipe de professionnels",
    description:
      "Une équipe de professionnels multidisciplinaire pour vous guider à chaque étape de votre parcours.",
    stats: [
      { value: 9, label: "professionnels" },
      { value: 200, prefix: "+", label: "membres satisfaits" },
    ],
    members: [
      {
        id: "mathieu",
        name: "Mathieu",
        role: "Kinésiologue & propriétaire",
        image: "mathieu",
      },
      {
        id: "christophe",
        name: "Christophe",
        role: "Kinésiologue",
        image: "chris",
      },
      {
        id: "nick",
        name: "Nick",
        role: "Entraîneur personnel",
        image: "nick",
      },
      {
        id: "hayley",
        name: "Hayley",
        role: "Physiothérapeute",
        image: "hayley",
      },
      {
        id: "emilie",
        name: "Émilie",
        role: "Kinésithérapeute et massothérapeute",
        image: "emilie",
      },
      {
        id: "evy",
        name: "Evy",
        role: "Kinésiologue",
      },
    ],
  },
  testimonials: {
    watermark: "Témoignages",
    items: [
      {
        quote:
          "« Worked with Kinesiologist Christophe to create tailored programs to rehab a shoulder injury that have been really effective. Great chill atmosphere that makes it a pleasure to work out here. Absolutely love it! »",
        author: "Kristina Mansson",
        source: "Avis Google",
      },
      {
        quote: "« Amazing trainers, clean gym, fun environment. I love itt!!! »",
        author: "Valentina Franco",
        source: "Avis Google",
      },
      {
        quote:
          "« RIEN de négatif à dire, que se soit les autres personnes qui viennent pour les services ou le staff, 10/10, environnement/endroit safe et super accueillant en tout temps. Déjà fait plus de 4 ans que j'y vais, je recommande totalement, que ce soit pour athlètes de n'importe lequel sport ou pour monsieur-madame tout le monde :) »",
        author: "Ève Berthiaume",
        source: "Avis Google",
      },
      {
        quote:
          "« Excellent gym! L'ambiance est dynamique et agréable, ce qui rend les entraînements vraiment motivants. Les appareils sont nombreux, propres et bien entretenus. Les entraîneurs sont compétents et le personnel est toujours souriant. C'est un endroit où l'on se sent à l'aise, peu importe son niveau. Je le recommande fortement! »",
        author: "Sarah Grenier",
        source: "Avis Google",
      },
    ],
  },
  contact: {
    watermark: "Contact",
    title: "Prêts pour l'entraînement?",
    subtitle: "Contactez-nous dès maintenant!",
    form: {
      name: "Nom complet",
      email: "Courriel",
      phone: "Téléphone",
      service: "Service désiré",
      message: "Message",
      submit: "Envoyer",
      serviceOptions: [],
    },
  },
  footer: {
    contactTitle: "Contact",
    hoursTitle: "Horaire de la salle de sport",
    copyright: "Le Fitness Loft Inc. ©",
    social: {
      facebook: "https://www.facebook.com/lefitnessloft/?locale=fr_CA",
      instagram: "https://www.instagram.com/lefitnessloft/?next=%2F",
      linkedin: "https://www.linkedin.com/in/le-fitness-loft-inc-82800468/",
    },
  },
};
