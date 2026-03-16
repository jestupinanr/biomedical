import type { Metadata } from "next";
import { Hero } from "./components/Hero";
import { Services } from "./components/service/Services";
import { About } from "./components/About";
import { FeaturedProducts } from "./components/FeatureProducts";
import { Experience } from "./components/Experience";
import { Location } from "./components/Location";
import { HomeContent } from "@/types/home";
import { headers } from "next/headers";
import { JsonLd } from "@/components/server/common/JsonLd";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Biomedical Endowment — Proveedor líder de equipos médicos y servicios biomédicos en Colombia. Mantenimiento preventivo, correctivo y venta de equipos hospitalarios.",
  alternates: {
    canonical: "https://www.biomedicalendowment.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Biomedical Endowment",
  url: "https://www.biomedicalendowment.com",
  logo: "https://www.biomedicalendowment.com/navbar-logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+57-321-378-4799",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  sameAs: ["https://www.instagram.com/endowment.co"],
  email: "info@biomedicalendowment.com",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Biomedical Endowment",
  url: "https://www.biomedicalendowment.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.biomedicalendowment.com/products?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const getData = async (): Promise<HomeContent> => {
  const headersList = await headers();
  const proto = headersList.get("x-forwarded-proto") || "http";
  const host = headersList.get("host") || "localhost:3000";
  const baseUrl = `${proto}://${host}`;

  const res = await fetch(`${baseUrl}/api/content/home`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch content");

  const { data } = await res.json();
  return data;
};

export default async function Home() {
  const data = await getData();

  return (
    <div className="min-h-screen">
      <JsonLd data={[organizationSchema, websiteSchema]} />
      <Hero data={data.hero} />
      <Services data={data.services} />
      <FeaturedProducts data={data.products} />
      <About data={data.about} />
      <Experience impact={data.impact} />
      <Location data={data.visit} />
    </div>
  );
}
