import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";
import CustomCursor from "@/components/CustomCursor";
import JsonLd from "@/components/JsonLd";
import { i18n, Locale } from "@/app/i18n-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelfluxcreative.com"),
  title: {
    default: "Pixel Flux Creative | Orquestación Digital e IA",
    template: "%s | Pixel Flux Creative",
  },
  description: "Agencia de ingeniería digital global especializada en la creación de ecosistemas autónomos. Transformamos procesos manuales en motores de rentabilidad mediante orquestación de IA y desarrollo web de alto rendimiento.",
  keywords: ["AI Automation", "Web Development", "Intelligent Scrapers", "CRM Customization", "LLM Implementation", "Next.js", "React", "Digital Transformation"],
  authors: [{ name: "Pixel Flux Creative" }],
  creator: "Pixel Flux Creative",
  publisher: "Pixel Flux Creative",
  openGraph: {
    title: "Pixel Flux Creative | Orquestación Digital",
    description: "Donde el Código se Convierte en Inteligencia. Ingeniería digital y automatización para empresas escalables.",
    url: "https://pixelfluxcreative.com",
    siteName: "Pixel Flux Creative",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/assets/images/logo_pxf_n2.png",
        width: 1200,
        height: 630,
        alt: "Pixel Flux Creative Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel Flux Creative | Orquestación Digital",
    description: "Transformamos procesos manuales en motores de rentabilidad mediante orquestación de IA.",
    images: ["/assets/images/logo_pxf_n2.png"],
  },
  manifest: "/manifest.webmanifest",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <CustomCursor />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
