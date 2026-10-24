/**
 * Quản lý đội xe tại đây.
 * - Thêm ảnh: tải ảnh lên, rồi thêm { src, alt } vào `exterior` hoặc `interior`.
 * - Ẩn một nhóm xe: đặt `visible: false`.
 * - Nhóm xe chưa có ảnh thật sẽ hiển thị khung "Đang cập nhật ảnh thực tế".
 */
export type VehicleImage = { src: string; alt: string };

export type Vehicle = {
  slug: string;
  name: string;
  seats: string;
  visible: boolean;
  summary: string;
  suitableFor: string[];
  exterior: VehicleImage[];
  interior: VehicleImage[];
};

export const vehicles: Vehicle[] = [
  {
    slug: "xe-7-cho",
    name: "Xe 7 chỗ",
    seats: "7 chỗ",
    visible: true,
    summary:
      "Lựa chọn gọn nhẹ cho gia đình nhỏ, nhóm bạn hoặc khách công tác cần di chuyển linh hoạt trong tỉnh và đi các tỉnh lân cận.",
    suitableFor: ["Gia đình, nhóm nhỏ", "Đưa đón sân bay, nhà ga", "Công tác ngắn ngày"],
    exterior: [],
    interior: [],
  },
  {
    slug: "xe-16-cho",
    name: "Xe 16 chỗ",
    seats: "16 chỗ",
    visible: true,
    summary:
      "Phù hợp đoàn vừa như đại gia đình, nhóm đồng nghiệp đi du lịch, đi lễ hoặc tham dự sự kiện.",
    suitableFor: ["Đại gia đình", "Đoàn công ty nhỏ", "Đi lễ chùa, đám cưới"],
    exterior: [],
    interior: [],
  },
  {
    slug: "xe-29-cho",
    name: "Xe 29 chỗ",
    seats: "29 chỗ",
    visible: true,
    summary:
      "Dòng xe cỡ trung cho đoàn tham quan, dã ngoại, hội nghị hoặc đưa đón theo hợp đồng.",
    suitableFor: ["Đoàn tham quan", "Trường học, cơ quan", "Hội nghị, sự kiện"],
    exterior: [],
    interior: [],
  },
  {
    slug: "xe-45-cho",
    name: "Xe 45 chỗ",
    seats: "45 chỗ",
    visible: true,
    summary:
      "Xe ghế ngồi cỡ lớn cho đoàn đông người, tour du lịch nhiều ngày hoặc đưa đón công nhân, nhân viên.",
    suitableFor: ["Đoàn du lịch lớn", "Đưa đón công nhân", "Tour nhiều ngày"],
    exterior: [],
    interior: [],
  },
  {
    slug: "xe-giuong-nam-45-cho",
    name: "Xe giường nằm 45 chỗ",
    seats: "45 chỗ (giường nằm)",
    visible: true,
    summary:
      "Thích hợp cho hành trình đường dài và đi đêm, giúp hành khách nghỉ ngơi thoải mái hơn trên xe.",
    suitableFor: ["Hành trình đường dài", "Đi đêm", "Tour liên tỉnh"],
    exterior: [],
    interior: [],
  },
  {
    slug: "xe-limousine",
    name: "Xe Limousine",
    seats: "Theo cấu hình xe",
    visible: true,
    summary:
      "Không gian rộng, ghế ngồi êm ái, phù hợp khách VIP, đón tiếp đối tác hoặc gia đình muốn chuyến đi thoải mái hơn.",
    suitableFor: ["Đón tiếp đối tác", "Khách VIP", "Gia đình đi xa"],
    exterior: [],
    interior: [],
  },
];

export const visibleVehicles = () => vehicles.filter((v) => v.visible);
export const getVehicle = (slug: string) => visibleVehicles().find((v) => v.slug === slug);
