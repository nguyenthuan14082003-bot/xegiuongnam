import { Link } from "@tanstack/react-router";
import { ChevronRight, ImageOff, MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { SITE } from "@/data/site";

export function CallButton({ label = "Gọi tư vấn ngay", variant = "primary", phone = SITE.phones[0] }: { label?: string; variant?: "primary" | "sun" | "outline"; phone?: { display: string; tel: string } }) {
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-deep",
    sun: "bg-sun text-sun-foreground hover:brightness-105",
    outline: "border-2 border-primary text-primary hover:bg-secondary",
  }[variant];
  return (
    <a href={`tel:${phone.tel}`} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold shadow-card transition ${styles}`}>
      <Phone className="h-5 w-5" aria-hidden /> {label}
      <span className="sr-only"> số {phone.display}</span>
    </a>
  );
}

export function ZaloButton() {
  return (
    <a href={SITE.zalo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-zalo px-6 py-3 font-bold text-sky-foreground shadow-card transition hover:brightness-110">
      <MessageCircle className="h-5 w-5" aria-hidden /> Nhắn Zalo
    </a>
  );
}

export function Section({ id, title, eyebrow, intro, children, muted }: { id?: string; title: string; eyebrow?: string; intro?: string; children: ReactNode; muted?: boolean }) {
  return (
    <section id={id} className={muted ? "bg-muted py-16 md:py-20" : "py-16 md:py-20"}>
      <div className="container-site">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          {eyebrow && <p className="text-sm font-bold uppercase tracking-wider text-sky">{eyebrow}</p>}
          <h2 className="mt-2 text-3xl font-extrabold text-primary-deep md:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export function PageHero({ title, intro, crumbs }: { title: string; intro: string; crumbs?: { label: string; to?: string }[] }) {
  return (
    <div className="bg-brand-gradient text-primary-foreground">
      <div className="container-site py-12 md:py-16">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg opacity-90">{intro}</p>
      </div>
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm opacity-90">
        <li><Link to="/" className="hover:underline">Trang chủ</Link></li>
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            {it.to ? <a href={it.to} className="hover:underline">{it.label}</a> : <span aria-current="page">{it.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed bg-muted p-4 text-center text-muted-foreground">
      <ImageOff className="h-8 w-8" aria-hidden />
      <span className="text-sm font-semibold">{label}</span>
      <span className="text-xs">Đang cập nhật ảnh thực tế</span>
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="bg-brand-gradient py-14 text-primary-foreground">
      <div className="container-site flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">Cần xe cho chuyến đi sắp tới?</h2>
        <p className="max-w-xl opacity-90">Gọi hoặc nhắn Zalo cho Phương Đông SQ để được tư vấn dòng xe và lịch trình phù hợp.</p>
        <div className="flex flex-wrap justify-center gap-3">
          {SITE.phones.map((p) => <CallButton key={p.tel} variant="sun" phone={p} label={p.display} />)}
          <ZaloButton />
        </div>
      </div>
    </section>
  );
}

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border shadow-card">
      <iframe title="Bản đồ Phương Đông SQ tại Phù Ninh, Phú Thọ" src={SITE.embedUrl} className="h-80 w-full md:h-96" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      <div className="flex flex-col gap-3 bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm"><strong>Địa chỉ:</strong> {SITE.address}</p>
        <a href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-sky px-5 font-bold text-sky-foreground hover:brightness-110">
          Chỉ đường Google Maps
        </a>
      </div>
    </div>
  );
}
