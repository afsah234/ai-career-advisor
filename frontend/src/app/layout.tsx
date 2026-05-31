import "./globals.css";
import React from "react";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}