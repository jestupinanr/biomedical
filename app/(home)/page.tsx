import { Navbar } from "@/components/client/layout/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { FeaturedProducts } from "./components/FeatureProducts";
import { Experience } from "./components/Experience";
import { Location } from "./components/Location";
import { Footer } from "@/components/server/layout/Footer";
import { FloatingWhatsApp } from "@/components/client/layout/FloatingWhatsapp";
import { HomeContent } from "@/types/home";

const getData = async (): Promise<HomeContent> => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

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
      <Hero data={data.hero} />
      <Services data={data.services} />
      <FeaturedProducts data={data.products} />
      <About data={data.about} />
      <Experience impact={data.impact} projects={data.project} />
      <Location data={data.visit} />
    </div>
  );
}
