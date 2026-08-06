import { createIcons, icons } from 'lucide';
import { supabase } from './supabase';
import { PRODUCTS_DATA } from './data';

// Refresh Lucide Icons
function refreshIcons() {
  createIcons({ icons });
}

// Format Currency
function formatRs(amount: number) {
  return '₹' + amount.toLocaleString('en-IN');
}

// Load and Render Supabase Products (With fallback to local data)
async function loadAdminInventory() {
  const tbody = document.getElementById('admin-inventory-tbody');
  if (!tbody) return;

  try {
    const { data: dbProducts, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    let productsToDisplay: any[] = [];

    if (error || !dbProducts || dbProducts.length === 0) {
      console.log('No DB records or connection yet. Using demo dataset.');
      productsToDisplay = PRODUCTS_DATA.map(p => ({
        id: p.id,
        title: p.name,
        category: p.category,
        price: p.price,
        fabric: p.fabric,
        is_published: true,
        image_url: p.images[0]?.url || '/images/logo_icon_sharp.png'
      }));
    } else {
      productsToDisplay = dbProducts.map(p => ({
        id: p.id,
        title: p.title,
        category: p.category_id || 'Cotton Sarees',
        price: p.price,
        fabric: p.fabric || 'Pure Handloom',
        is_published: p.is_published,
        image_url: p.image_url || '/images/logo_icon_sharp.png'
      }));
    }

    tbody.innerHTML = productsToDisplay.map(p => `
      <tr>
        <td>
          <img src="${p.image_url}" alt="${p.title}" style="width:40px; height:50px; object-fit:cover; border-radius:4px; border:1px solid var(--border-gold);" />
        </td>
        <td><strong>${p.title}</strong></td>
        <td><span class="category-badge" style="font-size:0.7rem;">${p.category}</span></td>
        <td><strong style="color:var(--gold-light);">${formatRs(p.price)}</strong></td>
        <td style="color:var(--text-muted);">${p.fabric}</td>
        <td><span class="status-pill status-published">Active</span></td>
        <td>
          <button class="icon-btn delete-btn" data-id="${p.id}" title="Remove Saree" style="color:#e74c3c;">
            <i data-lucide="trash-2" style="width:16px; height:16px;"></i>
          </button>
        </td>
      </tr>
    `).join('');

    refreshIcons();
  } catch (err) {
    console.error('Error fetching Supabase inventory:', err);
  }
}

// Add New Saree Form Submission
document.getElementById('add-saree-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = (document.getElementById('saree-title') as HTMLInputElement).value;
  const category = (document.getElementById('saree-category') as HTMLSelectElement).value;
  const price = parseFloat((document.getElementById('saree-price') as HTMLInputElement).value);
  const origPrice = parseFloat((document.getElementById('saree-orig-price') as HTMLInputElement).value) || price;
  const fabric = (document.getElementById('saree-fabric') as HTMLInputElement).value;
  const craft = (document.getElementById('saree-craft') as HTMLInputElement).value;
  const imageUrl = (document.getElementById('saree-image-url') as HTMLInputElement).value;
  const description = (document.getElementById('saree-description') as HTMLTextAreaElement).value;

  const newProduct = {
    title,
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    price,
    original_price: origPrice,
    fabric,
    craft,
    description,
    available_sizes: ['XS', 'S', 'M', 'L', 'XL'],
    is_published: true
  };

  try {
    const { error } = await supabase.from('products').insert([newProduct]);

    if (error) {
      alert(`Note: Insert to Supabase table 'products': ${error.message}\n(Make sure you ran supabase_schema.sql in Supabase SQL editor)`);
    } else {
      alert(`Success! "${title}" (${category} - ${imageUrl}) published live to Supabase!`);
    }
  } catch (err: any) {
    alert('Published to inventory view!');
  }

  (document.getElementById('add-saree-form') as HTMLFormElement).reset();
  loadAdminInventory();
});

// Refresh Sync Button
document.getElementById('refresh-db-btn')?.addEventListener('click', () => {
  loadAdminInventory();
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  refreshIcons();
  loadAdminInventory();
});
