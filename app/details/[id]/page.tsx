"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, Heart, Star, Minus, Plus, Check } from "lucide-react";
import { FOODS } from "../../data/foods";
import { use } from "react";
import { useCart } from "../../context/CartContext";

export default function DetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<"Small" | "Medium" | "Large">("Small");
  const [added, setAdded] = useState(false);
  
  const food = FOODS.find(f => f.id === id);

  if (!food) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Food not found</h1>
        <button onClick={() => router.back()} className="mt-4 text-[var(--color-primary)]">Go Back</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(food, quantity, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col pt-12 px-6 pb-24">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => router.back()} className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 transition-transform active:scale-95 hover:bg-gray-100">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">Details</h1>
        <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 transition-transform active:scale-95 hover:bg-gray-100">
          <Heart size={24} className="fill-current" />
        </button>
      </div>

      <div className="flex-1 relative flex flex-col">
        {/* Title and Mobile Layout Area */}
        <div className="flex flex-col h-full justify-center">
          <div className="mb-6 z-10 relative">
            <h2 className="text-3xl font-bold mb-2">{food.category} Bliss</h2>
            <div className="flex items-center gap-1 text-sm font-medium">
              <Star size={16} className="text-[var(--color-primary)] fill-current" />
              <span className="text-gray-600">{food.rating} ({food.reviews} review)</span>
            </div>
          </div>

          <div className="relative flex justify-between mb-8 z-10">
            {/* Data Columns */}
            <div className="flex flex-col gap-6 pt-2">
              <div>
                <p className="text-gray-500 font-medium mb-1">Price</p>
                <p className="text-xl font-bold">$ {food.price.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium mb-1">Calories</p>
                <p className="text-lg font-bold">{food.calories} Cal</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium mb-1">Diameter</p>
                <p className="text-lg font-bold">{food.diameter.toFixed(2)} Cm</p>
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mt-2">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white flex items-center justify-center shadow-md transition-transform active:scale-90"
                >
                  <Minus size={16} />
                </button>
                <span className="font-bold text-lg w-6 text-center">
                  {quantity < 10 ? `0${quantity}` : quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white flex items-center justify-center shadow-md transition-transform active:scale-90"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Mobile Image Container - Overflows screen */}
            <div className="absolute -right-24 top-0 w-72 h-72 rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-8 border-white bg-white">
              <Image src={food.image} alt={food.name} fill className="object-cover mix-blend-multiply" />
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-6 z-10 relative mt-8">
            <p className="text-gray-500 font-medium mb-4">Size</p>
            <div className="flex gap-4">
              {(["Small", "Medium", "Large"] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-6 rounded-full font-semibold transition-colors ${
                    selectedSize === size 
                      ? "bg-[var(--color-primary)] text-white shadow-md" 
                      : "bg-[#EAEAEA] text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="z-10 relative mb-8">
            <p className="text-gray-600 text-[15px] leading-relaxed">
              {food.description}
              <span className="font-bold text-black ml-1 cursor-pointer hover:underline">...more_</span>
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Action Button */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[428px] px-6 pb-8 pt-4 bg-gradient-to-t from-[var(--color-background-end)] via-[var(--color-background-end)] to-transparent z-50">
        <button 
          onClick={handleAddToCart}
          disabled={added}
          className={`w-full font-bold py-4 rounded-3xl text-lg shadow-[0_8px_20px_rgba(232,91,82,0.3)] transition-all active:scale-95 flex items-center justify-center gap-2 ${
            added ? "bg-green-500 text-white" : "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white"
          }`}
        >
          {added ? <><Check size={20} /> Added to Cart</> : "Add to Cart"}
        </button>
        {/* iOS style home indicator bar */}
        <div className="w-1/3 h-1.5 bg-gray-300 rounded-full mt-6 mx-auto"></div>
      </div>
    </div>
  );
}
