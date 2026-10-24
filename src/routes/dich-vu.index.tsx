import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { CtaBand, PageHero } from "@/components/site/ui";
import { breadcrumbLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/dich-vu/")({
  head: () =>
    seo({
      title: "Dịch vụ thuê xe du lịch, xe hợp đồng, vận tải hành khách – Phương Đông SQ",
      description: "Tổng quan dịch vụ của Phương Đông SQ: thuê xe du lịch, xe hợp đồng đưa đón, vận tải hành khách và xe phục vụ tour tại Phú Thọ.",
      path: "/dich-vu",
      jsonLd: [breadcrumbLd([{ name: "Trang chủ", path: "/" }, { name: "Dịch vụ", path: "/dich-vu" }])],
    }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero title="Dịch vụ của Phương Đông SQ" intro="Chọn dịch vụ phù hợp với chuyến đi của bạn, hoặc gọi để chúng tôi tư vấn." crumbs={[{ label: "Dịch vụ" }]} />
      <section className="py-16">
        <ul className="container-site grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug} className="rounded-2xl border bg-card p-7 shadow-card">
              <h2 className="text-2xl font-bold text-primary-deep">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.short}</p>
              <Link to="/dich-vu/$slug" params={{ slug: s.slug }} className="mt-5 inline-block font-bold text-primary hover:underline">Xem chi tiết →</Link>
            </li>
          ))}
          <li className="rounded-2xl border bg-card p-7 shadow-card">
            <h2 className="text-2xl font-bold text-primary-deep">Xe phục vụ tour du lịch</h2>
            <p className="mt-3 text-muted-foreground">Xe cho đoàn tour, công ty lữ hành và nhóm tự tổ chức du lịch nhiều ngày.</p>
            <Link to="/tour-du-lich" className="mt-5 inline-block font-bold text-primary hover:underline">Xem chi tiết →</Link>
          </li>
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
