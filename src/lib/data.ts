import type { Inflatable, BlogPost, GalleryImage } from './types';

export const inflatableCatalogue: Inflatable[] = [
  {
    id: 'chateau-princesse',
    name: 'chateau_princesse_name',
    description: 'chateau_princesse_desc',
    image: 'https://images.unsplash.com/photo-1599302928543-35c635a604f7?q=80&w=600&h=400&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ageSuitability: 'age_3_8',
    features: ['Toboggan intégré', 'Zone de saut spacieuse', 'Filets de sécurité'],
    category: 'ludiques',
    hint: 'pink castle'
  },
  {
    id: 'parcours-jungle',
    name: 'parcours_jungle_name',
    description: 'parcours_jungle_desc',
    image: 'https://images.unsplash.com/photo-1552511484-9a0c64a852a4?q=80&w=600&h=400&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ageSuitability: 'age_5_12',
    features: ['Tunnel', 'Mur d\'escalade', 'Double toboggan', 'Obstacles pop-up'],
    category: 'ludiques',
    hint: 'jungle obstacle course'
  },
  {
    id: 'toboggan-aquatique',
    name: 'toboggan_aquatique_name',
    description: 'toboggan_aquatique_desc',
    image: 'https://images.unsplash.com/photo-1621262342122-458151216a9a?q=80&w=600&h=400&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ageSuitability: 'age_6_plus',
    features: ['Haute glissade', 'Zone d\'arrivée sécurisée', 'Rafraîchissant'],
    category: 'aquatiques',
    hint: 'water slide splash'
  },
  {
    id: 'piste-glisse',
    name: 'piste_glisse_name',
    description: 'piste_glisse_desc',
    image: 'https://images.unsplash.com/photo-1543883391-2b6947f632ac?q=80&w=600&h=400&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ageSuitability: 'age_5_plus',
    features: ['Longue piste', 'Compétitions amicales', 'Fous rires garantis'],
    category: 'aquatiques',
    hint: 'slip and slide'
  },
  {
    id: 'parc-aquatique',
    name: 'parc_aquatique_name',
    description: 'parc_aquatique_desc',
    image: 'https://images.unsplash.com/photo-1597169428691-380186c34825?q=80&w=600&h=400&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ageSuitability: 'age_8_plus',
    features: ['Modulaire', 'Pour piscine ou plan d\'eau', 'Expérience inoubliable'],
    category: 'aquatiques',
    hint: 'floating water park'
  },
  {
    id: 'combo-aquatique',
    name: 'combo_aquatique_name',
    description: 'combo_aquatique_desc',
    image: 'https://images.unsplash.com/photo-1612994793833-39a0b3815338?q=80&w=600&h=400&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ageSuitability: 'age_3_10',
    features: ['Polyvalent', 'Aire de jeu', 'Bassin d\'eau'],
    category: 'aquatiques',
    hint: 'water combo bouncer'
  },
  {
    id: 'monde-dinosaures',
    name: 'monde_dinosaures_name',
    description: 'monde_dinosaures_desc',
    image: 'https://images.unsplash.com/photo-1551431829-43a1d31d9a04?q=80&w=600&h=400&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ageSuitability: 'age_4_10',
    features: ['Panier de basket', 'Formes de dinosaures 3D', 'Grande zone de rebond'],
    category: 'ludiques',
    hint: 'dinosaur bouncy'
  },
  {
    id: 'jeux-interactifs',
    name: 'jeux_interactifs_name',
    description: 'jeux_interactifs_desc',
    image: 'https://images.unsplash.com/photo-1518933928879-c51121a5a075?q=80&w=600&h=400&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ageSuitability: 'age_5_plus',
    features: ['Baby-foot humain', 'Mur velcro', 'Joutes'],
    category: 'ludiques',
    hint: 'interactive inflatable game'
  },
  {
    id: 'tente-reception',
    name: 'tente_reception_name',
    description: 'tente_reception_desc',
    image: 'https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?q=80&w=600&h=400&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ageSuitability: 'all_ages',
    features: ['Design moderne', 'Modulable', 'Fenêtres panoramiques'],
    category: 'evenements',
    hint: 'inflatable dome'
  },
  {
    id: 'arche-evenementielle',
    name: 'arche_evenementielle_name',
    description: 'arche_evenementielle_desc',
    image: 'https://images.unsplash.com/photo-1565995487493-94b2a8f870f7?q=80&w=600&h=400&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ageSuitability: 'all_ages',
    features: ['Entièrement personnalisable', 'Installation rapide', 'Idéal pour les départs de course'],
    category: 'evenements',
    hint: 'inflatable arch'
  },
  {
    id: 'ecran-projection',
    name: 'ecran_projection_name',
    description: 'ecran_projection_desc',
    image: 'https://images.unsplash.com/photo-1524903236960-9b489953894b?q=80&w=600&h=400&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ageSuitability: 'all_ages',
    features: ['Installation rapide', 'Grande surface de projection', 'Sac de transport inclus'],
    category: 'evenements',
    hint: 'inflatable screen'
  },
  {
    id: 'mascotte-publicitaire',
    name: 'mascotte_publicitaire_name',
    description: 'mascotte_publicitaire_desc',
    image: 'https://images.unsplash.com/photo-1574503794350-f813a84c8e7e?q=80&w=600&h=400&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ageSuitability: 'all_ages',
    features: ['Haute visibilité', 'Personnalisable', 'Impact fort'],
    category: 'promotionnelles',
    hint: 'inflatable mascot'
  },
  {
    id: 'dome-marque',
    name: 'dome_marque_name',
    description: 'dome_marque_desc',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&h=400&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ageSuitability: 'all_ages',
    features: ['Haute visibilité', 'Personnalisable', 'Idéal pour les salons'],
    category: 'promotionnelles',
    hint: 'branded dome tent'
  },
  {
    id: 'ecran-branding',
    name: 'ecran_branding_name',
    description: 'ecran_branding_desc',
    image: 'https://images.unsplash.com/photo-1611095966432-87cdf9913333?q=80&w=600&h=400&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image: 'https://images.unsplash.com/photo-1568602471322-7826d3a36c94?q=80&w=600&h=400&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&h=400&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd51622?q=80&w=600&h=400&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=600&h=400&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hint: 'decision making',
    contentKey: 'blog_choice_content',
    contentKey2: 'blog_choice_content2',
    contentKey3: 'blog_choice_content3'
  },
];

export const galleryImages: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1519638848496-c95574c10a45?q=80&w=600&h=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Enfants jouant dans un château gonflable', hint: 'children playing' },
  { src: 'https://images.unsplash.com/photo-1549298453-2c1854cc3334?q=80&w=600&h=800&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Toboggan géant lors d\'une fête d\'école', hint: 'giant slide' },
  { src: 'https://images.unsplash.com/photo-1533234421-44051a4456a6?q=80&w=800&h=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Parcours d\'obstacles coloré', hint: 'obstacle course' },
  { src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=600&h=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Fête d\'anniversaire avec thème pirate', hint: 'birthday party' },
  { src: 'https://images.unsplash.com/photo-1506522019183-5a0a38e5e3a8?q=80&w=800&h=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Structure aquatique en été', hint: 'water park' },
  { src: 'https://images.unsplash.com/photo-1554463441-3e42c554a9e5?q=80&w=600&h=800&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Sourires d\'enfants sur un jeu gonflable', hint: 'happy children' },
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&h=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Événement d\'entreprise avec des jeux pour adultes', hint: 'corporate event' },
  { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&h=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Installation de nos équipes', hint: 'team setup' },
];

export const blogCategories = ['all', 'safety', 'maintenance', 'events', 'tips'];
