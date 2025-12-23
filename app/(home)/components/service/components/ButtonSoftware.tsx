"use client";

import { Button } from "@/components/client/common/Button";
import { ArrowRight } from "lucide-react";
interface ButtonSoftwareProps {
  textButton: string;
}

function ButtonSoftware({ textButton }: ButtonSoftwareProps) {
  return (
    <Button
      onClick={() =>
        window.open(
          "https://app.softwaresamm.com/endowment/forms/publica/login.aspx?ReturnUrl=%2fendowment%2fforms%2fgeneral%2finicio.aspx",
          "_blank"
        )
      }
      className="bg-white text-[#1173bc] hover:bg-white/90 rounded-xl px-8 py-6 shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer"
    >
      {textButton}
      <ArrowRight className="h-5 w-5" />
    </Button>
  );
}

export default ButtonSoftware;
