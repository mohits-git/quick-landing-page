import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const robotoCondensed = Roboto_Condensed({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>{children}</body>
    </html>
  );
}
