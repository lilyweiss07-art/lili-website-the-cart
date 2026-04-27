import React from 'react';
import { Sparkles, Lock, Gift } from 'lucide-react';
import { motion } from 'motion/react';
import { CartTotals } from '@/types';

export function CartSummary({ totals }: { totals: CartTotals }) {
  return (
    <div className="space-y-8">
      <div className="brutalist-card p-10 bg-white border-2 border-primary">
        <div className="flex justify-between items-start mb-8">
          <h3 className="text-3xl font-black uppercase tracking-tight text-primary">
            SUMMARY / 01
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Cart Overview</span>
        </div>
        
        <div className="space-y-6 mb-10">
          <div className="flex justify-between items-center text-on-surface-variant font-bold uppercase tracking-widest text-[10px]">
            <span>Subtotal</span>
            <span className="text-lg font-black text-primary">{totals.subtotal.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between items-center text-on-surface-variant font-bold uppercase tracking-widest text-[10px]">
            <span>Shipping</span>
            <span className={totals.shipping === 0 ? "text-secondary font-black text-lg" : "text-lg font-black text-primary"}>
              {totals.shipping === 0 ? "FREE" : `${totals.shipping.toFixed(2)} €`}
            </span>
          </div>
          <div className="flex justify-between items-center text-on-surface-variant font-bold uppercase tracking-widest text-[10px]">
            <span>Tax (20%)</span>
            <span className="text-lg font-black text-primary">{totals.tax.toFixed(2)} €</span>
          </div>
        </div>

        <div className="flex justify-between items-end border-t-2 border-primary pt-8 mb-10">
          <span className="text-4xl font-black uppercase tracking-tighter text-primary">Total</span>
          <div className="text-right">
            <motion.p 
              key={totals.total}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-5xl font-black text-primary italic leading-none"
            >
              {totals.total.toFixed(2)}
            </motion.p>
            <p className="text-[10px] uppercase font-bold text-secondary tracking-[0.3em] mt-2">
              OR 3X {(totals.total / 3).toFixed(2)} €
            </p>
          </div>
        </div>

        <button className="w-full bg-primary text-white py-6 px-10 text-xl font-black uppercase tracking-[0.2em] border-2 border-primary hover:bg-white hover:text-primary transition-all shadow-[8px_8px_0px_#0047ab] active:translate-x-1 active:translate-y-1 active:shadow-none">
          CHECKOUT / NOW
        </button>

        <div className="mt-8 flex justify-between items-center opacity-40 grayscale">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em]">100% SECURE</span>
          <Lock className="w-4 h-4 stroke-[3]" />
        </div>
      </div>

      <div className="brutalist-card p-6 border-primary text-center bg-white">
        <p className="text-[10px] font-bold text-primary uppercase tracking-[0.5em] mb-4">
          Support / Inquiry
        </p>
        <a href="#" className="text-sm font-black uppercase tracking-widest underline decoration-2 underline-offset-4 hover:text-secondary">
          Contact Our Concierge
        </a>
      </div>
      
      <div className="brutalist-card p-6 flex flex-col gap-4 bg-white border-primary">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Promotion Code</span>
          <Gift className="text-primary w-4 h-4 stroke-[3]" />
        </div>
        <div className="flex gap-4">
          <input 
            type="text" 
            placeholder="ENTER CODE..." 
            className="flex-grow bg-surface border-2 border-primary p-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:bg-white placeholder:opacity-30"
          />
          <button className="bg-primary text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-secondary transition-colors">
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
}
