import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { getService, services } from "@/data/services";
import { visibleVehicles } from "@/data/vehicles";
import { CallButton, CtaBand, PageHero, ZaloButton } from "@/components/site/ui";
import { breadcrumbLd, seo, serviceLd } from "@/lib/seo";

export const Route = createFileRoute("/dich-vu/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Không tìm thấy dịch vụ" }, { name: "robots", content: "noindex" }] };
    const s = loaderData.service;
    const path = `/dich-vu/${params.slug}`;
    return seo({
      title: `${s.title} Phú Thọ – Phương Đông SQ`,
      description: s.short,
      path,
      jsonLd: [serviceLd(s.title, s.intro), breadcrumbLd([{ name: "Trang chủ", path: "/" }, { name: "Dịch vụ", path: "/dich-vu" }, { name: s.title, path }])],
    });
  },
  component: ServicePage,
});

function ServicePage() {
  const { service: s } = Route.useLoaderData();
  return (
    <>
      <PageHero title={s.title} intro={s.intro} crumbs={[{ label: "Dịch vụ", to: "/dich-vu" }, { label: s.title }]} />
      <section className="py-16">
        <div className="container-site grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-2xl font-extrabold text-primary-deep">Điểm nổi bật</h2>
            <ul className="mt-6 space-y-5">
              {s.points.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden />
                  <div><h3 className="font-bold">{p.title}</h3><p className="text-muted-foreground">{p.text}</p></div>
                </li>
              ))}
            </ul>
            <h2 className="mt-12 text-2xl font-extrabold text-primary-deep">Phù hợp với</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.forWho.map((f) => <li key={f} className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">{f}</li>)}
            </ul>
            <h2 className="mt-12 text-2xl font-extrabold text-primary-deep">Dòng xe có thể chọn</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {visibleVehicles().map((v) => (
                <li key={v.slug}><Link to="/doi-xe/$slug" params={{ slug: v.slug }} className="inline-block rounded-lg border px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary">{v.name}</Link></li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-2xl bg-muted p-6">
            <h2 className="text-lg font-bold">Tư vấn {s.title.toLowerCase()}</h2>
            <p className="mt-2 text-sm text-muted-foreground">Cho chúng tôi biết số người, lộ trình và thời gian để được báo giá.</p>
            <div className="mt-5 flex flex-col gap-3"><CallButton /><ZaloButton /></div>
            <h3 className="mt-8 text-sm font-bold">Dịch vụ khác</h3>
            <ul className="mt-2 space-y-1 text-sm">
              {services.filter((o) => o.slug !== s.slug).map((o) => (
                <li key={o.slug}><Link to="/dich-vu/$slug" params={{ slug: o.slug }} className="text-primary hover:underline">{o.title}</Link></li>
              ))}
              <li><Link to="/tour-du-lich" className="text-primary hover:underline">Xe phục vụ tour du lịch</Link></li>
            </ul>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
