import { MiniBanner } from "@/components/server/common/MiniBanner";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/server/common/Card";
import { GraduationCap, ShieldCheck } from "lucide-react";

const diyVideos = [
  {
    id: 1,
    title: "Basic Maintenance for Medical Equipment",
    description:
      "Learn the fundamentals of preventive maintenance to keep your biomedical equipment running smoothly.",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    id: 2,
    title: "Troubleshooting Patient Monitors",
    description:
      "Step-by-step guide to identify and resolve common issues with vital signs monitoring systems.",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    id: 3,
    title: "Calibrating Medical Scales",
    description:
      "Essential techniques for accurate calibration of medical weighing equipment for precise measurements.",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    id: 4,
    title: "Cleaning and Sterilization Best Practices",
    description:
      "Comprehensive tutorial on proper cleaning protocols and sterilization techniques for medical devices.",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    id: 5,
    title: "Understanding Infusion Pump Settings",
    description:
      "Complete walkthrough of infusion pump configuration and common error messages resolution.",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    id: 6,
    title: "Blood Pressure Monitor Setup",
    description:
      "Quick guide to properly set up and test automated blood pressure monitoring devices.",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
];

// const getData = async (): Promise<HomeContent> => {
//   const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

//   const res = await fetch(`${baseUrl}/api/content/home`, {
//     next: { revalidate: 60 },
//   });

//   if (!res.ok) throw new Error("Failed to fetch content");

//   const { data } = await res.json();
//   return data;
// };

export default async function HazloTuMismo() {
  return (
    <section className="bg-gray-50 dark:bg-[#050514]">
      {/* Mini Banner */}
      <MiniBanner
        title="Hágalo Usted Mismo"
        backgroundImage="https://images.unsplash.com/photo-1745449064670-94bd0fc13df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b29scyUyMG1haW50ZW5hbmNlJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY1MzQzNjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Content Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-gradient-to-r from-[#24aae1]/10 via-[#1173bc]/10 to-[#2f3092]/10 backdrop-blur-sm rounded-full border border-[#24aae1]/20">
              <GraduationCap className="w-5 h-5 text-[#24aae1]" />
              <p className="text-sm text-[#1173bc]">
                Mire nuestros tutoriales de video y aprenda a realizar
                mantenimiento básico y solución de problemas en su equipo
                biomédico.
              </p>
            </div>

            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#1173bc] to-transparent mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diyVideos.map((video) => (
              <Card
                key={video.id}
                className="overflow-hidden rounded-[24px] border-[#E5E7EB] dark:border-white/10 hover:shadow-xl transition-all bg-white dark:bg-[#0C0F39] shadow-sm"
              >
                {/* YouTube Video Embed */}
                <div
                  className="relative w-full bg-black"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video Details */}
                <CardHeader className="pb-3 px-6 pt-6">
                  <CardTitle className="text-[#0C0F39] dark:text-white text-xl leading-tight">
                    {video.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-0">
                  <p className="text-[#0E0E0E] dark:text-white/70 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Support Information */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white dark:bg-[#2f3092]/20 backdrop-blur-sm rounded-[20px] border border-[#E5E7EB] dark:border-[#24aae1]/20 shadow-sm">
              <div className="p-2 rounded-lg bg-[#24aae1]/10">
                <ShieldCheck className="w-5 h-5 text-[#1173bc]" />
              </div>
              <div className="text-left =">
                <p className="text-sm text-[#2f3092] dark:text-white">
                  ¿Necesita más ayuda? Nuestro equipo de soporte técnico está
                  aquí para ayudarlo.
                </p>
              </div>
            </div>
          </div>
          {/* Additional Help CTA */}
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#24aae1] hover:bg-[#24aae1]/90 text-white rounded-lg transition-all shadow-lg shadow-[#1D3DF8]/30"
            >
              Contactar Soporte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
