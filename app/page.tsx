'use client';

import React, { useMemo } from "react";
import { Product } from "@/lib";
import { ProductCard } from "@/components/product-card";
import { useSidebarContext } from "@/components/chat-layout";
import { useSearchContext } from "@/lib/search-context";

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Smart Learning Flashcard Device",
    price: "$19.99 USD",
    image: "/products/tarjetas_inteligentes.jpg",
  },
  {
    id: 2,
    name: "Spike the Fine Motor Hedgehog®",
    price: "$19.99 USD",
    image: "/products/spike.jpg",
  },
  {
    id: 3,
    name: "Botley® 2.0 the Coding Robot Activity Set",
    price: "$199.99 USD",
    image: "/products/bot.jpg",
  },
];

const allProducts: Product[] = [
  ...featuredProducts,
  {
    id: 4,
    name: "Big Feelings Pineapple",
    price: "$129.99 USD",
    image: "/products/pineapple.jpg",
  },
];

/**
 * Main Home page displaying AI-powered early stimulation baby toys from Latam, US, and Europe.
 */
export default function Home() {
  const { isOpen } = useSidebarContext();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content Area - Full Width */}
      <section className="py-4 w-full">
        <div className="w-full">
          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 transition-all duration-300 ${
            isOpen ? 'lg:pr-80' : 'lg:pr-0'
          }`}>
            {/* Large Product Block (2/3 width) */}
            <div className="lg:col-span-2">
              <div className="bg-violet-300 rounded-xl border border-gray-200 p-1 h-full shadow-sm">
                <ProductCard product={featuredProducts[0]} size="large" />
              </div>
            </div>
            
            {/* Two Smaller Stacked Products (1/3 width) */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="bg-violet-300 rounded-xl border border-gray-200 p-1 shadow-sm">
                <ProductCard product={featuredProducts[1]} size="small" />
              </div>
              <div className="bg-violet-300 rounded-xl border border-gray-200 p-1 shadow-sm">
                <ProductCard product={featuredProducts[2]} size="small" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Row - 4 Equal Blocks */}
      <section className="py-4 w-full">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full transition-all duration-300 ${
          isOpen ? 'lg:pr-80' : 'lg:pr-0'
        }`}>
          {allProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-gray-200 p-1 shadow-sm">
              <ProductCard product={product} size="small" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
