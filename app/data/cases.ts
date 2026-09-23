import type {
  CaseStudy
} from "./types";

const needsVerification = "needs-verification" as const;

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "fertilizer-multi-channel-reach",
    disciplineTags: [
      "Ads",
      "Account"
    ],
    capabilityIds: [
      "paid-media-strategy",
      "account-integrated-management"
    ],
    presentationTier: "flagship",
    featuredRank: 3,
    industry: {
      vi: "Phân bón", en: "Fertilizer"
    },
    title: {
      vi: "Chiến dịch phủ sóng đa kênh", en: "Multi-channel Brand Reach"
    },
    cardDescription: {
      vi: "Điều phối Meta, TikTok và Google/YouTube trong kỳ phân tích 45 ngày, với khoảng 854,6 triệu đồng chi tiêu quảng cáo và hơn 110,4 triệu lượt hiển thị.",
      en: "Coordinated Meta, TikTok, and Google/YouTube across a 45-day analysis period, managing approximately VND 854.6M in media spend and more than 110.4M impressions.",
    },
    evidenceSummary: {
      vi: "Đa nền tảng · 854,6 triệu đồng media spend · hơn 110,4 triệu lượt hiển thị",
      en: "Multi-platform · VND 854.6M media spend · 110.4M+ impressions",
    },
    roles: {
      vi: "Lập kế hoạch, đa nền tảng và điều phối",
      en: "Planning, multi-platform execution, and coordination",
    },
    roleTags: [
      "Planning",
      "Multi-platform",
      "Coordination"
    ],
    dataPeriod: {
      vi: "45 ngày", en: "45 days"
    },
    collaborationDuration: {
      vi: "3 tháng", en: "3 months"
    },
    platforms: [
      "Meta",
      "TikTok",
      "Google",
      "YouTube"
    ],
    metrics: [
      {
        label: {
          vi: "Chi tiêu quảng cáo", en: "Media spend"
        }, value: "VND 854.6M", verified: true
      },
      {
        label: {
          vi: "Lượt hiển thị", en: "Impressions"
        }, value: "110.4M+", verified: true
      },
    ],
    detail: {
      overview: {
        vi: "Chiến dịch xây dựng độ phủ lớn cho ngành phân bón trên Meta, TikTok và Google/YouTube. Các nền tảng được phân bổ theo vai trò riêng để vừa mở rộng nhận biết, vừa duy trì tương tác và hội thoại với khách hàng tiềm năng.",
        en: "A large-scale awareness campaign for the fertilizer category across Meta, TikTok, and Google/YouTube. Each platform played a distinct role in expanding reach while sustaining engagement and qualified conversations.",
      },
      strategy: {
        vi: "Phân bổ Meta cho Reach, Impressions và Messaging; TikTok cho Reach và Video Views; Google cho GDN cùng các định dạng YouTube Skippable, Bumper và Non-skippable. Theo dõi tần suất, CPM và độ phủ chéo để điều chỉnh ngân sách giữa các nền tảng.",
        en: "Assigned Meta to Reach, Impressions, and Messaging; TikTok to Reach and Video Views; and Google to GDN plus Skippable, Bumper, and Non-skippable YouTube formats. Monitored frequency, CPM, and cross-platform reach to rebalance spend.",
      },
      results: {
        vi: "Tổng chi tiêu quảng cáo đạt 854,6 triệu đồng, tạo hơn 110,4 triệu lượt hiển thị. Riêng Meta ghi nhận 12,66 triệu người tiếp cận, 71,67 triệu lượt hiển thị, 3,13 triệu lượt tương tác và 2.110 cuộc hội thoại; TikTok tạo 31,64 triệu lượt xem video; Google/YouTube tạo hơn 7,08 triệu lượt hiển thị và 3,01 triệu lượt xem công khai.",
        en: "VND 854.6M in media spend generated more than 110.4M impressions. Meta alone reached 12.66M people, delivered 71.67M impressions, 3.13M engagements, and 2,110 conversations; TikTok generated 31.64M video views; Google/YouTube added 7.08M impressions and 3.01M public views.",
      },
      accountScope: {
        vi: "Điều phối đầu mối giữa khách hàng và team triển khai; theo dõi mục tiêu, ngân sách, lịch nội dung, kịch bản, tiến độ sản xuất và báo cáo. Tổng quy mô gói hợp tác khoảng 1,5 tỷ đồng trong 3 tháng; số liệu 854,6 triệu đồng là chi tiêu quảng cáo trong kỳ 45 ngày.",
        en: "Served as the client–delivery team contact, coordinating objectives, budget, content schedules, scripts, production timelines, and reporting. The broader three-month engagement was approximately VND 1.5B; VND 854.6M represents media spend for the selected 45 days.",
      },
      insight: {
        vi: "Phân vai kênh rõ ràng và theo dõi tần suất, CPM theo nền tảng giúp điều phối ngân sách mà không làm lẫn mục tiêu.",
        en: "Clear channel roles and platform-level frequency and CPM monitoring enable budget reallocation without mixing objectives.",
      },
    },
    coverImage: "/work/fertilizer-multi-channel-reach/cover-brand.svg",
    coverVariant: "paid-media-strategy",
    assets: [],
    confidential: true,
    dataStatus: needsVerification,
  },
  {
    id: 2,
    slug: "nutrition-course-registrations",
    disciplineTags: [
      "Ads",
      "Account"
    ],
    capabilityIds: [
      "lead-generation-funnel",
      "account-integrated-management"
    ],
    presentationTier: "flagship",
    featuredRank: 2,
    industry: {
      vi: "Khóa học dinh dưỡng", en: "Nutrition Education"
    },
    title: {
      vi: "Tăng đăng ký khóa học", en: "Course Registration Growth"
    },
    cardDescription: {
      vi: "Tạo 7.705 lượt đăng ký website trên Meta với CPA trung bình 64,3 nghìn đồng, đồng thời mở rộng traffic qua TikTok và Google cho sản phẩm khóa học giá trị cao.",
      en: "Generated 7,705 website registrations on Meta at an average CPA of VND 64.3K, while expanding traffic through TikTok and Google for a high-value nutrition course.",
    },
    evidenceSummary: {
      vi: "7.705 đăng ký website · CPA 64.309 đồng · Meta, TikTok và Google",
      en: "7,705 website registrations · VND 64,309 CPA · Meta, TikTok, and Google",
    },
    roles: {
      vi: "Lập kế hoạch paid media, tối ưu funnel và quản lý account",
      en: "Paid media planning, funnel optimization, and account management",
    },
    roleTags: [
      "Lead Generation",
      "Funnel Optimization",
      "Account Management"
    ],
    dataPeriod: {
      vi: "Meta 12 tháng · TikTok 3 tháng · Google 2 tháng",
      en: "Meta 12 months · TikTok 3 months · Google 2 months",
    },
    collaborationDuration: {
      vi: "Hơn 2 năm", en: "More than 2 years"
    },
    platforms: [
      "Meta",
      "TikTok",
      "Google"
    ],
    metrics: [
      {
        label: {
          vi: "Đăng ký website", en: "Website registrations"
        }, value: "7,705", verified: true
      },
      {
        label: {
          vi: "CPA trung bình", en: "Average CPA"
        }, value: "VND 64,309", verified: true
      },
    ],
    detail: {
      overview: {
        vi: "Hệ thống thu lead cho khóa học dinh dưỡng có giá trị khoảng 20–40 triệu đồng, yêu cầu cân bằng giữa quy mô đăng ký, chất lượng traffic và khả năng nuôi dưỡng người học trước khi tư vấn.",
        en: "A lead-generation system for nutrition courses valued at approximately VND 20–40M, requiring a balance between registration volume, traffic quality, and lead nurturing before consultation.",
      },
      strategy: {
        vi: "Meta tập trung chuyển đổi đăng ký trên website; TikTok mở rộng traffic và Landing Page Views; Google bổ sung nhu cầu chủ động qua tìm kiếm và hệ sinh thái hiển thị. Đánh giá theo từng nền tảng thay vì gộp chung để tránh làm sai lệch hiệu quả funnel.",
        en: "Meta focused on website registration conversion; TikTok expanded traffic and Landing Page Views; Google captured active demand through search and display. Performance was assessed by platform to avoid distorting the funnel picture.",
      },
      results: {
        vi: "Meta tạo 7.705 lượt đăng ký với 495,5 triệu đồng chi tiêu và CPA trung bình 64.309 đồng. TikTok tạo 108.454 Landing Page Views, CTR khoảng 16,49% và tỷ lệ Click-to-LPV 87,3%; Google ghi nhận 313.753 lượt hiển thị và 16.006 lượt nhấp.",
        en: "Meta generated 7,705 registrations from VND 495.5M in spend at an average CPA of VND 64,309. TikTok delivered 108,454 Landing Page Views, a 16.49% CTR, and an 87.3% Click-to-LPV rate; Google added 313,753 impressions and 16,006 clicks.",
      },
      accountScope: {
        vi: "Quản lý đầu mối khách hàng, thống nhất KPI và media plan; điều phối ngân sách, landing page, nội dung quảng cáo và quy trình theo dõi lead. Ngân sách quảng cáo dao động khoảng 40–100 triệu đồng mỗi tháng, chưa bao gồm chi phí quản lý và sản xuất nội dung.",
        en: "Managed the client relationship, aligned KPIs and the media plan, and coordinated budget allocation, landing pages, ad content, and lead tracking. Monthly media spend ranged from approximately VND 40–100M, excluding management and content production costs.",
      },
      insight: {
        vi: "Đánh giá riêng từng nền tảng giữ cho bức tranh funnel chính xác khi mục tiêu và kỳ dữ liệu khác nhau.",
        en: "Platform-level evaluation keeps the funnel picture accurate when objectives and data periods differ.",
      },
    },
    coverImage: "/work/nutrition-course-registrations/cover-brand.svg",
    coverVariant: "lead-generation-funnel",
    assets: [],
    confidential: true,
    dataStatus: needsVerification,
  },
  {
    id: 3,
    slug: "water-tanks-messages-to-sales",
    disciplineTags: [
      "Ads",
      "Account"
    ],
    capabilityIds: [
      "lead-generation-funnel",
      "performance-analysis"
    ],
    presentationTier: "flagship",
    featuredRank: 1,
    industry: {
      vi: "Bồn nước & bể phốt", en: "Water Tanks & Septic Systems"
    },
    title: {
      vi: "Tối ưu tin nhắn và doanh thu", en: "Messages That Drive Sales"
    },
    cardDescription: {
      vi: "Tạo 24.762 cuộc hội thoại với chi phí trung bình khoảng 2,9 nghìn đồng, đồng thời ghi nhận 725 đơn hàng và ROAS 5,35 trong kỳ phân tích 6 tháng.",
      en: "Generated 24,762 conversations at an average cost of approximately VND 2.9K, while recording 725 purchases and a 5.35 ROAS across the six-month analysis period.",
    },
    evidenceSummary: {
      vi: "24.762 cuộc hội thoại · 725 lượt mua · ROAS 5,35",
      en: "24,762 conversations · 725 purchases · 5.35 ROAS",
    },
    roles: {
      vi: "Trực tiếp vận hành Meta Ads, phát triển creative và theo dõi doanh thu sau hội thoại",
      en: "Hands-on Meta Ads execution, creative development, and post-conversation revenue tracking",
    },
    roleTags: [
      "Meta Ads",
      "Message Optimization",
      "Revenue Tracking"
    ],
    dataPeriod: {
      vi: "6 tháng", en: "6 months"
    },
    collaborationDuration: {
      vi: "20 tháng", en: "20 months"
    },
    platforms: [
      "Meta"
    ],
    metrics: [
      {
        label: {
          vi: "Lượt mua", en: "Purchases"
        }, value: "725", verified: true
      },
      {
        label: {
          vi: "ROAS", en: "ROAS"
        }, value: "5.35", verified: true
      },
    ],
    detail: {
      overview: {
        vi: "Chiến dịch tập trung tạo tin nhắn cho nhóm sản phẩm bồn nước và bể phốt. Dữ liệu mua hàng được kết nối bổ sung từ chiến dịch chuyển đổi để đánh giá chất lượng hội thoại bằng doanh thu, không chỉ bằng chi phí tin nhắn.",
        en: "The campaign focused on message generation for water tanks and septic systems. Purchase data from conversion activity was connected to evaluate conversation quality through revenue, not message cost alone.",
      },
      strategy: {
        vi: "Phân nhóm theo nhu cầu sản phẩm và khu vực, duy trì creative có tỷ lệ phản hồi tốt, đồng thời đối chiếu tin nhắn với lượt mua để ưu tiên nhóm quảng cáo tạo giá trị kinh doanh thực tế.",
        en: "Segmented audiences by product need and location, retained creatives with strong response rates, and matched conversations against purchases to prioritize ad groups creating measurable business value.",
      },
      results: {
        vi: "73,0 triệu đồng chi tiêu tạo 24.762 cuộc hội thoại, tương đương khoảng 2.949 đồng mỗi cuộc. Hệ thống ghi nhận 725 lượt mua, doanh thu 390,7 triệu đồng, ROAS 5,35 và CTR 5,14%.",
        en: "VND 73.0M in spend generated 24,762 conversations at approximately VND 2,949 each. The account recorded 725 purchases, VND 390.7M in revenue, a 5.35 ROAS, and a 5.14% CTR.",
      },
      accountScope: {
        vi: "Trực tiếp vận hành Meta Ads và phát triển creative; tiếp nhận yêu cầu, theo dõi chất lượng tin nhắn và kết quả mua hàng; tổng hợp báo cáo và đề xuất điều chỉnh theo nhu cầu thị trường. Ngân sách quảng cáo khoảng 10–15 triệu đồng mỗi tháng.",
        en: "Handled Meta Ads execution and creative development directly; managed client requirements, monitored message quality and purchases, and translated results into reporting and market-led recommendations. Monthly media spend was approximately VND 10–15M.",
      },
      insight: {
        vi: "Đánh giá lead bằng đơn hàng và doanh thu giúp tránh tối ưu cho hội thoại rẻ nhưng kém giá trị.",
        en: "Evaluating leads through purchases and revenue prevents optimization toward cheap but low-value conversations.",
      },
    },
    coverVariant: "performance-analysis",
    coverImage: "/work/03-water-tanks-messages-to-sales/cover-brand.svg",
    assets: [],
    confidential: true,
    dataStatus: "approved",
  },
  {
    id: 4,
    slug: "personalized-fragrance-launch",
    disciplineTags: [
      "Ads",
      "Account"
    ],
    capabilityIds: [
      "paid-media-strategy",
      "account-integrated-management"
    ],
    presentationTier: "evidence-only",
    industry: {
      vi: "Nước hoa cá nhân hóa", en: "Personalized Fragrance"
    },
    title: {
      vi: "Ra mắt sản phẩm đa kênh", en: "Multi-channel Product Launch"
    },
    cardDescription: {
      vi: "Triển khai gói ra mắt 250 triệu đồng trong 3 tháng; trong kỳ phân tích 2 tháng, Meta đạt khoảng 1,2 triệu người tiếp cận và TikTok đạt 918 nghìn người tiếp cận cùng 2,35 triệu lượt xem video, đi kèm nhiều tín hiệu tương tác và tăng trưởng cộng đồng.",
      en: "Delivered a VND 250M three-month launch; during the selected two-month period, Meta reached approximately 1.2M people and TikTok reached 918K people with 2.35M video views, alongside meaningful engagement and community growth.",
    },
    evidenceSummary: {
      vi: "Ra mắt đa kênh · Meta và TikTok · kỳ phân tích 2 tháng",
      en: "Multi-channel launch · Meta and TikTok · two-month analysis period",
    },
    roles: {
      vi: "Launch Strategy · Meta Ads · TikTok Ads", en: "Launch Strategy · Meta Ads · TikTok Ads"
    },
    roleTags: [
      "Launch Strategy",
      "Meta Ads",
      "TikTok Ads"
    ],
    platforms: [
      "Meta",
      "TikTok"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Gói ra mắt sản phẩm nước hoa cá nhân hóa trong 3 tháng, với ngân sách khoảng 250 triệu đồng, cần tạo nhận biết nhanh trên Meta và TikTok trong giai đoạn launch.",
        en: "A three-month personalized fragrance launch package worth approximately VND 250M, requiring fast awareness build-up on Meta and TikTok during the launch window.",
      },
      strategy: {
        vi: "Meta đảm nhiệm độ phủ và tương tác cộng đồng; TikTok bổ sung lượt xem video và tiếp cận thêm nhóm đối tượng mới. Theo dõi song song hai nền tảng trong kỳ phân tích 2 tháng để cân đối ngân sách theo giai đoạn ra mắt.",
        en: "Meta carried reach and community engagement while TikTok added video views and reached additional audience segments. Both platforms were tracked in parallel across the two-month analysis period to balance spend through the launch phases.",
      },
      results: {
        vi: "Trong kỳ phân tích 2 tháng, Meta đạt khoảng 1,2 triệu người tiếp cận, TikTok đạt 918 nghìn người tiếp cận và 2,35 triệu lượt xem video, cùng nhiều tín hiệu tương tác và tăng trưởng cộng đồng.",
        en: "Across the two-month analysis period, Meta reached approximately 1.2M people, and TikTok reached 918K people with 2.35M video views, alongside meaningful engagement and community growth.",
      },
      accountScope: {
        vi: "Điều phối gói ra mắt 250 triệu đồng trong 3 tháng giữa các nền tảng, theo dõi tiến độ nội dung và báo cáo kết quả theo từng giai đoạn launch.",
        en: "Coordinated the VND 250M three-month launch package across platforms, tracking content progress and reporting results by launch phase.",
      },
      insight: {
        vi: "Giai đoạn ra mắt cần phân vai kênh rõ ràng ngay từ đầu để độ phủ và tương tác không cạnh tranh ngân sách lẫn nhau.",
        en: "A launch phase needs clear channel roles from day one so reach and engagement don't compete for the same budget.",
      },
    },
    coverImage: "/work/personalized-fragrance-launch/thumb-brand.svg",
    coverVariant: "paid-media-strategy",
    assets: [], confidential: true, dataStatus: "approved",
  },
  {
    id: 5,
    slug: "skills-education-lead-generation",
    disciplineTags: [
      "Ads",
      "Account"
    ],
    capabilityIds: [
      "lead-generation-funnel",
      "account-integrated-management"
    ],
    presentationTier: "evidence-only",
    industry: {
      vi: "Đào tạo kỹ năng", en: "Skills Education"
    },
    title: {
      vi: "Thu hút học viên tiềm năng", en: "Student Lead Generation"
    },
    cardDescription: {
      vi: "Meta tạo 5.736 cuộc hội thoại với CPA trung bình 29,9 nghìn đồng; TikTok bổ sung 2,77 triệu lượt xem và hơn 105 nghìn lượt nhấp.",
      en: "Meta generated 5,736 conversations at an average CPA of VND 29.9K, while TikTok added 2.77M views and more than 105K clicks.",
    },
    evidenceSummary: {
      vi: "5.736 cuộc hội thoại · Funnel và landing page", en: "5,736 conversations · Funnel and landing-page coordination"
    },
    roles: {
      vi: "Lead Generation · Funnel Strategy · Landing Page", en: "Lead Generation · Funnel Strategy · Landing Page"
    },
    roleTags: [
      "Lead Generation",
      "Funnel Strategy",
      "Landing Page"
    ],
    platforms: [
      "Meta",
      "TikTok"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Hệ thống thu lead cho ngành đào tạo kỹ năng, kết hợp hội thoại tư vấn trên Meta với traffic mở rộng từ TikTok để tăng số học viên tiềm năng tiếp cận được.",
        en: "A lead-generation system for the skills-education category, pairing Meta conversation-based inquiries with TikTok traffic to expand the pool of reachable prospective students.",
      },
      strategy: {
        vi: "Meta tập trung tạo hội thoại tư vấn trực tiếp; TikTok đóng vai trò mở rộng traffic và landing page. Hai nền tảng được theo dõi và tối ưu riêng theo mục tiêu của từng kênh.",
        en: "Meta focused on generating direct advisory conversations while TikTok expanded traffic and landing-page visits. Both platforms were tracked and optimized separately according to each channel's objective.",
      },
      results: {
        vi: "Meta tạo 5.736 cuộc hội thoại với CPA trung bình 29,9 nghìn đồng; TikTok bổ sung 2,77 triệu lượt xem và hơn 105 nghìn lượt nhấp về funnel tư vấn.",
        en: "Meta generated 5,736 conversations at an average CPA of VND 29.9K, while TikTok added 2.77M views and more than 105K clicks into the advisory funnel.",
      },
      accountScope: {
        vi: "Điều phối kế hoạch funnel giữa Meta và TikTok, phối hợp landing page và theo dõi luồng chuyển đổi từ hội thoại đến đăng ký tư vấn.",
        en: "Coordinated the funnel plan across Meta and TikTok, aligned the landing page, and tracked the conversion path from conversation to advisory sign-up.",
      },
      insight: {
        vi: "Tách vai trò rõ ràng giữa kênh tạo hội thoại và kênh mở rộng traffic giúp đánh giá đúng đóng góp của từng nền tảng vào funnel.",
        en: "Clearly separating the conversation-generating channel from the traffic-expanding channel keeps each platform's contribution to the funnel accurately measured.",
      },
    },
    coverImage: "/work/skills-education-lead-generation/thumb-brand.svg",
    coverVariant: "lead-generation-funnel", assets: [], confidential: true, dataStatus: "approved",
  },
  {
    id: 6,
    slug: "pet-food-always-on-awareness",
    disciplineTags: [
      "Ads",
      "Account"
    ],
    capabilityIds: [
      "paid-media-strategy",
      "account-integrated-management"
    ],
    presentationTier: "flagship",
    featuredRank: 4,
    industry: {
      vi: "Thức ăn thú cưng", en: "Pet Food"
    },
    title: {
      vi: "Mở rộng độ phủ thương hiệu", en: "Always-on Brand Awareness"
    },
    cardDescription: {
      vi: "Trong kỳ 6 tháng, Meta tạo hơn 603 nghìn lượt tương tác, còn TikTok tạo 9,94 triệu lượt hiển thị và 8,08 triệu lượt xem với CPM khoảng 4,4 nghìn đồng.",
      en: "Across six months, Meta generated more than 603K engagements, while TikTok delivered 9.94M impressions and 8.08M views at an average CPM of approximately VND 4.4K.",
    },
    evidenceSummary: {
      vi: "603.802 tương tác Meta · 9,94 triệu lượt hiển thị TikTok · trực tiếp phụ trách 17 tháng",
      en: "603,802 Meta engagements · 9.94M TikTok impressions · 17 months of direct ownership",
    },
    roles: {
      vi: "Quản lý paid media, testing creative và điều phối account",
      en: "Paid media management, creative testing, and account coordination",
    },
    roleTags: [
      "Always-on Media",
      "Creative Testing",
      "Account Management"
    ],
    dataPeriod: {
      vi: "6 tháng", en: "6 months"
    },
    collaborationDuration: {
      vi: "17 tháng", en: "17 months"
    },
    platforms: [
      "Meta",
      "TikTok"
    ],
    metrics: [
      {
        label: {
          vi: "Tương tác Meta", en: "Meta engagements"
        }, value: "603,802", verified: true
      },
      {
        label: {
          vi: "Hiển thị TikTok", en: "TikTok impressions"
        }, value: "9.94M", verified: true
      },
    ],
    detail: {
      overview: {
        vi: "Hoạt động always-on cho ngành thức ăn thú cưng, kết hợp tương tác trên Meta với độ phủ và lượt xem trên TikTok nhằm duy trì hiện diện thương hiệu trong thời gian dài.",
        en: "An always-on program for the pet food category, combining Meta engagement with TikTok reach and video views to sustain long-term brand presence.",
      },
      strategy: {
        vi: "Xây dựng nhịp testing creative đều đặn; Meta ưu tiên tương tác, video view và link click về TikTok Shop, trong khi TikTok đảm nhiệm độ phủ. Theo dõi tần suất và chi phí phân phối để làm mới nội dung đúng thời điểm.",
        en: "Maintained a steady creative-testing cadence; Meta prioritized engagement, video views, and clicks to TikTok Shop, while TikTok carried reach. Frequency and delivery cost guided timely creative refreshes.",
      },
      results: {
        vi: "Meta tạo 603.802 lượt tương tác, CTR 5,29% và 2,34 triệu lượt hiển thị. TikTok tạo 9,94 triệu lượt hiển thị, 8,08 triệu lượt xem, tiếp cận 2,10 triệu người và CPM trung bình 4.366 đồng.",
        en: "Meta generated 603,802 engagements, a 5.29% CTR, and 2.34M impressions. TikTok delivered 9.94M impressions, 8.08M views, reached 2.10M people, and achieved an average CPM of VND 4,366.",
      },
      accountScope: {
        vi: "Điều phối đầu mối khách hàng, paid media, nội dung và creative; theo dõi ngân sách, tiến độ và báo cáo trong phạm vi dự án khoảng 80–90 triệu đồng mỗi tháng. Chi tiêu quảng cáo trực tiếp khoảng 12–18 triệu đồng mỗi tháng.",
        en: "Coordinated the client relationship, paid media, content, and creative delivery while tracking budget, progress, and reporting across an approximately VND 80–90M monthly project scope. Direct media spend was around VND 12–18M per month.",
      },
      insight: {
        vi: "Trong mô hình always-on, tần suất và chi phí phân phối là tín hiệu để làm mới creative đúng lúc.",
        en: "In an always-on model, frequency and delivery cost signal when creatives need refreshing.",
      },
    },
    coverImage: "/work/pet-food-always-on-awareness/cover-brand.svg",
    coverVariant: "account-integrated-management",
    assets: [], confidential: true, dataStatus: needsVerification,
  },
  {
    id: 7,
    slug: "buffet-local-customer-growth",
    disciplineTags: [
      "Ads",
      "Account"
    ], capabilityIds: [
      "paid-media-strategy",
      "account-integrated-management"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Nhà hàng buffet", en: "Buffet Restaurant"
    }, title: {
      vi: "Tăng khách hàng địa phương", en: "Local Customer Acquisition"
    },
    cardDescription: {
      vi: "Meta tạo 1.498 cuộc hội thoại từ 12,1 triệu đồng; TikTok bổ sung 310 nghìn lượt hiển thị cho các đợt truyền thông địa phương.", en: "Meta generated 1,498 conversations from VND 12.1M in spend; TikTok added 310K impressions across local campaign flights."
    },
    evidenceSummary: {
      vi: "1.498 cuộc hội thoại · Local Ads", en: "1,498 conversations · Local Ads"
    },
    roles: {
      vi: "Local Ads · Message Optimization · Coordination", en: "Local Ads · Message Optimization · Coordination"
    }, roleTags: [
      "Local Ads",
      "Message Optimization",
      "Coordination"
    ],
    platforms: [
      "Meta",
      "TikTok"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Chiến dịch truyền thông địa phương cho nhà hàng buffet, tập trung tạo hội thoại đặt bàn/tư vấn trên Meta trong khi TikTok hỗ trợ độ phủ theo từng đợt truyền thông.",
        en: "A local-awareness campaign for a buffet restaurant, focused on generating booking and inquiry conversations on Meta while TikTok supported reach across campaign flights.",
      },
      strategy: {
        vi: "Nhắm mục tiêu theo bán kính địa lý quanh nhà hàng, tối ưu tin nhắn cho khung giờ cao điểm và phối hợp lịch chạy TikTok theo từng đợt truyền thông để bổ trợ độ phủ.",
        en: "Targeted a geographic radius around the restaurant, optimized messages for peak dining hours, and coordinated TikTok flights to reinforce reach alongside each campaign wave.",
      },
      results: {
        vi: "Meta tạo 1.498 cuộc hội thoại từ 12,1 triệu đồng chi tiêu; TikTok bổ sung 310 nghìn lượt hiển thị cho các đợt truyền thông địa phương.",
        en: "Meta generated 1,498 conversations from VND 12.1M in spend, while TikTok added 310K impressions across local campaign flights.",
      },
      accountScope: {
        vi: "Điều phối lịch truyền thông theo đợt giữa Meta và TikTok, theo dõi chất lượng tin nhắn và phối hợp báo cáo kết quả từng đợt.",
        en: "Coordinated the flight schedule between Meta and TikTok, monitored message quality, and reported results for each wave.",
      },
      insight: {
        vi: "Với ngân sách địa phương nhỏ, phân vai rõ giữa kênh tạo hội thoại và kênh bổ trợ độ phủ giúp tối đa hiệu quả trên từng đồng chi tiêu.",
        en: "With a small local budget, clearly separating the conversation-driving channel from the reach-supporting channel maximizes the return on every dong spent.",
      },
    },
    coverImage: "/work/buffet-local-customer-growth/thumb-brand.svg",
    coverVariant: "paid-media-strategy", assets: [], confidential: true, dataStatus: "approved",
  },
  {
    id: 8,
    slug: "real-estate-dual-lead-flows",
    disciplineTags: [
      "Ads"
    ], capabilityIds: [
      "lead-generation-funnel",
      "performance-analysis"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Bất động sản", en: "Real Estate"
    }, title: {
      vi: "Tăng lead qua hai điểm chạm", en: "Two-path Lead Generation"
    },
    cardDescription: {
      vi: "Khoảng 60,2 triệu đồng chi tiêu tạo 1.282 cuộc hội thoại và 311 lượt đăng ký website, giúp so sánh trực tiếp hai luồng thu lead.", en: "Approximately VND 60.2M in spend generated 1,282 conversations and 311 website registrations, enabling direct funnel comparison."
    },
    evidenceSummary: {
      vi: "1.282 hội thoại + 311 đăng ký website · Funnel comparison", en: "1,282 conversations + 311 website registrations · Funnel comparison"
    },
    roles: {
      vi: "Lead Generation · Meta Ads · Funnel Comparison", en: "Lead Generation · Meta Ads · Funnel Comparison"
    }, roleTags: [
      "Lead Generation",
      "Meta Ads",
      "Funnel Comparison"
    ],
    platforms: [
      "Meta"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Chiến dịch bất động sản chạy song song hai luồng thu lead trên Meta — hội thoại qua tin nhắn và đăng ký trên website — nhằm so sánh trực tiếp hiệu quả giữa hai điểm chạm.",
        en: "A real-estate campaign ran two parallel lead paths on Meta — message conversations and website registrations — to directly compare performance between the two touchpoints.",
      },
      strategy: {
        vi: "Phân bổ ngân sách song song cho mục tiêu Messages và mục tiêu Website Registrations, giữ nguyên tệp và creative tương đồng giữa hai luồng để phép so sánh công bằng theo chi phí và chất lượng lead.",
        en: "Allocated budget in parallel to Messages and Website Registrations objectives, keeping audiences and creatives comparable between the two paths for a fair cost and lead-quality comparison.",
      },
      results: {
        vi: "Khoảng 60,2 triệu đồng chi tiêu tạo 1.282 cuộc hội thoại và 311 lượt đăng ký website, cho phép so sánh trực tiếp hai luồng thu lead.",
        en: "Approximately VND 60.2M in spend generated 1,282 conversations and 311 website registrations, enabling direct funnel comparison.",
      },
      insight: {
        vi: "Chạy song song hai mục tiêu trên cùng tệp giúp thấy rõ luồng nào tạo lead rẻ hơn và luồng nào phù hợp hơn với hành vi tìm hiểu bất động sản.",
        en: "Running two objectives in parallel on the same audience makes it clear which path produces cheaper leads and which better matches real-estate research behavior.",
      },
    },
    coverImage: "/work/real-estate-dual-lead-flows/thumb-brand.svg",
    coverVariant: "performance-analysis", assets: [], confidential: true, dataStatus: "approved",
  },
  {
    id: 9,
    slug: "jewelry-customer-acquisition",
    disciplineTags: [
      "Ads",
      "Account"
    ], capabilityIds: [
      "paid-media-strategy",
      "account-integrated-management"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Tiệm vàng", en: "Jewelry Retail"
    }, title: {
      vi: "Tăng khách hàng quan tâm", en: "Jewelry Customer Acquisition"
    },
    cardDescription: {
      vi: "Khoảng 20,7 triệu đồng media tạo 417 cuộc hội thoại trên Meta, traffic và livestream trên TikTok trong một tháng.", en: "Approximately VND 20.7M in media generated 417 Meta conversations alongside TikTok traffic and livestream activity within one month."
    },
    evidenceSummary: {
      vi: "417 hội thoại · Meta Ads và TikTok Livestream", en: "417 conversations · Meta Ads and TikTok Livestream"
    },
    roles: {
      vi: "Account Management · Meta Ads · TikTok Livestream", en: "Account Management · Meta Ads · TikTok Livestream"
    }, roleTags: [
      "Account Management",
      "Meta Ads",
      "TikTok Livestream"
    ],
    platforms: [
      "Meta",
      "TikTok"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Chiến dịch một tháng cho tiệm vàng, kết hợp hội thoại tư vấn trên Meta với traffic và livestream bán hàng trên TikTok để tăng khách hàng quan tâm.",
        en: "A one-month campaign for a jewelry retailer, combining Meta advisory conversations with TikTok traffic and livestream selling to grow interested customer volume.",
      },
      strategy: {
        vi: "Meta tập trung tạo hội thoại tư vấn sản phẩm; TikTok hỗ trợ traffic và dẫn khách vào các buổi livestream bán hàng, tận dụng tương tác trực tiếp để chốt quan tâm.",
        en: "Meta focused on generating product advisory conversations while TikTok drove traffic into livestream selling sessions, using real-time interaction to convert interest.",
      },
      results: {
        vi: "Khoảng 20,7 triệu đồng media tạo 417 cuộc hội thoại trên Meta, cùng traffic và hoạt động livestream trên TikTok trong một tháng.",
        en: "Approximately VND 20.7M in media generated 417 Meta conversations alongside TikTok traffic and livestream activity within one month.",
      },
      accountScope: {
        vi: "Điều phối lịch livestream, nội dung TikTok và hội thoại tư vấn trên Meta trong cùng một khung thời gian, đảm bảo trải nghiệm khách hàng nhất quán giữa hai kênh.",
        en: "Coordinated the livestream schedule, TikTok content, and Meta advisory conversations within the same timeframe to keep the customer experience consistent across both channels.",
      },
      insight: {
        vi: "Với ngành hàng cần tư vấn trực tiếp như trang sức, kết hợp hội thoại 1-1 và livestream giúp khách hàng ra quyết định nhanh hơn so với chỉ chạy quảng cáo tĩnh.",
        en: "For a category that relies on direct consultation like jewelry, pairing 1-on-1 conversations with livestream selling speeds up customer decisions compared to static ads alone.",
      },
    },
    coverImage: "/work/jewelry-customer-acquisition/thumb-brand.svg",
    coverVariant: "account-integrated-management", assets: [], confidential: true, dataStatus: "approved",
  },
  {
    id: 10,
    slug: "restaurant-local-engagement",
    disciplineTags: [
      "Ads"
    ], capabilityIds: [
      "paid-media-strategy"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Nhà hàng", en: "Restaurant"
    }, title: {
      vi: "Tăng nhận biết và tương tác", en: "Local Awareness & Engagement"
    },
    cardDescription: {
      vi: "Trong 6 tháng, 54,2 triệu đồng chi tiêu tạo 45.723 lượt tương tác và ghi nhận 834 cuộc hội thoại hỗ trợ nhu cầu địa phương.", en: "Across six months, VND 54.2M in spend generated 45,723 engagements alongside 834 conversations supporting local demand."
    },
    evidenceSummary: {
      vi: "45.723 tương tác · 834 hội thoại", en: "45,723 engagements · 834 conversations"
    },
    roles: {
      vi: "Meta Ads · Engagement · Local Reach", en: "Meta Ads · Engagement · Local Reach"
    }, roleTags: [
      "Meta Ads",
      "Engagement",
      "Local Reach"
    ],
    platforms: [
      "Meta"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Chiến dịch 6 tháng cho nhà hàng, tập trung tăng nhận biết địa phương và duy trì tương tác đều đặn để hỗ trợ nhu cầu khách hàng quanh khu vực.",
        en: "A six-month restaurant campaign focused on building local awareness and sustaining steady engagement to support demand from the surrounding area.",
      },
      strategy: {
        vi: "Kết hợp mục tiêu Engagement và Messages trên Meta, nhắm theo bán kính địa lý, luân phiên nội dung món ăn và ưu đãi để duy trì tương tác trong suốt 6 tháng.",
        en: "Combined Engagement and Messages objectives on Meta, targeted by geographic radius, and rotated dish and promotion content to sustain engagement across the six months.",
      },
      results: {
        vi: "Trong 6 tháng, 54,2 triệu đồng chi tiêu tạo 45.723 lượt tương tác và ghi nhận 834 cuộc hội thoại hỗ trợ nhu cầu địa phương.",
        en: "Across six months, VND 54.2M in spend generated 45,723 engagements alongside 834 conversations supporting local demand.",
      },
      insight: {
        vi: "Duy trì tương tác đều đặn trong thời gian dài giúp nhà hàng luôn xuất hiện trong lựa chọn của khách quanh khu vực, thay vì chỉ chạy theo từng đợt ngắn hạn.",
        en: "Sustaining steady engagement over time keeps the restaurant top of mind for nearby customers, rather than relying on short, isolated bursts of activity.",
      },
    },
    coverImage: "/work/restaurant-local-engagement/thumb-brand.svg",
    coverVariant: "paid-media-strategy", assets: [], confidential: true, dataStatus: "approved",
  },
  {
    id: 11,
    slug: "preschool-enrollment-campaign",
    disciplineTags: [
      "Ads",
      "Account"
    ], capabilityIds: [
      "lead-generation-funnel",
      "account-integrated-management"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Mầm non tư thục", en: "Private Preschool"
    }, title: {
      vi: "Tuyển sinh qua Meta Ads", en: "Preschool Enrollment Campaign"
    },
    cardDescription: {
      vi: "Trong 2 tháng, các nhóm tuyển sinh tạo 559 cuộc hội thoại, đi cùng hoạt động điều phối nội dung và lịch quay.", en: "Across two months, enrollment campaigns generated 559 conversations, supported by content and filming coordination."
    },
    evidenceSummary: {
      vi: "559 hội thoại · Tuyển sinh và production coordination", en: "559 conversations · Enrollment and production coordination"
    },
    roles: {
      vi: "Enrollment Ads · Account Management · Production", en: "Enrollment Ads · Account Management · Production"
    }, roleTags: [
      "Enrollment Ads",
      "Account Management",
      "Production"
    ],
    platforms: [
      "Meta"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Chiến dịch tuyển sinh 2 tháng cho mầm non tư thục trên Meta Ads, kết hợp quảng cáo với điều phối nội dung và lịch quay để phụ huynh có đủ thông tin trước khi liên hệ tư vấn.",
        en: "A two-month preschool enrollment campaign on Meta Ads, paired with content and filming coordination so parents had enough information before reaching out for consultation.",
      },
      strategy: {
        vi: "Chia nhóm quảng cáo theo mùa tuyển sinh và khu vực, ưu tiên nội dung hình ảnh/video thực tế lớp học, đồng thời điều phối lịch quay để nội dung mới được cập nhật liên tục.",
        en: "Segmented ad sets by enrollment season and area, prioritized authentic classroom photo and video content, and coordinated the filming schedule to keep content refreshed.",
      },
      results: {
        vi: "Trong 2 tháng, các nhóm quảng cáo tuyển sinh tạo 559 cuộc hội thoại, đi cùng hoạt động điều phối nội dung và lịch quay.",
        en: "Across two months, enrollment ad sets generated 559 conversations, supported by content and filming coordination.",
      },
      accountScope: {
        vi: "Điều phối lịch quay, duyệt nội dung và tiến độ sản xuất giữa nhà trường và team quảng cáo để đảm bảo tài liệu tuyển sinh luôn sẵn sàng đúng mùa.",
        en: "Coordinated the filming schedule, content approvals, and production timeline between the school and the ads team to keep enrollment materials ready each season.",
      },
      insight: {
        vi: "Với ngành giáo dục mầm non, nội dung hình ảnh thực tế và cập nhật liên tục quan trọng không kém việc tối ưu quảng cáo, vì phụ huynh cần thấy môi trường học thật trước khi liên hệ.",
        en: "In early-childhood education, authentic and continuously refreshed content matters as much as ad optimization, since parents need to see the real learning environment before reaching out.",
      },
    },
    coverImage: "/work/preschool-enrollment-campaign/thumb-brand.svg",
    coverVariant: "lead-generation-funnel", assets: [], confidential: true, dataStatus: "approved",
  },
  {
    id: 12,
    slug: "yoga-inquiry-generation",
    disciplineTags: [
      "Ads"
    ],
    capabilityIds: [
      "performance-analysis"
    ],
    presentationTier: "flagship",
    featuredRank: 5,
    industry: {
      vi: "Yoga", en: "Yoga"
    },
    title: {
      vi: "Tăng lượng khách hàng tư vấn", en: "Yoga Inquiry Generation"
    },
    cardDescription: {
      vi: "Tạo 423 cuộc hội thoại trong 4 tháng với CPA trung bình khoảng 44 nghìn đồng, đồng thời tái cấu trúc tệp để giảm ảnh hưởng từ lịch sử tương tác ảo.",
      en: "Generated 423 conversations across four months at an average CPA of approximately VND 44K, while restructuring audiences to reduce low-quality historical engagement.",
    },
    evidenceSummary: {
      vi: "423 hội thoại · CPA 43.965 đồng · làm sạch tín hiệu tệp", en: "423 conversations · VND 43,965 CPA · audience-signal cleanup"
    },
    roles: {
      vi: "Tối ưu Meta Ads và kiểm soát chất lượng tệp", en: "Meta Ads optimization and audience quality control"
    },
    roleTags: [
      "Audience Cleanup",
      "Message Ads",
      "Quality Control"
    ],
    dataPeriod: {
      vi: "4 tháng", en: "4 months"
    }, collaborationDuration: {
      vi: "4 tháng", en: "4 months"
    },
    platforms: [
      "Meta"
    ],
    metrics: [
      {
        label: {
          vi: "Cuộc hội thoại", en: "Conversations"
        }, value: "423", verified: true
      },
      {
        label: {
          vi: "CPA trung bình", en: "Average CPA"
        }, value: "VND 43,965", verified: true
      },
    ],
    detail: {
      overview: {
        vi: "Fanpage có lịch sử tương tác kém chất lượng, khiến các tín hiệu bề mặt dễ làm sai hướng tối ưu. Mục tiêu là tạo hội thoại thực tế cho lớp yoga trong khi kiểm soát chất lượng tệp.", en: "The page carried a history of low-quality engagement, making surface signals unreliable for optimization. The objective was to generate genuine yoga inquiries while improving audience quality control."
      },
      strategy: {
        vi: "Tách nhóm nghi ngờ, siết khu vực và độ mới của tệp, loại trừ các cụm tương tác chất lượng thấp và đánh giá bằng nội dung hội thoại thay vì chỉ nhìn CPA. Creative được kiểm tra theo khả năng thu hút đúng nhu cầu học.", en: "Isolated suspicious segments, tightened geography and recency, excluded low-quality engagement clusters, and evaluated conversation quality rather than CPA alone. Creatives were tested for their ability to attract genuine learning intent."
      },
      results: {
        vi: "18,6 triệu đồng chi tiêu tạo 423 cuộc hội thoại với CPA trung bình 43.965 đồng. Chiến dịch tiếp cận 67.489 người, tạo 375.133 lượt hiển thị, CTR 3,80% và 3.530 lượt nhấp liên kết.", en: "VND 18.6M in spend generated 423 conversations at an average CPA of VND 43,965. The campaign reached 67,489 people, delivered 375,133 impressions, achieved a 3.80% CTR, and generated 3,530 link clicks."
      },
      insight: {
        vi: "CPA thấp không đủ khi tín hiệu tệp bị nhiễu; chất lượng hội thoại và lịch sử tương tác phải được đánh giá cùng nhau.", en: "Low CPA is insufficient when audience signals are contaminated; conversation quality and engagement history must be evaluated together."
      },
    },
    coverImage: "/work/yoga-inquiry-generation/cover-brand.svg",
    coverVariant: "performance-analysis", assets: [], confidential: true, dataStatus: needsVerification,
  },
  {
    id: 13,
    slug: "automotive-customer-inquiries",
    disciplineTags: [
      "Ads"
    ], capabilityIds: [
      "lead-generation-funnel"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Ô tô", en: "Automotive"
    }, title: {
      vi: "Thu hút khách hàng tiềm năng", en: "Automotive Lead Generation"
    },
    cardDescription: {
      vi: "Trong 2 tháng, 17,9 triệu đồng chi tiêu tạo 253 cuộc hội thoại và tiếp cận hơn 295 nghìn người.", en: "Across two months, VND 17.9M in spend generated 253 conversations and reached more than 295K people."
    },
    evidenceSummary: {
      vi: "253 hội thoại · Ngành ô tô", en: "253 conversations · Automotive"
    },
    roles: {
      vi: "Meta Ads · Message Generation · Reporting", en: "Meta Ads · Message Generation · Reporting"
    }, roleTags: [
      "Meta Ads",
      "Message Generation",
      "Reporting"
    ],
    platforms: [
      "Meta"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Chiến dịch 2 tháng cho ngành ô tô, tập trung tạo hội thoại tư vấn từ khách hàng đang tìm hiểu mua xe qua Meta Ads.", en: "A two-month automotive campaign focused on generating advisory conversations from prospective car buyers through Meta Ads.",
      },
      strategy: {
        vi: "Sử dụng mục tiêu Messages với creative tập trung vào thông số và ưu đãi xe, theo dõi độ tiếp cận song song với số hội thoại để đảm bảo quy mô tệp đủ lớn.", en: "Used the Messages objective with creatives centered on vehicle specs and promotions, tracking reach alongside conversation volume to keep the audience pool large enough.",
      },
      results: {
        vi: "Trong 2 tháng, 17,9 triệu đồng chi tiêu tạo 253 cuộc hội thoại và tiếp cận hơn 295 nghìn người.", en: "Across two months, VND 17.9M in spend generated 253 conversations and reached more than 295K people.",
      },
      insight: {
        vi: "Với sản phẩm giá trị cao như ô tô, duy trì độ tiếp cận đủ rộng song song với tối ưu hội thoại giúp không bỏ lỡ khách hàng đang trong giai đoạn tìm hiểu.", en: "For a high-value product like a car, keeping reach broad alongside conversation optimization avoids missing buyers who are still in the research phase.",
      },
    },
    coverImage: "/work/automotive-customer-inquiries/thumb-brand.svg",
    coverVariant: "lead-generation-funnel", assets: [], confidential: true, dataStatus: "approved",
  },
  {
    id: 14,
    slug: "automotive-messages-engagement",
    disciplineTags: [
      "Ads"
    ], capabilityIds: [
      "performance-analysis"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Ô tô", en: "Automotive"
    }, title: {
      vi: "Kết hợp tin nhắn và tương tác", en: "Messages & Engagement"
    },
    cardDescription: {
      vi: "Gần 10 triệu đồng chi tiêu tạo 197 cuộc hội thoại và 1.679 lượt tương tác, với từng mục tiêu được báo cáo riêng.", en: "Nearly VND 10M in spend generated 197 conversations and 1,679 engagements, with each objective reported separately."
    },
    evidenceSummary: {
      vi: "Messages và Engagement được báo cáo tách biệt", en: "Messages and Engagement reported separately"
    },
    roles: {
      vi: "Meta Ads · Messages · Engagement", en: "Meta Ads · Messages · Engagement"
    }, roleTags: [
      "Meta Ads",
      "Messages",
      "Engagement"
    ],
    platforms: [
      "Meta"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Chiến dịch ô tô chạy song song hai mục tiêu Messages và Engagement trên Meta, tách bạch báo cáo để tránh nhầm lẫn giữa hội thoại tư vấn và tương tác bề mặt.", en: "An automotive campaign ran Messages and Engagement objectives in parallel on Meta, with results reported separately to avoid conflating advisory conversations with surface-level engagement.",
      },
      strategy: {
        vi: "Phân bổ ngân sách riêng cho từng mục tiêu, dùng creative khác nhau phù hợp với từng loại tương tác, và không gộp số liệu hai mục tiêu khi đánh giá hiệu quả.", en: "Allocated budget separately per objective, used distinct creatives suited to each interaction type, and never combined the two objectives' metrics when assessing performance.",
      },
      results: {
        vi: "Gần 10 triệu đồng chi tiêu tạo 197 cuộc hội thoại và 1.679 lượt tương tác, với từng mục tiêu được báo cáo riêng.", en: "Nearly VND 10M in spend generated 197 conversations and 1,679 engagements, with each objective reported separately.",
      },
      insight: {
        vi: "Báo cáo tách biệt theo mục tiêu giúp tránh đánh giá sai khi gộp chung số liệu tin nhắn có giá trị chuyển đổi cao với tương tác bề mặt.", en: "Reporting by objective separately avoids misjudging performance by mixing high-intent message conversations with lower-intent surface engagement.",
      },
    },
    coverImage: "/work/automotive-messages-engagement/thumb-brand.svg",
    coverVariant: "performance-analysis", assets: [], confidential: true, dataStatus: "approved",
  },
  {
    id: 15,
    slug: "construction-customer-inquiries",
    disciplineTags: [
      "Ads",
      "Account",
      "Design"
    ], capabilityIds: [
      "lead-generation-funnel",
      "account-integrated-management"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Xây dựng", en: "Construction"
    }, title: {
      vi: "Thu hút khách hàng tiềm năng", en: "Construction Lead Generation"
    },
    cardDescription: {
      vi: "Kết nối Meta Ads, nội dung fanpage và landing page trong một luồng thu lead; kỳ một tháng tạo 51 cuộc hội thoại.", en: "Connected Meta Ads, Facebook content, and a landing page into one lead journey; the one-month period generated 51 conversations."
    },
    evidenceSummary: {
      vi: "Ads–Content–Landing page · 51 hội thoại", en: "Ads–Content–Landing page · 51 conversations"
    },
    roles: {
      vi: "Account Management · Meta Ads · Landing Page", en: "Account Management · Meta Ads · Landing Page"
    }, roleTags: [
      "Account Management",
      "Meta Ads",
      "Landing Page"
    ],
    platforms: [
      "Meta",
      "Landing Page"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Chiến dịch xây dựng trong 1 tháng, nối liền Meta Ads, nội dung fanpage và landing page thành một luồng thu lead thống nhất thay vì chạy rời rạc từng phần.", en: "A one-month construction campaign connected Meta Ads, fanpage content, and a landing page into a single unified lead journey instead of running each piece separately.",
      },
      strategy: {
        vi: "Đồng bộ thông điệp giữa quảng cáo, bài đăng fanpage và landing page; dẫn traffic từ quảng cáo qua landing page trước khi chuyển thành hội thoại tư vấn.", en: "Synchronized messaging across ads, fanpage posts, and the landing page, routing ad traffic through the landing page before converting into advisory conversations.",
      },
      results: {
        vi: "Kết nối Meta Ads, nội dung fanpage và landing page trong một luồng thu lead; kỳ một tháng tạo 51 cuộc hội thoại.", en: "Connected Meta Ads, fanpage content, and a landing page into one lead journey; the one-month period generated 51 conversations.",
      },
      accountScope: {
        vi: "Điều phối giữa team quảng cáo, nội dung fanpage và landing page để đảm bảo thông điệp nhất quán xuyên suốt luồng thu lead.", en: "Coordinated between the ads, fanpage content, and landing-page teams to keep messaging consistent across the entire lead journey.",
      },
      insight: {
        vi: "Với ngành cần niềm tin cao như xây dựng, nối liền quảng cáo–nội dung–landing page giúp khách hàng có đủ thông tin trước khi để lại liên hệ.", en: "For a trust-heavy category like construction, connecting ads, content, and the landing page gives customers enough information before they leave their contact details.",
      },
    },
    coverImage: "/work/construction-customer-inquiries/thumb-brand.svg",
    coverVariant: "account-integrated-management", assets: [], confidential: true, dataStatus: "approved",
  },
  {
    id: 16,
    slug: "korean-education-enrollment",
    disciplineTags: [
      "Ads",
      "Account"
    ], capabilityIds: [
      "lead-generation-funnel",
      "account-integrated-management"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Giáo dục Hàn ngữ", en: "Korean Education"
    }, title: {
      vi: "Tuyển sinh đa nền tảng", en: "Multi-channel Enrollment"
    },
    cardDescription: {
      vi: "Kết hợp Facebook Messages và TikTok Click-to-Zalo trong một đợt tuyển sinh; kết quả chi tiết chờ dashboard xác thực.", en: "Combined Facebook Messages and TikTok Click-to-Zalo for enrollment; detailed results await dashboard verification."
    },
    evidenceSummary: {
      vi: "Facebook-to-Messenger và TikTok-to-Zalo", en: "Facebook-to-Messenger and TikTok-to-Zalo"
    },
    roles: {
      vi: "Account · Paid Media · Production Coordination", en: "Account · Paid Media · Production Coordination"
    }, roleTags: [
      "Account",
      "Enrollment Ads",
      "Production"
    ],
    platforms: [
      "Meta",
      "TikTok",
      "Zalo"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Đợt tuyển sinh cho trung tâm giáo dục Hàn ngữ, kết hợp Facebook Messages và TikTok Click-to-Zalo thành hai luồng thu lead song song.", en: "An enrollment drive for a Korean-language education center, combining Facebook Messages and TikTok Click-to-Zalo into two parallel lead paths.",
      },
      strategy: {
        vi: "Facebook dẫn về hội thoại Messenger cho tư vấn trực tiếp; TikTok dẫn về Zalo để tiếp cận nhóm học viên trẻ quen thuộc với nền tảng này. Cả hai luồng được điều phối cùng lịch sản xuất nội dung.", en: "Facebook drove conversations into Messenger for direct advising, while TikTok routed leads to Zalo to reach a younger student segment more comfortable on that platform. Both paths were coordinated on the same content production schedule.",
      },
      results: {
        vi: "Kết hợp Facebook Messages và TikTok Click-to-Zalo trong một đợt tuyển sinh; kết quả chi tiết đang chờ xác thực từ dashboard trước khi công bố số liệu cụ thể.", en: "Combined Facebook Messages and TikTok Click-to-Zalo for enrollment; detailed figures are still pending dashboard verification before being published.",
      },
      accountScope: {
        vi: "Điều phối song song hai luồng Messenger và Zalo, đồng bộ lịch sản xuất nội dung và theo dõi tiến độ tuyển sinh giữa các nền tảng.", en: "Coordinated the Messenger and Zalo paths in parallel, synchronized the content production schedule, and tracked enrollment progress across platforms.",
      },
      insight: {
        vi: "Dẫn lead về kênh nhắn tin quen thuộc với từng nhóm đối tượng (Messenger cho Facebook, Zalo cho TikTok) giúp tăng tỷ lệ phản hồi so với dùng chung một kênh.", en: "Routing leads to the messaging channel each audience already prefers (Messenger for Facebook, Zalo for TikTok) improves response rates compared to funneling everyone into one channel.",
      },
    },
    coverImage: "/work/korean-education-enrollment/thumb-brand.svg",
    coverVariant: "lead-generation-funnel", assets: [], confidential: true, dataStatus: "approved",
  },
  {
    id: 17,
    slug: "business-services-brand-identity",
    disciplineTags: [
      "Copywriting",
      "Design"
    ], capabilityIds: [
      "brand-content-creative"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Dịch vụ doanh nghiệp", en: "Business Services"
    }, title: {
      vi: "Xây dựng bộ nhận diện", en: "Brand Identity System"
    },
    cardDescription: {
      vi: "Phát triển hệ thống nhận diện từ logo, guideline và banner đến tài liệu bán hàng, biển chỉ dẫn và nội dung thương hiệu.", en: "Developed an identity system spanning the logo, guidelines, banners, sales materials, wayfinding, and brand copy."
    },
    evidenceSummary: {
      vi: "Brand identity · Graphic Design · Copywriting", en: "Brand identity · Graphic Design · Copywriting"
    },
    roles: {
      vi: "Brand Identity · Graphic Design · Copywriting", en: "Brand Identity · Graphic Design · Copywriting"
    }, roleTags: [
      "Brand Identity",
      "Graphic Design",
      "Copywriting"
    ],
    platforms: [
      "Online",
      "Offline"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Xây dựng bộ nhận diện thương hiệu toàn diện cho một doanh nghiệp dịch vụ, bao phủ cả kênh online lẫn offline.", en: "Built a comprehensive brand identity system for a business-services company, spanning both online and offline touchpoints.",
      },
      strategy: {
        vi: "Thiết kế logo và bộ guideline làm nền tảng, sau đó triển khai nhất quán xuống banner, tài liệu bán hàng, biển chỉ dẫn và nội dung thương hiệu để mọi điểm chạm dùng chung một ngôn ngữ hình ảnh.", en: "Designed the logo and guideline system as the foundation, then applied it consistently across banners, sales materials, wayfinding, and brand copy so every touchpoint shared one visual language.",
      },
      results: {
        vi: "Phát triển hệ thống nhận diện từ logo, guideline và banner đến tài liệu bán hàng, biển chỉ dẫn và nội dung thương hiệu.", en: "Developed an identity system spanning the logo, guidelines, banners, sales materials, wayfinding, and brand copy.",
      },
      insight: {
        vi: "Một bộ guideline rõ ràng ngay từ đầu giúp các hạng mục sau (banner, tài liệu, biển chỉ dẫn) triển khai nhanh và đồng bộ hơn thay vì thiết kế rời rạc từng lần.", en: "A clear guideline set from the start lets downstream materials (banners, sales docs, wayfinding) ship faster and stay consistent, instead of being designed piecemeal each time.",
      },
    },
    coverImage: "/work/business-services-brand-identity/thumb-brand.svg",
    coverVariant: "brand-content-creative", assets: [], confidential: true, dataStatus: "approved",
  },
  {
    id: 18,
    slug: "marketing-services-brand-content",
    disciplineTags: [
      "Copywriting",
      "Design"
    ], capabilityIds: [
      "brand-content-creative"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Dịch vụ marketing", en: "Marketing Services"
    }, title: {
      vi: "Xây dựng logo và nội dung", en: "Logo & Content System"
    },
    cardDescription: {
      vi: "Xây dựng logo và hệ thống nội dung nền tảng để thương hiệu trình bày dịch vụ nhất quán trên fanpage.", en: "Developed a logo and foundational content system to keep service communication consistent across the fanpage."
    },
    evidenceSummary: {
      vi: "Logo Design · Copywriting · Content Direction", en: "Logo Design · Copywriting · Content Direction"
    },
    roles: {
      vi: "Logo Design · Copywriting · Content Direction", en: "Logo Design · Copywriting · Content Direction"
    }, roleTags: [
      "Logo Design",
      "Copywriting",
      "Content Direction"
    ],
    platforms: [
      "Facebook"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Xây dựng logo và hệ thống nội dung nền tảng cho một doanh nghiệp dịch vụ marketing, giúp trình bày dịch vụ nhất quán trên fanpage.", en: "Built a logo and a foundational content system for a marketing-services business to present its offerings consistently on the fanpage.",
      },
      strategy: {
        vi: "Thiết kế logo trước, sau đó xây khung nội dung (chủ đề, giọng văn, định dạng bài đăng) để đội ngũ có thể sản xuất nội dung fanpage nhất quán mà không cần thiết kế lại từ đầu mỗi lần.", en: "Designed the logo first, then built a content framework (themes, tone, post formats) so the team could keep producing consistent fanpage content without redesigning from scratch each time.",
      },
      results: {
        vi: "Xây dựng logo và hệ thống nội dung nền tảng để thương hiệu trình bày dịch vụ nhất quán trên fanpage.", en: "Developed a logo and foundational content system to keep service communication consistent across the fanpage.",
      },
      insight: {
        vi: "Với doanh nghiệp dịch vụ, một hệ thống nội dung nền tảng giúp duy trì giọng thương hiệu nhất quán ngay cả khi khối lượng bài đăng tăng lên.", en: "For a services business, a foundational content system keeps the brand voice consistent even as posting volume grows.",
      },
    },
    coverImage: "/work/marketing-services-brand-content/thumb-brand.svg",
    coverVariant: "brand-content-creative", assets: [], confidential: true, dataStatus: "approved",
  },
  {
    id: 19,
    slug: "dermatology-multi-format-content",
    disciplineTags: [
      "Copywriting",
      "Design",
      "Video Editing"
    ], capabilityIds: [
      "brand-content-creative"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Phòng khám da liễu", en: "Dermatology Clinic"
    }, title: {
      vi: "Nội dung đa định dạng", en: "Multi-format Content"
    },
    cardDescription: {
      vi: "Lên kế hoạch, viết nội dung, thiết kế và sản xuất video để duy trì hệ thống truyền thông đồng bộ cho nhiều nhóm nhu cầu.", en: "Planned, wrote, designed, and produced video content to maintain a consistent communication system across audience needs."
    },
    evidenceSummary: {
      vi: "Content Planning · Copywriting · Video Production", en: "Content Planning · Copywriting · Video Production"
    },
    roles: {
      vi: "Content Planning · Copywriting · Video Production", en: "Content Planning · Copywriting · Video Production"
    }, roleTags: [
      "Content Planning",
      "Copywriting",
      "Video Production"
    ],
    platforms: [
      "Facebook",
      "TikTok"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Duy trì hệ thống truyền thông đa định dạng cho phòng khám da liễu trên Facebook và TikTok, phục vụ nhiều nhóm nhu cầu khách hàng khác nhau.", en: "Maintained a multi-format communication system for a dermatology clinic across Facebook and TikTok, serving several distinct patient-need segments.",
      },
      strategy: {
        vi: "Lên kế hoạch nội dung theo từng nhóm nhu cầu (điều trị, chăm sóc da, tư vấn), viết nội dung và thiết kế phù hợp từng định dạng, đồng thời sản xuất video để phủ cả nội dung tĩnh và động.", en: "Planned content by patient-need segment (treatment, skincare, consultation), wrote and designed for each format, and produced video to cover both static and motion content.",
      },
      results: {
        vi: "Lên kế hoạch, viết nội dung, thiết kế và sản xuất video để duy trì hệ thống truyền thông đồng bộ cho nhiều nhóm nhu cầu.", en: "Planned, wrote, designed, and produced video content to maintain a consistent communication system across audience needs.",
      },
      insight: {
        vi: "Với phòng khám phục vụ nhiều nhu cầu khác nhau, đa dạng định dạng nội dung (viết, thiết kế, video) giúp tiếp cận đúng nhóm khách hàng thay vì dùng một công thức chung cho tất cả.", en: "For a clinic serving varied patient needs, mixing content formats (copy, design, video) reaches each audience segment more precisely than a one-size-fits-all approach.",
      },
    },
    coverImage: "/work/dermatology-multi-format-content/thumb-brand.svg",
    coverVariant: "brand-content-creative", assets: [], confidential: true, dataStatus: "approved",
  },
];
