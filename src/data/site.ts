export const SITE = {
  name: "Công ty TNHH Vận tải & Du lịch Phương Đông SQ",
  shortName: "Phương Đông SQ",
  slogan: "Đồng hành trên mọi hành trình",
  address: "Tổ dân phố số 24, xã Phù Ninh, tỉnh Phú Thọ, Việt Nam",
  phones: [
    { display: "0988 783 783", tel: "0988783783" },
    { display: "0973 110 228", tel: "0973110228" },
  ],
  facebook: "https://www.facebook.com/share/1DjThyVhkM/?mibextid=wwXIfr",
  zalo: "https://zalo.me/84988783783",
  geo: { lat: 21.3989543, lng: 105.3203725 },
  mapsUrl:
    "https://www.google.com/maps/place/C%C3%B4ng+Ty+TNHH+V%E1%BA%ADn+T%E1%BA%A3i+%26+Du+L%E1%BB%8Bch+Ph%C6%B0%C6%A1ng+%C4%90%C3%B4ng/@21.3989543,105.3197288,19z/data=!4m6!3m5!1s0x313493005fe537c7:0x8ae555104ab1bb0c!8m2!3d21.3989543!4d105.3203725",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=21.3989543,105.3203725",
  embedUrl: "https://www.google.com/maps?q=21.3989543,105.3203725&z=16&output=embed",
} as const;

export const NAV = [
  { to: "/", label: "Trang chủ" },
  { to: "/gioi-thieu", label: "Giới thiệu" },
  { to: "/dich-vu", label: "Dịch vụ" },
  { to: "/doi-xe", label: "Đội xe" },
  { to: "/tour-du-lich", label: "Tour du lịch" },
  { to: "/tin-tuc", label: "Tin tức" },
  { to: "/lien-he", label: "Liên hệ" },
] as const;
