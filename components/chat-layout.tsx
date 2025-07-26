'use client';

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
} from '@/components/ui/sidebar';

interface ChatLayoutProps {
  children: React.ReactNode;
}

/**
 * Client component wrapper that renders navbar, layout, and collapsible chat sidebar
 */
export function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen bg-white text-black font-sans flex flex-col">
        <NavbarCustom />
        
        {/* Chat Sidebar - Positioned under navbar */}
        <Sidebar side="right" className="border-l" style={{ top: '4rem' }}>
          <SidebarHeader className="border-b p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg">AI Assistant</h3>
              </div>
              <SidebarTrigger />
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Get personalized recommendations for AI-powered baby toys
            </p>
          </SidebarHeader>
          
          <SidebarContent className="p-0">
            <div className="h-[calc(100vh-8rem)]">
              <Chat />
            </div>
          </SidebarContent>
        </Sidebar>
        
        {/* Main Content */}
        <main className="flex-1 px-4 py-10">
          {children}
        </main>
        
        <FooterCustom />
      </div>
    </SidebarProvider>
  );
} 