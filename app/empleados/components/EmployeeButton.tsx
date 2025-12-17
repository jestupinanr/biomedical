"use client";

import { Button } from "@/components/client/common/Button";
import { ArrowRight } from "lucide-react";

interface EmployeeButtonProps {
  link: string;
  gradient: string;
}

function EmployeeButton({ link, gradient }: EmployeeButtonProps) {
  return (
    <Button
      onClick={() => window.open(link, "_blank")}
      className={`w-full bg-gradient-to-r ${gradient} hover:opacity-90 text-white rounded-full py-6 shadow-md hover:shadow-lg transition-all duration-300 border-0 relative overflow-hidden group/btn cursor-pointer`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
      <span className="relative z-10">Acceder a la plataforma</span>
      <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
    </Button>
  );
}

export default EmployeeButton;
