"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/server/common/Card";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/client/common/Button";
import { Badge } from "@/components/server/common/Badge";
import { ImageWithFallback } from "@/components/client/common/ImageWithFallback";
import Image from "next/image";
import { ProductItem, Products as ProductsType } from "@/types/home";

interface ProductProps {
  data: ProductsType;
}

export function FeaturedProducts({ data }: ProductProps) {
  const handleWhatsAppClick = (productName: string) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the ${productName}. Could you please provide pricing information?`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };

  const products = Object.keys(data)
    .filter((key) => key.includes("item_"))
    .map((key) => data[key as keyof typeof data]) as ProductItem[];

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#050514]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[#0C0F39] dark:text-white">
            {data.main.title}
          </h2>
          <p className="text-[#0E0E0E] max-w-2xl mx-auto dark:text-white/70">
            {data.main.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left side - 2x2 grid of product cards (50% width) */}
          <div className="grid grid-cols-2 gap-4">
            {products.map((product, index) => (
              <Card
                key={`${product.title} ${index}`}
                className="group relative overflow-hidden rounded-[24px] border-[#E5E7EB] dark:border-white/10 hover:shadow-xl transition-all hover:-translate-y-1 bg-white dark:bg-[#0C0F39] shadow-sm flex flex-col"
              >
                {product.offer.toLocaleLowerCase() === "si" && (
                  <Badge className="absolute top-3 left-3 z-10 bg-[#0C0F39] dark:bg-[#1D3DF8] hover:bg-[#0C0F39] dark:hover:bg-[#1D3DF8] text-white px-3 py-0.5 rounded-full text-xs">
                    OFFER
                  </Badge>
                )}

                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#050514] dark:to-[#0C0F39] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1D3DF8]/10 to-[#0C0F39]/10"></div>
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader className="pb-2 px-4 pt-4 flex-grow">
                  <div className="text-xs text-[#1D3DF8] mb-1">category</div>
                  <CardTitle className="text-[#0C0F39] dark:text-white text-sm leading-tight">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 pt-0">
                  <Button
                    onClick={() => handleWhatsAppClick(product.title)}
                    className="w-full bg-[#1D3DF8] hover:bg-[#1D3DF8]/90 text-white rounded-xl text-xs py-2 h-auto"
                  >
                    <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
                    Consultar precio
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right side - Large featured product card (50% width) */}
          <div className="flex justify-center items-center relative">
            <Card className="group rounded-[24px] border-[#E5E7EB] dark:border-white/10 shadow-xl hover:shadow-2xl transition-all bg-white dark:bg-[#0C0F39] w-full flex flex-col ">
              {/* Featured product image */}
              <div className=" bg-gradient-to-br from-[#0C0F39] to-[#1D3DF8] flex items-center justify-center h-80">
                {/* <div className="absolute inset-0 bg-gradient-to-br from-[#1D3DF8]/20 to-transparent"></div> */}
                <ImageWithFallback
                  src="/test-image.webp"
                  alt="test-image"
                  className="w-[27rem] h-[27rem] object-cover group-hover:scale-105 transition-transform duration-500 absolute top-0 lg:top-1/4"
                  // width={100}
                  // height={100}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
