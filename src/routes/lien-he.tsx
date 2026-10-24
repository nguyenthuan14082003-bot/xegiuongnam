import { createFileRoute } from "@tanstack/react-router";
import { Facebook, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/data/site";
import { MapEmbed, PageHero } from "@/components/site/ui";
import { breadcrumbLd, localBusinessLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/lien-he")({
  head: () =>
    seo({
      title: "Liên hệ thuê xe – Phương Đông SQ, Phù Ninh, Phú Thọ",
      description: "Gọi 0988 783 783 hoặc 0973 110 228, nhắn Zalo hoặc Facebook để thuê xe tại Phương Đông SQ. Địa chỉ: Tổ dân phố số 24, xã Phù Ninh, Phú Thọ.",
      path: "/lien-he",
      jsonLd: [localBusinessLd, breadcrumbLd([{ name: "Trang chủ", path: "/" }, { name: "Liên hệ", path: "/lien-he" }])],
    }),
  component: Contact,
});

function Contact() {
  const card = "flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-card transition hover:border-primary";
  return (
    <>
      <PageHero title="Liên hệ Phương Đông SQ" intro="Gọi điện hoặc nhắn tin để được tư vấn dòng xe và báo giá cho chuyến đi." crumbs={[{ label: "Liên hệ" }]} />
      <section className="py-16">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-primary-deep">Thông tin liên hệ</h2>
            {SITE.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className={card}>
                <span className="rounded-full bg-primary p-3 text-primary-foreground"><Phone className="h-5 w-5" aria-hidden /></span>
                <span><span className="block text-sm text-muted-foreground">Điện thoại</span><span className="text-xl font-extrabold">{p.display}</span></span>
              </a>
            ))}
            <a href={SITE.zalo} target="_blank" rel="noopener noreferrer" className={card}>
              <span className="rounded-full bg-zalo p-3 text-sky-foreground"><MessageCircle className="h-5 w-5" aria-hidden /></span>
              <span><span className="block text-sm text-muted-foreground">Zalo</span><span className="font-bold">0988 783 783</span></span>
            </a>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className={card}>
              <span className="rounded-full bg-facebook p-3 text-sky-foreground"><Facebook className="h-5 w-5" aria-hidden /></span>
              <span><span className="block text-sm text-muted-foreground">Facebook</span><span className="font-bold">Phương Đông SQ</span></span>
            </a>
            <div className={card}>
              <span className="rounded-full bg-sky p-3 text-sky-foreground"><MapPin className="h-5 w-5" aria-hidden /></span>
              <span><span className="block text-sm text-muted-foreground">Địa chỉ</span><address className="font-bold not-italic">{SITE.address}</address></span>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-extrabold text-primary-deep">Bản đồ</h2>
            <MapEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
