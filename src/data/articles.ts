export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  sections: { heading: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "chon-xe-theo-so-luong-nguoi",
    title: "Chọn xe bao nhiêu chỗ cho chuyến đi của bạn?",
    excerpt: "Gợi ý cách chọn xe 7, 16, 29 hay 45 chỗ dựa trên số người, hành lý và quãng đường.",
    date: "2026-10-01",
    sections: [
      {
        heading: "Tính cả hành lý, không chỉ số người",
        paragraphs: [
          "Số ghế trên xe là số người tối đa, nhưng chuyến đi du lịch thường có vali, đồ ăn và quà mang về. Nếu đoàn có nhiều hành lý, nên cân nhắc chọn xe lớn hơn một bậc để mọi người ngồi thoải mái.",
        ],
      },
      {
        heading: "Gợi ý theo nhóm",
        paragraphs: [
          "Nhóm dưới 6 người có thể chọn xe 7 chỗ. Đoàn khoảng 10 đến 15 người phù hợp xe 16 chỗ. Đoàn 20 đến 28 người nên chọn xe 29 chỗ, và đoàn đông hơn chọn xe 45 chỗ.",
          "Với hành trình dài hoặc đi đêm, xe giường nằm giúp hành khách nghỉ ngơi tốt hơn. Nếu muốn không gian rộng rãi, tiện nghi hơn, có thể chọn xe Limousine.",
        ],
      },
      {
        heading: "Hỏi trước khi đặt",
        paragraphs: [
          "Mỗi chuyến đi có đặc điểm riêng. Hãy gọi cho Phương Đông SQ, cho biết số người, điểm đi, điểm đến và thời gian để được tư vấn dòng xe phù hợp.",
        ],
      },
    ],
  },
  {
    slug: "chuan-bi-truoc-khi-thue-xe-du-lich",
    title: "Những điều nên chuẩn bị trước khi thuê xe du lịch",
    excerpt: "Danh sách thông tin cần có để đặt xe nhanh, rõ ràng và tránh phát sinh trong chuyến đi.",
    date: "2026-10-08",
    sections: [
      {
        heading: "Thông tin cơ bản",
        paragraphs: [
          "Khi liên hệ đặt xe, bạn nên chuẩn bị sẵn: số lượng người, ngày giờ khởi hành, điểm đón, các điểm dừng dự kiến và thời gian quay về. Thông tin càng rõ, việc tư vấn và báo giá càng nhanh.",
        ],
      },
      {
        heading: "Thống nhất lịch trình",
        paragraphs: [
          "Nên thống nhất trước với nhà xe về lộ trình, các khoản phí liên quan và thời gian chờ. Nếu lịch trình có thể thay đổi, hãy trao đổi ngay từ đầu để hai bên chủ động.",
        ],
      },
      {
        heading: "Đặt sớm vào mùa cao điểm",
        paragraphs: [
          "Dịp lễ, Tết và mùa du lịch hè thường có nhiều đoàn đặt xe. Liên hệ sớm giúp bạn có nhiều lựa chọn dòng xe hơn.",
        ],
      },
    ],
  },
  {
    slug: "xe-hop-dong-la-gi",
    title: "Xe hợp đồng là gì và khi nào nên thuê?",
    excerpt: "Tìm hiểu về hình thức thuê xe theo hợp đồng và những trường hợp phù hợp.",
    date: "2026-10-15",
    sections: [
      {
        heading: "Xe hợp đồng là gì?",
        paragraphs: [
          "Xe hợp đồng là hình thức thuê xe chở khách dựa trên thỏa thuận giữa bên thuê và đơn vị vận tải, trong đó nêu rõ lộ trình, thời gian, loại xe và các điều khoản liên quan.",
        ],
      },
      {
        heading: "Khi nào nên thuê xe hợp đồng?",
        paragraphs: [
          "Hình thức này phù hợp với doanh nghiệp đưa đón nhân viên, trường học tổ chức tham quan, gia đình tổ chức cưới hỏi hoặc các đoàn đi sự kiện cần một phương tiện riêng, chạy đúng lịch trình của mình.",
        ],
      },
      {
        heading: "Liên hệ tư vấn",
        paragraphs: [
          "Phương Đông SQ nhận xe hợp đồng từ 7 đến 45 chỗ. Gọi 0988 783 783 hoặc 0973 110 228 để trao đổi nhu cầu cụ thể.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
