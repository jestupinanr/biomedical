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

export const metadata: Metadata = {
  title: "Biomedical",
  description: "Biomedical Services",
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
