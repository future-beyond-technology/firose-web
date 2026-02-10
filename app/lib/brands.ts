export type BrandContact = {
  personName: string;
  role: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  cityRegion: string;
};

export type BrandDefinition = {
  slug: 'neat-fresh' | 'ar-perfumes' | 'femison';
  name: string;
  category: string;
  shortDescription: string;
  portfolioDescription: string;
  contact: BrandContact;
};

export const brandCatalog: BrandDefinition[] = [
  {
    slug: 'neat-fresh',
    name: 'Neat & Fresh',
    category: 'Hygiene',
    shortDescription: 'Housekeeping products for homes, offices, and commercial facilities.',
    portfolioDescription: 'Hygiene-first cleaning products for household, office, and commercial spaces.',
    contact: {
      personName: 'Neat & Fresh Distribution Lead',
      role: 'Brand Distribution Contact',
      phone: '+91 9790600220',
      phoneDisplay: '+91 9790600220',
      whatsappNumber: '919790600220',
      whatsappDisplay: '+91 9790600220',
      email: 'info.firoseenterprises@gmail.com',
      cityRegion: 'India',
    },
  },
  {
    slug: 'ar-perfumes',
    name: 'AR Perfumes',
    category: 'Fragrance',
    shortDescription: 'Premium fragrance label with signature attars and gifting collections.',
    portfolioDescription: 'Premium fragrance brand with signature attars, product highlights, and brand-led storytelling.',
    contact: {
      personName: 'AR Perfumes Brand Lead',
      role: 'Fragrance Sales Contact',
      phone: '+91 7904674841',
      phoneDisplay: '+91 7904674841',
      whatsappNumber: '917904674841',
      whatsappDisplay: '+91 7904674841',
      email: 'contact.arperfumes@gmail.com',
      cityRegion: 'India',
    },
  },
  {
    slug: 'femison',
    name: 'Femison',
    category: 'Healthcare',
    shortDescription: 'Baby care-focused gripe water portfolio built for everyday trust.',
    portfolioDescription: 'Baby care-focused gripe water positioning with safety, trust, and caregiver confidence.',
    contact: {
      personName: 'Femison Medical Liaison Lead',
      role: 'Medical Channel Contact',
      phone: '+91 9790600220',
      phoneDisplay: '+91 9790600220',
      whatsappNumber: '919790600220',
      whatsappDisplay: '+91 9790600220',
      email: 'info.firoseenterprises@gmail.com',
      cityRegion: 'India',
    },
  },
];

export function getBrandUrl(slug: BrandDefinition['slug']): string {
  return `/brands/${slug}`;
}

export function getBrandBySlug(slug: BrandDefinition['slug']): BrandDefinition {
  const brand = brandCatalog.find((item) => item.slug === slug);

  if (!brand) {
    throw new Error(`Unknown brand slug: ${slug}`);
  }

  return brand;
}

export function buildBrandWhatsAppUrl(contact: BrandContact, message: string): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildBrandMailToUrl(contact: BrandContact, subject: string, body?: string): string {
  const params = new URLSearchParams({
    subject,
    body: body ?? '',
  });

  return `mailto:${contact.email}?${params.toString()}`;
}
