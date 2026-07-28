import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/lib/site-data";

export function WhatsFloat() {
  return (
    <motion.a
      href={site.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.6, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Falar no WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-30" />
      <span className="relative flex items-center gap-2 rounded-full bg-brand pl-4 pr-5 py-3 text-primary-foreground shadow-lg glow-red">
        <MessageCircle className="h-5 w-5" />
        <span className="hidden group-hover:inline text-sm font-medium">Fale conosco</span>
      </span>
    </motion.a>
  );
}
