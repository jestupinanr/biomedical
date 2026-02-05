import { Hero } from "./components/Hero";
import { Services } from "./components/service/Services";
import { About } from "./components/About";
import { FeaturedProducts } from "./components/FeatureProducts";
import { Experience } from "./components/Experience";
import { Location } from "./components/Location";
import { HomeContent } from "@/types/home";
import { headers } from "next/headers";

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
      <Hero data={data.hero} />
      <Services data={data.services} />
      <FeaturedProducts data={data.products} />
      <About data={data.about} />
      <Experience impact={data.impact} />
      <Location data={data.visit} />
    </div>
  );
}
