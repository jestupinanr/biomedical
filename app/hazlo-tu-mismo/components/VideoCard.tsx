"use client";

import { Youtube, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/client/layout/AnimatedSection";
import { fadeInUp, viewportConfig } from "@/utils/animations";

interface VideoCardProps {
  video: {
    videoId: string;
    title: string;
    description: string;
  };
  index: number;
}

const VideoCard = ({ video, index }: VideoCardProps) => {
  const number = String(index + 1).padStart(2, "0");

  return (
    <AnimatedSection
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeInUp(0.5)}
    >
      <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
        {/* iframe */}
        <div className="relative w-full shrink-0" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${video.videoId}?modestbranding=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {/* Number badge — sits outside iframe click area */}
          <div className="pointer-events-none absolute top-3 left-3 z-10 w-8 h-8 rounded-full bg-[#1173bc] text-white text-xs font-bold flex items-center justify-center shadow-lg">
            {number}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          {/* Label row */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-red-50 shrink-0">
              <Youtube className="h-3.5 w-3.5 text-red-600" />
            </div>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-[#1173bc]">
              Tutorial {number}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-sm font-semibold text-[#0C0F39] leading-snug line-clamp-2 group-hover:text-[#1173bc] transition-colors duration-200">
            {video.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 flex-1">
            {video.description}
          </p>

          {/* Footer link */}
          <a
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#24aae1] hover:text-[#1173bc] transition-colors mt-1 self-start"
          >
            Ver en YouTube
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default VideoCard;
