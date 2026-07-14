import type { Metadata } from "next";
import localFont from "next/font/local";
import { FloatingFacebookButton } from "@/src/components/FloatingFacebookButton";
import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { FACEBOOK_PAGE_URL, PUBLIC_EMAIL, SITE_NAME, SITE_URL } from "@/src/lib/constants";
import "./globals.css";

const poppins = localFont({
  src: [
    { path: "./fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = localFont({
  src: "./fonts/Montserrat-Variable.ttf",
  weight: "100 900",
  variable: "--font-montserrat",
  display: "swap",
});

const defaultDescription =
  "Solar products, technical assistance, and energy-solution support for homes, businesses, installers, and project teams across the Philippines.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: defaultDescription,
    images: [{ url: "/images/hero/solareco-product-lineup.png", alt: "Solareco Philippines product lineup" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: defaultDescription,
    images: ["/images/hero/solareco-product-lineup.png"],
  },
  icons: {
    icon: "/images/logo/icon.png",
    shortcut: "/images/logo/icon.png",
    apple: "/images/logo/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/solareco-logo-blue.png`,
    email: PUBLIC_EMAIL,
    sameAs: [FACEBOOK_PAGE_URL],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${poppins.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-slate-900">
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-md bg-white px-4 py-3 text-sm font-bold text-[#0D3567] shadow-lg transition focus:translate-y-0 focus:outline-2 focus:outline-offset-2 focus:outline-white"
        >
          Skip to main content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <FloatingFacebookButton />
      </body>
    </html>
  );
}
