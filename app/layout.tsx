import type { Metadata } from "next";
import { FloatingFacebookButton } from "@/src/components/FloatingFacebookButton";
import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Solareco Philippines | Solar Products and Support",
    template: "%s | Solareco Philippines",
  },
  description:
    "Solareco Philippines supplies solar products, technical assistance, and installation support nationwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-white text-slate-900">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingFacebookButton />
      </body>
    </html>
  );
}

