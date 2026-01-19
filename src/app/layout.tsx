import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "VAINAWEB | Resolvemo tu vaina digital",
  description: "Dominican Digital Agency. Bold, Direct, Effective.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased bg-acid-black text-acid-white`}
      >
        <div className="fixed inset-0 z-0 pointer-events-none bg-blueprint opacity-20" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
