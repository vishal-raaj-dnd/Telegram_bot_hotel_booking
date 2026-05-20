import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HotelBot SaaS Dashboard",
  description: "Manage room inventory, reservations, and Telegram bots for your hotel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full bg-[#09090b] text-[#f4f4f5] flex flex-col">{children}</body>
    </html>
  );
}
