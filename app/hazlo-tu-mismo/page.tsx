import type { Metadata } from "next";
import { MiniBanner } from "@/components/server/common/MiniBanner";
import {
  GraduationCap,
  ShieldCheck,
  MessageCircle,
  PlayCircle,
} from "lucide-react";
import { VideosContent } from "@/types/videos";
import { headers } from "next/headers";
import AnimatedSection from "@/components/client/layout/AnimatedSection";
import {
  fadeInDown,
  fadeInUp,
  staggerContainer,
  viewportConfigSection,
  viewportConfig,
} from "@/utils/animations";
import VideoCard from "./components/VideoCard";
import Link from "next/link";
import { JsonLd } from "@/components/server/common/JsonLd";

export const metadata: Metadata = {
  title: "Hágalo Usted Mismo",
  description:
    "Aprende a realizar mantenimiento básico y operación correcta de equipos médicos con nuestros tutoriales en video. Guías paso a paso para profesionales de la salud en Colombia.",
  keywords: [
    "tutoriales equipos médicos",
    "mantenimiento equipos hospitalarios DIY",
    "como usar equipos médicos",
    "guías biomédicas",
    "videos capacitación médica",
  ],
  alternates: {
    canonical: "https://www.biomedicalendowment.com/hazlo-tu-mismo",
  },
  openGraph: {
    title: "Hágalo Usted Mismo | Tutoriales Biomédicos - Biomedical Endowment",
    description:
      "Videos y guías para el mantenimiento y operación correcta de equipos médicos.",
    url: "https://www.biomedicalendowment.com/hazlo-tu-mismo",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tutoriales de Mantenimiento de Equipos Médicos",
  description:
    "Guías en video para el mantenimiento y operación de equipos biomédicos.",
  url: "https://www.biomedicalendowment.com/hazlo-tu-mismo",
};

const getData = async (): Promise<VideosContent> => {
  const headersList = await headers();
  const proto = headersList.get("x-forwarded-proto") || "http";
  const host = headersList.get("host") || "localhost:3000";
  const baseUrl = `${proto}://${host}`;

  const res = await fetch(`${baseUrl}/api/content/videos`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch content");

  const { data } = await res.json();
  return data;
};

export default async function HazloTuMismo() {
  const data = await getData();

  const { main, ...videos } = data.videos;
  const videosArray = Object.values(videos);

  return (
    <section className="bg-gray-50 min-h-screen">
      <JsonLd data={howToSchema} />

      {/* Banner */}
      <MiniBanner
        title="Hágalo Usted Mismo"
        backgroundImage="https://images.unsplash.com/photo-1745449064670-94bd0fc13df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b29scyUyMG1haW50ZW5hbmNlJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY1MzQzNjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* ── Section header ── */}
          <AnimatedSection
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfigSection}
            variants={fadeInDown(0.6)}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#24aae1]/10 via-[#1173bc]/10 to-[#2f3092]/10 rounded-full border border-[#24aae1]/20 mb-5">
              <GraduationCap className="w-4 h-4 text-[#24aae1]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#1173bc]">
                Centro de aprendizaje
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C0F39] mb-4 leading-tight">
              Aprende a tu propio ritmo
            </h2>

            {/* Description */}
            <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
              {main.description}
            </p>

            {/* Divider */}
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#1173bc] to-transparent mx-auto mt-8" />
          </AnimatedSection>

          {/* ── Stats strip ── */}
          <AnimatedSection
            className="flex flex-wrap justify-center gap-6 mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp(0.5)}
          >
            <div className="flex items-center gap-2.5 bg-white rounded-xl px-5 py-3 border border-gray-100 shadow-sm">
              <PlayCircle className="w-5 h-5 text-[#24aae1]" />
              <span className="text-sm font-semibold text-[#0C0F39]">
                {videosArray.length}{" "}
                <span className="font-normal text-gray-500">
                  {videosArray.length === 1
                    ? "tutorial disponible"
                    : "tutoriales disponibles"}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2.5 bg-white rounded-xl px-5 py-3 border border-gray-100 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#1173bc]" />
              <span className="text-sm font-semibold text-[#0C0F39]">
                Contenido{" "}
                <span className="font-normal text-gray-500">
                  verificado por expertos
                </span>
              </span>
            </div>
          </AnimatedSection>

          {/* ── Video grid ── */}
          <AnimatedSection
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            {videosArray.map((video, index) => (
              <VideoCard key={`video-${index}`} video={video} index={index} />
            ))}
          </AnimatedSection>

          {/* ── Support CTA ── */}
          <AnimatedSection
            className="mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp(0.5)}
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#24aae1]/20 bg-gradient-to-r from-[#0C0F39] via-[#1173bc] to-[#2f3092] p-px">
              <div className="rounded-2xl bg-white px-8 py-8 md:py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  {/* Left */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 rounded-xl bg-[#24aae1]/10">
                      <ShieldCheck className="w-6 h-6 text-[#1173bc]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0C0F39] mb-1">
                        ¿No encontraste lo que buscabas?
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                        {main.help}
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <Link
                    href="/#contact"
                    className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#24aae1] to-[#1173bc] text-white text-sm font-semibold shadow-lg shadow-[#1173bc]/30 hover:shadow-[#1173bc]/50 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Contactar Soporte
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
