"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, ChevronDown, Menu, SlidersHorizontal, Star } from "lucide-react";
import BottomNav from "../components/BottomNav";
import { CATEGORIES, FOODS, Category } from "../data/foods";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Biryani");

  const filteredFoods = FOODS.filter(food => food.category === activeCategory);

  return (
    <div className="relative w-full min-h-screen flex flex-col pb-24 pt-12 px-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md bg-white flex items-center justify-center">
          <Image src="/Img1.png" alt="Profile" width={48} height={48} className="object-cover h-full" />
        </div>
        <div className="flex items-center gap-1 font-medium">
          <MapPin size={18} />
          <span>Canada</span>
          <ChevronDown size={18} />
        </div>
        <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800">
          <Menu size={24} />
        </button>
      </div>

      {/* Hero Text */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold leading-tight">
          Ready to order your<br />favourite food ?
        </h1>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="flex items-center bg-white rounded-full p-2 shadow-lg">
          <Search className="text-gray-400 ml-3 mr-2" size={24} />
          <input 
            type="text" 
            placeholder="Search your food" 
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
          <button className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center hover:bg-[var(--color-primary-hover)] transition-colors">
            <SlidersHorizontal size={20} />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8 overflow-x-auto no-scrollbar pb-2 -mx-6 px-6">
        <div className="flex gap-4 w-max">
          {CATEGORIES.map((cat) => (
            <button 
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-2 py-2 px-4 rounded-full transition-colors ${
                activeCategory === cat.name 
                  ? "bg-[#EBAEAA] text-white shadow-md" 
                  : "bg-white text-gray-600 shadow-sm"
              }`}
            >
              <div className="w-8 h-8 rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5">
                <Image src={cat.image} alt={cat.name} width={32} height={32} className="object-cover rounded-full h-full" />
              </div>
              <span className={`font-semibold ${activeCategory === cat.name ? "text-white" : "text-gray-600"}`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Food */}
      <div className="mb-6 flex justify-between items-end">
        <h2 className="text-xl font-bold">Popular Food</h2>
        <button className="text-sm text-gray-500 font-medium hover:text-[var(--color-primary)]">See all</button>
      </div>

      {/* Food Scroll */}
      <div className="mb-12 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6">
        <div className="flex gap-6 w-max">
          {filteredFoods.map((food) => (
            <Link href={`/details/${food.id}`} key={food.id} className="w-56 bg-white rounded-3xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 shadow-lg border-4 border-white mt-2 bg-white">
                <Image src={food.image} alt={food.name} width={160} height={160} className="object-cover h-full" />
              </div>
              <h3 className="font-bold text-center mb-2 line-clamp-1 w-full text-lg">{food.name}</h3>
              
              <div className="w-full flex justify-between items-center mb-3">
                <div className="flex text-[#E85B52]">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} size={14} fill={star <= Math.floor(food.rating) ? "currentColor" : "none"} className={star <= Math.floor(food.rating) ? "text-[#E85B52]" : "text-gray-300"} />
                  ))}
                </div>
              </div>

              <div className="w-full flex items-center gap-1 text-sm text-gray-600 font-medium">
                <span>{food.distance} km</span>
                <span className="text-[#E85B52] mx-1">•</span>
                <span>{food.deliveryTime} min delivery</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <BottomNav />

      {/* Add a global style for hiding scrollbar if not present */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
