/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/server/common/Card";
import {
  Wrench,
  Settings,
  Package,
  Plug,
  GraduationCap,
  Hammer,
  Monitor,
  BookUser,
  Activity,
  ShieldCheck,
} from "lucide-react";
import { Services as ServicesType } from "@/types/home";
import { ImageWithFallback } from "@/components/client/common/ImageWithFallback";
import ButtonSoftware from "./components/ButtonSoftware";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  viewportConfig,
} from "@/utils/animations";
import AnimatedSection from "@/components/client/layout/AnimatedSection";
import ScrollAnimatedCard from "./components/ScrollAnimatedCard";

const icons = {
  item_1: Wrench,
  item_2: Settings,
  item_3: Package,
  item_4: Plug,
  item_5: Hammer,
  item_6: GraduationCap,
  item_7: Activity,
};
const images = {
  item_1:
    "https://res.cloudinary.com/dbfwjohjx/image/upload/v1767627565/preventivo-1_mzbxgg.jpg",
  item_2:
    "https://res.cloudinary.com/dbfwjohjx/image/upload/v1767627566/correctivo-1_g0pwhm.jpg",
  item_3: "https://images.unsplash.com/photo-1603398938378-e54eab446dde",
  item_4: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
  item_5:
    "https://images.unsplash.com/photo-1763770472374-b68e6729a46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBzdXBwb3J0JTIwdG9vbHN8ZW58MXx8fHwxNzY1NjY1NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  item_6:
    "https://res.cloudinary.com/dbfwjohjx/image/upload/v1768684424/capacitacion_vjvtrh.jpg",
  item_7:
    "https://images.unsplash.com/photo-1696258686263-9f42a5e34371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVkaWN0aXZlJTIwbWFpbnRlbmFuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzYyNTQ1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
};

interface ServicesProps {
  data: ServicesType;
}

export function Services({ data }: ServicesProps) {
  const keys = Object.keys(data).filter(
    (key) => key !== "main" && key !== "software" && key !== "warranty",
  );

  const services = keys.map((key) => {
    const transformKey = key as keyof ServicesType;

    return {
      icon: icons[key as keyof typeof icons],
      imageUrl: images[key as keyof typeof images],
      title: data[transformKey].title,
      description: data[transformKey].description,
    };
  });

  return (
    <section className="py-12 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6 relative z-10 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16 ">
          {/* Left side → title */}
          <AnimatedSection
            initial="hidden"
            whileInView="visible"
            variants={fadeInLeft(3)}
            className="text-left"
          >
            <span className="uppercase tracking-[0.25em] text-[10px] md:text-sm font-semibold text-[#24aae1]">
              Soluciones biomédicas
            </span>

            <h2 className="mt-3 text-[#2f3092] text-2xl md:text-[56px] font-extrabold leading-tight">
              {data.main.title}
            </h2>

            <div className="mt-4 w-12 h-1 md:w-20 md:h-1.5 bg-linear-to-r from-transparent via-[#24aae1] to-transparent rounded-full"></div>
          </AnimatedSection>

          {/* Right side → description */}
          <AnimatedSection
            initial="hidden"
            whileInView="visible"
            variants={fadeInRight(3)}
            className="md:justify-self-end"
          >
            <div className="inline-flex items-center gap-5 mb-4 px-5 py-5 md:px-7 md:py-8 bg-linear-to-r from-[#24aae1]/10 via-[#1173bc]/10 to-[#2f3092]/10 backdrop-blur-sm rounded-4xl border border-[#24aae1]/20">
              <BookUser className="w-12 h-12 text-[#24aae1] hidden md:inline" />
              <p className="text-[#2f3092]/80 max-w-md text-xs leading-relaxed md:text-base">
                {data.main.description}
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Main 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.map((service, index) => {
            const direction =
              index % 3 === 0 ? "left" : index % 3 === 2 ? "right" : "up";
            return (
              <ScrollAnimatedCard
                key={index}
                index={index}
                direction={direction}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-[#E5E7EB] rounded-3xl overflow-hidden hover:-translate-y-1 bg-white shadow-sm w-full h-full flex flex-col">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#0C0F39]/90 via-[#0C0F39]/40 to-transparent" />

                    <div className="absolute bottom-4 right-4 w-14 h-14 bg-linear-to-br from-[#24aae1] to-[#1173bc] rounded-xl flex items-center justify-center shadow-lg shadow-[#24aae1]/30 group-hover:scale-110 transition-transform">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  <CardHeader className="pt-1 px-2 md:px-6 md:pb-3 text-center md:text-left">
                    <CardTitle className="text-[#2f3092] font-bold text-sm md:text-base">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-2 md:px-6">
                    <p className="text-[#2f3092] leading-relaxed text-sm md:text-base text-center md:text-left">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimatedCard>
            );
          })}
        </div>

        <ScrollAnimatedCard index={1} direction={"left"}>
          {/* Featured Full-Width Maintenance Software Card */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-[#E5E7EB] rounded-3xl overflow-hidden bg-white shadow-xl relative">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side - Visual Story */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <ImageWithFallback
                  src="/samm_banner.jpeg"
                  alt={"Visual Story"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-[#2f3092]/80 via-[#2f3092]/50 to-transparent md:from-transparent md:via-transparent md:to-transparent"></div>

                {/* Floating Icon Badge - visible on mobile */}
                <div className="absolute top-6 left-6 md:hidden w-16 h-16 bg-linear-to-br from-[#24aae1] to-[#1173bc] rounded-2xl flex items-center justify-center shadow-lg shadow-[#24aae1]/30">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Content Side */}
              <div className="relative bg-linear-to-br from-[#2f3092] to-[#1173bc] p-8 md:p-10 flex flex-col justify-center">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#24aae1]/20 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  {/* Icon - hidden on mobile */}
                  <div className="hidden md:flex w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Monitor className="h-10 w-10 text-white" />
                  </div>

                  <h3 className="mb-4 text-white text-2xl md:text-3xl">
                    {" "}
                    {data.software.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6">
                    {data.software.description}
                  </p>

                  <p className="text-white/90 text-base leading-relaxed mb-6">
                    {data.software.description_2}
                  </p>

                  <ButtonSoftware textButton={data.software.botton} />
                </div>
              </div>
            </div>
          </Card>
        </ScrollAnimatedCard>

        {/* Trust & Expertise Statement */}
        <AnimatedSection
          className="my-24 max-w-5xl mx-auto md:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp()}
        >
          <div className="relative bg-white rounded-3xl shadow-xl border border-[#24aae1]/10 p-2 md:p-14 text-center">
            {/* Icon */}
            <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-linear-to-br from-[#24aae1] to-[#1173bc] shadow-lg">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-base md:text-3xl font-bold text-[#2f3092] mb-4">
              Compromiso con la seguridad y precisión biomédica
            </h3>

            {/* Text */}
            <p className="text-[#2f3092]/80 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
              {data.warranty.title}
            </p>

            <p className="text-[#2f3092]/80 max-w-3xl mx-auto mt-4 leading-relaxed text-sm md:text-base">
              {data.warranty.description}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
