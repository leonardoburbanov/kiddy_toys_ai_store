import Image from "next/image";
import React from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Acme Circles T-Shirt",
    price: "$20.00 USD",
    image: "/next.svg",
  },
  {
    id: 2,
    name: "Acme Drawstring Bag",
    price: "$12.00 USD",
    image: "/vercel.svg",
  },
  {
    id: 3,
    name: "Acme Cup",
    price: "$15.00 USD",
    image: "/globe.svg",
  },
];

const allProducts: Product[] = [
  ...featuredProducts,
  {
    id: 4,
    name: "Acme Hoodie",
    price: "$50.00 USD",
    image: "/window.svg",
  },
  {
    id: 5,
    name: "Acme Baby Onesie",
    price: "$10.00 USD",
    image: "/file.svg",
  },
  {
    id: 6,
    name: "Acme Baby Cap",
    price: "$10.00 USD",
    image: "/next.svg",
  },
  {
    id: 7,
    name: "Acme Mug",
    price: "$15.00 USD",
    image: "/vercel.svg",
  },
];

/**
 * Main Home page displaying a product grid similar to demo.vercel.store (light mode, dummy data).
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">
      <header className="w-full flex items-center justify-between px-8 py-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Image src="/vercel.svg" alt="Logo" width={32} height={32} />
          <span className="text-xl font-bold tracking-tight">ACME STORE</span>
        </div>
        <nav className="flex gap-6 text-base font-medium">
          <a href="#" className="hover:underline">All</a>
          <a href="#" className="hover:underline">Shirts</a>
          <a href="#" className="hover:underline">Stickers</a>
        </nav>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-100"
          />
        </div>
        <button className="ml-6 p-2 rounded-full border border-gray-300 hover:bg-gray-100">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </button>
      </header>
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-10">
        {/* Featured Products Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* First product - large on the left */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl shadow-sm flex flex-col items-center p-8 hover:shadow-md transition-shadow h-full">
                <div className="w-full flex justify-center mb-6">
                  <Image
                    src={featuredProducts[0].image}
                    alt={featuredProducts[0].name}
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
                <div className="w-full flex flex-col items-center">
                  <span className="font-semibold text-xl mb-2">{featuredProducts[0].name}</span>
                  <span className="bg-blue-500 text-white rounded-full px-6 py-2 text-base font-bold">{featuredProducts[0].price}</span>
                </div>
              </div>
            </div>
            
            {/* Other featured products - stacked vertically on the right */}
            <div className="lg:col-span-1 flex flex-col gap-8">
              {featuredProducts.slice(1).map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-50 rounded-xl shadow-sm flex flex-col items-center p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-full flex justify-center mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={180}
                      height={180}
                      className="object-contain"
                    />
                  </div>
                  <div className="w-full flex flex-col items-center">
                    <span className="font-semibold text-lg mb-1">{product.name}</span>
                    <span className="bg-blue-500 text-white rounded-full px-4 py-1 text-sm font-bold">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="mb-16">
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {allProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-50 rounded-xl shadow-sm flex flex-col items-center p-6 hover:shadow-md transition-shadow min-w-[280px] flex-shrink-0"
                >
                  <div className="w-full flex justify-center mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={180}
                      height={180}
                      className="object-contain"
                    />
                  </div>
                  <div className="w-full flex flex-col items-center">
                    <span className="font-semibold text-lg mb-1">{product.name}</span>
                    <span className="bg-blue-500 text-white rounded-full px-4 py-1 text-sm font-bold">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="w-full py-6 border-t border-gray-200 text-center text-sm text-gray-500">
        © 2023-2025 ACME, Inc. All rights reserved.
      </footer>
    </div>
  );
}
