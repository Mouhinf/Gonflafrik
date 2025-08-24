import type { Inflatable, BlogPost, GalleryImage } from './types';

export const inflatableCatalogue: Inflatable[] = [
  {
    id: 'chateau-princesse',
    name: 'Château de Princesse',
    description: 'Un magnifique château rose pour les princesses en herbe. Parfait pour les anniversaires féériques.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: '3-8 ans',
    features: ['Toboggan intégré', 'Zone de saut spacieuse', 'Filets de sécurité'],
    category: 'Structures ludiques',
    hint: 'pink castle'
  },
  {
    id: 'parcours-jungle',
    name: 'Parcours Aventure Jungle',
    description: 'Un parcours d\'obstacles exaltant sur le thème de la jungle. Pour les petits aventuriers.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: '5-12 ans',
    features: ['Tunnel', 'Mur d\'escalade', 'Double toboggan', 'Obstacles pop-up'],
    category: 'Structures ludiques',
    hint: 'jungle obstacle course'
  },
  {
    id: 'toboggan-aquatique',
    name: '💦 Toboggan aquatique gonflable',
    description: 'Un classique incontournable ! Les enfants comme les adultes profitent de sensations fortes en glissant le long du toboggan pour atterrir dans une zone sécurisée. Idéal pour rafraîchir vos événements sous le soleil.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: '6 ans et +',
    features: ['Haute glissade', 'Zone d\'arrivée sécurisée', 'Rafraîchissant'],
    category: 'Structures aquatiques',
    hint: 'water slide splash'
  },
  {
    id: 'piste-glisse',
    name: '💦 Piste de glisse (Slip & Slide)',
    description: 'Une longue piste arrosée d’eau qui permet de glisser à toute vitesse. Parfaite pour les compétitions amicales et les fous rires garantis entre amis ou en famille.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: '5 ans et +',
    features: ['Longue piste', 'Compétitions amicales', 'Fous rires garantis'],
    category: 'Structures aquatiques',
    hint: 'slip and slide'
  },
  {
    id: 'parc-aquatique',
    name: '🏝️ Parc aquatique gonflable',
    description: 'Un véritable terrain de jeu flottant composé de modules variés : obstacles, passerelles, trampolines et toboggans. À installer sur une piscine ou un plan d’eau pour une expérience inoubliable.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: '8 ans et +',
    features: ['Modulaire', 'Pour piscine ou plan d\'eau', 'Expérience inoubliable'],
    category: 'Structures aquatiques',
    hint: 'floating water park'
  },
  {
    id: 'combo-aquatique',
    name: '🏖️ Combo aquatique (Château + Toboggan + Piscine)',
    description: 'Une structure polyvalente qui combine aire de jeu, glissade et bassin d’eau. Adaptée aux enfants, elle réunit en un seul espace amusement et fraîcheur.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: '3-10 ans',
    features: ['Polyvalent', 'Aire de jeu', 'Bassin d\'eau'],
    category: 'Structures aquatiques',
    hint: 'water combo bouncer'
  },
  {
    id: 'monde-dinosaures',
    name: 'Le Monde des Dinosaures',
    description: 'Sautez avec les T-Rex dans cette aire de jeu préhistorique.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: '4-10 ans',
    features: ['Panier de basket', 'Formes de dinosaures 3D', 'Grande zone de rebond'],
    category: 'Structures ludiques',
    hint: 'dinosaur bouncy'
  },
  {
    id: 'jeux-interactifs',
    name: 'Jeux Interactif Gonflables',
    description: 'Jeux interactifs comme le baby-foot humain, le mur velcro, les joutes, etc.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: '5 ans et +',
    features: ['Baby-foot humain', 'Mur velcro', 'Joutes'],
    category: 'Structures ludiques',
    hint: 'interactive inflatable game'
  },
  {
    id: 'tente-reception',
    name: 'Dôme de Réception Élégant',
    description: 'Une tente gonflable spacieuse et chic pour vos mariages, baptêmes ou événements corporatifs.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'Tous âges',
    features: ['Design moderne', 'Modulable', 'Fenêtres panoramiques'],
    category: 'Structures pour événements',
    hint: 'inflatable dome'
  },
  {
    id: 'arche-evenementielle',
    name: 'Arche de Bienvenue',
    description: 'Accueillez vos invités avec style grâce à cette arche gonflable personnalisable.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'Tous âges',
    features: ['Entièrement personnalisable', 'Installation rapide', 'Idéal pour les départs de course'],
    category: 'Structures pour événements',
    hint: 'inflatable arch'
  },
  {
    id: 'ecran-projection',
    name: 'Écran de Projection Gonflable',
    description: 'Transformez n\'importe quel espace en cinéma de plein air. Idéal pour les soirées films ou les présentations.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'Tous âges',
    features: ['Installation rapide', 'Grande surface de projection', 'Sac de transport inclus'],
    category: 'Structures pour événements',
    hint: 'inflatable screen'
  },
  {
    id: 'mascotte-publicitaire',
    name: 'Mascotte Publicitaire Gonflable',
    description: 'Une mascotte géante à l\'image de votre marque pour attirer l\'attention lors de salons ou d\'opérations marketing.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'Tous âges',
    features: ['Haute visibilité', 'Personnalisable', 'Impact fort'],
    category: 'Structures promotionnelles',
    hint: 'inflatable mascot'
  },
  {
    id: 'dome-marque',
    name: 'Dôme ou Tente de Marque',
    description: 'Pour salons, expositions, activation de marque, et événements B2B.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'Tous âges',
    features: ['Haute visibilité', 'Personnalisable', 'Idéal pour les salons'],
    category: 'Structures promotionnelles',
    hint: 'branded dome tent'
  },
  {
    id: 'ecran-branding',
    name: 'Écran Gonflable Branding',
    description: 'Pour diffuser des contenus marketing dans des lieux extérieurs.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'Tous âges',
    features: ['Large surface', 'Visibilité maximale', 'Idéal pour le marketing extérieur'],
    category: 'Structures promotionnelles',
    hint: 'branded inflatable screen'
  }
];

export const featuredInflatables = inflatableCatalogue.slice(0, 3);

export const blogPosts: BlogPost[] = [
  {
    slug: 'securite-structures-gonflables',
    title: 'La Sécurité Avant Tout : Nos Conseils pour les Structures Gonflables',
    excerpt: 'Assurer la sécurité de vos enfants est notre priorité absolue. Découvrez nos conseils essentiels pour une utilisation sûre et amusante de nos structures gonflables.',
    date: '2024-05-15',
    category: 'Sécurité',
    image: 'https://placehold.co/600x400.png',
    hint: 'safety instructions'
  },
  {
    slug: 'entretien-apres-fete',
    title: 'Comment Entretenir une Structure Gonflable Après la Fête',
    excerpt: 'Un bon entretien garantit la longévité et la propreté de nos structures. Voici quelques astuces pour prendre soin de votre location après l\'événement.',
    date: '2024-05-10',
    category: 'Entretien',
    image: 'https://placehold.co/600x400.png',
    hint: 'cleaning equipment'
  },
  {
    slug: 'evenements-dakar',
    title: 'Les Événements à ne pas Manquer à Dakar ce Mois-ci',
    excerpt: 'GONFL\'AFRIK est fier de participer aux événements locaux. Découvrez où nous trouver et les fêtes à venir dans la région de Dakar.',
    date: '2024-06-01',
    category: 'Événements',
    image: 'https://placehold.co/600x400.png',
    hint: 'event calendar'
  },
  {
    slug: 'choisir-structure-ideale',
    title: 'Comment Choisir la Structure Gonflable Idéale pour Votre Événement',
    excerpt: 'Le choix peut être difficile ! Ce guide vous aidera à sélectionner la structure parfaite en fonction de l\'âge des participants, de l\'espace et du thème de votre fête.',
    date: '2024-04-28',
    category: 'Conseils',
    image: 'https://placehold.co/600x400.png',
    hint: 'decision making'
  },
];

export const galleryImages: GalleryImage[] = [
  { src: 'https://placehold.co/600x600.png', alt: 'Enfants jouant dans un château gonflable', hint: 'children playing' },
  { src: 'https://placehold.co/600x800.png', alt: 'Toboggan géant lors d\'une fête d\'école', hint: 'giant slide' },
  { src: 'https://placehold.co/800x600.png', alt: 'Parcours d\'obstacles coloré', hint: 'obstacle course' },
  { src: 'https://placehold.co/600x600.png', alt: 'Fête d\'anniversaire avec thème pirate', hint: 'birthday party' },
  { src: 'https://placehold.co/800x600.png', alt: 'Structure aquatique en été', hint: 'water park' },
  { src: 'https://placehold.co/600x800.png', alt: 'Sourires d\'enfants sur un jeu gonflable', hint: 'happy children' },
  { src: 'https://placehold.co/600x600.png', alt: 'Événement d\'entreprise avec des jeux pour adultes', hint: 'corporate event' },
  { src: 'https://placehold.co/600x600.png', alt: 'Installation de nos équipes', hint: 'team setup' },
];

export const blogCategories = ['Tous', ...Array.from(new Set(blogPosts.map(p => p.category)))];
