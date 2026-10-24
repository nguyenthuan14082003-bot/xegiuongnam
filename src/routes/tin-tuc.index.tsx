import { createFileRoute, Link } from "@tanstack/react-router";
import { articles } from "@/data/articles";
import { PageHero } from "@/components/site/ui";
import { breadcrumbLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/tin-tuc/")({
  head: () =>
    seo({
      title: "Tin tức & kinh nghiệm thuê xe – Phương Đông SQ",
      description: "Bài viết hữu ích về cách chọn xe, chuẩn bị chuyến đi và thuê xe hợp đồng từ Phương Đông SQ.",
      path: "/tin-tuc",
      jsonLd: [breadcrumbLd([{ name: "Trang chủ", path: "/" }, { name: "Tin tức", path: "/tin-tuc" }])],
    }),
  component: News,
});

const fmt = (d: string) => new Date(d).toLocaleDateString("vi-VN");

function News() {
  return (
    <>
      <PageHero title="Tin tức & kinh nghiệm thuê xe" intro="Thông tin giúp bạn chuẩn bị chuyến đi thuận lợi hơn." crumbs={[{ label: "Tin tức" }]} />
      <section className="py-16">
        <ul className="container-site grid gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <li key={a.slug}>
              <article className="flex h-full flex-col rounded-2xl border bg-card p-6 shadow-card">
                <time dateTime={a.date} className="text-sm text-muted-foreground">{fmt(a.date)}</time>
                <h2 className="mt-2 text-xl font-bold text-primary-deep">
                  <Link to="/tin-tuc/$slug" params={{ slug: a.slug }} className="hover:text-primary">{a.title}</Link>
                </h2>
                <p className="mt-3 flex-1 text-muted-foreground">{a.excerpt}</p>
                <Link to="/tin-tuc/$slug" params={{ slug: a.slug }} className="mt-4 font-bold text-primary hover:underline">Đọc bài →</Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
