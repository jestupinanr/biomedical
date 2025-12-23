"use client";
import { Button } from "../common/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Config } from "@/types/general";
import { ImageWithFallback } from "../common/ImageWithFallback";

interface NavbarProps {
  data: Config;
}

export function Navbar({ data }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[#24aae1]/15 sticky top-0 z-50 shadow-lg py-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            onClick={() => (window.location.href = "/")}
          >
            <ImageWithFallback
              src="/navbar-logo.png"
              alt="test-image"
              className="w-44 h-20 object-cover"
              // width={100}
              // height={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-black/70 hover:text-black transition-colors"
            >
              {data.navbar.nav_home}
            </Link>

            <Link
              href="/#services"
              className="text-black/70 hover:text-black transition-colors"
            >
              {data.navbar.nav_services}
            </Link>

            <Link
              href="/#about"
              className="text-black/70 hover:text-black transition-colors"
            >
              {data.navbar.nav_our}
            </Link>

            <Link
              href="/products"
              className="text-black/70 hover:text-black transition-colors"
            >
              {data.navbar.nav_products}
            </Link>

            <Link
              href="/hazlo-tu-mismo"
              className="text-black/70 hover:text-black transition-colors"
            >
              {data.navbar.nav_diy}
            </Link>

            <Link
              href="/empleados"
              className="border border-[#24aae1] text-[#24aae1] hover:bg-[#24aae1]/10 rounded-lg transition-all py-2 px-3"
            >
              {data.navbar.nav_employee}
            </Link>

            <Link
              href="/#contact"
              className="bg-[#24aae1] hover:bg-[#24aae1]/90 text-white rounded-lg shadow-[0_0_20px_rgba(29,61,248,0.4)] hover:shadow-[0_0_25px_rgba(29,61,248,0.6)] transition-all py-2 px-3"
            >
              {data.navbar.nav_button}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 text-black"
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
              <Link
                href="/#home"
                className="text-black/70 hover:text-black py-2"
              >
                {data.navbar.nav_home}
              </Link>

              <Link
                href="/#services"
                className="text-black/70 hover:text-black py-2"
              >
                {data.navbar.nav_services}
              </Link>

              <Link
                href="/#about"
                className="text-black/70 hover:text-black py-2"
              >
                {data.navbar.nav_our}
              </Link>

              <Link
                href="/products"
                className="text-black/70 hover:text-black py-2"
              >
                {data.navbar.nav_products}
              </Link>

              <Link
                href="/hazlo-tu-mismo"
                className="text-black/70 hover:text-black py-2"
              >
                {data.navbar.nav_diy}
              </Link>

              <Link
                href="/empleados"
                className="text-[#24aae1] border border-[#24aae1] rounded-lg text-center py-2 hover:bg-[#24aae1]/10 transition-colors text-sm"
              >
                {data.navbar.nav_employee}
              </Link>

              <Button className="bg-[#24aae1] hover:bg-[#24aae1]/90 text-white rounded-lg w-full shadow-[0_0_20px_rgba(29,61,248,0.4)]">
                {data.navbar.nav_button}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
