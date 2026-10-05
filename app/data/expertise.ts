import type { Expertise } from "./types";

export const expertise: Expertise[] = [
  {
    id: "paid-media-strategy",
    kind: "core",
    title: { vi: "Chiến lược Paid Media", en: "Paid Media Strategy" },
    description: {
      vi: "Mình xác định vai trò của từng kênh, phân bổ ngân sách và chạy các chiến dịch đa nền tảng, từ đợt ra mắt đến always-on, theo mục tiêu kinh doanh.",
      en: "I define each channel’s role, allocate budgets, and run multi-platform campaigns, from launches to always-on, toward business goals.",
    },
    subskills: [
      { vi: "Xác định vai trò từng kênh", en: "Channel role planning" },
      { vi: "Phân bổ ngân sách", en: "Budget allocation" },
      { vi: "Lập kế hoạch đối tượng và mục tiêu", en: "Audience and objective planning" },
      { vi: "Chạy chiến dịch đa nền tảng", en: "Multi-platform execution" },
      { vi: "Lên lịch thử nghiệm creative (A/B testing)", en: "Creative testing schedule (A/B testing)" },
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
      vi: "Mình thiết kế và tối ưu luồng thu lead qua Messenger, website, landing page và Zalo, đồng thời đo lường riêng từng điểm chạm.",
      en: "I design and optimize lead flows through Messenger, websites, landing pages, and Zalo, while measuring each touchpoint separately.",
    },
    subskills: [
      { vi: "Lập kế hoạch funnel", en: "Funnel planning" },
      { vi: "Phân khúc đối tượng", en: "Audience segmentation" },
      { vi: "Tối ưu chuyển đổi qua tin nhắn và website", en: "Messaging and website conversion optimization" },
      { vi: "Tối ưu luồng thu lead trên landing page", en: "Landing page lead-flow optimization" },
      { vi: "Đánh giá và kiểm soát chất lượng lead", en: "Lead-quality review and control" },
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
      vi: "Mình đọc dữ liệu theo từng mục tiêu, tìm nguyên nhân gốc, kiểm soát chất lượng tín hiệu và biến insight thành quyết định tối ưu.",
      en: "I read data by objective, find root causes, control signal quality, and turn insights into optimization decisions.",
    },
    subskills: [
      { vi: "Phân rã chỉ số KPI", en: "KPI decomposition" },
      { vi: "So sánh hiệu quả các luồng funnel", en: "Funnel comparison" },
      { vi: "Theo dõi doanh thu và ROAS", en: "Revenue and ROAS tracking" },
      { vi: "Đánh giá chất lượng tệp đối tượng", en: "Audience-quality assessment" },
      { vi: "Báo cáo và đề xuất từ insight", en: "Reporting and actionable insights" },
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
      vi: "Mình là đầu mối làm việc với khách hàng. Mình thống nhất KPI và điều phối ngân sách, nội dung, landing page, sản xuất, phê duyệt và báo cáo.",
      en: "I’m the client’s point of contact. I align KPIs and coordinate budgets, content, landing pages, production, approvals, and reporting.",
    },
    subskills: [
      { vi: "Giao tiếp và quản lý kỳ vọng khách hàng", en: "Client communication and expectation management" },
      { vi: "Quản lý phạm vi dự án và ngân sách", en: "Scope and budget management" },
      { vi: "Điều phối các đội ngũ liên quan", en: "Cross-functional coordination" },
      { vi: "Điều phối nội dung và sản xuất", en: "Content and production coordination" },
      { vi: "Tiến độ, phê duyệt và báo cáo", en: "Progress, approvals, and reporting" },
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
      vi: "Mình hỗ trợ mảng performance và account bằng kỹ năng nhận diện thương hiệu, copywriting, định hướng nội dung, thiết kế và sản xuất video.",
      en: "I support performance and account work with skills in brand identity, copywriting, content direction, design, and video production.",
    },
    subskills: [
      { vi: "Nhận diện thương hiệu", en: "Brand identity" },
      { vi: "Copywriting và định hướng nội dung", en: "Copywriting and content direction" },
      { vi: "Thiết kế đồ họa", en: "Graphic design" },
      { vi: "Sản xuất nội dung đa định dạng", en: "Multi-format content production" },
      { vi: "Quay và dựng video", en: "Filming and video editing" },
    ],
    proofs: [],
    evidenceCaseIds: [17, 18, 19],
  },
];
