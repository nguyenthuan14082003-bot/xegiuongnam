import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getVehicle, visibleVehicles } from "@/data/vehicles";
import { CallButton, CtaBand, PageHero, ZaloButton } from "@/components/site/ui";
import { VehicleGallery } from "@/components/site/VehicleGallery";
import { breadcrumbLd, seo, serviceLd } from "@/lib/seo";

export const Route = createFileRoute("/doi-xe/$slug")({
  loader: ({ params }) => {
    const vehicle = getVehicle(params.slug);
    if (!vehicle) throw notFound();
    return { vehicle };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Không tìm thấy dòng xe" }, { name: "robots", content: "noindex" }] };
    const v = loaderData.vehicle;
    const path = `/doi-xe/${params.slug}`;
    return seo({
      title: `Thuê ${v.name.toLowerCase()} Phú Thọ – Phương Đông SQ`,
      description: v.summary,
      path,
      jsonLd: [serviceLd(`Cho thuê ${v.name}`, v.summary), breadcrumbLd([{ name: "Trang chủ", path: "/" }, { name: "Đội xe", path: "/doi-xe" }, { name: v.name, path }])],
    });
  },
  component: VehiclePage,
});

function VehiclePage() {
  const { vehicle: v } = Route.useLoaderData();
  return (
    <>
      <PageHero title={`Thuê ${v.name}`} intro={v.summary} crumbs={[{ label: "Đội xe", to: "/doi-xe" }, { label: v.name }]} />
      <section className="py-16">
        <div className="container-site grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-10">
            <div><h2 className="mb-4 text-2xl font-extrabold text-primary-deep">Ảnh ngoại thất</h2><VehicleGallery images={v.exterior} emptyLabel={`Ngoại thất ${v.name}`} /></div>
            <div><h2 className="mb-4 text-2xl font-extrabold text-primary-deep">Ảnh nội thất</h2><VehicleGallery images={v.interior} emptyLabel={`Nội thất ${v.name}`} /></div>
            <div>
              <h2 className="text-2xl font-extrabold text-primary-deep">Phù hợp cho</h2>
              <ul className="mt-4 flex flex-wrap gap-2">{v.suitableFor.map((s) => <li key={s} className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">{s}</li>)}</ul>
            </div>
          </div>
          <aside className="h-fit rounded-2xl bg-muted p-6">
            <p className="text-sm text-muted-foreground">Số chỗ</p>
            <p className="text-2xl font-extrabold text-primary">{v.seats}</p>
            <div className="mt-5 flex flex-col gap-3"><CallButton label="Gọi tư vấn" /><ZaloButton /></div>
            <h3 className="mt-8 text-sm font-bold">Dòng xe khác</h3>
            <ul className="mt-2 space-y-1 text-sm">
              {visibleVehicles().filter((o) => o.slug !== v.slug).map((o) => (
                <li key={o.slug}><Link to="/doi-xe/$slug" params={{ slug: o.slug }} className="text-primary hover:underline">{o.name}</Link></li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
