import { SITE } from "@/data/site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  jsonLd?: object[];
};

export function seo({ title, description, path, type = "website", jsonLd = [] }: SeoInput) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: path },
      { property: "og:locale", content: "vi_VN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: jsonLd.map((d) => ({ type: "application/ld+json", children: JSON.stringify(d) })),
  };
}

export const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  slogan: SITE.slogan,
  telephone: SITE.phones.map((p) => p.tel),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tổ dân phố số 24",
    addressLocality: "Xã Phù Ninh",
    addressRegion: "Phú Thọ",
    addressCountry: "VN",
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  sameAs: [SITE.facebook, SITE.zalo],
  hasMap: SITE.mapsUrl,
};

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.path })),
});

export const serviceLd = (name: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  serviceType: name,
  areaServed: "Phú Thọ",
  provider: { "@type": "LocalBusiness", name: SITE.name, telephone: SITE.phones[0].tel },
});

export const faqLd = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});
