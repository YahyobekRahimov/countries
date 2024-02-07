import type { Metadata } from "next";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import { ReactNode } from "react";

const nunito_sans = Nunito_Sans({
   subsets: ["latin"],
   weight: ["300", "400", "600", "800"],
});

export const metadata: Metadata = {
   title: "Countries",
   description:
      "This is where you can find countries around the world and explore them.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={nunito_sans.className}>{children}</body>
      </html>
   );
}
