
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase,
  Bus,
  CalendarCheck,
  Car,
  ClipboardList,
  MapPinned,
  MessageSquare,
  PhoneCall,
  Route as RouteIcon,
  ShieldCheck,
  Users,
} from "lucide-react";
import hero from "@/assets/hero.webp.asset.json";
import { SITE } from "@/data/site";
import { services } from "@/data/services";
import { visibleVehicles } from "@/data/vehicles";
import {
  CallButton,
  CtaBand,
  MapEmbed,
  Section,
  ZaloButton,
} from "@/components/site/ui";
import { faqLd, localBusinessLd, seo } from "@/lib/seo";

export const FAQS = [
  {
    q: "Phương Đông SQ có những loại xe nào?",
    a: "Chúng tôi có xe từ 7 chỗ đến 45 chỗ, xe giường nằm 45 chỗ và xe Limousine. Vui lòng gọi để được tư vấn dòng xe phù hợp với số người của đoàn.",
  },
  {
    q: "Làm sao để biết giá thuê xe?",
    a: "Giá thuê phụ thuộc loại xe, lộ trình và thời gian. Hãy gọi 0988 783 783 hoặc 0973 110 228, hoặc nhắn Zalo để được báo giá cụ thể.",
  },
  {
    q: "Có nhận đưa đón theo hợp đồng không?",
    a: "Có. Phương Đông SQ nhận xe hợp đồng đưa đón cho cơ quan, doanh nghiệp, trường học, sự kiện và cưới hỏi theo lịch trình thống nhất.",
  },
  {
    q: "Tôi có thể tự lên lịch trình không?",
    a: "Có. Bạn cho biết điểm đón, các điểm dừng và thời gian, chúng tôi sắp xếp xe theo nhu cầu của bạn.",
  },
];

const services_icons = [Bus, Briefcase, Users];

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Thuê xe du lịch, xe hợp đồng Phú Thọ – Phương Đông SQ",
      description:
        "Phương Đông SQ cho thuê xe du lịch, xe hợp đồng, vận tải hành khách tại Phú Thọ. Xe 7–45 chỗ, xe giường nằm, Limousine. Gọi 0988 783 783.",
      path: "/",
      jsonLd: [localBusinessLd, faqLd(FAQS)],
    }),
  component: Home,
});

function Home() {
  const vehicles = visibleVehicles();

  const interiorSections = [
    { slug: "xe-limousine", title: "Nội thất xe Limousine" },
    {
      slug: "xe-giuong-nam-45-cho",
      title: "Nội thất xe giường nằm",
    },
    { slug: "xe-29-cho", title: "Nội thất xe 29–45 chỗ" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src="/anhnendoixe.png"
          alt="Đội xe khách của Phương Đông SQ gồm xe Limousine và xe khách nhiều kích cỡ"
          width={1585}
          height={380}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="container-site py-20 text-primary-foreground md:py-32">
          <p className="inline-block rounded-full bg-primary/80 px-4 py-1.5 text-sm font-bold">
            Vận tải • Du lịch • Xe hợp đồng
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl leading-tight font-extrabold md:text-6xl">
            Thuê Xe Du Lịch, Xe Hợp Đồng –{" "}
            <span className="text-sun">Phương Đông SQ</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg opacity-95">
            Đồng hành trên mọi hành trình với đa dạng dòng xe từ 7 chỗ đến 45
            chỗ, xe giường nằm và Limousine.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton variant="sun" />
            <ZaloButton />
          </div>
        </div>
      </section>

      {/* Giới thiệu */}
      <section className="py-16 md:py-20">
        <div className="container-site grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-wider text-sky uppercase">
              Về chúng tôi
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-primary-deep md:text-4xl">
              Phương Đông SQ – {SITE.slogan}
            </h2>
            <p className="mt-4 text-muted-foreground">
              Công ty TNHH Vận tải & Du lịch Phương Đông SQ có trụ sở tại xã
              Phù Ninh, tỉnh Phú Thọ. Chúng tôi phục vụ khách cá nhân, gia
              đình, đoàn du lịch và doanh nghiệp cần thuê xe đi du lịch, đưa
              đón theo hợp đồng hoặc vận chuyển hành khách theo lịch trình.
            </p>
            <Link
              to="/gioi-thieu"
              className="mt-6 inline-block font-bold text-primary hover:underline"
            >
              Tìm hiểu thêm về chúng tôi →
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-4">
            {[
              { icon: Car, t: "7 – 45 chỗ", d: "Nhiều dòng xe" },
              { icon: Bus, t: "Giường nằm", d: "Cho tuyến đường dài" },
              { icon: ShieldCheck, t: "Limousine", d: "Không gian rộng rãi" },
              { icon: RouteIcon, t: "Theo yêu cầu", d: "Lịch trình linh hoạt" },
            ].map(({ icon: I, t, d }) => (
              <li
                key={t}
                className="rounded-2xl border bg-card p-5 shadow-card"
              >
                <I className="h-8 w-8 text-primary" aria-hidden />
                <p className="mt-3 font-bold">{t}</p>
                <p className="text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Dịch vụ */}
      <Section
        muted
        eyebrow="Dịch vụ"
        title="Dịch vụ nổi bật"
        intro="Ba nhóm dịch vụ chính, cùng xe phục vụ tour du lịch cho các đoàn."
      >
        <ul className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const I = services_icons[i] ?? Bus;
            return (
              <li
                key={s.slug}
                className="flex flex-col rounded-2xl bg-card p-6 shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  <I className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 flex-1 text-muted-foreground">{s.short}</p>
                <Link
                  to="/dich-vu/$slug"
                  params={{ slug: s.slug }}
                  className="mt-4 font-bold text-primary hover:underline"
                >
                  Xem chi tiết →
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-center">
          <Link
            to="/tour-du-lich"
            className="font-bold text-sky hover:underline"
          >
            Xe phục vụ tour du lịch →
          </Link>
        </p>
      </Section>

      {/* Đội xe */}
      <Section
        eyebrow="Đội xe"
        title="Đội xe thực tế"
        intro="Ảnh đội xe của Phương Đông SQ. Ảnh chi tiết từng dòng xe đang được cập nhật."
      >
        <img
          src="/anhnendoixe.png"
          alt="Các xe của Phương Đông SQ đỗ cạnh nhau: xe Limousine màu đen và các xe khách xanh dương, xanh lá, trắng"
          width={1585}
          height={380}
          loading="lazy"
          className="w-full rounded-2xl object-cover shadow-card"
        />
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {vehicles.map((v) => (
            <li key={v.slug}>
              <Link
                to="/doi-xe/$slug"
                params={{ slug: v.slug }}
                className="block rounded-xl border bg-card p-4 text-center font-semibold transition hover:border-primary hover:text-primary"
              >
                {v.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Nội thất */}
      <Section
        muted
        eyebrow="Nội thất"
        title="Hình ảnh nội thất xe"
        intro="Khám phá không gian bên trong các dòng xe của Phương Đông SQ."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {interiorSections.map(({ slug, title }) => {
            const vehicle = vehicles.find((v) => v.slug === slug);
            const photo = vehicle?.interior.find((img) => img.src);

            return (
              <div
                key={slug}
                className="overflow-hidden rounded-2xl border bg-card shadow-card"
              >
                {photo ? (
                  <Link
                    to="/doi-xe/$slug"
                    params={{ slug }}
                    className="block overflow-hidden"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt || title}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="aspect-[4/3] w-full object-cover transition duration-300 hover:scale-[1.02]"
                    />
                  </Link>
                ) : (
                  <div className="flex aspect-[4/3] items-center justify-center bg-muted p-4 text-center text-muted-foreground">
                    Chưa có ảnh nội thất
                  </div>
                )}

                <div className="p-4">
                  <h3 className="font-bold text-primary-deep">{title}</h3>
                  <Link
                    to="/doi-xe/$slug"
                    params={{ slug }}
                    className="mt-2 inline-block font-semibold text-primary hover:underline"
                  >
                    Xem chi tiết →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Lý do */}
      <Section
        eyebrow="Vì sao chọn chúng tôi"
        title="Lý do lựa chọn Phương Đông SQ"
      >
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Nhiều lựa chọn xe",
              d: "Từ 7 chỗ đến 45 chỗ, xe giường nằm và Limousine trong cùng một đơn vị.",
            },
            {
              t: "Theo nhu cầu của bạn",
              d: "Lịch trình, điểm đón và thời gian được sắp xếp theo kế hoạch của khách.",
            },
            {
              t: "Liên hệ dễ dàng",
              d: "Hai số điện thoại, Zalo và Facebook để bạn trao đổi nhanh.",
            },
            {
              t: "Doanh nghiệp tại Phú Thọ",
              d: "Trụ sở tại xã Phù Ninh, thuận tiện cho khách trong khu vực.",
            },
          ].map((r, i) => (
            <li key={r.t} className="rounded-2xl border p-6">
              <span className="text-3xl font-extrabold text-sun">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-lg font-bold">{r.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Quy trình */}
      <Section muted eyebrow="Quy trình" title="Quy trình thuê xe">
        <ol className="grid gap-6 md:grid-cols-4">
          {[
            {
              icon: PhoneCall,
              t: "Liên hệ",
              d: "Gọi điện hoặc nhắn Zalo cho chúng tôi.",
            },
            {
              icon: MessageSquare,
              t: "Trao đổi nhu cầu",
              d: "Số người, lộ trình, ngày giờ đi và về.",
            },
            {
              icon: ClipboardList,
              t: "Tư vấn & báo giá",
              d: "Đề xuất dòng xe phù hợp và báo giá.",
            },
            {
              icon: CalendarCheck,
              t: "Xác nhận & khởi hành",
              d: "Thống nhất chi tiết và đón khách đúng hẹn.",
            },
          ].map(({ icon: I, t, d }, i) => (
            <li
              key={t}
              className="rounded-2xl bg-card p-6 text-center shadow-card"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <I className="h-6 w-6" aria-hidden />
              </span>
              <p className="mt-3 text-xs font-bold text-sky">BƯỚC {i + 1}</p>
              <h3 className="font-bold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Khu vực */}
      <Section eyebrow="Khu vực phục vụ" title="Khu vực và nhu cầu phục vụ">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <MapPinned className="h-8 w-8 text-sky" aria-hidden />
            <h3 className="mt-3 text-lg font-bold">Xuất phát từ Phú Thọ</h3>
            <p className="mt-2 text-muted-foreground">
              Trụ sở tại xã Phù Ninh, tỉnh Phú Thọ. Nhận chuyến đi trong tỉnh
              và liên tỉnh theo lịch trình của khách – vui lòng gọi để xác nhận
              tuyến đường cụ thể.
            </p>
          </div>
          <div className="rounded-2xl border p-6">
            <Users className="h-8 w-8 text-sky" aria-hidden />
            <h3 className="mt-3 text-lg font-bold">Phục vụ nhiều nhu cầu</h3>
            <p className="mt-2 text-muted-foreground">
              Du lịch gia đình, đoàn cơ quan, đưa đón nhân viên, học sinh,
              cưới hỏi, sự kiện, đi sân bay, nhà ga và tour du lịch.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section muted eyebrow="Hỏi đáp" title="Câu hỏi thường gặp">
        <div className="mx-auto max-w-3xl space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-xl bg-card p-5 shadow-card">
              <summary className="cursor-pointer list-none font-bold marker:hidden">
                <h3 className="inline">{f.q}</h3>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Map */}
      <Section eyebrow="Bản đồ" title="Tìm đường đến Phương Đông SQ">
        <MapEmbed />
      </Section>

      <CtaBand />
    </>
  );
}
