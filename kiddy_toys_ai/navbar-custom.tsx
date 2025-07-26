import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle, X } from "lucide-react";
import { useSidebarContext } from "@/components/chat-layout";
import { useSearchContext } from "@/lib/search-context";

/**
 * Custom Navigation bar component with logo, navigation links, search functionality, and chat sidebar toggle
 */
export function NavbarCustom() {
  const { isOpen, toggleSidebar } = useSidebarContext();
  const { searchQuery, setSearchQuery, clearSearch } = useSearchContext();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    clearSearch();
  };

  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center gap-3">
        <Image src="/kiddy_toys_logo.svg" alt="Logo" width={124} height={32} />
      </div>
      
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for AI-powered baby toys..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-100 w-64 pr-10"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 rounded-full hover:bg-gray-200"
              onClick={handleClearSearch}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
        <Button variant="outline" size="icon" className="rounded-full">
          <Search className="h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full"
          onClick={toggleSidebar}
          title={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
        >
          <MessageCircle className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
} 