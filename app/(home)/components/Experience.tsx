import { Impact, ImpactItem, ProjectItem, Projects } from "@/types/home";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/server/common/Card";
import { Building2, Users, Award } from "lucide-react";

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
    <section className="py-24 bg-gray-50 dark:bg-[#0C0F39]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-[#0C0F39] dark:text-white">
              {impact.main.title}
            </h2>
            <p className="text-[#0E0E0E] max-w-2xl mx-auto dark:text-white/70">
              {impact.main.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-[#E5E7EB] dark:border-white/10 rounded-[24px] shadow-sm hover:shadow-lg transition-shadow bg-white dark:bg-[#0C0F39]"
              >
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1D3DF8] to-[#1D3DF8]/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#1D3DF8]/20">
                    <stat.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-5xl text-[#0C0F39] mb-3 dark:text-white">
                    {stat.number}
                  </div>
                  <CardTitle className="text-[#0C0F39] dark:text-white">
                    {stat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#0E0E0E] dark:text-white/65">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="mb-4 text-[#0C0F39] dark:text-white">
              Featured Projects
            </h2>
            <p className="text-[#0E0E0E] max-w-2xl mx-auto dark:text-white/70">
              Success stories from our partnerships with leading healthcare
              organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projectsArray.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden rounded-[24px] border-[#E5E7EB] dark:border-white/10 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 bg-white dark:bg-[#0C0F39]"
              >
                <div className="h-1.5 bg-[#1D3DF8]"></div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-[#0C0F39] dark:text-white">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-[#6B7280] mb-1 dark:text-white/50">
                      Client
                    </div>
                    <div className="text-[#0E0E0E] dark:text-white">
                      {project.client}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-[#6B7280] mb-1 dark:text-white/50">
                      Impact
                    </div>
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
