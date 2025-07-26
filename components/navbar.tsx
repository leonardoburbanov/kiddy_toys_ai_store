import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

/**
 * Navigation bar component with logo, navigation links, and search functionality
 */
export function Navbar() {
  return (
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
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for products..."
            className="rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-100 w-64"
          />
        </div>
        <Button variant="outline" size="icon" className="rounded-full">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
} 