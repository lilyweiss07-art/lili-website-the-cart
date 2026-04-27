import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Sparkles, Stars } from 'lucide-react';
import { Header } from '@/components/Header';
import { CartItemCard } from '@/components/CartItemCard';
import { CartSummary } from '@/components/CartSummary';
import { BottomNav } from '@/components/BottomNav';
import { CartItem } from '@/types';

const INITIAL_ITEMS: CartItem[] = [
  {
    id: '1',
    name: 'Escarpins de Cristal Rose',
    price: 120.0,
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCw5KLUeM1aj_6hPv2z58Bf6eS7zRJN73lfYxZ3SGo4GlMxkkDTsCaD8BwyBPjiI8NY1AK9FDnYbvpH1GJOiiUXtx-1McIbwYx4YblsQ8Qex-gV02d2Iql3fkSiLNkQ-Hrk_Nfy5Kq8Zb_avEF4dK3Lp907pqIrld4mWsfH_bvDlW9m1N-Bq9ZEvgAPtmECy_xzUPUz_691NeyUEjYbLHGmF6EHY2QcFE9g9nOkhxU6gXRRtQPXdq-6x8-hg3IS0rJgmiaQUzGU1ixO',
    size: '38',
    color: 'Rose Poudré'
  },
  {
    id: '2',
    name: 'Pantoufles en Soie Perle',
    price: 45.0,
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdZJAZTMb8QXVss-NCtAYpTjsMFqfkJIn7k-pucfg8BvrCJiuD0I5LMFZV9G3ZV7eYKyXmxLhdM4ipNe1aZ7Ree0yB7rTlRBdcEhyRivrG-KbGkVpZd6ZCOrt0dcf6IGUgG4ygZtzQAwz9NNFohIVPsCeMLUSv8A_slbf34owiFSB0-ODl3LEfUoDeeDT5yUT4dJgQPQlIvgUJ9p3FD5mDgWs3h7atD05DSu_Kg0-17nubNK3syOtRKQhyXfYiAejVvBspIsjDcmRU',
    size: 'Unique',
    color: 'Blanc Nacré'
  }
];

export default function App() {
  const [items, setItems] = useState<CartItem[]>(INITIAL_ITEMS);

  const cartCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 150 ? 0 : 15.00;
    const tax = subtotal * 0.2;
    return {
      subtotal,
      shipping,
      tax,
      total: subtotal + shipping
    };
  }, [items]);

  const updateQuantity = (id: string, delta: number) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen pb-24 md:pb-12 bg-surface text-primary border-[8px] border-primary m-4">
      <Header cartCount={cartCount} />
      
      <main className="max-w-7xl mx-auto pt-32 px-10">
        <header className="mb-20 relative border-b border-primary pb-12">
          <div className="flex justify-between items-end">
            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-[0.6em] text-secondary mb-4 block">Feature / 001</span>
              <h2 className="text-[120px] leading-[0.8] font-black uppercase tracking-tighter">
                THE<br/>
                <span className="text-secondary italic">CART</span><br/>
                VOYAGE
              </h2>
            </div>
            <div className="text-right hidden md:block max-w-xs">
              <p className="text-xl italic leading-relaxed text-on-surface-variant font-serif">
                A curated selection of enchanted vessels for your journey through the ephemeral.
              </p>
              <div className="mt-8 flex justify-end items-center gap-4">
                <div className="h-[1px] w-20 bg-primary"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Established MMXXIV</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <section className="lg:col-span-8 space-y-8">
            <motion.div 
              initial={{ bg: "#f5f5f0" }}
              animate={{ bg: "#1a1a1a" }}
              className="p-8 flex items-center justify-between text-white border-2 border-primary"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <div className="flex items-center gap-6">
                <span className="text-4xl font-black italic">24'</span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-60">Loyalty Perk</p>
                  <p className="text-lg font-black uppercase tracking-tight">Complimentary Shipping Over 150€</p>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full border border-white flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
            </motion.div>

            <AnimatePresence mode="popLayout">
              {items.length > 0 ? (
                items.map(item => (
                  <CartItemCard 
                    key={item.id} 
                    item={item} 
                    onUpdateQuantity={updateQuantity} 
                    onRemove={removeItem}
                  />
                ))
              ) : (
                <motion.div 
                  className="brutalist-card p-20 text-center bg-white"
                >
                  <h3 className="text-6xl font-black uppercase tracking-tighter text-secondary mb-4">Empty / 00</h3>
                  <p className="text-xl font-bold uppercase tracking-widest text-on-surface-variant italic">Seek your dream vessels elsewhere.</p>
                  <button onClick={() => setItems(INITIAL_ITEMS)} className="mt-12 bg-primary text-white px-12 py-6 text-xl font-black uppercase tracking-widest hover:bg-secondary transition-all">
                    Reset Reality
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          <aside className="lg:col-span-4 lg:sticky lg:top-32 pb-12">
            <CartSummary totals={totals} />
          </aside>
        </div>
      </main>

      <BottomNav />

      {/* Aesthetic Side Label */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden xl:block">
        <span className="text-[10px] font-bold uppercase tracking-[1em] text-primary opacity-20">CURATED / AURA / LABS</span>
      </div>
    </div>
  );
}
