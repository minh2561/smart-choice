/**
 * KC EVENT - WEBSITE CONFIGURATION
 * Toàn bộ thông tin liên hệ, pháp lý, số liệu và liên kết mạng xã hội
 * được quản lý tập trung tại đây để dễ dàng tùy biến và cập nhật.
 */
const siteConfig = {
  brand: {
    name: "Minh Đạt Media",
    slogan: "Kiến Tạo Sự Kiện Đẳng Cấp • Đồng Hành Hành Trình Vươn Xa",
    tagline: "Professional Event Organizer & Corporate Travel Partner",
    legalName: "CÔNG TY CỔ PHẦN TRUYỀN THÔNG VÀ PHÁT TRIỂN CÔNG NGHỆ MINH ĐẠT",
    taxCode: "4900891187",
    representative: "Ông NGUYỄN THUYẾT MINH",
    representativeTitle: "Giám đốc",
    bankAccount: "8400201042920",
    bankName: "Ngân hàng Nông nghiệp và phát triển nông thôn Việt Nam - Chi nhánh tỉnh Lạng Sơn",
    foundedYear: 2016,
    licenseDate: "2026-08-25"
  },
  contact: {
    hotline: "0914 967 632",
    hotlineDisplay: "0914.967.632",
    hotlineRaw: "0914967632",
    zalo: "0914967632",
    zaloLink: "https://zalo.me/0914967632",
    messengerLink: "https://m.me/kcevent.vn",
    email: "minhdatmedia.ceo@gmail.com",
    accountingEmail: "minhdatmedia.ceo@gmail.com",
    address: "Ki ốt khán đài B – Sân vận động Đông Kinh, P. Vĩnh Trại, Lạng Sơn",
    city: "Lạng Sơn",
    country: "Việt Nam",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:30 (Hỗ trợ Hotline 24/7)"
  },
  // URL Web App Google Apps Script (xem google-apps-script/lead-form.gs).
  // Để trống: form sẽ mở email soạn sẵn gửi tới contact.email.
  leadEndpoint: "",
  social: {
    facebook: "https://facebook.com/kcevent.vn",
    zalo: "https://zalo.me/0914967632",
    youtube: "https://youtube.com/@kcevent",
    tiktok: "https://tiktok.com/@kcevent.vn"
  },
  stats: [
    { value: "10+", label: "Năm Kinh Nghiệm", desc: "Thấu hiểu văn hóa doanh nghiệp" },
    { value: "500+", label: "Sự Kiện Thành Công", desc: "Từ quy mô 50 đến 2.000 khách" },
    { value: "200+", label: "Tour & Company Trip", desc: "Độc bản, an toàn và gắn kết sâu sắc" },
    { value: "100+", label: "Đối Tác Tin Cậy", desc: "Tập đoàn lớn và doanh nghiệp hàng đầu" }
  ],
  services: {
    events: [
      "Lễ Khởi Công - Khai Trương - Khánh Thành",
      "Gala Dinner & Kỷ Niệm Thành Lập",
      "Hội Nghị - Hội Thảo Khách Hàng",
      "Year End Party & Tiệc Tất Niên",
      "Kick Off & Ra Mắt Sản Phẩm Mới",
      "Roadshow & Brand Activation"
    ],
    tours: [
      "Company Trip & Nghỉ Dưỡng Doanh Nghiệp",
      "Tour Du Lịch Trong Nước Cao Cấp",
      "Tour Khách Đoàn Quốc Tế",
      "Incentive Tour (Tour Khen Thưởng VIP)",
      "Tour M.I.C.E (Du Lịch Kết Hợp Hội Thảo)"
    ],
    teambuilding: [
      "Team Building Bãi Biển Hấp Dẫn",
      "Team Building Resort & Sinh Thái",
      "Amazing Race - Giải Mã Thách Thức",
      "Team Building Kết Hợp Gala Dinner"
    ]
  }
};

// Freeze configuration to prevent accidental modification
if (typeof Object.freeze === 'function') {
  Object.freeze(siteConfig);
}
