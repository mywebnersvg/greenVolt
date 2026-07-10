import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Montserrat,
  Sora,
  Mona_Sans,
} from "next/font/google";
import { notFound } from "next/navigation";
import { Locale, hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { routing } from "@/i18n/routing";
import "./globals.css";
import Navbar from "../components/Navbar";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const mona = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GreenVolt Energie",
  description: "GreenVolt Energie - Smarte Solartechnik",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${montserrat.variable} ${sora.variable} ${mona.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <Navbar />

          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
