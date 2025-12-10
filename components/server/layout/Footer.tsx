import { Config, Footer as FooterType } from "@/types/general";
import { Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

interface FooterProps {
  data: FooterType;
  navbarData: Config;
}
export function Footer({ data, navbarData }: FooterProps) {
  return (
    <footer className="bg-[#0C0F39] text-white dark:bg-[#050514]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1D3DF8] to-[#1D3DF8]/80 rounded-xl flex items-center justify-center shadow-lg shadow-[#1D3DF8]/30">
                <span className="text-white">BE</span>
              </div>
              <span className="text-lg text-white">{data.main.title}</span>
            </div>
            <p className="text-white/70 mb-6">{data.main.description}</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 bg-white/10 hover:bg-[#1D3DF8] rounded-xl flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-white/10 hover:bg-[#1D3DF8] rounded-xl flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-white/10 hover:bg-[#1D3DF8] rounded-xl flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-6 text-white">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#1D3DF8] transition-colors"
                >
                  {navbarData.navbar.nav_services}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#1D3DF8] transition-colors"
                >
                  {navbarData.navbar.nav_products}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#1D3DF8] transition-colors"
                >
                  {navbarData.navbar.nav_diy}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-white">Soporte</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#1D3DF8] transition-colors"
                >
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#1D3DF8] transition-colors"
                >
                  Documentación
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#1D3DF8] transition-colors"
                >
                  Capacitación
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#1D3DF8] transition-colors"
                >
                  Garantía
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-white">Información de Contacto</h3>
            <div className="space-y-4">
              <a
                href="mailto:info@biomedicalendowment.com"
                className="flex items-center gap-3 text-white/70 hover:text-[#1D3DF8] transition-colors group"
              >
                <div className="w-11 h-11 bg-white/10 group-hover:bg-[#1D3DF8] rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-sm">{data.main.email}</div>
              </a>

              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-white/70 hover:text-[#1D3DF8] transition-colors group"
              >
                <div className="w-11 h-11 bg-white/10 group-hover:bg-[#1D3DF8] rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
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
            <div className="text-white/70 text-sm">
              © 2024 Biomedical Endowment. Todos los derechos reservados.
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-white/70 hover:text-[#1D3DF8] transition-colors"
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
