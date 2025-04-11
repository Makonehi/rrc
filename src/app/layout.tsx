import type { Metadata } from "next";
import { Raleway, Cormorant_Unicase } from "next/font/google";
import "./globals.css";
import Router from "@/app/router/page";
import {AppSidebar} from "@/components/ui/AppSlidebar";
import {SidebarProvider} from "@/components/ui/sidebar";

const geistRaleway = Raleway({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistCormorant = Cormorant_Unicase({
    weight: ["300"],
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Районый Ритуальный Центр | Память",
  description: "Организация похорон. Ритуальный услуги. Памятники. Поселок Кез. Удмуртская республика",
    icons: {
      icon: '/vklad.jpeg'
    },
    keywords: "Память, Районный ритуальный центр, Кез, Похорона, Ритуальный центр Кез."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistRaleway.variable} ${geistCormorant.variable} antialiased`}
      >
      <SidebarProvider>
          <Router />
          <main>{children}</main>
      </SidebarProvider>
      </body>
    </html>
  );
}
