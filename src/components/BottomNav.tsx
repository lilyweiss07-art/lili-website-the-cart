import React from 'react';
import { Home, Sparkles, Heart, ShoppingBag, User } from 'lucide-react';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 h-24 px-6 pb-6 pt-4 bg-surface border-t-2 border-primary flex justify-around items-center md:hidden">
      <NavItem icon={<Home className="w-6 h-6 stroke-[2.5]" />} label="Collections" />
      <NavItem icon={<Sparkles className="w-6 h-6 stroke-[2.5]" />} label="Archive" />
      <div className="relative">
        <button className="bg-primary text-white w-16 h-16 border-2 border-primary flex items-center justify-center shadow-[4px_4px_0px_#0047ab]">
          <ShoppingBag className="w-7 h-7 stroke-[3]" />
        </button>
      </div>
      <NavItem icon={<Heart className="w-6 h-6 stroke-[2.5]" />} label="Saved" />
      <NavItem icon={<User className="w-6 h-6 stroke-[2.5]" />} label="Profile" />
    </nav>
  );
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-col items-center justify-center text-primary/40 hover:text-primary transition-colors">
      <div className="w-6 h-6">{icon}</div>
      <span className="text-[9px] uppercase font-black tracking-widest mt-2">{label}</span>
    </button>
  );
}
