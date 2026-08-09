// Utility to manage user-scoped and guest cart persistence across sessions

export function getCartKey(userId?: string | null): string {
  if (userId) {
    return `house_of_nayu_cart_${userId}`;
  }
  return 'house_of_nayu_cart_guest';
}

export function loadCartForUser(userId?: string | null): any[] {
  if (typeof window === 'undefined') return [];
  try {
    const key = getCartKey(userId);
    const saved = localStorage.getItem(key);
    if (saved) {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch (e) {
    console.error('Error reading cart from localStorage', e);
  }
  return [];
}

export function saveCartForUser(cartItems: any[], userId?: string | null): void {
  if (typeof window === 'undefined') return;
  try {
    const key = getCartKey(userId);
    localStorage.setItem(key, JSON.stringify(cartItems));
  } catch (e) {
    console.error('Error saving cart to localStorage', e);
  }
}

// Merge guest cart items into logged-in user cart when user signs in
export function syncCartOnLogin(newUserId: string): any[] {
  if (typeof window === 'undefined') return [];
  
  const guestCart = loadCartForUser(null);
  const userCart = loadCartForUser(newUserId);

  if (guestCart.length === 0) {
    return userCart;
  }

  // Merge items
  const merged = [...userCart];
  guestCart.forEach(guestItem => {
    const existingIndex = merged.findIndex(item => 
      (item.id || item.product?.id) === (guestItem.id || guestItem.product?.id)
    );
    if (existingIndex > -1) {
      merged[existingIndex].quantity = (merged[existingIndex].quantity || 1) + (guestItem.quantity || 1);
    } else {
      merged.push(guestItem);
    }
  });

  // Save merged cart to user account and clear guest cart
  saveCartForUser(merged, newUserId);
  saveCartForUser([], null);

  return merged;
}
