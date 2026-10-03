import type { Expertise } from "./types";

export const expertise: Expertise[] = [
  {
    id: "paid-media-strategy",
    kind: "core",
    title: { vi: "Chiến lược Paid Media", en: "Paid Media Strategy" },
    description: {
      vi: "Hoạch định cấu trúc kênh, phân bổ ngân sách tối ưu và vận hành chiến dịch đa nền tảng (Launch & Always-on) hướng tới mục tiêu kinh doanh.",
      en: "I plan each channel’s role, allocate budgets, and run multi-platform or always-on campaigns.",
    },
    subskills: [
      { vi: "Xây dựng vai trò chiến lược cho từng kênh", en: "Channel role planning" },
      { vi: "Tối ưu hóa phân bổ ngân sách", en: "Budget allocation" },
      { vi: "Lập kế hoạch đối tượng và mục tiêu", en: "Audience and objective planning" },
      { vi: "Vận hành chiến dịch đa kênh (Cross-channel)", en: "Multi-platform execution" },
      { vi: "Thiết lập khung thử nghiệm Creative (A/B Testing)", en: "Creative testing schedule" },
    ],
    proofs: [
      {
        caseId: 1,
        text: {
          vi: "Dự án 01 · Chiến dịch đa nền tảng quy mô lớn",
          en: "Project 01 · Large-scale multi-platform campaign",
        },
      },
      {
        caseId: 6,
        text: {
          vi: "Dự án 06 · Always-on và hợp tác 17 tháng",
          en: "Project 06 · Always-on and a 17-month partnership",
        },
      },
    ],
    evidenceCaseIds: [4, 7, 9, 10],
  },
  {
    id: "lead-generation-funnel",
    kind: "core",
    title: { vi: "Tạo Lead & Tối ưu Funnel", en: "Lead Generation & Funnel Optimization" },
    description: {
      vi: "Thiết kế và tối ưu toàn diện phễu chuyển đổi (Lead Funnel) trên đa nền tảng (Messenger, Website, Landing Page, Zalo), đảm bảo đo lường chính xác tại từng điểm chạm.",
      en: "I design and optimize lead flows through Messenger, websites, landing pages, and Zalo, while tracking each touchpoint separately.",
    },
    subskills: [
      { vi: "Lập kế hoạch funnel", en: "Funnel planning" },
      { vi: "Phân khúc đối tượng", en: "Audience segmentation" },
      { vi: "Tối ưu tỷ lệ chuyển đổi (CRO) qua Tin nhắn & Website", en: "Messaging and website conversion" },
      { vi: "Tối ưu trải nghiệm & luồng thu lead trên Landing Page", en: "Landing page coordination" },
      { vi: "Chuẩn hóa quy trình đánh giá & kiểm soát chất lượng Lead", en: "Lead-quality feedback loop" },
    ],
    proofs: [
      {
        caseId: 2,
        text: {
          vi: "Dự án 02 · 7.705 lượt đăng ký website",
          en: "Project 02 · 7,705 website registrations",
        },
      },
      {
        caseId: 3,
        text: {
          vi: "Dự án 03 · Hội thoại được đối chiếu với đơn hàng",
          en: "Project 03 · Conversations matched against purchases",
        },
      },
    ],
    evidenceCaseIds: [5, 8, 11, 13, 15, 16],
  },
  {
    id: "performance-analysis",
    kind: "core",
    title: { vi: "Phân tích & Tối ưu Hiệu suất", en: "Performance Analysis & Optimization" },
    description: {
      vi: "Phân tích dữ liệu chuyên sâu theo mục tiêu KPI, xác định nguyên nhân cốt lõi và chuyển hóa insight thành các hành động tối ưu hóa hiệu suất thực tế.",
      en: "I read data by objective, find root causes, control signal quality, and turn insights into optimization decisions.",
    },
    subskills: [
      { vi: "Phân rã & Theo dõi chỉ số KPI/ROAS", en: "KPI decomposition" },
      { vi: "Đánh giá & So sánh hiệu quả các luồng Funnel", en: "Funnel comparison" },
      { vi: "Theo dõi doanh thu và ROAS", en: "Revenue and ROAS tracking" },
      { vi: "Đánh giá chất lượng tệp đối tượng", en: "Audience-quality assessment" },
      { vi: "Báo cáo chuyên sâu & Đề xuất Actionable Insights", en: "Reporting and actionable insight" },
    ],
    proofs: [
      {
        caseId: 3,
        text: {
          vi: "Dự án 03 · Theo dõi doanh thu và ROAS",
          en: "Project 03 · Revenue and ROAS tracking",
        },
      },
      {
        caseId: 12,
        text: {
          vi: "Dự án 12 · Tìm nguyên nhân và làm sạch tín hiệu tệp",
          en: "Project 12 · Root-cause diagnosis and audience-signal cleanup",
        },
      },
    ],
    evidenceCaseIds: [8, 14],
  },
  {
    id: "account-integrated-management",
    kind: "core",
    title: {
      vi: "Quản lý Account & Chiến dịch Tích hợp",
      en: "Account & Integrated Campaign Management",
    },
    description: {
      vi: "Đảm nhận vai trò đầu mối kết nối trực tiếp với khách hàng; làm chủ mục tiêu KPI và điều phối toàn bộ tài nguyên (Ngân sách, Creative, Landing Page, Production) để đảm bảo tiến độ & chất lượng.",
      en: "I’m the client’s point of contact. I align KPIs and coordinate budgets, content, landing pages, production, approvals, and reporting.",
    },
    subskills: [
      { vi: "Quản trị mối quan hệ & Kỳ vọng của khách hàng", en: "Client communication" },
      { vi: "Quản lý phạm vi dự án (Scope) & Ngân sách", en: "Scope and budget coordination" },
      { vi: "Điều phối & Kết nối các đội ngũ liên chức năng (Cross-functional)", en: "Cross-functional delivery" },
      { vi: "Điều phối nội dung và production", en: "Content and production coordination" },
      { vi: "Tiến độ, phê duyệt và báo cáo", en: "Progress, approval, and reporting" },
    ],
    proofs: [
      {
        caseId: 1,
        text: {
          vi: "Dự án 01 · Điều phối khách hàng và team đa nền tảng",
          en: "Project 01 · Coordinating the client and a multi-platform team",
        },
      },
      {
        caseId: 2,
        text: {
          vi: "Dự án 02 · Paid media, landing page và lead tracking",
          en: "Project 02 · Paid media, landing pages, and lead tracking",
        },
      },
      {
        caseId: 6,
        text: {
          vi: "Dự án 06 · Quản lý mô hình always-on dài hạn",
          en: "Project 06 · Managing a long-term always-on account",
        },
      },
    ],
    evidenceCaseIds: [4, 5, 7, 9, 11, 15, 16],
  },
  {
    id: "brand-content-creative",
    kind: "supporting",
    title: {
      vi: "Thương hiệu, Nội dung & Sản xuất Sáng tạo",
      en: "Brand, Content & Creative Production",
    },
    description: {
      vi: "Bổ trợ mạnh mẽ cho Performance & Account Management thông qua tư duy định hướng nội dung, copywriting, thiết kế đồ họa và sản xuất video chuẩn định dạng quảng cáo.",
      en: "I support performance and account work with skills in brand identity, copywriting, content planning, design, and video production.",
    },
    subskills: [
      { vi: "Ứng dụng Định hướng Nhận diện Thương hiệu", en: "Brand identity" },
      { vi: "Copywriting & Định hướng Content chuẩn Performance", en: "Copywriting and content direction" },
      { vi: "Thiết kế đồ họa", en: "Graphic design" },
      { vi: "Sản xuất Multimedia Content đa nền tảng", en: "Multi-format content production" },
      { vi: "Quay và dựng video", en: "Filming and video editing" },
    ],
    proofs: [],
    evidenceCaseIds: [17, 18, 19],
  },
];
