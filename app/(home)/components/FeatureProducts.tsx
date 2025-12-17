"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/server/common/Card";
import { ShoppingCart, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/client/common/Button";
import { Badge } from "@/components/server/common/Badge";
import { ImageWithFallback } from "@/components/client/common/ImageWithFallback";
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
    <section className="py-24 bg-white dark:bg-[#1a1a2e] relative overflow-hidden">
      {/* Abstract Biomedical Wave Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Wave Layer 1 - Top */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-20"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <defs>
            <linearGradient
              id="wave-gradient-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#24aae1" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#1173bc" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            fill="url(#wave-gradient-1)"
            d="M0,160 C320,100 420,180 720,160 C1020,140 1120,220 1440,180 L1440,0 L0,0 Z"
          />
        </svg>

        {/* Wave Layer 2 - Middle */}
        <svg
          className="absolute top-1/4 left-0 w-full h-3/4 opacity-20 dark:opacity-15"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <defs>
            <linearGradient
              id="wave-gradient-2"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2f3092" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#24aae1" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path
            fill="url(#wave-gradient-2)"
            d="M0,300 C360,250 540,350 900,300 C1260,250 1320,350 1440,320 L1440,800 L0,800 Z"
          />
        </svg>

        {/* Wave Layer 3 - Bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full h-2/3 opacity-25 dark:opacity-18"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <defs>
            <linearGradient
              id="wave-gradient-3"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1173bc" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#2f3092" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <path
            fill="url(#wave-gradient-3)"
            d="M0,400 C240,350 480,450 720,420 C960,390 1200,470 1440,440 L1440,800 L0,800 Z"
          />
        </svg>

        {/* Floating Circles - Biomedical Particles */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#24aae1]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-96 h-96 bg-gradient-to-tr from-[#1173bc]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-bl from-[#2f3092]/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with Fluid Accent */}
        <div className="text-center mb-16 relative">
          <h2 className="mb-4 text-[#2f3092] dark:text-white">
            {data.main.title}
          </h2>
          <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-gradient-to-r from-[#24aae1]/10 via-[#1173bc]/10 to-[#2f3092]/10 backdrop-blur-sm rounded-full border border-[#24aae1]/20">
            <ShoppingCart className="w-5 h-5 text-[#24aae1] hidden md:inline" />
            <span className="text-sm text-[#1173bc]">
              {data.main.description}
            </span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#24aae1] to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left side - 2x2 grid of product cards */}
          <div className="grid grid-cols-2 gap-1 md:gap-6">
            {products.map((product, index) => (
              <div key={`${product.title} ${index}`} className="relative group">
                <Card className="relative overflow-hidden rounded-[32px] border border-[#E5E7EB]/50 dark:border-[#24aae1]/20 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(36,170,225,0.1)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_12px_35px_rgba(36,170,225,0.18)] hover:border-[#24aae1]/40 dark:hover:border-[#24aae1]/40 transition-all duration-300 bg-white dark:bg-[#2f3092]/40 backdrop-blur-md flex flex-col h-full">
                  {/* Offer Badge - Organic Shape */}
                  {product.offer.toLocaleLowerCase() === "si" && (
                    <div className="absolute top-1 right-1 md:top-4 md:right-4 z-20">
                      <Badge className="bg-gradient-to-br from-[#24aae1] to-[#1173bc] hover:from-[#1173bc] hover:to-[#2f3092] text-white px-4 py-1.5 rounded-full text-xs shadow-lg border border-white/30 dark:border-white/20 transition-all duration-300">
                        <Sparkles className="w-3 h-3 mr-1 inline" />
                        OFERTA
                      </Badge>
                    </div>
                  )}

                  {/* Image Container - Fully Contained */}
                  <div className="relative p-1 md:p-4 pb-2">
                    <div className="aspect-square rounded-[24px] overflow-hidden relative">
                      {/* Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#24aae1]/20 via-[#1173bc]/10 to-[#2f3092]/20"></div>

                      <ImageWithFallback
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Flowing Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-[#2f3092]/90 via-transparent to-transparent"></div>

                      {/* Category Pill - Internal */}
                      <div className="absolute bottom-0 left-1 ">
                        <div className="px-3 py-1 bg-white/95 dark:bg-[#2f3092]/95 backdrop-blur-md rounded-full border border-[#24aae1]/30 shadow-md">
                          <span className="text-[10px] text-[#1173bc] dark:text-[#24aae1] sm:text-xs">
                            {product.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-2 px-1 md:px-5 pt-2 flex-grow">
                    <CardTitle className="text-[#2f3092] dark:text-white text-sm leading-tight">
                      {product.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-1 md:px-5 pb-1 md:pb-5 pt-0">
                    <Button
                      onClick={() => handleWhatsAppClick(product.title)}
                      className="w-full bg-gradient-to-r from-[#24aae1] to-[#1173bc] hover:from-[#1173bc] hover:to-[#2f3092] text-white rounded-full text-xs py-3 h-auto shadow-md hover:shadow-lg shadow-[#24aae1]/30 hover:shadow-[#1173bc]/40 transition-all duration-300 border-0 cursor-pointer"
                    >
                      <MessageCircle className="mr-2 h-3.5 w-3.5" />
                      Consultar
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Right side - Large featured product card (50% width) */}
          <div className="flex justify-center items-center relative">
            <Card className="group rounded-[24px] border-[#E5E7EB] dark:border-white/10 shadow-xl hover:shadow-2xl transition-all bg-white dark:bg-[#0C0F39] w-full flex flex-col ">
              {/* Featured product image */}
              <div className=" bg-gradient-to-br from-[#24aae1] to-[#24aae1]/80 rounded-xl flex items-center justify-center h-80">
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
