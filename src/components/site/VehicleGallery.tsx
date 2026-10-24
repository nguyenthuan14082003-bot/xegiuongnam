import { X } from "lucide-react";
import { useEffect, useState } from "react";
import type { VehicleImage } from "@/data/vehicles";
import { PhotoPlaceholder } from "./ui";

export function VehicleGallery({ images, emptyLabel }: { images: VehicleImage[]; emptyLabel: string }) {
  const [active, setActive] = useState<VehicleImage | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!images.length) return <div className="grid gap-4 sm:grid-cols-2"><PhotoPlaceholder label={emptyLabel} /></div>;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {images.map((img) => (
          <button key={img.src} type="button" onClick={() => setActive(img)} className="overflow-hidden rounded-xl focus-visible:ring-4 focus-visible:ring-ring" aria-label={`Phóng to: ${img.alt}`}>
            <img src={img.src} alt={img.alt} loading="lazy" width={800} height={600} className="aspect-[4/3] w-full object-cover transition hover:scale-105" />
          </button>
        ))}
      </div>
      {active && (
        <div role="dialog" aria-modal="true" aria-label={active.alt} className="fixed inset-0 z-[60] flex items-center justify-center bg-overlay/90 p-4" onClick={() => setActive(null)}>
          <button type="button" aria-label="Đóng ảnh" className="absolute top-4 right-4 rounded-full bg-background p-2"><X className="h-6 w-6" /></button>
          <img src={active.src} alt={active.alt} className="max-h-[85vh] max-w-full rounded-xl" />
        </div>
      )}
    </>
  );
}
