import AnimatedSection from "@/components/client/layout/AnimatedSection";
import { Hero as HeroType } from "@/types/home";
import {
  fadeIn,
  viewportConfigSection,
  zoomOutBackground,
} from "@/utils/animations";

interface HeroProps {
  data: HeroType;
}
export function Hero({ data }: HeroProps) {
  return (
    <section className="relative bg-white bg-linear-to-br from-[#2f3092] to-[#1173bc] text-white overflow-hidden">
      <AnimatedSection
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(/hero-image.jpeg)`,
        }}
        variants={zoomOutBackground(6)}
        initial="hidden"
        animate="visible"
      ></AnimatedSection>

      {/* /* Dark overlay for text readability  */}
      <div className="absolute inset-0 bg-linear-to-r from-[#2f3092]/95 via-[#2f3092]/85 to-[#1173bc]/90 opacity-50"></div>

      {/* Biomedical pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <AnimatedSection
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfigSection}
          variants={fadeIn}
        >
          {/* Hero content */}
          <h1 className="mb-6 text-5xl lg:text-7xl font-semibold tracking-wide drop-shadow-[0_6px_30px_rgba(0,0,0,0.6)]">
            {data.main.hero_tag}
          </h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)] font-medium">
            {data.main.subtitle}
          </p>
        </AnimatedSection>

        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#24aae1]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-[#1173bc]/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
