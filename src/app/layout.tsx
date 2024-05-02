import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Header } from "../components/header/index";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andreson Souza",
  description: "Desenvolvedor web fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
