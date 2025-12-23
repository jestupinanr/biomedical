import { ImageWithFallback } from "@/components/client/common/ImageWithFallback";

interface MiniBannerProps {
  title: string;
  backgroundImage: string;
}

export function MiniBanner({ title, backgroundImage }: MiniBannerProps) {
  return (
    <div className="relative h-48 md:h-56 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay - matching the style from the reference */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0C0F39]/80 via-[#0C0F39]/70 to-[#0C0F39]/80"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6">
        <h2 className="text-white text-center drop-shadow-lg text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
