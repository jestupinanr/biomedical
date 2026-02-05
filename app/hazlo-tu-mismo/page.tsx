import { MiniBanner } from "@/components/server/common/MiniBanner";
import { GraduationCap, ShieldCheck } from "lucide-react";
import { VideosContent } from "@/types/videos";
import { headers } from "next/headers";
import AnimatedSection from "@/components/client/layout/AnimatedSection";
import { fadeInDown, viewportConfigSection } from "@/utils/animations";
import VideoCard from "./components/VideoCard";
import Link from "next/link";

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
    <section className="bg-gray-50 ">
      {/* Mini Banner */}
      <MiniBanner
        title="Hágalo Usted Mismo"
        backgroundImage="https://images.unsplash.com/photo-1745449064670-94bd0fc13df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b29scyUyMG1haW50ZW5hbmNlJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY1MzQzNjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Content Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedSection
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfigSection}
              variants={fadeInDown(3)}
            >
              <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-linear-to-r from-[#24aae1]/10 via-[#1173bc]/10 to-[#2f3092]/10 backdrop-blur-sm rounded-full border border-[#24aae1]/20">
                <GraduationCap className="w-5 h-5 text-[#24aae1]" />
                <p className="text-sm text-[#1173bc]">{main.description}</p>
              </div>
            </AnimatedSection>

            <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#1173bc] to-transparent mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videosArray.map((video, index) => (
              <VideoCard key={`video-${index}`} video={video} />
            ))}
          </div>

          {/* Support Information */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white backdrop-blur-sm rounded-[20px] border border-[#E5E7EB] shadow-sm">
              <div className="p-2 rounded-lg bg-[#24aae1]/10">
                <ShieldCheck className="w-5 h-5 text-[#1173bc]" />
              </div>
              <div className="text-left =">
                <p className="text-sm text-[#2f3092]">{main.help}</p>
              </div>
            </div>
          </div>
          {/* Additional Help CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#24aae1] hover:bg-[#24aae1]/90 text-white rounded-lg transition-all shadow-lg shadow-[#1D3DF8]/30"
            >
              Contactar Soporte
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
