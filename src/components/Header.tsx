import React from 'react';
import { Menu, ShoppingBag } from 'lucide-react';

export function Header({ cartCount }: { cartCount: number }) {
  return (
    <header className="fixed top-0 left-0 w-full h-20 z-50 bg-surface border-b border-primary flex items-center justify-between px-10">
      <div className="flex items-center gap-8">
        <button className="text-primary hover:opacity-80 transition-opacity">
          <Menu className="w-8 h-8 stroke-[3]" />
        </button>
        <h1 className="text-3xl font-black uppercase tracking-tighter text-primary">
          PIEDS / FÉE
        </h1>
      </div>
      
      <div className="flex items-center">
        <button className="relative p-2 text-primary hover:opacity-80 transition-opacity border-2 border-primary bg-primary text-white px-6 py-2 flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest">Bag</span>
          <ShoppingBag className="w-5 h-5 stroke-[3]" />
          {cartCount > 0 && (
            <span className="bg-secondary text-white text-[10px] min-w-4 h-4 flex items-center justify-center font-bold px-1">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
