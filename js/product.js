/**
 * AR Perfume — Product detail page data and render
 */

const PRODUCTS = {
  'pure-oud': {
    name: 'Pure Oud',
    image: 'images/pure-oud.png',
    tagline: 'Where depth meets devotion.',
    description: 'An uncompromising expression of oud, distilled for those who demand authenticity. Pure Oud captures the soul of the wood—rich, resinous, and enduring. A single drop defines the wearer.',
    notes: 'Oud · Woody · Warm · Persistent',
  },
  'magna': {
    name: 'Magna',
    image: 'images/magna.png',
    tagline: 'Presence without announcement.',
    description: 'Magna is built for the confident. A bold yet refined composition that lingers in the air and in memory. Crafted for those who lead with quiet authority and timeless style.',
    notes: 'Amber · Spice · Leather · Depth',
  },
  '7-boys': {
    name: '7 Boys',
    image: 'images/7-boys.png',
    tagline: 'Seven dimensions of character.',
    description: 'A multifaceted fragrance that reveals itself in layers. 7 Boys weaves tradition with modernity—each note a facet of sophistication. For the one who refuses to be defined by a single impression.',
    notes: 'Floral · Woody · Musk · Citrus · Spice · Amber · Oud',
  },
  'lord': {
    name: 'Lord',
    image: 'images/lord.png',
    tagline: 'Command respect. Invite intrigue.',
    description: 'Lord is the fragrance of authority and elegance. Timeless in structure, commanding in presence. Worn by those who understand that true power needs no volume—only intention.',
    notes: 'Oud · Leather · Tobacco · Vanilla',
  },
  'opal': {
    name: 'Opal',
    image: 'images/opal.png',
    tagline: 'Rare. Luminous. Unforgettable.',
    description: 'Like the stone that bears its name, Opal catches the light in unexpected ways. A luminous blend that feels both precious and wearable—for moments that deserve to be remembered.',
    notes: 'Floral · Powdery · Soft woods · Musk',
  },
  'abaya': {
    name: 'Abaya',
    image: 'images/abaya.png',
    tagline: 'Grace that speaks in silence.',
    description: 'Abaya embodies understated luxury. Flowing, elegant, and deeply refined. A fragrance for those who prefer impact through subtlety—grace and quiet strength in every note.',
    notes: 'Rose · Oud · Saffron · Soft musk',
  },
};

function getProductSlug() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name') || '';
  return name.toLowerCase().replace(/\s+/g, '-');
}

function setProductContent(product) {
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-tagline').textContent = product.tagline;
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-notes').textContent = product.notes;

  var img = document.getElementById('product-image');
  if (img && product.image) {
    img.src = product.image;
    img.alt = product.name + ' — AR Perfume';
    img.decoding = 'async';
    if (!img.getAttribute('loading')) {
      img.loading = 'lazy';
    }
  }

  document.title = product.name + ' — AR PERFUME';
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', product.tagline + ' ' + product.description.slice(0, 120) + '…');
}

function initProductPage() {
  const slug = getProductSlug();
  const product = PRODUCTS[slug];

  if (product) {
    setProductContent(product);
  } else {
    const first = Object.values(PRODUCTS)[0];
    setProductContent(first);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProductPage);
} else {
  initProductPage();
}
