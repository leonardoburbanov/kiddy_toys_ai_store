'use client';

import { Chat } from '@/components/chat';
import { MessageCircle } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

/**
 * Collapsible chat sidebar component using shadcn sidebar
 * Positioned on the right side with toggle functionality
 */
export function ChatSidebar() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen">
        {/* Main Content */}
        <div className="flex-1">
          {/* Your main content goes here */}
        </div>
        
        {/* Chat Sidebar */}
        <Sidebar side="right" className="border-l">
          <SidebarHeader className="border-b p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
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
      </div>
    </SidebarProvider>
  );
} 