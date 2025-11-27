import type { Metadata } from "next";
import { Quantico } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel Bustos",
  description: "Portafolio profesional de Gabriel Bustos, desarrollador FullStack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${quantico.className} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
