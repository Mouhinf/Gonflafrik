import type { Inflatable, BlogPost, GalleryImage } from './types';

export const inflatableCatalogue: Inflatable[] = [
  {
    id: 'chateau-princesse',
    name: 'Château de Princesse',
    description: 'Un magnifique château rose pour les princesses en herbe. Parfait pour les anniversaires féériques.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: '3-8 ans',
    features: ['Toboggan intégré', 'Zone de saut spacieuse', 'Filets de sécurité'],
    category: 'Châteaux',
    hint: 'pink castle'
  },
  {
    id: 'parcours-jungle',
    name: 'Parcours Aventure Jungle',
    description: 'Un parcours d\'obstacles exaltant sur le thème de la jungle. Pour les petits aventuriers.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: '5-12 ans',
    features: ['Tunnel', 'Mur d\'escalade', 'Double toboggan', 'Obstacles pop-up'],
    category: 'Parcours',
    hint: 'jungle obstacle course'
  },
  {
    id: 'toboggan-pirate',
    name: 'Toboggan Géant Pirate',
    description: 'Hissez les voiles pour une glissade vertigineuse sur notre toboggan pirate.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: '6 ans et +',
    features: ['Haute glissade', 'Thème immersif', 'Zone d\'arrivée sécurisée'],
    category: 'Toboggans',
    hint: 'pirate ship slide'
  },
  {
    id: 'monde-dinosaures',
    name: 'Le Monde des Dinosaures',
    description: 'Sautez avec les T-Rex dans cette aire de jeu préhistorique.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: '4-10 ans',
    features: ['Panier de basket', 'Formes de dinosaures 3D', 'Grande zone de rebond'],
    category: 'Châteaux',
    hint: 'dinosaur bouncy'
  },
  {
    id: 'course-voitures',
    name: 'Course de Voitures',
    description: 'Prêt, partez, sautez ! Un château sur le thème de la course automobile.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: '3-7 ans',
    features: ['Design coloré', 'Petits obstacles', 'Idéal pour les tout-petits'],
    category: 'Châteaux',
    hint: 'race car'
  },
  {
    id: 'toboggan-aquatique',
    name: 'Toboggan Aquatique Splash',
    description: 'Le meilleur moyen de se rafraîchir en été. Se connecte à un tuyau d\'arrosage.',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: '5 ans et +',
    features: ['Piscine d\'arrivée', 'Système de pulvérisation d\'eau', 'Vinyle anti-dérapant'],
    category: 'Toboggans',
    hint: 'water slide'
  },
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
    excerpt: 'Afrikaboom est fier de participer aux événements locaux. Découvrez où nous trouver et les fêtes à venir dans la région de Dakar.',
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
