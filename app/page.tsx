'use client';

import React, { useMemo } from "react";
import { ProductCard } from "@/components/product-card";
import { useSidebarContext } from "@/components/chat-layout";
import { useSearchContext } from "@/lib/search-context";
import { allProducts } from "@/lib/products";

/**
 * Main Home page displaying AI-powered early stimulation baby toys from Latam, US, and Europe.
 */
export default function Home() {
  const { searchQuery } = useSearchContext();

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return allProducts;
    }
    
    const query = searchQuery.toLowerCase().trim();
    return allProducts.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.price.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Get featured products from filtered results
  const filteredFeaturedProducts = useMemo(() => {
    return filteredProducts.slice(0, 3);
  }, [filteredProducts]);

  // Show no results message if no products match
  if (searchQuery.trim() && filteredProducts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center transition-all duration-300">
          <div className="text-gray-500 text-lg mb-2">No products found</div>
          <div className="text-gray-400 text-sm">Try adjusting your search terms</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content Area - Full Width */}
      <section className="py-4 w-full">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 transition-all duration-300">
            {/* Large Product Block (2/3 width) */}
            <div className="lg:col-span-2">
              <div className="bg-violet-300 rounded-xl border border-gray-200 p-1 h-full shadow-sm">
                {filteredFeaturedProducts[0] ? (
                  <ProductCard product={filteredFeaturedProducts[0]} size="large" />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500">
                    No featured products found
                  </div>
                )}
              </div>
            </div>
            
            {/* Two Smaller Stacked Products (1/3 width) */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="bg-violet-300 rounded-xl border border-gray-200 p-1 shadow-sm">
                {filteredFeaturedProducts[1] ? (
                  <ProductCard product={filteredFeaturedProducts[1]} size="small" />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500">
                    No products found
                  </div>
                )}
              </div>
              <div className="bg-violet-300 rounded-xl border border-gray-200 p-1 shadow-sm">
                {filteredFeaturedProducts[2] ? (
                  <ProductCard product={filteredFeaturedProducts[2]} size="small" />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500">
                    No products found
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Row - 4 Equal Blocks */}
      <section className="py-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full transition-all duration-300">
          {filteredProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-gray-200 p-1 shadow-sm">
              <ProductCard product={product} size="small" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
