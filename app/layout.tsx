import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/client/layout/Navbar";
import { Footer } from "@/components/server/layout/Footer";
import { FloatingWhatsApp } from "@/components/client/layout/FloatingWhatsapp";
import { ConfigContent } from "@/types/general";
import { headers } from "next/headers";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const siteUrl = "https://www.biomedicalendowment.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Biomedical Endowment | Equipos y Servicios Biomédicos en Colombia",
    template: "%s | Biomedical Endowment",
  },
  description:
    "Biomedical Endowment ofrece equipos médicos de alta calidad, servicios biomédicos especializados, mantenimiento preventivo y correctivo de equipos hospitalarios en Colombia.",
  keywords: [
    "equipos biomédicos",
    "equipos médicos Colombia",
    "mantenimiento equipos hospitalarios",
    "biomedical Colombia",
    "equipos hospitalarios",
    "servicio técnico médico",
    "biomedical endowment",
    "equipos clínicos",
    "mantenimiento preventivo equipos médicos",
  ],
  authors: [{ name: "Biomedical Endowment", url: siteUrl }],
  creator: "Biomedical Endowment",
  publisher: "Biomedical Endowment",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Biomedical Endowment",
    title: "Biomedical Endowment | Equipos y Servicios Biomédicos en Colombia",
    description:
      "Equipos médicos de alta calidad y servicios biomédicos especializados. Mantenimiento preventivo y correctivo de equipos hospitalarios en Colombia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Biomedical Endowment - Equipos y Servicios Biomédicos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biomedical Endowment | Equipos y Servicios Biomédicos en Colombia",
    description:
      "Equipos médicos de alta calidad y servicios biomédicos especializados en Colombia.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "healthcare",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const getData = async (): Promise<ConfigContent> => {
  const headersList = await headers();
  const proto = headersList.get("x-forwarded-proto") || "http";
  const host = headersList.get("host") || "localhost:3000";
  const baseUrl = `${proto}://${host}`;

  const res = await fetch(`${baseUrl}/api/content/layout`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch layout");

  const { data } = await res.json();
  return data;
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getData();
  return (
    <html lang="es">
      <body className={`${poppins.variable} antialiased scroll-smooth`}>
        <Navbar data={data.config} />
        <main>{children}</main>
        <Footer data={data.footer} navbarData={data.config} />
        <FloatingWhatsApp data={data.whatsapp} />
      </body>
    </html>
  );
}
