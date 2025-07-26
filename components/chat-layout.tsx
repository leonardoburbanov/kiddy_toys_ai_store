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
                  isOpen ? 'max-w-[calc(100vw-480px)]' : 'max-w-full'
                }`}
              >
                {children}
              </main>
            </SidebarInset>
            
            {/* Chat Sidebar - Right Column */}
            {isOpen && (
              <Sidebar 
                side="right" 
                className="border-l border-gray-200 bg-white shadow-xl" 
                style={{ 
                  top: '4.5rem', 
                  height: 'calc(100vh - 4.5rem)',
                  width: '480px',
                  maxWidth: '480px'
                }}
              >
                <SidebarHeader className="border-b border-gray-200 p-6 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7829DF' }}>
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Kiddy AI Assistant</h3>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#C7A7F1' }}></div>
                          <span className="text-xs text-gray-500 font-medium">Online</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={toggleSidebar}
                      className="rounded-full p-2 hover:bg-gray-100 transition-colors"
                      title="Close AI Assistant"
                    >
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Get personalized recommendations for AI-powered baby toys and early stimulation products
                  </p>
                </SidebarHeader>
                
                <SidebarContent className="p-0 flex flex-col bg-gradient-to-b from-white to-gray-50">
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