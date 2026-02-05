import { ImageWithFallback } from "@/components/client/common/ImageWithFallback";
import AnimatedSection from "@/components/client/layout/AnimatedSection";
import { Card } from "@/components/server/common/Card";
import { ProductCompleteItem } from "@/types/product";
import { fadeInUp, viewportConfig } from "@/utils/animations";
import { MessageCircle } from "lucide-react";

interface ProductProps {
  product: ProductCompleteItem;
}
const ProductCard = ({ product }: ProductProps) => {
  const whatsappLink = (productName: string) =>
    `https://wa.me/573213784799?text=${encodeURIComponent(
      `Hola, estoy interesado en el producto: ${productName}`,
    )}`;

  return (
    <AnimatedSection
      key={`${product.title}-${product.category}`}
      variants={fadeInUp(1)}
      viewport={viewportConfig}
      initial="hidden"
      whileInView="visible"
    >
      <Card className="group bg-transparent overflow-hidden cursor-pointer border border-[#f0f1f3] ">
        {/* Image */}
        <div className="relative aspect-square bg-white flex items-center justify-center overflow-hidden">
          {/* Main image */}
          <ImageWithFallback
            src={product.image}
            alt={product.title}
            className="absolute inset-0 w-full h-full max-w-[85%] max-h-[85%] m-auto object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-110"
          />

          {/* Hover image */}
          <ImageWithFallback
            src={product.hover_image_url || product.image}
            alt={product.title}
            className="absolute inset-0 w-full h-full max-w-[85%] max-h-[85%] m-auto object-contain opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
          />

          <div className="absolute bottom-1 left-1 ">
            <div className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-full border border-[#24aae1]/30 shadow-md">
              <span className="text-[10px] text-[#1173bc] sm:text-xs">
                {product.category}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-2 flex flex-col h-[154px] text-center">
          <h3 className="text-sm font-semibold text-[#2f3092] leading-tight">
            {product.title}
          </h3>

          <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-3">
            {product.description}
          </p>

          {/* WhatsApp CTA */}
          <a
            href={whatsappLink(product.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center mt-auto mx-auto text-xs gap sm:gap-2 px-2 sm:px-5 py-2 my-2 bg-linear-to-r from-[#24aae1] to-[#1173bc] text-white shadow-md shadow-[#24aae1]/30 rounded-full hover:shadow-lg hover:shadow-[#1173bc]/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle className="mr-2 h-3.5 w-3.5" />
            Consultar
          </a>
        </div>
      </Card>
    </AnimatedSection>
  );
};

export default ProductCard;
