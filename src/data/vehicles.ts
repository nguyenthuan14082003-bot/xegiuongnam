/**
 * Quản lý đội xe tại đây.
 * - Thêm ảnh vào mảng exterior hoặc interior.
 * - Ẩn một nhóm xe: đặt visible: false.
 * - Nhóm xe chưa có ảnh sẽ hiển thị khung cập nhật ảnh.
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
    suitableFor: [
      "Gia đình, nhóm nhỏ",
      "Đưa đón sân bay, nhà ga",
      "Công tác ngắn ngày",
    ],
    exterior: [
      {
        src: "/toyota-7cho.png",
        alt: "Ngoại thất xe Toyota 7 chỗ phục vụ du lịch",
      },
    ],
    interior: [],
  },
  {
    slug: "xe-16-cho",
    name: "Xe 16 chỗ",
    seats: "16 chỗ",
    visible: true,
    summary:
      "Phù hợp đoàn vừa như đại gia đình, nhóm đồng nghiệp đi du lịch, đi lễ hoặc tham dự sự kiện.",
    suitableFor: [
      "Đại gia đình",
      "Đoàn công ty nhỏ",
      "Đi lễ chùa, đám cưới",
    ],
    exterior: [
      {
        src: "/01-xe-16-cho-4x3.jpg",
        alt: "Ngoại thất xe 16 chỗ",
      },
    ],
    interior: [
      {
        src: "/noithat16.jpg",
        alt: "Nội thất xe 16 chỗ",
      },
    ],
  },
  {
    slug: "xe-29-cho",
    name: "Xe 29 chỗ",
    seats: "29 chỗ",
    visible: true,
    summary:
      "Dòng xe cỡ trung cho đoàn tham quan, dã ngoại, hội nghị hoặc đưa đón theo hợp đồng.",
    suitableFor: [
      "Đoàn tham quan",
      "Trường học, cơ quan",
      "Hội nghị, sự kiện",
    ],
    exterior: [
      {
        src: "/02-xe-29-34-cho-4x3.jpg",
        alt: "Ngoại thất xe 29 chỗ",
      },
    ],
    interior: [
      {
        src: "/noithat34.jpg",
        alt: "Nội thất xe 29 chỗ",
      },
    ],
  },
  {
    slug: "xe-45-cho",
    name: "Xe 45 chỗ",
    seats: "45 chỗ",
    visible: true,
    summary:
      "Xe ghế ngồi cỡ lớn cho đoàn đông người, tour du lịch nhiều ngày hoặc đưa đón công nhân, nhân viên.",
    suitableFor: [
      "Đoàn du lịch lớn",
      "Đưa đón công nhân",
      "Tour nhiều ngày",
    ],
    exterior: [
      {
        src: "/03-xe-45-cho-4x3.jpg",
        alt: "Ngoại thất xe 45 chỗ",
      },
    ],
    interior: [
      {
        src: "/noithat45.jpg",
        alt: "Nội thất xe 45 chỗ",
      },
    ],
  },
  {
    slug: "xe-giuong-nam-45-cho",
    name: "Xe giường nằm 45 chỗ",
    seats: "45 chỗ (giường nằm)",
    visible: true,
    summary:
      "Thích hợp cho hành trình đường dài và đi đêm, giúp hành khách nghỉ ngơi thoải mái hơn trên xe.",
    suitableFor: [
      "Hành trình đường dài",
      "Đi đêm",
      "Tour liên tỉnh",
    ],
    exterior: [
      {
        src: "/04-xe-giuong-nam-4x3.jpg",
        alt: "Ngoại thất xe giường nằm",
      },
    ],
    interior: [
      {
        src: "/noithatgiuongnam.jpg",
        alt: "Nội thất xe giường nằm",
      },
    ],
  },
  {
    slug: "xe-limousine",
    name: "Xe Limousine",
    seats: "Theo cấu hình xe",
    visible: true,
    summary:
      "Không gian rộng, ghế ngồi êm ái, phù hợp khách VIP, đón tiếp đối tác hoặc gia đình muốn chuyến đi thoải mái hơn.",
    suitableFor: [
      "Đón tiếp đối tác",
      "Khách VIP",
      "Gia đình đi xa",
    ],
    exterior: [
      {
        src: "/05-xe-limousine-4x3.jpg",
        alt: "Ngoại thất xe Limousine",
      },
    ],
    interior: [
      {
        src: "/noithatlimou.jpg",
        alt: "Nội thất xe Limousine",
      },
    ],
  },
];

export const visibleVehicles = () =>
  vehicles.filter((v) => v.visible);

export const getVehicle = (slug: string) =>
  visibleVehicles().find((v) => v.slug === slug);
