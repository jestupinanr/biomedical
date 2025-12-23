import { MiniBanner } from "@/components/server/common/MiniBanner";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/server/common/Card";
import {
  Users,
  Calendar,
  FileText,
  UserCheck,
  ShieldCheck,
} from "lucide-react";
import EmployeeButton from "./components/EmployeeButton";
import { EmployeesContent } from "@/types/employee";
import { ImageWithFallback } from "@/components/client/common/ImageWithFallback";
import { headers } from "next/headers";

const getData = async (): Promise<EmployeesContent> => {
  const headersList = await headers();
  const proto = headersList.get("x-forwarded-proto") || "http";
  const host = headersList.get("host") || "localhost:3000";
  const baseUrl = `${proto}://${host}`;

  const res = await fetch(`${baseUrl}/api/content/employees`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch content");

  const { data } = await res.json();
  return data;
};

export default async function Employee() {
  const data = await getData();

  const platforms = [
    {
      id: "samm",
      title: data.empleados.samm.title,
      subtitle: data.empleados.samm.subtitle,
      description: data.empleados.samm.description,
      logo: "/samm-logo.png",
      logoClassname: "w-24 h-14",
      features: [
        { icon: FileText, text: data.empleados.samm.item_1 },
        { icon: Calendar, text: data.empleados.samm.item_2 },
        { icon: UserCheck, text: data.empleados.samm.item_3 },
      ],
      link: "https://app.softwaresamm.com/endowment/forms/publica/login.aspx?ReturnUrl=%2fendowment%2fforms%2fgeneral%2finicio.aspx",
      gradient: "from-[#2f3092] to-[#1173bc]",
      accentColor: "#2f3092",
    },
    {
      id: "hr",
      title: data.empleados.rrhh.title,
      subtitle: data.empleados.rrhh.subtitle,
      description: data.empleados.rrhh.description,
      logo: "buk.svg",
      logoClassname: "w-12 h-14",
      features: [
        { icon: Users, text: data.empleados.rrhh.item_1 },
        { icon: Calendar, text: data.empleados.rrhh.item_2 },
        { icon: FileText, text: data.empleados.rrhh.item_3 },
      ],
      link: "https://be.buk.co/users/sign_in#liquidaciones",
      gradient: "from-[#1173bc] to-[#24aae1]",
      accentColor: "#1173bc",
    },
  ];

  return (
    <section className="bg-gray-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <svg
          className="absolute top-0 right-0 w-1/2 h-full"
          viewBox="0 0 400 800"
          fill="none"
        >
          <defs>
            <linearGradient
              id="employee-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#24aae1" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#2f3092" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <rect
            x="0"
            y="0"
            width="400"
            height="800"
            fill="url(#employee-gradient)"
          />
          <circle cx="300" cy="200" r="150" fill="#1173bc" opacity="0.03" />
          <circle cx="100" cy="600" r="100" fill="#24aae1" opacity="0.04" />
        </svg>
      </div>

      {/* Mini Banner */}
      <MiniBanner
        title="Recursos de empleados"
        backgroundImage="https://images.unsplash.com/photo-1745449064670-94bd0fc13df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b29scyUyMG1haW50ZW5hbmNlJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY1MzQzNjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#2f3092]/70 max-w-2xl mx-auto">
            {data.empleados.main.description}
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#1173bc] to-transparent mx-auto rounded-full mt-6"></div>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform) => {
            return (
              <Card
                key={platform.id}
                className="group relative overflow-hidden rounded-4xl border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.12)] hover:border-[#24aae1]/40 transition-all duration-300 bg-white  backdrop-blur-md"
              >
                {/* Gradient Background Accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-2 bg-linear-to-r ${platform.gradient}`}
                ></div>

                <CardHeader className="pb-4 pt-8">
                  <ImageWithFallback
                    src={platform.logo}
                    alt="test-image"
                    className={`${platform.logoClassname} object-cover`}
                    // width={100}
                    // height={100}
                  />

                  <CardTitle className="text-[#2f3092] text-2xl mb-2">
                    {platform.title}
                  </CardTitle>
                  <p className="text-[#1173bc] text-sm">{platform.subtitle}</p>
                </CardHeader>

                <CardContent className="pb-8">
                  <p className="text-[#2f3092]/70 text-sm mb-6 leading-relaxed">
                    {platform.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {platform.features.map((feature, index) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-0.5 p-1.5 rounded-lg bg-linear-to-br from-[#24aae1]/10 to-[#1173bc]/10">
                            <FeatureIcon className="w-4 h-4 text-[#1173bc]" />
                          </div>
                          <span className="text-sm text-[#2f3092]/80">
                            {feature.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Access Button */}
                  <EmployeeButton
                    gradient={platform.gradient}
                    link={platform.link}
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Support Information */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-start gap-3 px-6 py-4 bg-white  backdrop-blur-sm rounded-[20px] border border-[#E5E7EB] shadow-sm">
            <div className="p-2 rounded-lg bg-[#24aae1]/10">
              <ShieldCheck className="w-5 h-5 text-[#1173bc]" />
            </div>
            <div className="text-left">
              <p className="text-sm text-[#2f3092]">
                {data.empleados.help.title}
              </p>
              <p className="text-xs text-[#2f3092]/70 mt-1">
                {data.empleados.help.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
