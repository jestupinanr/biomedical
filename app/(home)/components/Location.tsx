import { Phone, Mail, Clock, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components//server/common/Card";
import { Visit } from "@/types/home";
import AnimatedSection from "@/components/client/layout/AnimatedSection";
import { fadeInLeft, fadeInRight, viewportConfig } from "@/utils/animations";

interface LocationProps {
  data: Visit;
}
export function Location({ data }: LocationProps) {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16 ">
          {/* Left side → title */}
          <AnimatedSection
            initial="hidden"
            whileInView="visible"
            variants={fadeInLeft(3)}
            className="text-left"
          >
            <span className="uppercase tracking-[0.25em] text-[10px] md:text-sm font-semibold text-[#24aae1]">
              Información de contacto
            </span>

            <h2 className="mt-3 text-[#2f3092] text-2xl md:text-[56px] font-extrabold leading-tight">
              {data.main.title}
            </h2>

            <div className="mt-4 w-12 h-1 md:w-20 md:h-1.5 bg-linear-to-r from-transparent via-[#24aae1] to-transparent rounded-full"></div>
          </AnimatedSection>

          {/* Right side → description */}
          <AnimatedSection
            initial="hidden"
            whileInView="visible"
            variants={fadeInRight(3)}
            className="md:justify-self-end"
          >
            <div className="inline-flex items-center gap-5 mb-4 px-5 py-5 md:px-7 md:py-8 bg-linear-to-r from-[#24aae1]/10 via-[#1173bc]/10 to-[#2f3092]/10 backdrop-blur-sm rounded-4xl border border-[#24aae1]/20">
              <MapPin className="w-12 h-12 text-[#24aae1] " />
              <p className="text-[#2f3092]/80 max-w-md text-xs leading-relaxed md:text-base">
                {data.main.description}
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 overflow-hidden w-full">
          {/* Map Card - Left side, large */}
          <AnimatedSection
            className="w-full h-full"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInLeft(5)}
          >
            <Card className="rounded-3xl overflow-hidden shadow-sm border-[#E5E7EB] bg-white h-full">
              <div className="relative w-full aspect-video overflow-hidden rounded-3xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10171.953660190055!2d-74.06421990934408!3d4.670407173117269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9af7442d681d%3A0x4b1e9d2298ff5971!2zQ3JhIDI3ICMgODItMTQsIEJhcnJpb3MgVW5pZG9zLCBCb2dvdMOhLCBELkMuLCBCb2dvdMOhLCBCb2dvdMOhLCBELkMu!5e0!3m2!1ses!2sco!4v1766513427660!5m2!1ses!2sco"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full border-0"
                ></iframe>
              </div>
              <CardHeader>
                <CardTitle className="text-[#0C0F39] text-center">
                  {data.maps.title}
                </CardTitle>
              </CardHeader>
            </Card>
          </AnimatedSection>

          {/* Right side - stacked cards */}
          <AnimatedSection
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInRight(5)}
          >
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
                    <div className="text-white text-xs sm:text-sm">
                      {data.email.title}
                    </div>
                    <div className="text-white text-xs sm:text-sm">
                      {data.email.title_2}
                    </div>
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
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
