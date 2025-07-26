'use client';

import { Button } from '@/components/ui/button';
import { Chat } from '@/components/chat';
import { X } from 'lucide-react';

interface FloatingChatProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Chat sidebar component positioned under the navbar
 * Appears as a fixed sidebar on the right side of the screen
 */
export function FloatingChat({ isOpen, onClose }: FloatingChatProps) {
  return (
    <div className={`
      fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 bg-white shadow-lg border-l border-gray-200 
      transform transition-transform duration-300 ease-in-out z-50
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}
    `}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="font-semibold text-lg">AI Assistant</h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="h-8 w-8"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="h-full overflow-hidden">
        <Chat />
      </div>
    </div>
  );
} 