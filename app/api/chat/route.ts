import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { NextRequest } from 'next/server';
import { getAllProducts } from '@/lib/products';

/**
 * API route handler for chat functionality
 * @param req - The incoming request
 * @returns Streaming response with AI-generated text
 */
export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  // Get all products for the system prompt
  const products = getAllProducts();
  const productsList = products.map(product => 
    `${product.id}. ${product.name} - ${product.price}`
  ).join('\n');

  const result = await streamText({
    model: openai('gpt-3.5-turbo'),
    messages,
    system: `You are a helpful AI assistant for KIDDY TOYS AI, a store specializing in AI-powered early stimulation baby toys from Latam, US, and Europe. 

Your role is to:
- Help customers find the perfect AI-powered baby toys for early stimulation
- Provide information about our products and their developmental benefits
- Answer questions about baby development and learning toys
- Assist with product recommendations based on age and developmental needs
- Be friendly, knowledgeable, and supportive

Available products:
${productsList}

When customers ask about products, provide detailed information about the products, their prices, and developmental benefits. You can recommend products based on age, developmental needs, and customer preferences.

Always respond in a helpful and informative manner, focusing on our AI-powered baby toys and early stimulation products.`,
  });

  return result.toDataStreamResponse();
} 