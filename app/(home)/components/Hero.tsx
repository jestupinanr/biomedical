import { Hero as HeroType } from "@/types/home";

interface HeroProps {
  data: HeroType;
}
export function Hero({ data }: HeroProps) {
  return (
    <section className="relative bg-white bg-linear-to-br from-[#2f3092] to-[#1173bc] text-white overflow-hidden">
      {/* Biomedical pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo with glow */}
          {/* <div className="mb-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(36,170,225,0.3)]"> */}
          {/* <div className="w-12 h-12 bg-gradient-to-br from-[#24aae1] to-[#1173bc] rounded-xl flex items-center justify-center shadow-lg shadow-[#24aae1]/50">
              <span className="text-white text-lg">BE</span>
            </div>
            <span className="text-xl">Biomedical Endowment</span> */}
          {/* </div> */}

          {/* Hero content */}
          <h1 className="mb-6 text-5xl lg:text-7xl">{data.main.hero_tag}</h1>
          <p className="mb-10 text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto">
            {data.main.subtitle}
          </p>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#24aae1]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-[#1173bc]/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
