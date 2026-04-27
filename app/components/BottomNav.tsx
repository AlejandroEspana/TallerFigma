"use client";

import { Home, Heart, Trash2, Bell } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function BottomNav() {
  const pathname = usePathname();
  const { cart } = useCart();
  
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navItems = [
    { icon: Home, path: "/home", activeColor: "bg-[var(--color-primary)] text-white", inactiveColor: "text-gray-400" },
    { icon: Heart, path: "/favorites", activeColor: "bg-[var(--color-primary)] text-white", inactiveColor: "text-gray-400" },
    { icon: Trash2, path: "/cart", activeColor: "bg-[var(--color-primary)] text-white", inactiveColor: "text-gray-400", badge: cartItemsCount },
    { icon: Bell, path: "/notifications", activeColor: "bg-[var(--color-primary)] text-white", inactiveColor: "text-gray-400" },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[428px] bg-[linear-gradient(to_bottom,transparent,var(--color-background-end)_20%)] pb-8 pt-4 px-8 flex justify-between items-center z-50">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = pathname === item.path;
        return (
          <Link key={index} href={item.path} className={`relative p-3 rounded-full transition-colors ${isActive ? item.activeColor : item.inactiveColor} hover:bg-gray-100`}>
            <Icon size={24} />
            {item.badge ? (
              <span className="absolute top-0 right-0 w-5 h-5 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1">
                {item.badge}
              </span>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
}
