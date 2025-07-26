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
          <div className="absolute inset-0 w-full h-full bg-gray-100">
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
          <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
            <div className="flex items-center justify-between bg-black bg-opacity-90 text-white rounded-lg p-3">
              <span className="text-sm font-medium truncate">
                {product.name}
              </span>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-bold ml-2">
                {product.price}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="bg-white hover:shadow-md transition-shadow h-full border border-gray-200">
      <CardContent className="flex flex-col items-center p-6">
        <div className="w-full flex justify-center mb-4">
          <div className={`${isLarge ? 'w-full h-80' : 'w-full h-48'} flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden border border-gray-200`}>
            <Image
              src={product.image}
              alt={product.name}
              width={isLarge ? 400 : 250}
              height={isLarge ? 320 : 200}
              className="object-contain w-full h-full p-1"
              priority
            />
          </div>
        </div>
        <div className="w-full">
          {/* Product Label - similar to the image design */}
          <div className="flex items-center justify-between bg-gray-900 text-white rounded-lg p-3 mb-3">
            <span className="text-sm font-medium truncate">
              {product.name}
            </span>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-bold ml-2">
              {product.price}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 