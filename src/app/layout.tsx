import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { lilitaFont } from "@/app/_assets/fonts";

export const metadata: Metadata = {
  title:
    "Feel Words - Des mots qui font vibrer ! Devenez auteur et monter dans le classement des meilleurs !",
  description:
    "Participer à des concours d'écriture, monter dans le classement des meilleurs auteurs et gagner en visibilité ! Lisez, écrivez, partagez !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn(lilitaFont.className, "bg-fw-primary")}>
        {children}
      </body>
    </html>
  );
}
