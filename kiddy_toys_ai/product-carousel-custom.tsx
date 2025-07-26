import { Product } from "@/lib";
import { ProductCard } from "@/components/product-card";

interface ProductCarouselCustomProps {
  products: Product[];
}

/**
 * Horizontal scrollable carousel component for displaying products
 * @param products - Array of products to display in the carousel
 */
export function ProductCarouselCustom({ products }: ProductCarouselCustomProps) {
  return (
    <div className="mb-16">
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {products.map((product) => (
            <div key={product.id} className="min-w-[280px] flex-shrink-0">
              <ProductCard product={product} size="small" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 