"use client";
import { Button } from "@/components/client/common/Button";
import { ImageWithFallback } from "@/components/client/common/ImageWithFallback";
import { Badge } from "@/components/server/common/Badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/server/common/Card";
import { ProductCompleteItem } from "@/types/product";
import { MessageCircle, Sparkles } from "lucide-react";

interface ProductsListProps {
  catalogProducts: ProductCompleteItem[];
}
export default function ProductsList({ catalogProducts }: ProductsListProps) {
  const handleWhatsAppClick = (productName: string) => {
    const message = encodeURIComponent(
      `Hola, estoy interesado en el ${productName}. ¿Podrías proporcionarme información sobre el precio?`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {catalogProducts.map((product, index) => (
        <div key={`${product.title} ${index}`} className="relative group">
          <Card className="relative overflow-hidden rounded-4xl border border-[#E5E7EB]/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.12)] hover:border-[#24aae1]/40  transition-all duration-300 bg-white  backdrop-blur-md flex flex-col h-full">
            {/* Offer Badge - Organic Shape */}
            {product.offer.toLocaleLowerCase() === "si" && (
              <div className="absolute top-1 right-1 md:top-4 md:right-4 z-20">
                <Badge className="bg-linear-to-br from-[#24aae1] to-[#1173bc] hover:from-[#1173bc] hover:to-[#2f3092] text-white px-4 py-1.5 rounded-full text-xs shadow-lg border border-white/30 transition-all duration-300">
                  <Sparkles className="w-3 h-3 mr-1 inline" />
                  OFERTA
                </Badge>
              </div>
            )}

            {/* Image Container - Fully Contained */}
            <div className="relative p-1 md:p-4 pb-2">
              <div className="aspect-square rounded-3xl overflow-hidden relative">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-linear-to-br from-[#24aae1]/20 via-[#1173bc]/10 to-[#2f3092]/20"></div>

                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Flowing Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-white/90 via-transparent to-transparent"></div>

                {/* Category Pill - Internal */}
                {product.category && (
                  <div className="absolute bottom-0 left-1 ">
                    <div className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-full border border-[#24aae1]/30 shadow-md">
                      <span className="text-xs text-[#1173bc] ">
                        {product.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <CardHeader className="pb-2 px-1 md:px-5 pt-2 grow text-center">
              <CardTitle className="text-[#2f3092] text-sm leading-tight">
                {product.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="px-1 md:px-5 pb-1 md:pb-5 pt-0 text-center">
              <p className="text-sm text-black/50 mb-4">
                {product.description}
              </p>
              <Button
                onClick={() => handleWhatsAppClick(product.title)}
                className="w-full bg-linear-to-r from-[#24aae1] to-[#1173bc] hover:from-[#1173bc] hover:to-[#2f3092] text-white rounded-full text-xs py-3 h-auto shadow-md hover:shadow-lg shadow-[#24aae1]/30 hover:shadow-[#1173bc]/40 transition-all duration-300 border-0 cursor-pointer"
              >
                <MessageCircle className="mr-2 h-3.5 w-3.5" />
                Consultar
              </Button>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
