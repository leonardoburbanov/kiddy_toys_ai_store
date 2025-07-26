'use client';

import { useChat } from 'ai/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProductCarousel } from './product-carousel';
import { getRelevantProducts } from '@/lib/tools';

/**
 * Chat component for AI-powered customer support
 * Provides real-time chat functionality for product inquiries and recommendations
 */
export function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  return (
    <div className="h-full flex flex-col">
      {/* Messages Container */}
      <div className="flex-1 space-y-4 p-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              'flex items-start gap-3',
              message.role === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            {message.role === 'assistant' && (
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7829DF' }}>
                  <Bot className="h-5 w-5 text-white" />
                </div>
              </div>
            )}
            
            <div
              className={cn(
                'rounded-lg px-4 py-2 shadow-sm',
                message.role === 'user'
                  ? 'text-white ml-auto max-w-[280px]'
                  : 'text-gray-900 max-w-[400px]'
              )}
              style={{
                backgroundColor: message.role === 'user' ? '#7829DF' : '#C7A7F1'
              }}
            >
              <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
              
              {/* Check if message mentions products and show them */}
              {message.role === 'assistant' && (
                (() => {
                  // Find the corresponding user message
                  const messageIndex = messages.findIndex(m => m.id === message.id);
                  const userMessage = messageIndex > 0 ? messages[messageIndex - 1]?.content || '' : '';
                  const relevantProducts = getRelevantProducts(userMessage);
                  
                  if (relevantProducts.length > 0) {
                    return (
                      <div className="mt-3">
                        <div className="text-xs text-green-600 mb-2">
                          ✓ Found {relevantProducts.length} relevant products
                        </div>
                        <ProductCarousel 
                          products={relevantProducts} 
                          title="Relevant Products"
                        />
                      </div>
                    );
                  }
                  
                  return null;
                })()
              )}
            </div>
            
            {message.role === 'user' && (
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
              </div>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7829DF' }}>
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div className="rounded-lg px-4 py-2 shadow-sm max-w-[400px]" style={{ backgroundColor: '#C7A7F1' }}>
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#7829DF' }}></div>
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#7829DF', animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#7829DF', animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Form */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about AI-powered baby toys..."
            className="flex-1 min-w-0 text-sm border-gray-200 focus:border-purple-500 focus:ring-purple-500"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            size="icon"
            disabled={isLoading || !input.trim()}
            className="flex-shrink-0"
            style={{ backgroundColor: '#7829DF' }}
          >
            <Send className="h-4 w-4 text-white" />
          </Button>
        </form>
      </div>
    </div>
  );
} 