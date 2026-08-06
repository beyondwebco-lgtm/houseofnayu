export interface ProductImage {
  id: string;
  url: string;
  type: 'full' | 'detail' | 'blouse';
}

export interface Product {
  id: string;
  name: string;
  category: 'Cotton Sarees' | 'Silk Sarees' | 'Chiffon Sarees' | 'Kota Sarees' | 'Sico Sarees';
  price: number;
  originalPrice: number;
  description: string;
  fabric: string;
  craft: string;
  blouseIncluded: boolean;
  availableSizes: string[];
  images: ProductImage[];
  isFeatured?: boolean;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'saree-cotton-001',
    name: 'Aura Purple Ikkat Handloom Cotton Saree',
    category: 'Cotton Sarees',
    price: 3499,
    originalPrice: 4999,
    description: 'Exquisite deep royal purple handloom cotton saree featuring traditional magenta Ikkat motifs, ornate woven borders, and matching tassels on the pallu.',
    fabric: 'Pure Organic Breathable Cotton',
    craft: 'Traditional Sambalpuri Ikkat Weave',
    blouseIncluded: true,
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    isFeatured: true,
    images: [
      { id: 'c1', url: '/images/cotton_1/model_full.jpg', type: 'full' },
      { id: 'c2', url: '/images/cotton_1/pleats_detail.jpg', type: 'detail' },
      { id: 'c3', url: '/images/cotton_1/blouse.png', type: 'blouse' }
    ]
  },
  {
    id: 'saree-silk-001',
    name: 'Royal Ebony Zari Woven Pure Silk Saree',
    category: 'Silk Sarees',
    price: 8999,
    originalPrice: 12499,
    description: 'A masterpiece in midnight black pure silk drapes, adorned with opulent antique gold zari brocade borders and handcrafted fringe tassels.',
    fabric: '100% Pure Mulberry Silk',
    craft: 'Kanjivaram Style Antique Gold Zari Weave',
    blouseIncluded: true,
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    isFeatured: true,
    images: [
      { id: 's1', url: '/images/silk_1/model_full.jpg', type: 'full' },
      { id: 's2', url: '/images/silk_1/border_detail.jpg', type: 'detail' },
      { id: 's3', url: '/images/silk_1/blouse.png', type: 'blouse' }
    ]
  },
  {
    id: 'saree-chiffon-001',
    name: 'Golden Ochre Printed Pure Chiffon Saree',
    category: 'Chiffon Sarees',
    price: 4299,
    originalPrice: 5999,
    description: 'Ultra-lightweight ochre mustard yellow pure chiffon saree embellished with delicate white Warli print patterns and shimmering gold woven borders.',
    fabric: 'Pure Sheer Pure Chiffon',
    craft: 'Warli Art Print with Zari Border',
    blouseIncluded: true,
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    isFeatured: true,
    images: [
      { id: 'ch1', url: '/images/chiffon_1/model_full.png', type: 'full' },
      { id: 'ch2', url: '/images/chiffon_1/detail.jpg', type: 'detail' },
      { id: 'ch3', url: '/images/chiffon_1/blouse.png', type: 'blouse' }
    ]
  },
  {
    id: 'saree-kota-001',
    name: 'Heritage Crimson & Beige Kota Doria Saree',
    category: 'Kota Sarees',
    price: 3899,
    originalPrice: 5299,
    description: 'Authentic Kota Doria saree showcasing checkered grid weaves in rich beige and crimson red with intricate black temple border accents.',
    fabric: 'Pure Kota Doria Cotton-Silk',
    craft: 'Authentic Khat Square Weave',
    blouseIncluded: true,
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    isFeatured: true,
    images: [
      { id: 'k1', url: '/images/kota_1/model_full.jpg', type: 'full' },
      { id: 'k2', url: '/images/kota_1/pleats_detail.jpg', type: 'detail' },
      { id: 'k3', url: '/images/kota_1/blouse.png', type: 'blouse' }
    ]
  },
  {
    id: 'saree-sico-001',
    name: 'Imperial Indigo Paisley Sico Blend Saree',
    category: 'Sico Sarees',
    price: 4999,
    originalPrice: 6999,
    description: 'Lustrous navy indigo Sico (Silk-Cotton blend) saree boasting traditional Kashmiri paisley embroidery print borders and a striking rich pallu.',
    fabric: 'Premium Sico (Silk + Cotton)',
    craft: 'Paisley Floral Printed Border Work',
    blouseIncluded: true,
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    isFeatured: true,
    images: [
      { id: 'sc1', url: '/images/sico_1/model_full.jpg', type: 'full' },
      { id: 'sc2', url: '/images/sico_1/detail.jpg', type: 'detail' },
      { id: 'sc3', url: '/images/sico_1/blouse.png', type: 'blouse' }
    ]
  }
];
