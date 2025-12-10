import { Badge } from "@/components/server/common/Badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/server/common/Card";
import { ImageWithFallback } from "@/components/client/common/ImageWithFallback";
import { ProductCompleteItem } from "@/types/product";
import CardBotton from "./components/CardBotton";
import { MiniBanner } from "@/components/server/common/MiniBanner";

const catalogProducts: ProductCompleteItem[] = [
  {
    id: 1,
    name: "Medical Oxygen Concentrator",
    category: "Respiratory Equipment",
    isOffer: "si",
    image:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    id: 2,
    name: "Digital Blood Pressure Monitor",
    category: "Diagnostic Equipment",
    isOffer: "si",
    image:
      "https://images.unsplash.com/photo-1615461066159-fea0960485d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    id: 3,
    name: "Portable ECG Machine",
    category: "Cardiac Monitoring",
    isOffer: "si",
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    id: 4,
    name: "Surgical Sterilizer",
    category: "Sterilization Equipment",
    isOffer: "no",
    image:
      "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    id: 5,
    name: "Laboratory Centrifuge",
    category: "Lab Equipment",
    isOffer: "no",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    id: 6,
    name: "Infusion Pump System",
    category: "IV Therapy",
    isOffer: "no",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    id: 7,
    name: "Patient Vital Signs Monitor",
    category: "Patient Monitoring",
    isOffer: "si",
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    id: 8,
    name: "Ultrasound Scanner",
    category: "Imaging Equipment",
    isOffer: "no",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    id: 9,
    name: "Defibrillator AED",
    category: "Emergency Equipment",
    isOffer: "no",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    id: 10,
    name: "Surgical LED Light",
    category: "Surgical Equipment",
    isOffer: "no",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    id: 11,
    name: "Medical Refrigerator",
    category: "Storage Equipment",
    isOffer: "no",
    image:
      "https://images.unsplash.com/photo-1585435465444-7f1d8e1c4326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    id: 12,
    name: "Nebulizer Machine",
    category: "Respiratory Equipment",
    isOffer: "no",
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
];

// const getData = async (): Promise<HomeContent> => {
//   const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

//   const res = await fetch(`${baseUrl}/api/content/home`, {
//     next: { revalidate: 60 },
//   });

//   if (!res.ok) throw new Error("Failed to fetch content");

//   const { data } = await res.json();
//   return data;
// };

export default async function Products() {
  return (
    <section className="bg-white dark:bg-[#0C0F39] min-h-screen">
      {/* Mini Banner */}
      <MiniBanner
        title="Product Catalog"
        backgroundImage="https://images.unsplash.com/photo-1605176173609-a0067079b419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwY2F0YWxvZ3xlbnwxfHx8fDE3NjUzNDM2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Content Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#0E0E0E] max-w-2xl mx-auto dark:text-white/70">
              Browse our complete range of biomedical equipment and solutions
              for healthcare facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {catalogProducts.map((product) => (
              <Card
                key={product.id}
                className="group relative overflow-hidden rounded-[24px] border-[#E5E7EB] dark:border-white/10 hover:shadow-xl transition-all hover:-translate-y-1 bg-white dark:bg-[#050514] shadow-sm flex flex-col"
              >
                {product.isOffer && (
                  <Badge className="absolute top-3 left-3 z-10 bg-[#0C0F39] dark:bg-[#1D3DF8] hover:bg-[#0C0F39] dark:hover:bg-[#1D3DF8] text-white px-3 py-0.5 rounded-full text-xs">
                    Offer
                  </Badge>
                )}

                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#0C0F39] dark:to-[#050514] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1D3DF8]/10 to-[#0C0F39]/10"></div>
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader className="pb-2 px-5 pt-5 flex-grow">
                  <div className="text-xs text-[#1D3DF8] mb-1.5">
                    {product.category}
                  </div>
                  <CardTitle className="text-[#0C0F39] dark:text-white text-base leading-tight">
                    {product.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-5 pb-5 pt-0">
                  <CardBotton product={product} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
