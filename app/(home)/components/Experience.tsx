import { Impact } from "@/types/home";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/server/common/Card";
import {
  Droplets,
  Settings,
  Shield,
  Zap,
  HandshakeIcon,
  Lightbulb,
} from "lucide-react";
import AnimatedSection from "@/components/client/layout/AnimatedSection";
import {
  fadeIn,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerContainer,
  viewportConfig,
  viewportConfigSection,
} from "@/utils/animations";

const icons = {
  item_1: Settings,
  item_2: Shield,
  item_3: Zap,
  item_4: HandshakeIcon,
  item_5: Lightbulb,
};

interface ExperienceProps {
  impact: Impact;
}
export function Experience({ impact }: ExperienceProps) {
  const keys = Object.keys(impact).filter((key) => key !== "main");

  const experience = keys.map((key) => {
    const transformKey = key as keyof Impact;

    return {
      icon: icons[key as keyof typeof icons],
      title: impact[transformKey].title,
      description: impact[transformKey].description,
    };
  });

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Section */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16 ">
            {/* Left side → title */}
            <AnimatedSection
              initial="hidden"
              whileInView="visible"
              variants={fadeInLeft(3)}
              className="text-left"
            >
              <span className="uppercase tracking-[0.25em] text-[10px] md:text-sm font-semibold text-[#24aae1]">
                Nuestra propuesta de valor
              </span>

              <h2 className="mt-3 text-[#2f3092] text-2xl md:text-[56px] font-extrabold leading-tight">
                {impact.main.title}
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
                <Droplets className="w-12 h-12 text-[#24aae1]" />
                <p className="text-[#2f3092]/80 max-w-md text-xs leading-relaxed md:text-base">
                  {impact.main.description}
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            {experience.map((prop, index) => (
              <AnimatedSection
                key={index}
                variants={fadeInUp(3)}
                className="w-full h-full flex"
              >
                <Card
                  className={`text-center border-[#E5E7EB] rounded-3xl shadow-sm hover:shadow-lg transition-shadow bg-white gap-3 md:gap-6 ${
                    index >= 3 ? "md:col-span-1 lg:col-span-1" : ""
                  }`}
                >
                  <CardHeader className="md:pb-4">
                    <div className="w-20 h-20 bg-linear-to-br from-[#24aae1] to-[#1173bc] rounded-full flex items-center justify-center mx-auto mb-2 md:mb-6 shadow-lg shadow-[#1D3DF8]/20">
                      <prop.icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-[#0C0F39] min-h-12 flex items-center justify-center text-sm md:text-base">
                      {prop.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#0E0E0E] leading-relaxed text-xs md:text-base">
                      {prop.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </AnimatedSection>
        </div>
        {/* Projects Section
        <div>
          <div className="text-center mb-16 relative">
            <h2 className="mb-4 text-[#2f3092]">Proyectos destacados </h2>
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-linear-to-r from-[#24aae1]/10 via-[#1173bc]/10 to-[#2f3092]/10 backdrop-blur-sm rounded-full border border-[#24aae1]/20">
              <FolderOpenDot className="w-5 h-5 text-[#24aae1] hidden md:inline" />
              <span className="text-sm text-[#1173bc]">
                Historias de éxito de nuestras colaboraciones con organizaciones
                líderes del sector salud.
              </span>
            </div>
            <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#24aae1] to-transparent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projectsArray.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden rounded-3xl border-[#E5E7EB] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 bg-white"
              >
                <div className="h-1.5 bg-[#2f3092]"></div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-[#2f3092]">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-[#6B7280] mb-1">Client</div>
                    <div className="text-[#2f3092]">{project.client}</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#6B7280] mb-1">Impact</div>
                    <div className="text-[#1D3DF8]">{project.impact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
