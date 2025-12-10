"use client";
import { Button } from "../common/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Config } from "@/types/general";
// import { ThemeToggle } from "./ThemeToggle";
// import { useLanguage } from "../contexts/LanguageContext";

interface NavbarProps {
  data: Config;
}

export function Navbar({ data }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  //   const { language, setLanguage, t } = useLanguage();

  //   const toggleLanguage = () => {
  //     setLanguage(language === 'en' ? 'es' : 'en');
  //   };

  return (
    <nav className="bg-[#0C0F39] border-b border-[#1D3DF8]/15 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-[#1D3DF8] to-[#1D3DF8]/80 rounded-xl flex items-center justify-center shadow-lg shadow-[#1D3DF8]/30">
              <span className="text-white">BE</span>
            </div>
            <span className="text-xl text-white">{data.global.site_name}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white/90 hover:text-white transition-colors"
            >
              {data.navbar.nav_home}
            </Link>
            <Link
              href="#services"
              className="text-white/90 hover:text-white transition-colors"
            >
              {data.navbar.nav_services}
            </Link>
            <a
              href="#about"
              className="text-white/90 hover:text-white transition-colors"
            >
              {data.navbar.nav_our}
            </a>
            <Link
              href="/products"
              className="text-white/90 hover:text-white transition-colors"
            >
              {data.navbar.nav_products}
            </Link>
            <Link
              href="/hazlo-tu-mismo"
              className="text-white/90 hover:text-white transition-colors"
            >
              {data.navbar.nav_diy}
            </Link>
            <Link
              href="#contact"
              className="bg-[#1D3DF8] hover:bg-[#1D3DF8]/90 text-white rounded-lg shadow-[0_0_20px_rgba(29,61,248,0.4)] hover:shadow-[0_0_25px_rgba(29,61,248,0.6)] transition-all py-2 px-3"
            >
              {data.navbar.nav_button}
            </Link>
            {/* <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 rounded-lg"
              title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
            >
              <Languages className="h-5 w-5" />
              <span className="ml-1 text-xs">{language.toUpperCase()}</span>
            </Button> */}
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 rounded-lg"
            >
              <Languages className="h-5 w-5" />
            </Button> */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 text-white"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-white/90 hover:text-white transition-colors py-2"
              >
                {data.navbar.nav_home}
              </a>
              <a
                href="#services"
                className="text-white/90 hover:text-white transition-colors py-2"
              >
                {data.navbar.nav_services}
              </a>
              <a
                href="#about"
                className="text-white/90 hover:text-white transition-colors py-2"
              >
                {data.navbar.nav_our}
              </a>
              <a
                href="#projects"
                className="text-white/90 hover:text-white transition-colors py-2"
              >
                {data.navbar.nav_products}
              </a>
              <a
                href="#contact"
                className="text-white/90 hover:text-white transition-colors py-2"
              >
                {data.navbar.nav_diy}
              </a>
              <Button className="bg-[#1D3DF8] hover:bg-[#1D3DF8]/90 text-white rounded-lg w-full shadow-[0_0_20px_rgba(29,61,248,0.4)]">
                {data.navbar.nav_button}
              </Button>
              {/* <div className="pt-2 flex gap-2">
                <ThemeToggle />
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
