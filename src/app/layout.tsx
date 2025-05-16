import type { Metadata } from "next";
import { Raleway, Cormorant_Unicase } from "next/font/google";
import "./globals.css";
import Router from "@/app/router/page";

import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import {AppSidebar} from "@/components/AppSlidebar";

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
  title: "Организация похорон в поселке Кез. Районый Ритуальный Центр | Память",
  description: "Организация ритуальных услуг в поселке Кез и Дебесах, Удмуртская Республика. Организация похорон, изготовление памятников. Надежность, забота и уважение к памяти.",
    icons: "/vklad.jpeg",
    keywords: "Память, Районный ритуальный центр, Кез, Дебесы, Похорона, Ритуальный центр Кез.",
    robots: "all"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ru">
    <head>
        <meta name="google-site-verification" content="rrGmW9BQQmMPNXsSO0x-HcMduJ9l-8yOxHaxFaRgg-Q" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <link rel="canonical" href="https://ritualkez.ru/"/>
    </head>
      <body
        className={`${geistRaleway.variable} ${geistCormorant.variable} antialiased`}
      >
      <SpeedInsights/>

      <SidebarProvider>
          <Router />

          <main>
              <SidebarTrigger />
              {children}
          </main>
      </SidebarProvider>

      </body>
    </html>
  );
}
