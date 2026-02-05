import { MiniBanner } from "@/components/server/common/MiniBanner";
import { ShoppingCart } from "lucide-react";
import ProductsList from "./components/ProductsList";
import { ProductContent } from "@/types/product";
import { headers } from "next/headers";
import AnimatedSection from "@/components/client/layout/AnimatedSection";
import { fadeInDown, viewportConfigSection } from "@/utils/animations";

const getData = async (): Promise<ProductContent> => {
  const headersList = await headers();
  const proto = headersList.get("x-forwarded-proto") || "http";
  const host = headersList.get("host") || "localhost:3000";
  const baseUrl = `${proto}://${host}`;

  const res = await fetch(`${baseUrl}/api/content/products`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch content");

  const { data } = await res.json();
  return data;
};

export default async function Products() {
  const data = await getData();

  const { main, ...products } = data.product;

  const productsArray = Object.values(products);
  const categories = productsArray
    .map((product) => product.category)
    .filter(
      (category, index, categories) => categories.indexOf(category) === index,
    );

  categories.unshift("TODOS");

  return (
    <section className="bg-white min-h-screen">
      {/* Mini Banner */}
      <MiniBanner
        title="Catalogo de Productos"
        backgroundImage="https://images.unsplash.com/photo-1605176173609-a0067079b419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwY2F0YWxvZ3xlbnwxfHx8fDE3NjUzNDM2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Content Section */}

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedSection
              className="text-center mb-16 relative"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfigSection}
              variants={fadeInDown(3)}
            >
              <div className="inline-flex items-center gap-2 px-3 py-3 bg-linear-to-r from-[#24aae1]/10 via-[#1173bc]/10 to-[#2f3092]/10 backdrop-blur-sm rounded-4xl md:rounded-full border border-[#24aae1]/20">
                <ShoppingCart className="w-8 h-8 text-[#24aae1]" />
                <p className="text-sm text-[#1173bc]">{main.description}</p>
              </div>
            </AnimatedSection>
            <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#1173bc] to-transparent mx-auto rounded-full mt-6"></div>
          </div>

          <ProductsList
            catalogProducts={productsArray}
            categories={categories}
          />
        </div>
      </div>
    </section>
  );
}
