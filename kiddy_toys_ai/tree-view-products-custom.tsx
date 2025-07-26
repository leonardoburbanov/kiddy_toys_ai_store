import { Product } from "@/lib";
import { ProductCard } from "@/components/product-card";

interface TreeViewProductsCustomProps {
  featuredProducts: Product[];
}

/**
 * Featured products section with tree view layout - one large product on the left,
 * smaller products stacked on the right
 * @param featuredProducts - Array of featured products to display
 */
export function TreeViewProductsCustom({ featuredProducts }: TreeViewProductsCustomProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* First product - large on the left */}
      <div className="lg:col-span-2">
        <ProductCard product={featuredProducts[0]} size="large" />
      </div>
      {/* Other featured products - stacked vertically on the right */}
      <div className="lg:col-span-1 flex flex-col gap-8">
        {featuredProducts.slice(1).map((product) => (
          <ProductCard key={product.id} product={product} size="small" />
        ))}
      </div>
    </div>
  );
} 