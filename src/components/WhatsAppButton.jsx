import { MessageCircle } from "lucide-react";

const phone = "918748970331";
const message = encodeURIComponent("Hi Vinod, I found your portfolio and would like to discuss a project.");

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Vinod on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-900/20 transition hover:-translate-y-1 hover:bg-[#1fbd5a] sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={20} strokeWidth={2.5} />
      <span>WhatsApp</span>
    </a>
  );
}
