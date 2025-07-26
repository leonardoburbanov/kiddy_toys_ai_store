'use client';

import React, { createContext, useContext, useState } from 'react';
import { NavbarCustom } from "@/kiddy_toys_ai/navbar-custom";
import { FooterCustom } from "@/kiddy_toys_ai/footer-custom";
import { ChatSidebar } from "@/components/chat-sidebar";
import { Chat } from "@/components/chat";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';

// Context for sidebar state
interface SidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebarContext must be used within a SidebarProvider');
  }
  return context;
};

interface ChatLayoutProps {
  children: React.ReactNode;
}

/**
 * Client component wrapper that renders navbar, layout, and collapsible chat sidebar
 */
export function ChatLayout({ children }: ChatLayoutProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarContextValue: SidebarContextType = {
    isOpen,
    toggleSidebar,
  };

  return (
    <SidebarProvider defaultOpen={isOpen}>
      <SidebarContext.Provider value={sidebarContextValue}>
        <div className="min-h-screen bg-white text-black font-sans">
          {/* Fixed Navbar */}
          <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
            <NavbarCustom />
          </div>
          
          {/* Main Content Area with Chat Sidebar */}
          <div className="pt-20">
            <SidebarInset>
              {/* Main Content - Left Column */}
              <main 
                className={`px-6 py-8 transition-all duration-300 ease-in-out ${
                  isOpen ? 'pr-8' : 'pr-6'
                }`}
              >
                {children}
              </main>
            </SidebarInset>
            
            {/* Chat Sidebar - Right Column */}
            {isOpen && (
              <Sidebar 
                side="right" 
                className="border-l border-gray-200 bg-white shadow-lg" 
                style={{ 
                  top: '4.5rem', 
                  height: 'calc(100vh - 4.5rem)',
                  width: '320px',
                  maxWidth: '320px'
                }}
              >
                <SidebarHeader className="border-b border-gray-200 p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg text-gray-900">AI Assistant</h3>
                    </div>
                    <button 
                      onClick={toggleSidebar}
                      className="rounded-full p-1 hover:bg-gray-100 transition-colors"
                      title="Close AI Assistant"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Get personalized recommendations for AI-powered baby toys
                  </p>
                </SidebarHeader>
                
                <SidebarContent className="p-0 flex flex-col bg-white">
                  <div className="flex-1 overflow-hidden">
                    <Chat />
                  </div>
                </SidebarContent>
              </Sidebar>
            )}
          </div>
          
          <FooterCustom />
        </div>
      </SidebarContext.Provider>
    </SidebarProvider>
  );
} 