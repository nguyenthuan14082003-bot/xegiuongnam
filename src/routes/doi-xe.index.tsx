import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.webp.asset.json";
import { visibleVehicles } from "@/data/vehicles";
import { CtaBand, PageHero, PhotoPlaceholder } from "@/components/site/ui";
import { breadcrumbLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/doi-xe/")({
  head: () =>
    seo({
      title: "Đội xe 7, 16, 29, 45 chỗ, giường nằm, Limousine – Phương Đông SQ",
      description: "Danh sách dòng xe cho thuê tại Phương Đông SQ, Phú Thọ: xe 7 chỗ, 16 chỗ, 29 chỗ, 45 chỗ, xe giường nằm 45 chỗ và xe Limousine.",
      path: "/doi-xe",
      jsonLd: [breadcrumbLd([{ name: "Trang chủ", path: "/" }, { name: "Đội xe", path: "/doi-xe" }])],
    }),
  component: Fleet,
});

function Fleet() {
  return (
    <>
      <PageHero title="Đội xe Phương Đông SQ" intro="Chọn dòng xe theo số người và hành trình. Nhấn vào từng dòng xe để xem chi tiết." crumbs={[{ label: "Đội xe" }]} />
      <section className="py-16">
        <div className="container-site">
          <img src={hero.url} alt="Ảnh đội xe Phương Đông SQ gồm xe Limousine và các xe khách" width={1585} height={380} className="w-full rounded-2xl object-cover shadow-card" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleVehicles().map((v) => (
              <li key={v.slug} className="flex flex-col overflow-hidden rounded-2xl border bg-card shadow-card">
                {v.exterior[0] ? (
                  <img src={v.exterior[0].src} alt={v.exterior[0].alt} loading="lazy" width={800} height={600} className="aspect-[4/3] w-full object-cover" />
                ) : (
                  <div className="p-3"><PhotoPlaceholder label={`Ảnh ${v.name}`} /></div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-xl font-bold text-primary-deep">{v.name}</h2>
                  <p className="text-sm font-semibold text-sky">{v.seats}</p>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{v.summary}</p>
                  <div className="mt-4 flex gap-3">
                    <Link to="/doi-xe/$slug" params={{ slug: v.slug }} className="flex-1 rounded-lg border-2 border-primary py-2 text-center font-bold text-primary hover:bg-secondary">Chi tiết</Link>
                    <a href="tel:0988783783" className="flex-1 rounded-lg bg-primary py-2 text-center font-bold text-primary-foreground hover:bg-primary-deep">Gọi tư vấn</a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
