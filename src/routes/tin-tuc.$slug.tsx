import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { articles, getArticle } from "@/data/articles";
import { SITE } from "@/data/site";
import { CtaBand, PageHero } from "@/components/site/ui";
import { breadcrumbLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/tin-tuc/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Không tìm thấy bài viết" }, { name: "robots", content: "noindex" }] };
    const a = loaderData.article;
    const path = `/tin-tuc/${params.slug}`;
    return seo({
      title: `${a.title} – Phương Đông SQ`,
      description: a.excerpt,
      path,
      type: "article",
      jsonLd: [
        { "@context": "https://schema.org", "@type": "Article", headline: a.title, description: a.excerpt, datePublished: a.date, author: { "@type": "Organization", name: SITE.name }, publisher: { "@type": "Organization", name: SITE.name } },
        breadcrumbLd([{ name: "Trang chủ", path: "/" }, { name: "Tin tức", path: "/tin-tuc" }, { name: a.title, path }]),
      ],
    });
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article: a } = Route.useLoaderData();
  return (
    <>
      <PageHero title={a.title} intro={a.excerpt} crumbs={[{ label: "Tin tức", to: "/tin-tuc" }, { label: a.title }]} />
      <article className="container-site max-w-3xl py-14">
        <time dateTime={a.date} className="text-sm text-muted-foreground">Ngày đăng: {new Date(a.date).toLocaleDateString("vi-VN")}</time>
        {a.sections.map((s) => (
          <section key={s.heading} className="mt-8">
            <h2 className="text-2xl font-extrabold text-primary-deep">{s.heading}</h2>
            {s.paragraphs.map((p) => <p key={p.slice(0, 30)} className="mt-3 text-lg leading-relaxed text-muted-foreground">{p}</p>)}
          </section>
        ))}
        <div className="mt-12 rounded-2xl bg-muted p-6">
          <h2 className="font-bold">Bài viết khác</h2>
          <ul className="mt-3 space-y-2">
            {articles.filter((o) => o.slug !== a.slug).map((o) => (
              <li key={o.slug}><Link to="/tin-tuc/$slug" params={{ slug: o.slug }} className="text-primary hover:underline">{o.title}</Link></li>
            ))}
            <li><Link to="/doi-xe" className="text-primary hover:underline">Xem đội xe Phương Đông SQ</Link></li>
          </ul>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
