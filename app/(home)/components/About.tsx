import { About as AboutType } from "@/types/home";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "ISO-certified quality management systems",
  "Cutting-edge research and development",
  "Global network of medical professionals",
  "Commitment to sustainable healthcare solutions",
];

interface AboutProps {
  data: AboutType;
}

export function About({ data }: AboutProps) {
  const highlights = Object.keys(data.main)
    .filter((key) => key.includes("item_"))
    .map((key) => data.main[key as keyof typeof data.main]);

  return (
    <section className="py-24 bg-white dark:bg-[#050514]" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#0C0F39] to-[#1D3DF8] rounded-[24px] overflow-hidden shadow-2xl relative">
              {/* Gradient overlay - darker in dark mode */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1D3DF8]/40 to-transparent dark:from-black/60 dark:to-transparent"></div>
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
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#1D3DF8]/10 rounded-[24px] -z-10"></div>
          </div>

          {/* Content with accent bar */}
          <div className="relative order-1 lg:order-2">
            {/* Vertical accent bar in electric blue */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D3DF8] rounded-full"></div>

            <div className="pl-8">
              <div className="inline-block mb-4 px-4 py-2 bg-[#1D3DF8]/10 text-[#1D3DF8] rounded-full">
                Acerca de nosotros
              </div>
              <h2 className="mb-6 text-[#0C0F39] dark:text-white">
                {data.main.paragraph_1}
              </h2>
              <p className="mb-6 text-[#0E0E0E] dark:text-white/70">
                {data.main.paragraph_2}
              </p>
              <p className="mb-8 text-[#0E0E0E] dark:text-white/70">
                {data.main.paragraph_3}
              </p>

              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#1D3DF8] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-[#0E0E0E] dark:text-white">
                      {highlight}
                    </span>
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
