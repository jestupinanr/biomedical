import { MiniBanner } from "@/components/server/common/MiniBanner";
import { ShoppingCart } from "lucide-react";
import ProductsList from "./components/ProductsList";
import { ProductContent } from "@/types/product";

const getData = async (): Promise<ProductContent> => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

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

  return (
    <section className="bg-white min-h-screen">
      {/* Mini Banner */}
      <MiniBanner
        title="Catalogo de Productos"
        backgroundImage="https://images.unsplash.com/photo-1605176173609-a0067079b419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwY2F0YWxvZ3xlbnwxfHx8fDE3NjUzNDM2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Content Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-linear-to-r from-[#24aae1]/10 via-[#1173bc]/10 to-[#2f3092]/10 backdrop-blur-sm rounded-full border border-[#24aae1]/20">
              <ShoppingCart className="w-5 h-5 text-[#24aae1]" />
              <p className="text-sm text-[#1173bc]">{main.description}</p>
            </div>
            <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#1173bc] to-transparent mx-auto rounded-full mt-6"></div>
          </div>

          <ProductsList catalogProducts={productsArray} />
        </div>
      </div>
    </section>
  );
}
