'use client';

import { Chat } from '@/components/chat';

/**
 * Fixed chat sidebar component positioned under the navbar
 * Stays in place regardless of scrolling
 */
export function FixedChatSidebar() {
  return (
    <div className="fixed top-16 right-0 w-80 h-[calc(100vh-4rem)] bg-white shadow-xl border-l border-gray-200 z-40">
      <div className="flex flex-col h-full">
        {/* Chat Header */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#7829DF' }}>
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900">AI Assistant</h3>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#C7A7F1' }}></div>
                <span className="text-xs text-gray-500 font-medium">Online</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Get personalized recommendations for AI-powered baby toys and early stimulation products
          </p>
        </div>
        
        {/* Chat Content */}
        <div className="flex-1 overflow-hidden bg-gradient-to-b from-white to-gray-50">
          <Chat />
        </div>
      </div>
    </div>
  );
} 