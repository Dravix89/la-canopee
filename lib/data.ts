const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&q=85`;

export type Card = {
  c: string;
  title: string;
  text: string;
  img?: string;
  alt?: string;
  href: string;
  cta: string;
  pos?: string;
};

export const missions: Card[] = [
  {
    c: "c1",
    title: "Usage Durable Des Terres",
    text: "Une gestion responsable des ressources pour préserver les paysages.",
    img: U("1663855738455-dc1e419cc8d0"),
    alt: "Oiseau posé sur une branche",
    href: "/projets",
    cta: "Découvrir",
  },
  {
    c: "c2",
    title: "Action Climatique",
    text: "Réduire les émissions, renforcer la résilience des territoires.",
    img: U("1533149335914-0a955b468338"),
    alt: "Martin-pêcheur bleu posé sur une branche",
    href: "/projets",
    cta: "Découvrir",
  },
  {
    c: "c3",
    title: "Pouvoir Communautaire",
    text: "Soutenir les héros locaux qui créent un changement durable.",
    img: U("1727279420450-3fa4ae97a81a"),
    alt: "Colibri coloré",
    pos: "center bottom",
    href: "/projets",
    cta: "Découvrir",
  },
];

export const initiatives: Card[] = [
  {
    c: "c4",
    title: "Océans Propres",
    text: "Retirer le plastique et les débris de nos océans et de nos côtes.",
    img: U("1776260465095-7dfb81b904f1"),
    alt: "Toucan",
    href: "/contact",
    cta: "En savoir plus",
  },
  {
    c: "c5",
    title: "Plus D'arbres",
    text: "Planter et restaurer des forêts pour une Terre plus saine.",
    img: U("1703868673582-becc3bd199d8"),
    alt: "Perroquet coloré",
    href: "/contact",
    cta: "En savoir plus",
  },
  {
    c: "c6",
    title: "Communautés Fortes",
    text: "Donner du pouvoir aux communautés pour agir localement.",
    img: U("1701762319848-4437a2b9ec77"),
    alt: "Ara rouge et bleu",
    href: "/contact",
    cta: "En savoir plus",
  },
];

export const enCours: Card[] = [
  {
    c: "c1",
    title: "Corridors De Biodiversité",
    text: "Relier les forêts fragmentées pour laisser circuler la faune.",
    img: missions[0].img,
    alt: "Oiseau",
    href: "/register",
    cta: "Participer",
  },
  {
    c: "c2",
    title: "Observatoire Du Climat",
    text: "Suivre les espèces sentinelles grâce à la science participative.",
    img: missions[1].img,
    alt: "Martin-pêcheur",
    href: "/register",
    cta: "Participer",
  },
  {
    c: "c3",
    title: "Brigades Locales",
    text: "Former des volontaires à la restauration des habitats.",
    img: missions[2].img,
    alt: "Colibri",
    pos: "center bottom",
    href: "/register",
    cta: "Participer",
  },
];

export const ressources: Card[] = [
  {
    c: "c1",
    title: "Guide du jardin refuge",
    text: "Accueillir oiseaux, insectes et hérissons chez soi, étape par étape.",
    href: "#",
    cta: "Télécharger",
  },
  {
    c: "c2",
    title: "Reconnaître les espèces",
    text: "Fiches illustrées des oiseaux et pollinisateurs les plus communs.",
    href: "#",
    cta: "Consulter",
  },
  {
    c: "c3",
    title: "Kit pédagogique",
    text: "Activités clés en main pour sensibiliser les classes à la biodiversité.",
    href: "#",
    cta: "Télécharger",
  },
  {
    c: "c4",
    title: "Rapport d'impact 2025",
    text: "Nos résultats, nos comptes et nos priorités pour l'année à venir.",
    href: "#",
    cta: "Lire",
  },
  {
    c: "c5",
    title: "Plantations : bien choisir",
    text: "Essences locales, calendrier et entretien pour reboiser durablement.",
    href: "#",
    cta: "Consulter",
  },
  {
    c: "c6",
    title: "Agir au quotidien",
    text: "Vingt gestes simples pour réduire son empreinte sur le vivant.",
    href: "#",
    cta: "Lire",
  },
];

export const stats = [
  { b: "520K+", s: "Arbres plantés" },
  { b: "120+", s: "Communautés" },
  { b: "350+", s: "Projets réalisés" },
  { b: "100%", s: "Pour la planète", hl: true },
];
