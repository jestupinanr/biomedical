"use client";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../common/Button";
import { Whatsapp } from "@/types/general";

interface FloatingWhatsAppProps {
  data: Whatsapp;
}

export function FloatingWhatsApp({ data }: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/1234567890?text=${data.main.init_message}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-sm z-50 border border-[#E5E7EB] animate-in slide-in-from-bottom-5 ">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="mb-4">
            <h3 className="text-[#0C0F39] mb-2 ">{data.main.title}</h3>
            <p className="text-[#0E0E0E] text-sm ">{data.main.description}</p>
          </div>

          <Button
            onClick={handleWhatsAppClick}
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            {data.main.button}
          </Button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    </>
  );
}
