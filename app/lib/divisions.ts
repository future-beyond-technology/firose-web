import { brandVisuals } from './brandVisuals';

export type DivisionDefinition = {
  id: 'ar-perfumes' | 'femison' | 'neat-fresh' | 'future-beyond-technology';
  name: string;
  category: string;
  description: string;
  href: string;
  external?: boolean;
  image: string;
  imageAlt: string;
  theme?: 'default' | 'tech';
};

export const FBT_WEBSITE_URL = 'https://futurebeyondtech.in/';

export const divisionCatalog: DivisionDefinition[] = [
  {
    id: 'ar-perfumes',
    name: 'AR Perfumes',
    category: 'Luxury Fragrance',
    description:
      'Luxury fragrance division focused on premium attars, gifting collections, and identity-led brand storytelling.',
    href: '/brands/ar-perfumes',
    image: brandVisuals['ar-perfumes'].cardImage,
    imageAlt: brandVisuals['ar-perfumes'].alt,
  },
  {
    id: 'femison',
    name: 'Femison',
    category: 'Women Lifestyle',
    description:
      'Women lifestyle and wellness-led division focused on trust, safety communication, and category relevance.',
    href: '/brands/femison',
    image: brandVisuals.femison.cardImage,
    imageAlt: brandVisuals.femison.alt,
  },
  {
    id: 'neat-fresh',
    name: 'Neat & Fresh',
    category: 'Hygiene / FMCG',
    description:
      'Hygiene and FMCG division delivering housekeeping solutions for homes, offices, and institutional channels.',
    href: '/brands/neat-fresh',
    image: brandVisuals['neat-fresh'].cardImage,
    imageAlt: brandVisuals['neat-fresh'].alt,
  },
  {
    id: 'future-beyond-technology',
    name: 'Future Beyond Technology (FBT)',
    category: 'AI & Cybersecurity',
    description:
      'An AI-driven software engineering and cybersecurity division focused on automation, secure architecture, and enterprise-grade systems.',
    href: FBT_WEBSITE_URL,
    external: true,
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80',
    imageAlt: 'Advanced technology workspace with secure digital systems',
    theme: 'tech',
  },
];
