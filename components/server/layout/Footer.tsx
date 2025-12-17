import { ImageWithFallback } from "@/components/client/common/ImageWithFallback";
import { Config, Footer as FooterType } from "@/types/general";
import { Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

interface FooterProps {
  data: FooterType;
  navbarData: Config;
}
export function Footer({ data, navbarData }: FooterProps) {
  return (
    <footer className="bg-white text-black dark:bg-[#050514] border-t border-[#24aae1]/15 shadow-lg ">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <ImageWithFallback
              src="/navbar-logo.png"
              alt="test-image"
              className="w-44 h-20 object-cover"
              // width={100}
              // height={100}
            />
            <p className="text-black/70 mb-6">{data.main.description}</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 bg-gradient-to-br text-white from-[#24aae1] to-[#1173bc] rounded-xl flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-gradient-to-br text-white from-[#24aae1] to-[#1173bc] rounded-xl flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-gradient-to-br text-white from-[#24aae1] to-[#1173bc] rounded-xl flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-6 text-black">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-black/70 hover:text-black transition-colors"
                >
                  {navbarData.navbar.nav_services}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black/70 hover:text-black transition-colors"
                >
                  {navbarData.navbar.nav_products}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black/70 hover:text-black transition-colors"
                >
                  {navbarData.navbar.nav_diy}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-black">Soporte</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-black/70 hover:text-black transition-colors"
                >
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black/70 hover:text-black transition-colors"
                >
                  Documentación
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black/70 hover:text-black transition-colors"
                >
                  Capacitación
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black/70 hover:text-black transition-colors"
                >
                  Garantía
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-black">Información de Contacto</h3>
            <div className="space-y-4">
              <a
                href="mailto:info@biomedicalendowment.com"
                className="flex items-center gap-3 text-black/70 hover:text-black transition-colors group"
              >
                <div className="w-11 h-11 bg-gradient-to-br text-white from-[#24aae1] to-[#1173bc] rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-sm">{data.main.email}</div>
              </a>

              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-black/70 hover:text-black transition-colors group"
              >
                <div className="w-11 h-11 bg-gradient-to-br text-white from-[#24aae1] to-[#1173bc] rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-sm">{data.main.phone}</div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Electric blue divider */}
        <div className="pt-8 border-t border-[#1D3DF8]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-black/70 text-sm">
              © 2024 Biomedical Endowment. Todos los derechos reservados.
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="/files/Politica_de_Privacidad_Biomedical_Endowment.pdf"
                className="text-black/70 hover:text-black transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
