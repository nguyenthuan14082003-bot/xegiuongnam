import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { CallButton, CtaBand, PageHero, ZaloButton } from "@/components/site/ui";
import { breadcrumbLd, seo, serviceLd } from "@/lib/seo";

const DESC = "Phương Đông SQ cung cấp xe phục vụ tour du lịch cho đoàn khách, công ty lữ hành và nhóm tự tổ chức, từ xe 16 chỗ đến 45 chỗ và xe giường nằm.";

export const Route = createFileRoute("/tour-du-lich")({
  head: () =>
    seo({
      title: "Xe phục vụ tour du lịch Phú Thọ – Phương Đông SQ",
      description: DESC,
      path: "/tour-du-lich",
      jsonLd: [serviceLd("Xe phục vụ tour du lịch", DESC), breadcrumbLd([{ name: "Trang chủ", path: "/" }, { name: "Tour du lịch", path: "/tour-du-lich" }])],
    }),
  component: Tour,
});

function Tour() {
  return (
    <>
      <PageHero title="Xe phục vụ tour du lịch" intro="Phương tiện cho đoàn tour trong ngày và nhiều ngày, chạy theo chương trình của đoàn." crumbs={[{ label: "Tour du lịch" }]} />
      <section className="py-16">
        <div className="container-site grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-primary-deep">Dành cho ai?</h2>
              <p className="mt-3 text-muted-foreground">Công ty lữ hành cần xe chạy tour, cơ quan tổ chức nghỉ mát, trường học đi tham quan hoặc nhóm gia đình, bạn bè tự lên chương trình du lịch.</p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-primary-deep">Chúng tôi hỗ trợ</h2>
              <ul className="mt-4 space-y-3">
                {["Chọn xe theo quy mô đoàn: 16, 29, 45 chỗ hoặc xe giường nằm", "Chạy theo lịch trình tour, điểm dừng do đoàn thống nhất", "Hành trình trong ngày hoặc nhiều ngày", "Xe Limousine cho đoàn nhỏ cần không gian thoải mái"].map((t) => (
                  <li key={t} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />{t}</li>
                ))}
              </ul>
            </div>
            <p className="text-muted-foreground">Phương Đông SQ cung cấp xe phục vụ tour, không tổ chức chương trình tour trọn gói. Xem thêm <Link to="/doi-xe" className="font-semibold text-primary hover:underline">đội xe</Link> hoặc dịch vụ <Link to="/dich-vu/$slug" params={{ slug: "thue-xe-du-lich" }} className="font-semibold text-primary hover:underline">thuê xe du lịch</Link>.</p>
          </div>
          <aside className="h-fit rounded-2xl bg-muted p-6">
            <h2 className="text-lg font-bold">Đặt xe cho đoàn</h2>
            <p className="mt-2 text-sm text-muted-foreground">Gửi chương trình tour và số khách để được tư vấn xe.</p>
            <div className="mt-5 flex flex-col gap-3"><CallButton /><ZaloButton /></div>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
