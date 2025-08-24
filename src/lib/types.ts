export interface Inflatable {
  id: string;
  name: string;
  description: string;
  image: string;
  ageSuitability: string;
  features: string[];
  category: 'Structures ludiques' | 'Structures aquatiques et toboggans' | 'Structures pour événements' | 'Structures promotionnelles';
  hint: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: 'Sécurité' | 'Entretien' | 'Événements' | 'Conseils';
  image: string;
  hint: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  hint: string;
}
