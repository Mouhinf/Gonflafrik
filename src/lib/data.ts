import type { Inflatable, BlogPost, GalleryImage } from './types';

export const inflatableCatalogue: Inflatable[] = [
  {
    id: 'chateau-princesse',
    name: 'chateau_princesse_name',
    description: 'chateau_princesse_desc',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'age_3_8',
    features: ['Toboggan intégré', 'Zone de saut spacieuse', 'Filets de sécurité'],
    category: 'ludiques',
    hint: 'pink castle'
  },
  {
    id: 'parcours-jungle',
    name: 'parcours_jungle_name',
    description: 'parcours_jungle_desc',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'age_5_12',
    features: ['Tunnel', 'Mur d\'escalade', 'Double toboggan', 'Obstacles pop-up'],
    category: 'ludiques',
    hint: 'jungle obstacle course'
  },
  {
    id: 'toboggan-aquatique',
    name: 'toboggan_aquatique_name',
    description: 'toboggan_aquatique_desc',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'age_6_plus',
    features: ['Haute glissade', 'Zone d\'arrivée sécurisée', 'Rafraîchissant'],
    category: 'aquatiques',
    hint: 'water slide splash'
  },
  {
    id: 'piste-glisse',
    name: 'piste_glisse_name',
    description: 'piste_glisse_desc',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'age_5_plus',
    features: ['Longue piste', 'Compétitions amicales', 'Fous rires garantis'],
    category: 'aquatiques',
    hint: 'slip and slide'
  },
  {
    id: 'parc-aquatique',
    name: 'parc_aquatique_name',
    description: 'parc_aquatique_desc',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'age_8_plus',
    features: ['Modulaire', 'Pour piscine ou plan d\'eau', 'Expérience inoubliable'],
    category: 'aquatiques',
    hint: 'floating water park'
  },
  {
    id: 'combo-aquatique',
    name: 'combo_aquatique_name',
    description: 'combo_aquatique_desc',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'age_3_10',
    features: ['Polyvalent', 'Aire de jeu', 'Bassin d\'eau'],
    category: 'aquatiques',
    hint: 'water combo bouncer'
  },
  {
    id: 'monde-dinosaures',
    name: 'monde_dinosaures_name',
    description: 'monde_dinosaures_desc',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'age_4_10',
    features: ['Panier de basket', 'Formes de dinosaures 3D', 'Grande zone de rebond'],
    category: 'ludiques',
    hint: 'dinosaur bouncy'
  },
  {
    id: 'jeux-interactifs',
    name: 'jeux_interactifs_name',
    description: 'jeux_interactifs_desc',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'age_5_plus',
    features: ['Baby-foot humain', 'Mur velcro', 'Joutes'],
    category: 'ludiques',
    hint: 'interactive inflatable game'
  },
  {
    id: 'tente-reception',
    name: 'tente_reception_name',
    description: 'tente_reception_desc',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'all_ages',
    features: ['Design moderne', 'Modulable', 'Fenêtres panoramiques'],
    category: 'evenements',
    hint: 'inflatable dome'
  },
  {
    id: 'arche-evenementielle',
    name: 'arche_evenementielle_name',
    description: 'arche_evenementielle_desc',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'all_ages',
    features: ['Entièrement personnalisable', 'Installation rapide', 'Idéal pour les départs de course'],
    category: 'evenements',
    hint: 'inflatable arch'
  },
  {
    id: 'ecran-projection',
    name: 'ecran_projection_name',
    description: 'ecran_projection_desc',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'all_ages',
    features: ['Installation rapide', 'Grande surface de projection', 'Sac de transport inclus'],
    category: 'evenements',
    hint: 'inflatable screen'
  },
  {
    id: 'mascotte-publicitaire',
    name: 'mascotte_publicitaire_name',
    description: 'mascotte_publicitaire_desc',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'all_ages',
    features: ['Haute visibilité', 'Personnalisable', 'Impact fort'],
    category: 'promotionnelles',
    hint: 'inflatable mascot'
  },
  {
    id: 'dome-marque',
    name: 'dome_marque_name',
    description: 'dome_marque_desc',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'all_ages',
    features: ['Haute visibilité', 'Personnalisable', 'Idéal pour les salons'],
    category: 'promotionnelles',
    hint: 'branded dome tent'
  },
  {
    id: 'ecran-branding',
    name: 'ecran_branding_name',
    description: 'ecran_branding_desc',
    image: 'https://placehold.co/600x400.png',
    ageSuitability: 'all_ages',
    features: ['Large surface', 'Visibilité maximale', 'Idéal pour le marketing extérieur'],
    category: 'promotionnelles',
    hint: 'branded inflatable screen'
  }
];

export const featuredInflatables = inflatableCatalogue.slice(0, 3);

export const blogPosts: BlogPost[] = [
  {
    slug: 'securite-structures-gonflables',
    titleKey: 'blog_safety_title',
    excerptKey: 'blog_safety_excerpt',
    date: '2024-05-15',
    categoryKey: 'safety',
    image: 'https://placehold.co/600x400.png',
    hint: 'safety instructions',
    contentKey: 'blog_safety_content',
    contentKey2: 'blog_safety_content2',
    contentKey3: 'blog_safety_content3'
  },
  {
    slug: 'entretien-apres-fete',
    titleKey: 'blog_maintenance_title',
    excerptKey: 'blog_maintenance_excerpt',
    date: '2024-05-10',
    categoryKey: 'maintenance',
    image: 'https://placehold.co/600x400.png',
    hint: 'cleaning equipment',
    contentKey: 'blog_maintenance_content',
    contentKey2: 'blog_maintenance_content2',
    contentKey3: 'blog_maintenance_content3'
  },
  {
    slug: 'evenements-dakar',
    titleKey: 'blog_events_title',
    excerptKey: 'blog_events_excerpt',
    date: '2024-06-01',
    categoryKey: 'events',
    image: 'https://placehold.co/600x400.png',
    hint: 'event calendar',
    contentKey: 'blog_events_content',
    contentKey2: 'blog_events_content2',
    contentKey3: 'blog_events_content3'
  },
  {
    slug: 'choisir-structure-ideale',
    titleKey: 'blog_choice_title',
    excerptKey: 'blog_choice_excerpt',
    date: '2024-04-28',
    categoryKey: 'tips',
    image: 'https://placehold.co/600x400.png',
    hint: 'decision making',
    contentKey: 'blog_choice_content',
    contentKey2: 'blog_choice_content2',
    contentKey3: 'blog_choice_content3'
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

export const blogCategories = ['all', 'safety', 'maintenance', 'events', 'tips'];
