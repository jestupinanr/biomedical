import { Youtube } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../components/server/common/Card";
import AnimatedSection from "@/components/client/layout/AnimatedSection";
import { fadeInUp, viewportConfig } from "@/utils/animations";

interface VideoCardProps {
  video: {
    videoId: string;
    title: string;
    description: string;
  };
}

const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <AnimatedSection
      className="text-center py-16"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeInUp(3)}
    >
      <Card className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white transition-all hover:shadow-lg gap-2">
        {/* Video */}
        <div
          className="relative w-full bg-black"
          style={{ paddingBottom: "56.25%" }} // 16:9
        >
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${video.videoId}?modestbranding=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Content */}
        <CardHeader className="px-2 pt-0">
          <CardTitle className="items-start gap-2 text-xs font-semibold text-[#0C0F39] leading-snug line-clamp-2">
            <div className="flex gap-2 items-center">
              <div className="rounded-full flex items-center justify-center bg-white w-12 h-12 border border-[#E5E7EB]">
                <Youtube className="mt-0.5 h-8 w-8 shrink-0 text-red-600" />
              </div>
              <p>{video.title}</p>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="px-5 pb-4 pt-0">
          <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
            {video.description}
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export default VideoCard;
