import { Phone, Mail, Clock, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components//server/common/Card";
import { Visit } from "@/types/home";

interface LocationProps {
  data: Visit;
}
export function Location({ data }: LocationProps) {
  return (
    <section className="py-24 bg-white" id="contact">
      {/* Abstract Biomedical Wave Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Wave Layer 1 */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-30"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <defs>
            <linearGradient
              id="location-wave-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1173bc" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#24aae1" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <path
            fill="url(#location-wave-1)"
            d="M0,150 C320,90 520,190 840,140 C1160,90 1320,180 1440,150 L1440,0 L0,0 Z"
          />
        </svg>

        {/* Wave Layer 2 */}
        <svg
          className="absolute bottom-0 right-0 w-full h-2/3 opacity-20"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <defs>
            <linearGradient
              id="location-wave-2"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2f3092" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#1173bc" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            fill="url(#location-wave-2)"
            d="M0,480 C360,420 540,540 900,480 C1260,420 1320,520 1440,480 L1440,800 L0,800 Z"
          />
        </svg>

        {/* Floating Circles */}
        <div className="absolute top-24 right-32 w-64 h-64 bg-linear-to-br from-[#24aae1]/7 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-24 w-96 h-96 bg-linear-to-tr from-[#1173bc]/6 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="mb-4 text-[#2f3092]">{data.main.title}</h2>
          <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-linear-to-r from-[#24aae1]/10 via-[#1173bc]/10 to-[#2f3092]/10 backdrop-blur-sm rounded-full border border-[#24aae1]/20">
            <MapPin className="w-5 h-5 text-[#24aae1] hidden sm:block" />
            <span className="text-sm text-[#1173bc]">
              {data.main.description}
            </span>
          </div>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#24aae1] to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Map Card - Left side, large */}
          <Card className="rounded-3xl overflow-hidden shadow-sm border-[#E5E7EB] bg-white">
            <div className="aspect-4/3 bg-linear-to-br from-gray-100 to-gray-200 relative flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.576771632443!2d-74.11501032467258!3d4.669287841928387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b7795178f71%3A0xb2985739aa7e11b1!2sBIOMEDICAL%20GROUP%20BOGOTA!5e0!3m2!1ses!2sco!4v1765408238568!5m2!1ses!2sco"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <CardHeader>
              <CardTitle className="text-[#0C0F39] text-center">
                {data.maps.title}
              </CardTitle>
            </CardHeader>
          </Card>

          {/* Right side - stacked cards */}
          <div className="flex flex-col gap-6">
            {/* Contact Information Card - Dark blue */}
            <Card className="rounded-3xl border-[#E5E7EB] shadow-sm bg-linear-to-br from-[#2f3092] to-[#1173bc] text-white flex-1">
              <CardHeader>
                <CardTitle className="text-white">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-[#24aae1] to-[#1173bc] rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-[#1D3DF8]/30">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Dirección</div>
                    <div className="text-white">{data.ubication.address}</div>
                    <div className="text-white">{data.ubication.address_2}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-[#24aae1] to-[#1173bc] rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-[#1D3DF8]/30">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Teléfono</div>
                    <div className="text-white">{data.phone.title}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-[#24aae1] to-[#1173bc] rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-[#1D3DF8]/30">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Correo</div>
                    <div className="text-white text-sm">{data.email.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours Card - Electric blue */}
            <Card className="rounded-3xl border-[#E5E7EB] shadow-sm bg-linear-to-r from-[#24aae1] to-[#1173bc] text-white flex-1">
              <CardHeader>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">
                  Horario de Atención
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/90">Lunes - Viernes</span>
                  <span className="text-white">{data.schedule.normal}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/90">Sábado</span>
                  <span className="text-white">{data.schedule.weekend}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/90">Domingo</span>
                  <span className="text-white">Cerrado</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
