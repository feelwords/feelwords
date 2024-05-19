import type { Metadata } from "next";
import "./globals.css";
import {cn} from "@/lib/utils";
import {lilitaFont} from "@/app/_assets/fonts";


export const metadata: Metadata = {
  title: "Feel Words",
  description: "A collection of words that make you feel things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn(lilitaFont.className, "bg-fw-primary")}>{children}</body>
    </html>
  );
}
