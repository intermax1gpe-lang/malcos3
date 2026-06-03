export interface CartItem {
  id: string;
  name: string;
  img: string;
  brand: string;
  url: string;
  qty: number;
}

const STORAGE_KEY = 'malcos_cart';
const WA_NUMBER = '51934852558';

function load(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
  } catch {
    return [];
  }
}

function save(items: CartItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('cart:update', { detail: items }));
}

export function getCart(): CartItem[] {
  return load();
}

export function addItem(item: Omit<CartItem, 'qty'>): void {
  const items = load();
  const existing = items.find(i => i.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    items.push({ ...item, qty: 1 });
  }
  save(items);
}

export function removeItem(id: string): void {
  save(load().filter(i => i.id !== id));
}

export function clearCart(): void {
  save([]);
}

export function getCount(): number {
  return load().reduce((sum, i) => sum + i.qty, 0);
}

export function buildWhatsAppUrl(items: CartItem[], extraMsg = ''): string {
  const list = items.map(i => `• ${i.name} (x${i.qty})`).join('\n');
  const msg = `Hola MALCOS, solicito cotización de los siguientes productos:\n\n${list}${extraMsg ? '\n\n' + extraMsg : ''}`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function buildSingleWhatsAppUrl(name: string, brand: string): string {
  const msg = `Hola MALCOS, deseo cotizar el producto:\n• ${name} (${brand})`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}
