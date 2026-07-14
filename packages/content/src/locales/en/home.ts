import type { HomePageContent } from "../../types/site";

export const enHome: HomePageContent = {
  locale: "en",
  metadata: {
    title: "Le Fitness Loft Inc.",
    description:
      "Optimize your performance and avoid injury! Reach your physical goals faster and more safely with our tailor-made kinesiology, physiotherapy and private training services.",
    ogLocale: "en_US",
  },
  nav: [
    { label: "About us", href: "#a-propos" },
    { label: "Courses and programs", href: "#programmes" },
    { label: "Team", href: "#equipe" },
    { label: "Contact", href: "#contact" },
  ],
  headerCta: "Contact us",
  hero: {
    title: "Your\nsports\nclinic",
    description:
      "Optimize your performance and avoid injury! Reach your physical goals faster and more safely with our tailor-made kinesiology, physiotherapy and private training services.",
    cta: "Our services",
  },
  about: {
    watermark: "About us",
    title: "Your Pointe-Claire sports center",
    paragraphs: [
      "Whether you're a competitive athlete, a sports enthusiast or simply looking to improve your fitness level, our Pointe-Claire center offers tailor-made services for all levels.",
      "We offer comprehensive health assessments, training, group classes and health programs for businesses.",
    ],
    ctaServices: "Our services",
    ctaContact: "Contact us",
  },
  services: {
    watermark: "Services",
    title: "Courses and programs",
    intro:
      "Health assessments, individual and semi-private training, massage therapy and more! Start your health journey today with one of our certified personal trainers or kinesiologists.",
    items: [
      {
        id: "evaluation",
        catalogId: "health-assessment",
        title: "Fitness assessment",
        description:
          "The first step towards your health goals is our comprehensive Health Assessment. Our experts analyze your physical condition through body measurements, muscle, mobility, bio-impedance and cardioskeletal tests, in order to personalize your program and guarantee your success.",
        images: [
          "evaluation-sante-03",
          "evaluation-sante-02",
          "evaluation-sante-01",
        ],
        cta: "Contact us",
      },
      {
        id: "kinesiology",
        catalogId: "private-training",
        title: "Kinesiology & private training",
        description:
          "Whether you want exclusive coaching or the energy of a small group, our qualified coaches will tailor each session to your specific needs. Join us for a tailor-made follow-up and start transforming your fitness today!",
        images: [
          "entrainement-prive-01",
          "entrainement-prive-02",
          "entrainement-prive-03",
        ],
        cta: "Contact us",
      },
      {
        id: "corporate",
        catalogId: "group-classes",
        title: "Corporate group classes",
        description:
          "For businesses, we offer wellness solutions to improve productivity and employee satisfaction, while promoting a healthier, more efficient working environment.",
        images: ["cours-groupe-03", "cours-groupe-02", "cours-groupe"],
        cta: "Contact us",
      },
      {
        id: "therapy",
        catalogId: "massage-therapy",
        title: "Physiotherapy, kinesitherapy & massage therapy",
        description:
          "We offer specialized treatments to relieve pain, restore function and improve mobility. Our team of physiotherapists and massage therapists offers treatments tailored to your specific needs.",
        images: ["masso-02", "kine-sportive", "masso-01"],
        cta: "Contact us",
      },
    ],
  },
  featuredProgram: {
    panels: [
      {
        title: "Boost your active life",
        description:
          "Transform your approach to aging with workouts tailored to your needs and goals.",
        image: "programme-femme",
        variant: "image-left",
      },
      {
        title: "Adapt your training",
        description: "Designed to support you throughout your working life.",
        image: "programme-femme-02",
        variant: "primary-panel",
      },
    ],
  },
  sportsTeam: {
    watermark: "Program",
    title: "sports team training",
    description:
      "Le Fitness Loft's expert sports science trainers help athletes achieve their goals with experience in a variety of sports including field hockey, soccer, golf and more. We offer customized programs for teams, including specific training, online sessions, or on-site.",
    cta: "Contact us",
    panels: [
      {
        title: "Performance",
        description:
          "Boost your athletes' performance with targeted training adapted to their sport.",
        image: "Athletics",
        variant: "image-left",
      },
      {
        title: "Protection",
        description:
          "Minimize injury risks and maximize performance with specific training.",
        image: "gym-44",
        variant: "primary-panel",
      },
    ],
    partners: {
      title: "Our partners",
      items: [
        { id: "ringuette-quebec", name: "Ringuette Québec" },
        { id: "ringuette-pointe-claire", name: "Ringuette Pointe-Claire" },
        { id: "ringuette-lsll", name: "Ringuette LSLL" },
        { id: "owls-head", name: "Owl's Head Ski Club" },
      ],
    },
  },
  golfTpi: {
    title: "Golf TPI",
    subtitle: "(Titleist Performance Institute)",
    description:
      "At Le Fitness Loft, thanks to our kinesiology degrees and TPI certifications, we cater to the needs of golfers by assessing each player's biomechanics to optimize their performance. Our TPI-certified kinesiologists use screening tests to quickly identify areas for improvement, increasing flexibility, strength and overall athleticism. Our team will work with you to exceed your limits and improve your game, to give you your best golf season yet.",
    cta: "Contact us",
  },
  team: {
    watermark: "Team",
    title: "Our team of professionals",
    description:
      "A multidisciplinary team of professionals to guide you every step of the way.",
    stats: [
      { value: 9, label: "professionals" },
      { value: 200, prefix: "+", label: "satisfied members" },
    ],
    members: [
      {
        id: "mathieu",
        name: "Mathieu",
        role: "Kinesiologist & owner",
        image: "mathieu",
      },
      {
        id: "christophe",
        name: "Christophe",
        role: "Kinesiologist",
        image: "chris",
      },
      {
        id: "nick",
        name: "Nick",
        role: "Personal trainer",
        image: "nick",
      },
      {
        id: "hayley",
        name: "Hayley",
        role: "Physiotherapist",
        image: "hayley",
      },
      {
        id: "emilie",
        name: "Émilie",
        role: "Kinesitherapist and massage therapist",
        image: "emilie",
      },
      {
        id: "evy",
        name: "Evy",
        role: "Kinesiologist",
      },
    ],
  },
  testimonials: {
    watermark: "Testimonials",
    items: [
      {
        quote:
          '"You are the BEST team ever!!!! Training with Laura for 14 years. Laura is a super kinesiologist, an excellent psychologist who managed to make me appreciate exercise and especially realize the benefits of being active no matter what I do. Finally, just learning to move every day. Mission accomplished Laura!"',
        author: "LEILA NAUFAL",
      },
      {
        quote:
          "\"I have been a member of the Loft for over 5 years. The entire staff is very knowledgeable, professional and conscientious. They will prepare a training program tailored to your needs, abilities and goals. They will then modify and improve this program over time as your needs evolve. Over the past 2 years, I've lost 11 kilos, which have remained stable. Since joining the Loft, I feel stronger, I have more stamina and I feel in better shape in general. The Loft is more than just a gym. It's a home away from home, with professional staff who care about you!\"",
        author: "ANATOLE ZAMOZDRA",
      },
      {
        quote:
          "\"I was looking for someone who studied the body, its different functions and someone who could help me gain strength while respecting my body's limits after many years of competitive dance. Linda was a guide during my years of police academy training, getting me into the best shape of my life and helping me maintain that strength. Now she's helping me through a new adventure that includes both challenges and incredible moments: staying in shape during my pregnancy. If you're on the fence about Fitness Loft, don't be.\"",
        author: "SACHA OLIVER-MAILLOUX",
      },
    ],
  },
  contact: {
    watermark: "Contact",
    title: "Ready to train?",
    subtitle: "Contact us today!",
    form: {
      name: "Full name",
      email: "Email",
      phone: "Phone",
      service: "Desired service",
      message: "Message",
      submit: "Send",
      serviceOptions: [],
    },
  },
  footer: {
    contactTitle: "Contact",
    hoursTitle: "Gym opening hours",
    copyright: "Le Fitness Loft Inc. ©",
    social: {
      facebook: "https://www.facebook.com/lefitnessloft/?locale=fr_CA",
      instagram: "https://www.instagram.com/lefitnessloft/?next=%2F",
      linkedin: "https://www.linkedin.com/in/le-fitness-loft-inc-82800468/",
    },
  },
};
