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
} from "lucide-react";
import { Services as ServicesType } from "@/types/home";
import { ImageWithFallback } from "@/components/client/common/ImageWithFallback";
import ButtonSoftware from "./components/ButtonSoftware";

const icons = {
  item_1: Wrench,
  item_2: Settings,
  item_3: Package,
  item_4: Plug,
  item_5: GraduationCap,
  item_6: Hammer,
};
const images = {
  item_1:
    "https://images.unsplash.com/photo-1490223966554-5de0fd551b91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwbWFpbnRlbmFuY2UlMjB0ZWNobmljaWFufGVufDF8fHx8MTc2NTY2NTYyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  item_2:
    "https://images.unsplash.com/photo-1661078483043-6a586b684f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW9tZWRpY2FsJTIwZXF1aXBtZW50JTIwcmVwYWlyfGVufDF8fHx8MTc2NTY2NTYyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  item_3: "https://images.unsplash.com/photo-1603398938378-e54eab446dde",
  item_4: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
  item_5: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
  item_6:
    "https://images.unsplash.com/photo-1763770472374-b68e6729a46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBzdXBwb3J0JTIwdG9vbHN8ZW58MXx8fHwxNzY1NjY1NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
};

interface ServicesProps {
  data: ServicesType;
}

export function Services({ data }: ServicesProps) {
  const keys = Object.keys(data).filter(
    (key) => key !== "main" && key !== "software"
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
    <section className="py-24 bg-white" id="services">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Wave Layer 1 */}
        <svg
          className="absolute top-0 right-0 w-full h-full opacity-30"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <defs>
            <linearGradient
              id="services-wave-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1173bc" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#2f3092" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <path
            fill="url(#services-wave-1)"
            d="M0,200 C360,140 540,240 900,200 C1260,160 1320,260 1440,220 L1440,0 L0,0 Z"
          />
        </svg>

        {/* Wave Layer 2 */}
        <svg
          className="absolute bottom-0 left-0 w-full h-2/3 opacity-20"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <defs>
            <linearGradient
              id="services-wave-2"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#24aae1" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#1173bc" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            fill="url(#services-wave-2)"
            d="M0,500 C320,440 480,560 800,520 C1120,480 1280,580 1440,540 L1440,800 L0,800 Z"
          />
        </svg>

        {/* Floating Circles */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-linear-to-br from-[#1173bc]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-linear-to-tr from-[#24aae1]/6 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="mb-4 text-[#2f3092]">{data.main.title}</h2>
          <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-linear-to-r from-[#24aae1]/10 via-[#1173bc]/10 to-[#2f3092]/10 backdrop-blur-sm rounded-full border border-[#24aae1]/20">
            <BookUser className="w-5 h-5 text-[#24aae1] hidden md:inline" />
            <span className="text-sm text-[#1173bc]">
              {data.main.description}
            </span>
          </div>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#24aae1] to-transparent mx-auto rounded-full"></div>
        </div>

        {/* Main 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-[#E5E7EB] rounded-3xl overflow-hidden hover:-translate-y-1 bg-white shadow-sm"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0C0F39]/90 via-[#0C0F39]/40 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute bottom-4 right-4 w-14 h-14 bg-linear-to-br from-[#24aae1] to-[#1173bc] rounded-xl flex items-center justify-center shadow-lg shadow-[#24aae1]/30 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-[#2f3092] ">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-[#2f3092] leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Full-Width Maintenance Software Card */}
        <Card className="group hover:shadow-2xl transition-all duration-300 border-[#E5E7EB] rounded-3xl overflow-hidden bg-white shadow-xl relative">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Side - Visual Story */}
            <div className="relative h-64 md:h-auto overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1645685491865-42a4fbbc9912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRhc2hib2FyZCUyMG1lZGljYWx8ZW58MXx8fHwxNzY1NjY1NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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

                <h3 className="mb-4 text-white text-3xl">
                  {" "}
                  {data.software.title}
                </h3>
                <p className="text-white/90 text-base leading-relaxed mb-6">
                  {data.software.description}
                </p>

                <ButtonSoftware textButton={data.software.botton} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
