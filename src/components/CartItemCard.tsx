import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import { CartItem } from '@/types';

interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export function CartItemCard({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <motion.div 
      layout
      className="brutalist-card p-6 flex flex-col sm:flex-row gap-8 relative bg-white"
    >
      <div className="w-full sm:w-40 h-40 border border-primary overflow-hidden flex-shrink-0 bg-surface">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>

      <div className="flex-grow flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="relative">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-2 block">Item / 00{item.id}</span>
            <h4 className="text-3xl font-black uppercase tracking-tight text-primary leading-none">
              {item.name}
            </h4>
            <div className="mt-4 flex gap-6 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              <span>Size: {item.size}</span>
              <span>Color: {item.color}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-black text-primary italic">
              {item.price.toFixed(2)}
            </p>
            <p className="text-xs font-bold uppercase tracking-widest">EUR</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 border-t border-primary/10 pt-6">
          <div className="flex items-center border-2 border-primary bg-primary text-white">
            <button 
              onClick={() => onUpdateQuantity(item.id, -1)}
              className="w-10 h-10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors disabled:opacity-30"
              disabled={item.quantity <= 1}
            >
              <Minus className="w-5 h-5 stroke-[3]" />
            </button>
            <span className="font-bold text-lg w-12 text-center border-x-2 border-white/20">
              {item.quantity}
            </span>
            <button 
              onClick={() => onUpdateQuantity(item.id, 1)}
              className="w-10 h-10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
            >
              <Plus className="w-5 h-5 stroke-[3]" />
            </button>
          </div>

          <button 
            onClick={() => onRemove(item.id)}
            className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] hover:text-secondary transition-colors"
          >
            <Trash2 className="w-4 h-4 stroke-[3]" />
            Remove / Del
          </button>
        </div>
      </div>
    </motion.div>
  );
}
