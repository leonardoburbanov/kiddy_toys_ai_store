'use client';

import { Product } from '@/lib/types';
import { ProductCarousel } from './product-carousel';

interface ProductDisplayProps {
  products: Product[];
  query: string;
  message: string;
}

/**
 * Product display component for rendering products in chat
 * This component is rendered when the AI calls the displayProducts tool
 * @param products - Array of products to display
 * @param query - The search query that was used
 * @param message - The message to display with the products
 */
export function ProductDisplay({ products, query, message }: ProductDisplayProps) {
  if (!products || products.length === 0) {
    return (
      <div className="mt-3 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">No products found for "{query}".</p>
      </div>
    );
  }

  return (
    <div className="mt-3">
      <p className="text-sm text-gray-700 mb-3">{message}</p>
      <ProductCarousel 
        products={products} 
        title=""
      />
    </div>
  );
} 