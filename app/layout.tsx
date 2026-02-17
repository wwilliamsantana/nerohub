import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Providers } from "@/components/provider/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeroHub",
  description: "Página de historias",
  icons: {
    icon: "/book-open.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} antialiased `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
