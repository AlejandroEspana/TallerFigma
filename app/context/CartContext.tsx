"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { FoodItem } from "../data/foods";

interface CartItem extends FoodItem {
  quantity: number;
  size: "Small" | "Medium" | "Large";
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: FoodItem, quantity: number, size: "Small" | "Medium" | "Large") => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("food_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error parsing cart data", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("food_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: FoodItem, quantity: number, size: "Small" | "Medium" | "Large") => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id && i.size === size);
      if (existing) {
        return prev.map(i => i.id === item.id && i.size === size ? { ...i, quantity: i.quantity + quantity } : i);
      }
      return [...prev, { ...item, quantity, size }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
