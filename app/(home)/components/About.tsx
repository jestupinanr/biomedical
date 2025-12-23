import { About as AboutType } from "@/types/home";
import { CheckCircle2 } from "lucide-react";

interface AboutProps {
  data: AboutType;
}

export function About({ data }: AboutProps) {
  const highlights = Object.keys(data.main)
    .filter((key) => key.includes("item_"))
    .map((key) => data.main[key as keyof typeof data.main]);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      {/* Abstract Biomedical Wave Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Wave Layer 1 */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-25"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <defs>
            <linearGradient id="about-wave-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2f3092" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#1173bc" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          <path
            fill="url(#about-wave-1)"
            d="M0,100 C400,50 600,150 1000,100 C1300,60 1380,140 1440,120 L1440,0 L0,0 Z"
          />
        </svg>

        {/* Wave Layer 2 */}
        <svg
          className="absolute bottom-0 right-0 w-full h-3/4 opacity-20"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <defs>
            <linearGradient
              id="about-wave-2"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#24aae1" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#1173bc" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          <path
            fill="url(#about-wave-2)"
            d="M0,600 C280,540 420,620 720,580 C1020,540 1200,640 1440,600 L1440,800 L0,800 Z"
          />
        </svg>

        {/* Floating Circles */}
        <div className="absolute top-40 right-40 w-72 h-72 bg-linear-to-br from-[#2f3092]/6 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-linear-to-tr from-[#24aae1]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-4/3 bg-linear-to-br from-[#2f3092] to-[#1173bc] rounded-3xl overflow-hidden shadow-2xl relative">
              {/* Gradient overlay - darker in dark mode */}
              <div className="absolute inset-0 bg-linear-to-br from-[#24aae1]/40 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white/20">
                <svg
                  className="w-40 h-40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zM12 7.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 10c-2.07 0-3.88-.84-5-2.19a6.48 6.48 0 0110 0c-1.12 1.35-2.93 2.19-5 2.19z" />
                </svg>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#24aae1]/10 rounded-3xl -z-10"></div>
          </div>

          {/* Content with accent bar */}
          <div className="relative order-1 lg:order-2">
            {/* Vertical accent bar in electric blue */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#24aae1] rounded-full"></div>

            <div className="pl-8">
              <div className="inline-block mb-4 px-4 py-2 bg-[#24aae1]/10 text-[#1173bc] rounded-full">
                Acerca de nosotros
              </div>
              <h2 className="mb-6 text-[#2f3092] ">{data.main.paragraph_1}</h2>
              <p className="mb-6 text-[#2f3092]/80">{data.main.paragraph_2}</p>
              <p className="mb-8 text-[#2f3092]/80">{data.main.paragraph_3}</p>

              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#24aae1] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-[#2f3092]">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
