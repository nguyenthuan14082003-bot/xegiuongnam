import { Facebook, Phone } from "lucide-react";
import { SITE } from "@/data/site";

export function FloatingContact() {
  const base = "flex h-13 w-13 items-center justify-center rounded-full shadow-card transition hover:scale-105";
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      <a href={`tel:${SITE.phones[0].tel}`} aria-label={`Gọi ${SITE.phones[0].display}`} className={`${base} bg-primary text-primary-foreground`}>
        <Phone className="h-6 w-6" />
      </a>
      <a href={SITE.zalo} target="_blank" rel="noopener noreferrer" aria-label="Nhắn Zalo" className={`${base} bg-zalo text-sm font-extrabold text-sky-foreground`}>
        Zalo
      </a>
      <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook Phương Đông SQ" className={`${base} bg-facebook text-sky-foreground`}>
        <Facebook className="h-6 w-6" />
      </a>
    </div>
  );
}
