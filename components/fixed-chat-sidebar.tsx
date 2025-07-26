'use client';

import { Chat } from '@/components/chat';

/**
 * Fixed chat sidebar component positioned under the navbar
 * Stays in place regardless of scrolling
 */
export function FixedChatSidebar() {
  return (
    <div className="fixed top-16 right-0 w-80 h-[calc(100vh-4rem)] bg-white shadow-lg border-l border-gray-200 z-40">
      <div className="flex flex-col h-full">
        {/* Chat Header */}
        <div className="p-6 border-b border-gray-200 bg-white">
          <h3 className="font-bold text-xl text-gray-900 mb-2">AI Assistant</h3>
          <p className="text-sm text-gray-600">
            Get personalized recommendations for AI-powered baby toys and early stimulation products
          </p>
        </div>
        
        {/* Chat Content */}
        <div className="flex-1 overflow-hidden">
          <Chat />
        </div>
      </div>
    </div>
  );
} 