import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
    <section className="py-24 bg-white dark:bg-[#050514]" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[#0C0F39] dark:text-white">
            {data.main.title}
          </h2>
          <p className="text-[#0E0E0E] max-w-2xl mx-auto dark:text-white/70">
            {data.main.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Map Card - Left side, large */}
          <Card className="rounded-[24px] overflow-hidden shadow-sm border-[#E5E7EB] bg-white dark:border-white/10 dark:bg-[#0C0F39]">
            {/* <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center dark:from-[#0C0F39] dark:to-[#050514]">
              <div className="text-center">
                <div className="w-24 h-24 bg-[#1D3DF8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-[#1D3DF8]/40">
                  <MapPin className="h-12 w-12 text-white" />
                </div>
                <p className="text-[#6B7280] mb-2 dark:text-white/70">
                  Google Maps
                </p>
                <p className="text-sm text-[#6B7280] dark:text-white/50">
                  {data.maps.title}
                </p>
              </div>
            </div> */}
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center dark:from-[#0C0F39] dark:to-[#050514]">
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
              <CardTitle className="text-[#0C0F39] text-center dark:text-white">
                {data.maps.title}
              </CardTitle>
            </CardHeader>
          </Card>

          {/* Right side - stacked cards */}
          <div className="flex flex-col gap-6">
            {/* Contact Information Card - Dark blue */}
            <Card className="rounded-[24px] border-[#E5E7EB] shadow-sm bg-[#0C0F39] text-white dark:border-white/10 flex-1">
              <CardHeader>
                <CardTitle className="text-white">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1D3DF8] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#1D3DF8]/30">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Dirección</div>
                    <div className="text-white">{data.ubication.address}</div>
                    <div className="text-white">{data.ubication.address_2}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1D3DF8] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#1D3DF8]/30">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Teléfono</div>
                    <div className="text-white">{data.phone.title}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1D3DF8] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#1D3DF8]/30">
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
            <Card className="rounded-[24px] border-[#E5E7EB] shadow-sm bg-[#1D3DF8] text-white dark:border-white/10 flex-1">
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
