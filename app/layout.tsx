import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ChatLayout } from "@/components/chat-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KIDDY TOYS AI - AI-Powered Early Stimulation Baby Toys",
  description: "Discover AI-powered early stimulation and purpose baby toys from Latam, US, and Europe. Innovative learning toys for baby development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ChatLayout>
          {children}
        </ChatLayout>
      </body>
    </html>
  );
}
