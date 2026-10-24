
import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/data/site";
import { CtaBand, PageHero } from "@/components/site/ui";
import { breadcrumbLd, localBusinessLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/gioi-thieu")({
  head: () =>
    seo({
      title: "Giới thiệu Phương Đông SQ – Vận tải & Du lịch tại Phú Thọ",
      description:
        "Công ty TNHH Vận tải & Du lịch Phương Đông SQ tại xã Phù Ninh, Phú Thọ: cho thuê xe du lịch, xe hợp đồng và vận tải hành khách.",
      path: "/gioi-thieu",
      jsonLd: [
        localBusinessLd,
        breadcrumbLd([
          { name: "Trang chủ", path: "/" },
          { name: "Giới thiệu", path: "/gioi-thieu" },
        ]),
      ],
    }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        title="Giới thiệu Phương Đông SQ"
        intro={`${SITE.slogan} – đơn vị vận tải hành khách và du lịch tại Phú Thọ.`}
        crumbs={[{ label: "Giới thiệu" }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-site grid items-start gap-10 md:grid-cols-[1fr_280px]">
          {/* Nội dung giới thiệu */}
          <div className="space-y-5 text-lg text-muted-foreground">
            <h2 className="text-2xl font-extrabold text-primary-deep">
              Chúng tôi là ai
            </h2>

            <p>
              {SITE.name} có trụ sở tại {SITE.address}. Chúng tôi cung cấp
              dịch vụ vận tải hành khách, cho thuê xe du lịch, xe hợp đồng
              đưa đón và xe phục vụ tour du lịch.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-primary-deep">
              Dòng xe phục vụ
            </h2>

            <p>
              Đội xe gồm các dòng từ 7 chỗ đến 45 chỗ, xe giường nằm 45 chỗ
              và xe Limousine, giúp khách chọn phương tiện phù hợp với số
              người và tính chất chuyến đi. Xem chi tiết tại trang{" "}
              <Link
                to="/doi-xe"
                className="font-semibold text-primary hover:underline"
              >
                Đội xe
              </Link>
              .
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-primary-deep">
              Cách chúng tôi làm việc
            </h2>

            <p>
              Mỗi chuyến đi bắt đầu từ việc lắng nghe nhu cầu: số người,
              lộ trình và thời gian. Sau đó, chúng tôi tư vấn dòng xe,
              thống nhất lịch trình và báo giá trước khi khởi hành. Tìm
              hiểu các{" "}
              <Link
                to="/dich-vu"
                className="font-semibold text-primary hover:underline"
              >
                dịch vụ
              </Link>{" "}
              hoặc{" "}
              <Link
                to="/lien-he"
                className="font-semibold text-primary hover:underline"
              >
                liên hệ
              </Link>{" "}
              để được tư vấn.
            </p>
          </div>

          {/* Logo công ty bên phải */}
          <div className="flex flex-col items-center gap-4 md:sticky md:top-24">
            <img
              src="/dr2.png"
              alt="Logo Công ty TNHH Vận tải và Du lịch Phương Đông SQ"
              width={280}
              height={280}
              className="h-auto w-56 object-contain md:w-full"
            />

            <p className="text-center text-sm font-semibold text-primary-deep">
              CÔNG TY TNHH VẬN TẢI & DU LỊCH PHƯƠNG ĐÔNG SQ
            </p>

            <p className="text-center text-sm text-muted-foreground">
              Đồng hành trên mọi hành trình
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
