import { Impact, ImpactItem, ProjectItem, Projects } from "@/types/home";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/server/common/Card";
import { Building2, Users, Award, Droplets, FolderOpenDot } from "lucide-react";

const statsIcon = {
  item_1: Building2,
  item_2: Users,
  item_3: Award,
};

interface ExperienceProps {
  impact: Impact;
  projects: Projects;
}
export function Experience({ impact, projects }: ExperienceProps) {
  const stats = Object.keys(impact)
    .filter((key) => key.includes("item_"))
    .map((key) => impact[key as keyof typeof impact]) as ImpactItem[];

  // add icons to stats
  stats.forEach((stat, index) => {
    stat.icon = statsIcon[`item_${index + 1}` as keyof typeof statsIcon];
  });

  const projectsArray = Object.keys(projects)
    .filter((key) => key.includes("item_"))
    .map((key) => projects[key as keyof typeof projects]) as ProjectItem[];

  return (
    <section className="py-24 bg-gray-50">
      {/* Abstract Biomedical Wave Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Wave Layer 1 */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-30"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <defs>
            <linearGradient
              id="experience-wave-1"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#24aae1" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#1173bc" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <path
            fill="url(#experience-wave-1)"
            d="M0,180 C300,120 500,200 800,160 C1100,120 1300,220 1440,180 L1440,0 L0,0 Z"
          />
        </svg>

        {/* Wave Layer 2 */}
        <svg
          className="absolute bottom-0 right-0 w-full h-2/3 opacity-20"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <defs>
            <linearGradient
              id="experience-wave-2"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#2f3092" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#1173bc" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            fill="url(#experience-wave-2)"
            d="M0,520 C360,460 540,580 900,520 C1260,460 1320,560 1440,520 L1440,800 L0,800 Z"
          />
        </svg>

        {/* Floating Circles */}
        <div className="absolute top-32 right-24 w-80 h-80 bg-linear-to-br from-[#1173bc]/7 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-32 w-64 h-64 bg-linear-to-tr from-[#24aae1]/6 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Section */}
        <div className="mb-24">
          <div className="text-center mb-16 relative">
            <h2 className="mb-4 text-[#2f3092]">{impact.main.title}</h2>
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-linear-to-r from-[#24aae1]/10 via-[#1173bc]/10 to-[#2f3092]/10 backdrop-blur-sm rounded-full border border-[#24aae1]/20">
              <Droplets className="w-5 h-5 text-[#24aae1] hidden md:inline" />
              <span className="text-sm text-[#1173bc]">
                {impact.main.description}
              </span>
            </div>
            <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#24aae1] to-transparent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-[#E5E7EB] rounded-3xl shadow-sm hover:shadow-lg transition-shadow bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 bg-linear-to-br from-[#24aae1] to-[#1173bc] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#1D3DF8]/20">
                    <stat.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-5xl text-[#2f3092]/80 mb-3">
                    {stat.number}
                  </div>
                  <CardTitle className="text-[#2f3092]/80">
                    {stat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#2f3092]/80">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projects Section */}
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
        </div>
      </div>
    </section>
  );
}
