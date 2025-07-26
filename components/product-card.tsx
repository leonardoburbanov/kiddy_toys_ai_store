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
  
  return (
    <Card className="bg-gray-50 hover:shadow-md transition-shadow h-full">
      <CardContent className="flex flex-col items-center p-6">
        <div className="w-full flex justify-center mb-4">
          <Image
            src={product.image}
            alt={product.name}
            width={isLarge ? 300 : 180}
            height={isLarge ? 300 : 180}
            className="object-contain"
          />
        </div>
        <div className="w-full flex flex-col items-center">
          <span className={`font-semibold mb-1 ${isLarge ? 'text-xl' : 'text-lg'}`}>
            {product.name}
          </span>
          <span className="bg-blue-500 text-white rounded-full px-4 py-1 text-sm font-bold">
            {product.price}
          </span>
        </div>
      </CardContent>
    </Card>
  );
} 