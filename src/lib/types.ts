export interface Inflatable {
  id: string;
  name: string; // This will now be a key for dictionary lookup
  description: string; // This will now be a key for dictionary lookup
  image: string;
  ageSuitability: string; // This will now be a key for dictionary lookup
  features: string[]; // These can also be keys if needed, but for now let's keep them
  category: 'ludiques' | 'aquatiques' | 'evenements' | 'promotionnelles';
  hint: string;
}

export interface BlogPost {
  slug: string;
  titleKey: string;
  excerptKey: string;
  date: string;
  categoryKey: 'safety' | 'maintenance' | 'events' | 'tips';
  image: string;
  hint: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  hint: string;
}
