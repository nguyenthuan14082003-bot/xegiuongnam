import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import { SITE } from "@/data/site";
import { CtaBand, PageHero } from "@/components/site/ui";
import { breadcrumbLd, localBusinessLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/gioi-thieu")({
  head: () =>
    seo({
      title: "Giới thiệu Phương Đông SQ – Vận tải & Du lịch tại Phú Thọ",
      description: "Công ty TNHH Vận tải & Du lịch Phương Đông SQ tại xã Phù Ninh, Phú Thọ: cho thuê xe du lịch, xe hợp đồng và vận tải hành khách.",
      path: "/gioi-thieu",
      jsonLd: [localBusinessLd, breadcrumbLd([{ name: "Trang chủ", path: "/" }, { name: "Giới thiệu", path: "/gioi-thieu" }])],
    }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        title="Giới thiệu Công ty TNHH Vận tải & Du lịch Phương Đông SQ"
        intro="Phương Đông SQ – Đồng hành cùng mọi hành trình, kiến tạo những chuyến đi trọn vẹn"
        crumbs={[{ label: "Giới thiệu" }]}
      />

      <section className="py-16">
        <div className="container-site grid items-start gap-10 md:grid-cols-[1fr_280px]">
          <div className="space-y-5 text-lg text-muted-foreground">

            <h2 className="text-2xl font-extrabold text-primary-deep">
              Phương Đông SQ – Đồng hành cùng mọi hành trình, kiến tạo những chuyến đi trọn vẹn
            </h2>

            <p>
              <strong>Công ty TNHH Vận tải & Du lịch Phương Đông SQ</strong> là đơn vị hoạt động trong lĩnh vực vận tải hành khách, cho thuê xe du lịch và tổ chức các tour du lịch, lữ hành trong nước. Với phương châm lấy sự hài lòng của khách hàng làm mục tiêu phát triển, Phương Đông SQ luôn nỗ lực mang đến những dịch vụ vận chuyển an toàn, chuyên nghiệp và chất lượng, đáp ứng đa dạng nhu cầu đi lại, tham quan và khám phá của khách hàng.
            </p>

            <p>
              Có trụ sở hoạt động tại <strong>Phú Thọ</strong>, Phương Đông SQ cung cấp dịch vụ thuê xe du lịch từ 7 chỗ đến 45 chỗ, xe giường nằm và xe Limousine, phục vụ khách hàng tại Phú Thọ, Hà Nội và các tỉnh thành khu vực miền Bắc cũng như trên toàn quốc.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-primary-deep">
              Dịch vụ vận tải và du lịch đa dạng
            </h2>

            <p>Với hệ thống phương tiện đa dạng, Phương Đông SQ mang đến nhiều giải pháp vận chuyển phù hợp cho từng nhu cầu:</p>

            <ul className="list-disc space-y-3 pl-6">
              <li><strong>Cho thuê xe du lịch:</strong> Xe 7 chỗ, 16 chỗ, 29 chỗ, 34 chỗ, 45 chỗ, xe Limousine và xe giường nằm phục vụ các chuyến du lịch, tham quan, nghỉ dưỡng.</li>
              <li><strong>Xe hợp đồng đưa đón:</strong> Đưa đón cán bộ, nhân viên, học sinh, khách hàng và đoàn thể theo lịch trình linh hoạt.</li>
              <li><strong>Dịch vụ xe hoa, xe cưới:</strong> Phục vụ nhu cầu đưa đón cô dâu, chú rể và gia đình trong ngày trọng đại.</li>
              <li><strong>Tổ chức tour du lịch và lữ hành:</strong> Xây dựng lịch trình tham quan, nghỉ dưỡng, khám phá các điểm đến hấp dẫn trong và ngoài khu vực miền Bắc.</li>
              <li><strong>Vận tải hành khách theo yêu cầu:</strong> Đáp ứng nhu cầu di chuyển cá nhân, gia đình, doanh nghiệp và các đoàn khách lớn.</li>
            </ul>

            <h2 className="pt-4 text-2xl font-extrabold text-primary-deep">
              Vì sao nên lựa chọn Phương Đông SQ?
            </h2>

            <p>Chúng tôi hiểu rằng mỗi chuyến đi không chỉ đơn thuần là hành trình di chuyển mà còn là trải nghiệm và những kỷ niệm đáng nhớ.</p>

            <p>Phương Đông SQ luôn hướng đến những giá trị cốt lõi:</p>

            <ul className="list-disc space-y-3 pl-6">
              <li><strong>An toàn là ưu tiên hàng đầu:</strong> Chú trọng chất lượng phương tiện và sự an tâm của khách hàng trên mọi hành trình.</li>
              <li><strong>Đội xe đa dạng:</strong> Nhiều dòng xe từ 7 chỗ đến 45 chỗ, đáp ứng nhu cầu đi lại của cá nhân, gia đình và đoàn đông người.</li>
              <li><strong>Dịch vụ chuyên nghiệp:</strong> Hỗ trợ khách hàng lựa chọn phương tiện và lịch trình phù hợp.</li>
              <li><strong>Lịch trình linh hoạt:</strong> Phục vụ các chuyến đi theo yêu cầu, từ đưa đón ngắn ngày đến hành trình du lịch dài ngày.</li>
              <li><strong>Chi phí hợp lý:</strong> Tư vấn phương án vận chuyển phù hợp với nhu cầu và ngân sách của khách hàng.</li>
            </ul>

            <h2 className="pt-4 text-2xl font-extrabold text-primary-deep">
              Phương Đông SQ – Đối tác tin cậy trên mọi hành trình
            </h2>

            <p>
              Với định hướng phát triển bền vững trong lĩnh vực vận tải, du lịch và lữ hành, Phương Đông SQ không ngừng nâng cao chất lượng dịch vụ, hoàn thiện hệ thống phương tiện và cải thiện trải nghiệm khách hàng.
            </p>

            <p>
              Chúng tôi mong muốn trở thành người bạn đồng hành đáng tin cậy của mọi khách hàng trên những chuyến đi công tác, du lịch, nghỉ dưỡng, sự kiện và những hành trình khám phá đầy ý nghĩa.
            </p>

            <p className="font-bold text-primary-deep">
              Phương Đông SQ – Uy tín tạo niềm tin, chất lượng tạo hành trình.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-primary-deep">
              Thông tin liên hệ
            </h2>

            <p><strong>CÔNG TY TNHH VẬN TẢI & DU LỊCH PHƯƠNG ĐÔNG SQ</strong></p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Địa chỉ: Xã Phù Ninh, tỉnh Phú Thọ</li>
              <li>Hotline: <a href="tel:0988783783" className="font-semibold text-primary hover:underline">0988 783 783</a> – <a href="tel:0973110228" className="font-semibold text-primary hover:underline">0973 110 228</a></li>
              <li>Zalo: <a href="https://zalo.me/84988783783" target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline">Nhắn tin Zalo</a></li>
              <li>Facebook: <a href="https://www.facebook.com/share/1DjThyVhkM/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline">Trang Facebook Phương Đông SQ</a></li>
            </ul>

            <p>
              Liên hệ Phương Đông SQ ngay hôm nay để được tư vấn dịch vụ thuê xe du lịch, xe hợp đồng và tổ chức tour du lịch phù hợp với nhu cầu của bạn!
            </p>

            <p className="font-bold text-primary-deep">
              Phương Đông SQ – Cùng bạn đi muôn nơi!
            </p>

          </div>

          <img
            src="/toyota-7cho.png"
            alt="Công ty TNHH Vận tải & Du lịch Phương Đông SQ"
            width={280}
            height={280}
            loading="lazy"
            className="mx-auto w-56 md:w-full"
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}