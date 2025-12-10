import { Button } from "@/components/client/common/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/server/common/Card";
import {
  Wrench,
  Settings,
  Package,
  Plug,
  GraduationCap,
  Hammer,
  Monitor,
  ArrowRight,
} from "lucide-react";
import { Services as ServicesType } from "@/types/home";

const icons = {
  item_1: Wrench,
  item_2: Settings,
  item_3: Package,
  item_4: Plug,
  item_5: GraduationCap,
  item_6: Hammer,
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
      titleKey: data[transformKey].title,
      descriptionKey: data[transformKey].description,
    };
  });

  return (
    <section className="py-24 bg-white dark:bg-[#050514]" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[#0C0F39] dark:text-white">
            {data.main.title}
          </h2>
          <p className="text-[#0E0E0E] max-w-2xl mx-auto dark:text-white/70">
            {data.main.description}
          </p>
        </div>

        {/* Main 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-[#E5E7EB] dark:border-white/10 rounded-[24px] overflow-hidden hover:-translate-y-1 bg-white dark:bg-[#0C0F39] shadow-sm"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1D3DF8] to-[#1D3DF8]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#1D3DF8]/20">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#0C0F39] dark:text-white">
                  {service.titleKey}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#0E0E0E] dark:text-white">
                  {service.descriptionKey}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Full-Width Maintenance Software Card */}
        <Card className="group hover:shadow-2xl transition-all duration-300 border-[#E5E7EB] dark:border-white/10 rounded-[24px] overflow-hidden bg-gradient-to-br from-[#0C0F39] to-[#1D3DF8] text-white shadow-xl relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1D3DF8]/30 rounded-full blur-2xl"></div>

          <div className="relative z-10 grid md:grid-cols-[auto_1fr_auto] gap-8 items-center p-8">
            {/* Icon */}
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Monitor className="h-10 w-10 text-white" />
            </div>

            {/* Content */}
            <div>
              <h3 className="mb-3 text-white text-2xl">
                {data.software.title}
              </h3>
              <p className="text-white/90 text-base leading-relaxed">
                {data.software.description}
              </p>
            </div>

            {/* CTA Button */}
            <Button className="bg-white text-[#1D3DF8] hover:bg-white/90 rounded-xl px-8 py-6 shadow-lg hover:shadow-xl transition-all flex items-center gap-2 whitespace-nowrap">
              {data.software.botton}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
