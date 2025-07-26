import React from "react";
import { Product } from "@/lib";
import { TreeViewProductsCustom } from "@/kiddy_toys_ai/tree-view-products-custom";
import { ProductCarouselCustom } from "@/kiddy_toys_ai/product-carousel-custom";
import { ProductCard } from "@/components/product-card";

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "AI Learning Baby Robot Buddy",
    price: "$89.99 USD",
    image: "/next.svg",
  },
  {
    id: 2,
    name: "Smart Sensory Baby Blocks Set",
    price: "$45.99 USD",
    image: "/vercel.svg",
  },
  {
    id: 3,
    name: "Interactive Baby Story Cube",
    price: "$32.99 USD",
    image: "/globe.svg",
  },
];

const allProducts: Product[] = [
  ...featuredProducts,
  {
    id: 4,
    name: "AI Math Learning Baby Tablet",
    price: "$129.99 USD",
    image: "/window.svg",
  },
  {
    id: 5,
    name: "Smart Baby Building Blocks",
    price: "$67.99 USD",
    image: "/file.svg",
  },
  {
    id: 6,
    name: "AI Language Learning Baby Toy",
    price: "$78.99 USD",
    image: "/next.svg",
  },
  {
    id: 7,
    name: "Interactive Baby Puzzle Mat",
    price: "$54.99 USD",
    image: "/vercel.svg",
  },
  {
    id: 8,
    name: "Smart Baby Art Drawing Board",
    price: "$89.99 USD",
    image: "/globe.svg",
  },
  {
    id: 9,
    name: "AI Music Learning Baby Keyboard",
    price: "$112.99 USD",
    image: "/window.svg",
  },
  {
    id: 10,
    name: "Interactive Baby Science Kit",
    price: "$95.99 USD",
    image: "/file.svg",
  },
];

/**
 * Main Home page displaying AI-powered early stimulation baby toys from Latam, US, and Europe.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content Area - Full Width */}
      <section className="py-8 w-full">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Large Product Block (2/3 width) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 p-6 h-full">
                <h3 className="text-lg font-semibold mb-4">Featured Product</h3>
                <ProductCard product={featuredProducts[0]} size="large" />
              </div>
            </div>
            
            {/* Two Smaller Stacked Products (1/3 width) */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="text-sm font-medium mb-2">Product 2</h4>
                <ProductCard product={featuredProducts[1]} size="small" />
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="text-sm font-medium mb-2">Product 3</h4>
                <ProductCard product={featuredProducts[2]} size="small" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Row - 4 Equal Blocks */}
      <section className="py-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
          {allProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="bg-white rounded-lg border border-gray-200 p-4">
              <h4 className="text-sm font-medium mb-2">Product {product.id}</h4>
              <ProductCard product={product} size="small" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
