import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "BORN FOR THE LAST LAP | Futuristic Performance",
  description: "A machine sculpted for precision, velocity, and dominance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${bebas.variable} font-sans bg-matte-black text-white antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
