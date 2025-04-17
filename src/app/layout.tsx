import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ColorModeScript } from "@chakra-ui/react";
import "./globals.css";
import { Provider } from "~/components/ui/provider";
import Footer from "~/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Gates Of Egypt",
  description: "Gates Of Egypt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorModeScript initialColorMode="system" />
      </head>
      <body className={montserrat.variable}>
        <Provider>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
