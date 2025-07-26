# KIDDY TOYS AI Store

An AI-powered early stimulation baby toys store featuring products from Latam, US, and Europe. Built with Next.js, TypeScript, and Vercel AI SDK.

## Features

- **AI-Powered Chat Assistant**: Get personalized recommendations for baby toys
- **Product Showcase**: Browse AI-powered early stimulation toys
- **Responsive Design**: Modern UI with Tailwind CSS
- **Real-time Chat**: Interactive AI assistant for customer support

## Getting Started

First, set up your environment variables:

```bash
# Create .env.local file
cp .env.local.example .env.local
```

Add your OpenAI API key to `.env.local`:
```
OPENAI_API_KEY=your_openai_api_key_here
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Chat Functionality

The app includes an AI-powered chat assistant that helps customers:

- Find the perfect AI-powered baby toys for early stimulation
- Get product recommendations based on age and developmental needs
- Learn about developmental benefits of different toys
- Receive personalized customer support

The chat is available both as a dedicated section on the homepage and as a floating button on all pages.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
