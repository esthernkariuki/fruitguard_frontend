import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  description: "FruitGuard - Smart monitoring for farmers",
  title: "FruitGuard",
  icons: {
    icon: "/Images/fruitguard.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}