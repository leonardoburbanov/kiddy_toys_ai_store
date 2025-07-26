'use client';

import { Product } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Image from 'next/image';

interface ProductCarouselProps {
  products: Product[];
  title?: string;
}

/**
 * Product carousel component for displaying products in chat
 * @param products - Array of products to display
 * @param title - Optional title for the carousel
 */
export function ProductCarousel({ products, title }: ProductCarouselProps) {
  console.log('=== PRODUCT CAROUSEL DEBUG ===');
  console.log('Products received:', products);
  console.log('Products length:', products?.length);
  console.log('Products type:', typeof products);
  
  const [startIndex, setStartIndex] = useState(0);
  const productsPerView = 2; // Show 2 products at a time for better mobile experience

  const nextProducts = () => {
    setStartIndex(prev => Math.min(prev + productsPerView, products.length - productsPerView));
  };

  const prevProducts = () => {
    setStartIndex(prev => Math.max(prev - productsPerView, 0));
  };

  const visibleProducts = products.slice(startIndex, startIndex + productsPerView);

  if (!products || products.length === 0) {
    console.log('ProductCarousel: No products, returning null');
    return null;
  }

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#7829DF' }}></div>
          {title}
        </h3>
      )}
      
      <div className="relative">
        {/* Navigation Buttons */}
        {startIndex > 0 && (
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-white border-gray-200 shadow-sm hover:bg-gray-50"
            onClick={prevProducts}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
        
        {startIndex + productsPerView < products.length && (
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-white border-gray-200 shadow-sm hover:bg-gray-50"
            onClick={nextProducts}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}

        {/* Products Grid */}
        <div className="flex gap-3 overflow-hidden">
          {visibleProducts.map((product) => (
            <Card key={product.id} className="flex-shrink-0 w-44 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="p-3 pb-2">
                <div className="relative w-full h-20 mb-2">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <CardTitle className="text-xs font-medium text-gray-900 line-clamp-2">
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <p className="text-sm font-semibold text-purple-600 mb-1">
                  {product.price}
                </p>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Age: {product.ageRange}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Dots indicator */}
        {products.length > productsPerView && (
          <div className="flex justify-center mt-3 gap-1">
            {Array.from({ length: Math.ceil(products.length / productsPerView) }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === Math.floor(startIndex / productsPerView) 
                    ? 'bg-purple-600' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 