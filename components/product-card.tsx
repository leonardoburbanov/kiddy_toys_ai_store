import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/lib";

interface ProductCardProps {
  product: Product;
  size?: "small" | "large";
}

/**
 * Reusable product card component with image, name, and price
 * @param product - The product data to display
 * @param size - The size variant of the card (small or large)
 */
export function ProductCard({ product, size = "small" }: ProductCardProps) {
  const isLarge = size === "large";
  const isFirstProduct = product.id === 1;
  
  if (isFirstProduct && isLarge) {
    return (
      <Card className="bg-white hover:shadow-md transition-shadow h-full border border-gray-200 overflow-hidden">
        <CardContent className="relative p-0 h-full">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full bg-white">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          {/* Overlaid Product Info */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-2">
            <div className="flex items-center justify-between rounded-lg p-2 shadow-md" style={{ backgroundColor: '#7829DF' }}>
              <div className="flex-1 pr-2">
                <span className="text-xs font-semibold text-white leading-tight block">
                  {product.name}
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-white px-2 py-1 rounded text-xs font-bold" style={{ backgroundColor: '#C7A7F1' }}>
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="bg-white hover:shadow-md transition-shadow h-full border border-gray-200">
      <CardContent className="flex flex-col items-center p-3">
        <div className="w-full flex justify-center mb-2">
          <div className={`${isLarge ? 'w-full h-40' : 'w-full h-24'} relative flex items-center justify-center bg-gradient-to-br rounded-lg overflow-hidden border border-gray-200 shadow-sm`}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="w-full">
          {/* Product Label - similar to the image design */}
          <div className="flex items-center justify-between rounded-lg p-2 shadow-sm" style={{ backgroundColor: '#7829DF' }}>
            <div className="flex-1 pr-2">
              <span className="text-xs font-semibold text-white leading-tight block">
                {product.name}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-white px-2 py-1 rounded text-xs font-bold" style={{ backgroundColor: '#C7A7F1' }}>
                {product.price}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 