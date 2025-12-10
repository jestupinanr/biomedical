"use client";

import { Button } from "@/components/client/common/Button";
import { ProductCompleteItem } from "@/types/product";
import { MessageCircle } from "lucide-react";

interface ProductProps {
  product: ProductCompleteItem;
}
function CardBotton({ product }: ProductProps) {
  const handleWhatsAppClick = (productName: string) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the ${productName}. Could you please provide pricing information?`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={() => handleWhatsAppClick(product.name)}
      className="w-full bg-[#1D3DF8] hover:bg-[#1D3DF8]/90 text-white rounded-xl text-sm py-2.5 h-auto"
    >
      <MessageCircle className="mr-2 h-4 w-4" />
      Consultar por WhatsApp
    </Button>
  );
}

export default CardBotton;
