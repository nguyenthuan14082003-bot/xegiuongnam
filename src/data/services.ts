export type Service = {
  slug: "thue-xe-du-lich" | "xe-hop-dong" | "van-tai-hanh-khach";
  title: string;
  short: string;
  intro: string;
  points: { title: string; text: string }[];
  forWho: string[];
};

export const services: Service[] = [
  {
    slug: "thue-xe-du-lich",
    title: "Thuê xe du lịch",
    short: "Xe từ 7 đến 45 chỗ, xe giường nằm và Limousine cho chuyến đi chơi, tham quan, nghỉ dưỡng.",
    intro:
      "Bạn lên kế hoạch đi chơi cùng gia đình, bạn bè hay cơ quan? Phương Đông SQ tư vấn dòng xe phù hợp với số người và lộ trình, để chuyến đi thuận tiện ngay từ lúc khởi hành.",
    points: [
      { title: "Chọn xe theo số người", text: "Từ xe 7 chỗ cho nhóm nhỏ đến xe 45 chỗ cho đoàn đông." },
      { title: "Lịch trình theo yêu cầu", text: "Bạn chủ động điểm đón, điểm dừng và thời gian, chúng tôi sắp xếp xe theo kế hoạch." },
      { title: "Đi ngắn hoặc nhiều ngày", text: "Phục vụ chuyến trong ngày lẫn hành trình dài, có xe giường nằm cho tuyến xa." },
    ],
    forWho: ["Gia đình, nhóm bạn", "Cơ quan, doanh nghiệp đi nghỉ mát", "Đoàn đi lễ, hành hương"],
  },
  {
    slug: "xe-hop-dong",
    title: "Xe hợp đồng đưa đón",
    short: "Đưa đón theo hợp đồng cho cơ quan, doanh nghiệp, trường học, sự kiện và đám cưới.",
    intro:
      "Khi cần một phương tiện ổn định cho việc đưa đón định kỳ hoặc cho một sự kiện, xe hợp đồng giúp bạn rõ ràng về lịch trình, thời gian và trách nhiệm của hai bên.",
    points: [
      { title: "Đưa đón định kỳ", text: "Đưa đón nhân viên, công nhân, học sinh theo lịch thống nhất." },
      { title: "Sự kiện, cưới hỏi", text: "Bố trí xe đưa đón khách mời theo giờ giấc của chương trình." },
      { title: "Thỏa thuận rõ ràng", text: "Lộ trình, thời gian và loại xe được thống nhất trước khi thực hiện." },
    ],
    forWho: ["Doanh nghiệp, khu công nghiệp", "Trường học", "Gia đình tổ chức cưới hỏi"],
  },
  {
    slug: "van-tai-hanh-khach",
    title: "Vận tải hành khách",
    short: "Chở khách theo lịch trình và nhu cầu, đi trong tỉnh Phú Thọ và liên tỉnh.",
    intro:
      "Phương Đông SQ nhận vận chuyển hành khách theo nhu cầu: đi tỉnh, về quê, đến sân bay, nhà ga hoặc các điểm hẹn khác theo lịch trình bạn đưa ra.",
    points: [
      { title: "Linh hoạt điểm đón", text: "Đón trả tại địa điểm thuận tiện đã thống nhất khi đặt xe." },
      { title: "Nhiều dòng xe", text: "Chọn xe phù hợp số lượng hành khách và hành lý." },
      { title: "Tư vấn trực tiếp", text: "Gọi hoặc nhắn Zalo để được tư vấn nhanh lộ trình và loại xe." },
    ],
    forWho: ["Khách đi tỉnh, về quê", "Khách đi sân bay, nhà ga", "Nhóm khách đi chung"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
