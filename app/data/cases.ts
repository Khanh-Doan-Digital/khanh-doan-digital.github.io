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
        vi: "Tổng chi tiêu quảng cáo đạt 854,6 triệu đồng, tạo hơn 110,4 triệu lượt hiển thị. Riêng Meta ghi nhận 12,66 triệu người tiếp cận, 71,67 triệu lượt hiển thị, 3,13 triệu lượt tương tác và 2.110 cuộc hội thoại; TikTok tạo 31,23 triệu lượt xem video; Google/YouTube tạo hơn 7,08 triệu lượt hiển thị và 3,01 triệu lượt xem công khai.",
        en: "VND 854.6M in media spend generated more than 110.4M impressions. Meta alone reached 12.66M people, delivered 71.67M impressions, 3.13M engagements, and 2,110 conversations; TikTok generated 31.23M video views; Google/YouTube added 7.08M impressions and 3.01M public views.",
      },
      accountScope: {
        vi: "Điều phối đầu mối giữa khách hàng và team triển khai; theo dõi mục tiêu, ngân sách, lịch nội dung, kịch bản, tiến độ sản xuất và báo cáo. Tổng quy mô gói hợp tác khoảng 1,5 tỷ đồng trong 3 tháng; số liệu 854,6 triệu đồng là chi tiêu quảng cáo đã xác thực trong kỳ 45 ngày.",
        en: "Served as the client–delivery team contact, coordinating objectives, budget, content schedules, scripts, production timelines, and reporting. The broader three-month engagement was approximately VND 1.5B; VND 854.6M represents verified media spend for the selected 45 days.",
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
    serviceCategory: {
      vi: "Paid Media", en: "Paid Media"
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
    serviceCategory: {
      vi: "Paid Media", en: "Paid Media"
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
      vi: "Tối ưu Meta Ads và theo dõi doanh thu sau hội thoại",
      en: "Meta Ads optimization and post-conversation revenue tracking",
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
      vi: "Khoảng 20 tháng", en: "Approximately 20 months"
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
        vi: "Tiếp nhận yêu cầu, phối hợp nội dung và theo dõi chất lượng tin nhắn, kết quả mua hàng; tổng hợp báo cáo và đề xuất điều chỉnh theo nhu cầu thị trường. Ngân sách quảng cáo khoảng 10–15 triệu đồng mỗi tháng.",
        en: "Handled client requirements, coordinated content, monitored message quality and purchases, and translated results into reporting and market-led recommendations. Monthly media spend was approximately VND 10–15M.",
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
    serviceCategory: {
      vi: "Paid Media", en: "Paid Media"
    },
    title: {
      vi: "Ra mắt sản phẩm đa kênh", en: "Multi-channel Product Launch"
    },
    cardDescription: {
      vi: "Triển khai gói ra mắt 250 triệu đồng trong 3 tháng; riêng kỳ phân tích 2 tháng, Meta và TikTok tạo hơn 3,5 triệu lượt xem/tiếp cận cùng nhiều tín hiệu tương tác và tăng trưởng cộng đồng.",
      en: "Delivered a VND 250M three-month launch; during the selected two-month period, Meta and TikTok generated more than 3.5M views/reach signals alongside meaningful engagement and community growth.",
    },
    evidenceSummary: {
      vi: "Ra mắt đa kênh · Meta và TikTok · kỳ phân tích 2 tháng",
      en: "Multi-channel launch · Meta and TikTok · two-month analysis period",
    },
    roles: {
      vi: "Xây dựng media plan và tối ưu chiến dịch ra mắt", en: "Media planning and launch campaign optimization"
    },
    roleTags: [
      "Launch Strategy",
      "Meta Ads",
      "TikTok Ads"
    ],
    dataPeriod: {
      vi: "2 tháng", en: "2 months"
    },
    collaborationDuration: {
      vi: "3 tháng", en: "3 months"
    },
    platforms: [
      "Meta",
      "TikTok"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Sản phẩm nước hoa cá nhân hóa bằng AI cần đồng thời tạo độ phủ, giải thích concept mới và phát triển tín hiệu cộng đồng trên hai nền tảng.",
        en: "An AI-personalized fragrance product needed to build awareness, explain a new concept, and grow community signals across two platforms.",
      },
      strategy: {
        vi: "Meta được phân bổ cho Reach, Engagement, Page Likes và Messaging; TikTok tập trung Reach và Follow. Creative được đánh giá theo khả năng giải thích sản phẩm và tạo hành động phù hợp với từng tầng nhận biết.",
        en: "Meta covered Reach, Engagement, Page Likes, and Messaging, while TikTok focused on Reach and Follow growth. Creatives were assessed by their ability to explain the product and drive stage-appropriate actions.",
      },
      results: {
        vi: "Trong kỳ được chọn, khoảng 50 triệu đồng media tạo 228.296 lượt tương tác, 1.655 lượt thích/theo dõi trang và khoảng 1,2 triệu người tiếp cận trên Meta. TikTok tạo 2,35 triệu lượt xem video, tiếp cận 918.320 người và thêm 972 lượt theo dõi với chi phí trung bình 5.716 đồng.",
        en: "In the selected period, approximately VND 50M in media generated 228,296 engagements, 1,655 page likes/follows, and about 1.2M reach on Meta. TikTok delivered 2.35M video views, reached 918,320 people, and added 972 follows at an average cost of VND 5,716.",
      },
      accountScope: {
        vi: "Điều phối mục tiêu truyền thông, media plan, nội dung và creative giữa khách hàng với team sản xuất; theo dõi ngân sách và tiến độ ra mắt trong gói triển khai 250 triệu đồng/3 tháng.",
        en: "Coordinated communication objectives, the media plan, content, and creative production between the client and delivery teams, while tracking budget and launch progress within a VND 250M three-month package.",
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
    serviceCategory: {
      vi: "Paid Media", en: "Paid Media"
    },
    title: {
      vi: "Thu hút học viên tiềm năng", en: "Student Lead Generation"
    },
    cardDescription: {
      vi: "Meta tạo 5.736 cuộc hội thoại với CPA trung bình 29,9 nghìn đồng; TikTok bổ sung 2,77 triệu lượt xem và hơn 105 nghìn lượt nhấp cho các khóa học trẻ em, giao tiếp và người đi làm.",
      en: "Meta generated 5,736 conversations at an average CPA of VND 29.9K, while TikTok added 2.77M views and more than 105K clicks for children's, communication, and working-adult courses.",
    },
    evidenceSummary: {
      vi: "5.736 cuộc hội thoại · Funnel và landing page", en: "5,736 conversations · Funnel and landing-page coordination"
    },
    roles: {
      vi: "Media planning, tối ưu lead và phối hợp landing page", en: "Media planning, lead optimization, and landing page coordination"
    },
    roleTags: [
      "Lead Generation",
      "Funnel Strategy",
      "Landing Page Coordination"
    ],
    dataPeriod: {
      vi: "Meta 12 tháng · TikTok 4 tháng", en: "Meta 12 months · TikTok 4 months"
    },
    collaborationDuration: {
      vi: "Khoảng 8 tháng", en: "Approximately 8 months"
    },
    platforms: [
      "Meta",
      "TikTok"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Danh mục khóa học phục vụ nhiều nhóm tuổi và nhu cầu, từ trẻ em đến người lớn và người đi làm. Bài toán chính là duy trì nguồn lead ổn định trong khi thông điệp và landing page phải phù hợp với từng nhóm học viên.",
        en: "The course portfolio served multiple age groups and needs, from children to adults and working professionals. The challenge was maintaining a stable lead flow while tailoring messages and landing pages to each learner segment.",
      },
      strategy: {
        vi: "Tách nhóm khóa học, đối tượng và creative; Meta ưu tiên hội thoại, TikTok mở rộng lượt xem và lượt nhấp. Đối chiếu chất lượng lead với tư vấn để điều chỉnh thông điệp, phân bổ ngân sách và landing page.",
        en: "Separated courses, audiences, and creatives; Meta prioritized conversations while TikTok expanded views and clicks. Lead quality feedback from consultation informed messaging, budget allocation, and landing page refinements.",
      },
      results: {
        vi: "Meta sử dụng 204 triệu đồng để tạo 5.736 cuộc hội thoại với CPA trung bình 29.933 đồng và CTR 3,50%. TikTok tạo 2,77 triệu lượt xem, hơn 105 nghìn lượt nhấp, CTR 3,78% và CPC trung bình 188 đồng.",
        en: "Meta invested VND 204M to generate 5,736 conversations at an average CPA of VND 29,933 and a 3.50% CTR. TikTok delivered 2.77M views, more than 105K clicks, a 3.78% CTR, and an average CPC of VND 188.",
      },
      accountScope: {
        vi: "Quản lý đầu mối khách hàng, thống nhất KPI; điều phối paid media, landing page, nội dung và quy trình theo dõi lead. Ngân sách quảng cáo khoảng 15–25 triệu đồng mỗi tháng, chưa gồm chi phí quản lý, nội dung và sản xuất.",
        en: "Managed the client relationship, aligned KPIs, and coordinated paid media, landing pages, content, and lead tracking. Monthly media spend was approximately VND 15–25M, excluding management, content, and production costs.",
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
    serviceCategory: {
      vi: "Paid Media", en: "Paid Media"
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
    },
    serviceCategory: {
      vi: "Paid Media", en: "Paid Media"
    },
    title: {
      vi: "Tăng khách hàng địa phương", en: "Local Customer Acquisition"
    },
    cardDescription: {
      vi: "Meta tạo 1.498 cuộc hội thoại từ 12,1 triệu đồng, với chi phí quy đổi khoảng 8,1 nghìn đồng/cuộc hội thoại; TikTok bổ sung 310 nghìn lượt hiển thị cho các đợt truyền thông địa phương.", en: "Meta generated 1,498 conversations from VND 12.1M in spend, with an estimated blended cost of VND 8.1K per conversation; TikTok added 310K impressions across local campaign flights."
    },
    evidenceSummary: {
      vi: "1.498 cuộc hội thoại · Local Ads", en: "1,498 conversations · Local Ads"
    },
    roles: {
      vi: "Quản lý account và tối ưu quảng cáo đa nền tảng", en: "Account management and cross-platform media optimization"
    }, roleTags: [
      "Local Ads",
      "Message Optimization",
      "Cross-platform Coordination"
    ],
    dataPeriod: {
      vi: "Meta 6 tháng · TikTok 1 tháng", en: "Meta 6 months · TikTok 1 month"
    },
    collaborationDuration: {
      vi: "Khoảng 2 năm, triển khai theo từng đợt", en: "Approximately 2 years, activated in campaign flights"
    },
    platforms: [
      "Meta",
      "TikTok"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Hoạt động quảng cáo theo từng đợt cho nhà hàng buffet, ưu tiên tạo hội thoại ở khu vực phục vụ và bổ sung độ phủ video khi cần thúc đẩy nhận biết.",
        en: "Campaign-flight advertising for a buffet restaurant, prioritizing local conversations and adding video reach when broader awareness was needed.",
      },
      strategy: {
        vi: "Tách nhóm địa lý và creative theo ưu đãi, theo dõi đồng thời chi phí hội thoại, CTR và chất lượng tương tác để phân bổ ngân sách về nhóm ổn định. TikTok bổ sung độ phủ và lượt xem video trong các đợt truyền thông ngắn.",
        en: "Segmented geography and offer-led creatives, then monitored conversation cost, CTR, and engagement quality to prioritize stable ad groups. TikTok supported short campaign flights with incremental reach and video views.",
      },
      results: {
        vi: "Trong kỳ dữ liệu được chọn, Meta sử dụng 12,1 triệu đồng, ghi nhận 1.498 cuộc hội thoại, 477.679 lượt hiển thị và CTR 4,08%; chi phí hội thoại quy đổi khoảng 8,1 nghìn đồng. TikTok tạo 310.412 lượt hiển thị và 66.384 lượt xem tập trung 6 giây, tương đương tỷ lệ 21,39%.",
        en: "In the selected data period, Meta spent VND 12.1M and recorded 1,498 conversations, 477,679 impressions, and a 4.08% CTR; the estimated blended cost was approximately VND 8.1K per conversation. TikTok delivered 310,412 impressions and 66,384 focused six-second views, a 21.39% rate.",
      },
      accountScope: {
        vi: "Quản lý đầu mối khách hàng, phối hợp nội dung và vận hành Meta/TikTok; theo dõi ngân sách, kết quả và báo cáo theo từng đợt. Phạm vi dữ liệu công khai gồm 12,1 triệu đồng chi tiêu Meta trong 6 tháng và 2 triệu đồng chi tiêu TikTok trong 1 tháng.",
        en: "Managed the client relationship, coordinated content, operated Meta/TikTok campaigns, and tracked budget, results, and campaign-flight reporting. The public data scope covers VND 12.1M in Meta spend over 6 months and VND 2M in TikTok spend over 1 month.",
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
    },
    serviceCategory: {
      vi: "Paid Media", en: "Paid Media"
    },
    title: {
      vi: "Tăng lead qua hai điểm chạm", en: "Two-path Lead Generation"
    },
    cardDescription: {
      vi: "Khoảng 60,2 triệu đồng chi tiêu tạo 1.282 cuộc hội thoại và 311 lượt đăng ký website, giúp so sánh trực tiếp hiệu quả giữa hai luồng thu lead.", en: "Approximately VND 60.2M in spend generated 1,282 conversations and 311 website registrations, enabling a direct comparison between two lead-capture flows."
    },
    evidenceSummary: {
      vi: "1.282 hội thoại + 311 đăng ký website · Funnel comparison", en: "1,282 conversations + 311 website registrations · Funnel comparison"
    },
    roles: {
      vi: "Triển khai và tối ưu Meta Ads", en: "Meta Ads execution and optimization"
    }, roleTags: [
      "Lead Generation",
      "Meta Ads",
      "Funnel Comparison"
    ],
    dataPeriod: {
      vi: "6 tháng", en: "6 months"
    },
    platforms: [
      "Meta"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Chiến dịch nhà ở xã hội vận hành song song mục tiêu Tin nhắn và Đăng ký trên website để vừa giảm ma sát tư vấn, vừa thu thập lead có cấu trúc.",
        en: "A social housing campaign ran Messages and Website Registration objectives in parallel to reduce consultation friction while capturing structured leads.",
      },
      strategy: {
        vi: "Tách ngân sách, creative và báo cáo cho từng luồng; đánh giá theo CPA riêng và kiểm tra chất lượng lead trước khi điều chỉnh phân bổ. Không gộp hai loại kết quả thành một chỉ số chung.",
        en: "Separated budget, creatives, and reporting for each flow; assessed objective-specific CPA and lead quality before reallocating spend. Results were not blended into a single metric.",
      },
      results: {
        vi: "Luồng Tin nhắn sử dụng 41,5 triệu đồng để tạo 1.282 cuộc hội thoại với CPA 32.393 đồng. Luồng Website sử dụng 18,6 triệu đồng để tạo 311 lượt đăng ký với CPA khoảng 59.927 đồng; tổng CTR hai nhóm lần lượt đạt 3,90% và 4,75%.",
        en: "The Messages flow invested VND 41.5M to generate 1,282 conversations at a VND 32,393 CPA. The Website flow invested VND 18.6M to generate 311 registrations at an approximate VND 59,927 CPA; CTR reached 3.90% and 4.75%, respectively.",
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
      vi: "Cửa hàng trang sức", en: "Jewelry Retail"
    },
    serviceCategory: {
      vi: "Paid Media", en: "Paid Media"
    },
    title: {
      vi: "Tăng khách hàng quan tâm", en: "Jewelry Customer Acquisition"
    },
    cardDescription: {
      vi: "Khoảng 20,7 triệu đồng media tạo 417 cuộc hội thoại trên Meta, hơn 600 nghìn lượt hiển thị traffic và 249 lượt xem livestream hiệu quả trên TikTok trong một tháng.", en: "Approximately VND 20.7M in media generated 417 Meta conversations, more than 600K TikTok traffic impressions, and 249 effective livestream views within one month."
    },
    evidenceSummary: {
      vi: "417 hội thoại · Meta Ads và TikTok Livestream", en: "417 conversations · Meta Ads and TikTok Livestream"
    },
    roles: {
      vi: "Quản lý account, paid media và điều phối nội dung/quay dựng", en: "Account management, paid media, and content/production coordination"
    }, roleTags: [
      "Account Management",
      "Meta Ads",
      "TikTok Livestream"
    ],
    dataPeriod: {
      vi: "1 tháng", en: "1 month"
    },
    collaborationDuration: {
      vi: "1 tháng", en: "1 month"
    },
    platforms: [
      "Meta",
      "TikTok"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Chiến dịch kết hợp Meta để tạo hội thoại với TikTok Traffic và Livestream để mở rộng điểm chạm cho tiệm vàng trong một kỳ ngắn.",
        en: "The campaign combined Meta conversation generation with TikTok Traffic and Livestream activity to expand touchpoints for a jewelry retailer within a short period.",
      },
      strategy: {
        vi: "Meta tập trung tin nhắn; TikTok tách riêng traffic và livestream để đọc đúng mục tiêu. Nội dung và lịch quay được điều phối theo từng đợt bán hàng, tránh đánh giá livestream bằng chỉ số traffic thông thường.",
        en: "Meta focused on messages, while TikTok separated traffic and livestream activity for objective-appropriate measurement. Content and filming schedules followed sales moments, and livestreams were not judged by standard traffic metrics.",
      },
      results: {
        vi: "Meta sử dụng 14,7 triệu đồng để tạo 417 cuộc hội thoại với CPA 35.252 đồng, CTR 4,67% và 285.342 lượt hiển thị. TikTok Traffic tạo 600.856 lượt hiển thị, 15.640 lượt nhấp, CTR 2,60% và CPC 346 đồng; Livestream ghi nhận 249 lượt xem hiệu quả.",
        en: "Meta invested VND 14.7M to generate 417 conversations at a VND 35,252 CPA, a 4.67% CTR, and 285,342 impressions. TikTok Traffic delivered 600,856 impressions, 15,640 clicks, a 2.60% CTR, and VND 346 CPC; Livestream activity recorded 249 effective views.",
      },
      accountScope: {
        vi: "Quản lý đầu mối khách hàng, thống nhất kế hoạch tháng; điều phối nội dung, lịch quay dựng, phê duyệt và paid media. Tổng phạm vi dự án khoảng 40 triệu đồng trong tháng; chi tiêu quảng cáo xác thực khoảng 20,7 triệu đồng.",
        en: "Managed the client relationship and monthly plan, coordinating content, filming/editing schedules, approvals, and paid media. The broader project scope was approximately VND 40M for the month, with about VND 20.7M in verified media spend.",
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
    },
    serviceCategory: {
      vi: "Paid Media", en: "Paid Media"
    },
    title: {
      vi: "Tăng nhận biết và tương tác", en: "Local Awareness & Engagement"
    },
    cardDescription: {
      vi: "Trong 6 tháng, 54,2 triệu đồng chi tiêu tạo 45.723 lượt tương tác với chi phí trung bình 1.186 đồng, đồng thời ghi nhận 834 cuộc hội thoại hỗ trợ nhu cầu tại địa phương.", en: "Across six months, VND 54.2M in spend generated 45,723 engagements at an average cost of VND 1,186, alongside 834 conversations supporting local demand."
    },
    evidenceSummary: {
      vi: "45.723 tương tác · 834 hội thoại", en: "45,723 engagements · 834 conversations"
    },
    roles: {
      vi: "Triển khai và tối ưu Meta Ads", en: "Meta Ads execution and optimization"
    }, roleTags: [
      "Meta Ads",
      "Engagement",
      "Local Reach"
    ],
    dataPeriod: {
      vi: "6 tháng", en: "6 months"
    },
    platforms: [
      "Meta"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Hoạt động quảng cáo cho nhà hàng lẩu, ưu tiên tương tác để duy trì độ hiện diện địa phương và hỗ trợ hội thoại khi khách hàng có nhu cầu đặt bàn hoặc tìm hiểu dịch vụ.",
        en: "Advertising for a hotpot restaurant, prioritizing engagement to sustain local visibility and support conversations around reservations and service inquiries.",
      },
      strategy: {
        vi: "Tối ưu creative theo nội dung có tín hiệu tương tác tốt, kiểm soát tần suất trong vùng phục vụ và theo dõi tin nhắn như chỉ số hỗ trợ thay vì trộn với mục tiêu tương tác chính.",
        en: "Optimized creatives around strong engagement signals, controlled frequency within the service area, and tracked messages as a supporting metric rather than blending them with the primary engagement objective.",
      },
      results: {
        vi: "54,2 triệu đồng chi tiêu tạo 45.723 lượt tương tác với chi phí trung bình 1.186 đồng; chiến dịch tiếp cận 607.017 người, tạo 3,13 triệu lượt hiển thị, CTR 2,25% và ghi nhận 834 cuộc hội thoại.",
        en: "VND 54.2M in spend generated 45,723 engagements at an average cost of VND 1,186; the campaign reached 607,017 people, delivered 3.13M impressions, achieved a 2.25% CTR, and recorded 834 conversations.",
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
    },
    serviceCategory: {
      vi: "Paid Media", en: "Paid Media"
    },
    title: {
      vi: "Tuyển sinh qua Meta Ads", en: "Preschool Enrollment Campaign"
    },
    cardDescription: {
      vi: "Trong 2 tháng, các nhóm tuyển sinh tạo 559 cuộc hội thoại với chi phí trung bình khoảng 20,2 nghìn đồng, đi cùng hoạt động điều phối nội dung và lịch quay.", en: "Across two months, enrollment campaigns generated 559 conversations at an average cost of approximately VND 20.2K, supported by content and filming coordination."
    },
    evidenceSummary: {
      vi: "559 hội thoại · Tuyển sinh và production coordination", en: "559 conversations · Enrollment and production coordination"
    },
    roles: {
      vi: "Quản lý account, quảng cáo và điều phối nội dung/quay", en: "Account management, advertising, and content/filming coordination"
    }, roleTags: [
      "Enrollment Ads",
      "Account Management",
      "Production Coordination"
    ],
    dataPeriod: {
      vi: "2 tháng", en: "2 months"
    },
    collaborationDuration: {
      vi: "2 tháng", en: "2 months"
    },
    platforms: [
      "Meta"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Chiến dịch tuyển sinh cho nhà trẻ, mầm non tư thục cần tạo hội thoại trong bán kính phù hợp và bảo đảm nội dung thể hiện môi trường học tập một cách tin cậy.",
        en: "Enrollment advertising for a private nursery and preschool needed to generate conversations within a relevant radius while presenting the learning environment credibly.",
      },
      strategy: {
        vi: "Tách riêng nhóm tuyển sinh khỏi các hoạt động tương tác, ưu tiên khu vực gần trường và điều phối nội dung cùng lịch quay theo câu hỏi thực tế của phụ huynh.",
        en: "Separated enrollment activity from engagement campaigns, prioritized areas near the school, and coordinated content and filming around parents' actual questions.",
      },
      results: {
        vi: "Các nhóm tuyển sinh sử dụng khoảng 11,3 triệu đồng để tạo 559 cuộc hội thoại với chi phí trung bình khoảng 20.245 đồng. Toàn tài khoản đạt 52.018 người tiếp cận, 323.207 lượt hiển thị và CTR 3,15%.",
        en: "Enrollment ad groups invested approximately VND 11.3M to generate 559 conversations at an average cost of about VND 20,245. The account reached 52,018 people, delivered 323,207 impressions, and achieved a 3.15% CTR.",
      },
      accountScope: {
        vi: "Quản lý đầu mối khách hàng và kế hoạch tuyển sinh; điều phối nội dung, lịch quay, phê duyệt và paid media. Ngân sách quảng cáo khoảng 4–5 triệu đồng mỗi tháng theo từng đợt tuyển sinh.",
        en: "Managed the client relationship and enrollment plan, coordinating content, filming schedules, approvals, and paid media. Monthly media spend was approximately VND 4–5M during enrollment flights.",
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
    serviceCategory: {
      vi: "Paid Media", en: "Paid Media"
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
    },
    serviceCategory: {
      vi: "Paid Media", en: "Paid Media"
    },
    title: {
      vi: "Thu hút khách hàng tiềm năng", en: "Automotive Lead Generation"
    },
    cardDescription: {
      vi: "Trong 2 tháng, 17,9 triệu đồng chi tiêu tạo 253 cuộc hội thoại, tiếp cận hơn 295 nghìn người và duy trì luồng khách quan tâm cho ngành ô tô cao cấp.", en: "Across two months, VND 17.9M in spend generated 253 conversations, reached more than 295K people, and sustained an inquiry flow for the premium automotive category."
    },
    evidenceSummary: {
      vi: "253 hội thoại · Ngành ô tô", en: "253 conversations · Automotive"
    },
    roles: {
      vi: "Triển khai và tối ưu Meta Ads", en: "Meta Ads execution and optimization"
    }, roleTags: [
      "Meta Ads",
      "Message Generation",
      "Reporting"
    ],
    dataPeriod: {
      vi: "2 tháng", en: "2 months"
    },
    platforms: [
      "Meta"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Chiến dịch tin nhắn cho ngành ô tô cao cấp, nơi CPA cần được đọc cùng chất lượng hội thoại và khả năng chuyển tiếp cho đội ngũ tư vấn.", en: "A messaging campaign for premium automotive, where CPA needed to be considered alongside conversation quality and successful handoff to the sales team.",
      },
      strategy: {
        vi: "Tách creative theo nhu cầu tìm hiểu xe, kiểm soát khu vực và tần suất, đồng thời theo dõi chất lượng phản hồi để tránh tối ưu theo số lượng tin nhắn đơn thuần.", en: "Separated creatives by vehicle-interest intent, controlled geography and frequency, and monitored response quality to avoid optimizing solely for message volume.",
      },
      results: {
        vi: "17,9 triệu đồng chi tiêu tạo 253 cuộc hội thoại với CPA trung bình 70.830 đồng. Chiến dịch tiếp cận 295.512 người, tạo 558.256 lượt hiển thị, CTR 1,43% và 4.272 lượt nhấp liên kết.", en: "VND 17.9M in spend generated 253 conversations at an average CPA of VND 70,830. The campaign reached 295,512 people, delivered 558,256 impressions, achieved a 1.43% CTR, and generated 4,272 link clicks.",
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
    },
    serviceCategory: {
      vi: "Paid Media", en: "Paid Media"
    },
    title: {
      vi: "Kết hợp tin nhắn và tương tác", en: "Messages & Engagement"
    },
    cardDescription: {
      vi: "Trong một tháng, gần 10 triệu đồng chi tiêu tạo 197 cuộc hội thoại ở nhóm tin nhắn và 1.679 lượt tương tác ở nhóm nội dung, mỗi mục tiêu được báo cáo riêng.", en: "Within one month, nearly VND 10M in spend generated 197 conversations from the messaging campaign and 1,679 engagements from the content campaign, reported separately by objective."
    },
    evidenceSummary: {
      vi: "Messages và Engagement được báo cáo tách biệt", en: "Messages and Engagement reported separately"
    },
    roles: {
      vi: "Triển khai và tối ưu Meta Ads", en: "Meta Ads execution and optimization"
    }, roleTags: [
      "Meta Ads",
      "Messages",
      "Engagement"
    ],
    dataPeriod: {
      vi: "1 tháng", en: "1 month"
    },
    platforms: [
      "Meta"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Chiến dịch ô tô kết hợp mục tiêu Tin nhắn để thu nhu cầu và Tương tác để khuếch đại nội dung, nhưng không gộp hai loại kết quả vào cùng một chỉ số.", en: "An automotive campaign combined Messages for inquiry generation with Engagement for content amplification, while keeping objective results separate.",
      },
      strategy: {
        vi: "Phân tách ngân sách, creative và KPI theo mục tiêu; đánh giá tin nhắn bằng CPA và tương tác bằng chi phí mỗi kết quả, đồng thời kiểm soát độ phủ chung.", en: "Separated budgets, creatives, and KPIs by objective; evaluated messaging through CPA and engagement through cost per result while monitoring overall reach.",
      },
      results: {
        vi: "Nhóm Tin nhắn tạo 197 cuộc hội thoại với CPA 40.349 đồng. Nhóm Tương tác tạo 1.679 lượt tương tác với chi phí trung bình 1.222 đồng; toàn chiến dịch tiếp cận 381.553 người và tạo 739.129 lượt hiển thị.", en: "The Messages campaign generated 197 conversations at a VND 40,349 CPA. The Engagement campaign produced 1,679 engagements at an average cost of VND 1,222; the overall activity reached 381,553 people and delivered 739,129 impressions.",
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
    },
    serviceCategory: {
      vi: "Full-stack Marketing", en: "Full-stack Marketing"
    },
    title: {
      vi: "Thu hút khách hàng tiềm năng", en: "Construction Lead Generation"
    },
    cardDescription: {
      vi: "Kết nối Meta Ads, nội dung fanpage và landing page trong một luồng thu lead; kỳ một tháng tạo 51 cuộc hội thoại với CTR 4,44%.", en: "Connected Meta Ads, Facebook content, and a landing page into one lead journey; the one-month period generated 51 conversations with a 4.44% CTR."
    },
    evidenceSummary: {
      vi: "Ads–Content–Landing page · 51 hội thoại", en: "Ads–Content–Landing page · 51 conversations"
    },
    roles: {
      vi: "Account, Meta Ads, điều phối nội dung và landing page", en: "Account management, Meta Ads, content coordination, and landing page"
    }, roleTags: [
      "Account Management",
      "Meta Ads",
      "Landing Page"
    ],
    dataPeriod: {
      vi: "1 tháng", en: "1 month"
    },
    collaborationDuration: {
      vi: "1 tháng", en: "1 month"
    },
    platforms: [
      "Meta",
      "Landing Page"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Dự án xây dựng cần một luồng thống nhất từ nội dung fanpage và quảng cáo đến landing page, giúp khách hàng hiểu dịch vụ trước khi để lại nhu cầu.", en: "A construction project needed a consistent journey from Facebook content and ads to a landing page, helping prospects understand the service before inquiring.",
      },
      strategy: {
        vi: "Đồng bộ thông điệp giữa fanpage, creative và landing page; tối ưu quảng cáo cho tin nhắn, đồng thời sắp xếp nội dung landing page theo nhu cầu, năng lực và lời kêu gọi hành động.", en: "Aligned messaging across the page, creatives, and landing page; optimized ads for messages and structured the landing page around needs, capabilities, and clear calls to action.",
      },
      results: {
        vi: "4,0 triệu đồng chi tiêu tạo 51 cuộc hội thoại với CPA 78.912 đồng. Chiến dịch tiếp cận 43.986 người, tạo 88.599 lượt hiển thị, CTR 4,44% và 1.871 lượt nhấp liên kết.", en: "VND 4.0M in spend generated 51 conversations at a VND 78,912 CPA. The campaign reached 43,986 people, delivered 88,599 impressions, achieved a 4.44% CTR, and generated 1,871 link clicks.",
      },
      accountScope: {
        vi: "Quản lý đầu mối khách hàng; phối hợp nội dung Facebook, landing page, phê duyệt và paid media; theo dõi tiến độ và báo cáo. Tổng phạm vi dự án khoảng 15 triệu đồng/tháng, gồm khoảng 4 triệu đồng chi tiêu quảng cáo.", en: "Managed the client relationship and coordinated Facebook content, landing page delivery, approvals, paid media, progress, and reporting. The broader project scope was approximately VND 15M per month, including about VND 4M in media spend.",
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
    },
    serviceCategory: {
      vi: "Full-stack Marketing", en: "Full-stack Marketing"
    },
    title: {
      vi: "Tuyển sinh đa nền tảng", en: "Multi-channel Enrollment"
    },
    cardDescription: {
      vi: "Kết hợp Facebook Messages và TikTok Click-to-Zalo trong một đợt tuyển sinh, với ngân sách quảng cáo khoảng 10–16 triệu đồng và hoạt động account, nội dung, quay dựng được điều phối đồng bộ.", en: "Combined Facebook Messages and TikTok Click-to-Zalo for an enrollment campaign, with approximately VND 10–16M in media spend and coordinated account, content, and production workflows."
    },
    evidenceSummary: {
      vi: "Facebook-to-Messenger và TikTok-to-Zalo", en: "Facebook-to-Messenger and TikTok-to-Zalo"
    },
    roles: {
      vi: "Account, paid media và điều phối nội dung/quay dựng", en: "Account management, paid media, and content/production coordination"
    }, roleTags: [
      "Account Management",
      "Enrollment Ads",
      "Production Coordination"
    ],
    dataPeriod: {
      vi: "1 tháng", en: "1 month"
    },
    collaborationDuration: {
      vi: "1 tháng", en: "1 month"
    },
    platforms: [
      "Meta",
      "TikTok",
      "Zalo"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Đợt tuyển sinh cho trung tâm Hàn ngữ và tư vấn du học cần kết hợp hội thoại trực tiếp trên Facebook với luồng chuyển tiếp sang Zalo từ TikTok.", en: "An enrollment campaign for Korean language and study-abroad consulting needed to combine direct Facebook conversations with TikTok traffic routed to Zalo.",
      },
      strategy: {
        vi: "Facebook tập trung Tin nhắn; TikTok tập trung Click-to-Zalo. Nội dung và lịch quay dựng được điều phối theo từng nhóm chương trình, bảo đảm CTA và điểm đến thống nhất.", en: "Facebook focused on Messages, while TikTok focused on Click-to-Zalo. Content and production schedules were coordinated by program group to keep calls to action and destinations consistent.",
      },
      results: {
        vi: "Hoàn thành hệ thống tuyển sinh hai nền tảng trong ngân sách quảng cáo khoảng 10–16 triệu đồng cho kỳ một tháng, với luồng Facebook-to-Messenger và TikTok-to-Zalo được theo dõi riêng. Số kết quả chi tiết chỉ public sau khi có ảnh dashboard xác thực.", en: "Delivered a two-platform enrollment system within approximately VND 10–16M in media spend for one month, with Facebook-to-Messenger and TikTok-to-Zalo flows tracked separately. Detailed results should only be published after dashboard verification.",
      },
      accountScope: {
        vi: "Quản lý đầu mối khách hàng và kế hoạch tuyển sinh; điều phối ngân sách, paid media, nội dung, lịch quay/dựng, phê duyệt và tiến độ triển khai.", en: "Managed the client relationship and enrollment plan, coordinating budget, paid media, content, filming/editing schedules, approvals, and delivery timelines.",
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
    },
    serviceCategory: {
      vi: "Design & Copywriting", en: "Design & Copywriting"
    },
    title: {
      vi: "Xây dựng bộ nhận diện", en: "Brand Identity System"
    },
    cardDescription: {
      vi: "Phát triển hệ thống nhận diện có thể triển khai nhất quán từ logo, guideline và banner đến bộ tài liệu bán hàng, biển chỉ dẫn và nội dung thương hiệu.", en: "Developed a consistent identity system spanning the logo, guidelines, banners, sales materials, wayfinding, informational signage, and brand copy."
    },
    evidenceSummary: {
      vi: "Brand identity · Graphic Design · Copywriting", en: "Brand identity · Graphic Design · Copywriting"
    },
    roles: {
      vi: "Thiết kế nhận diện, ấn phẩm và copywriting", en: "Brand identity, collateral design, and copywriting"
    }, roleTags: [
      "Brand Identity",
      "Graphic Design",
      "Copywriting"
    ],
    engagement: {
      vi: "Bắt đầu trong kỳ thực tập, tiếp tục theo hình thức freelance", en: "Began during an internship and continued as freelance work"
    },
    platforms: [
      "Online",
      "Offline"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Dự án cần một ngôn ngữ hình ảnh thống nhất cho nhiều điểm chạm, từ tài liệu bán hàng và banner đến hệ thống biển chỉ dẫn và biển thông tin.", en: "The project needed a consistent visual language across multiple touchpoints, from sales materials and banners to wayfinding and informational signage.",
      },
      strategy: {
        vi: "Chuẩn hóa cách sử dụng logo, màu sắc, bố cục và giọng điệu; xây dựng các ứng dụng thực tế để đội ngũ có thể triển khai đồng bộ trên cả kênh online và offline.", en: "Standardized logo usage, color, layout, and tone of voice, then translated the system into practical assets for consistent online and offline execution.",
      },
      results: {
        vi: "Hoàn thiện một hệ thống nhận diện có khả năng mở rộng, giúp các ấn phẩm mới giữ được tính nhất quán mà vẫn linh hoạt theo từng mục đích truyền thông.", en: "Completed a scalable identity system that keeps new materials consistent while remaining flexible across communication needs.",
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
    },
    serviceCategory: {
      vi: "Branding & Copywriting", en: "Branding & Copywriting"
    },
    title: {
      vi: "Xây dựng logo và nội dung", en: "Logo & Content System"
    },
    cardDescription: {
      vi: "Xây dựng logo và hệ thống nội dung nền tảng để thương hiệu có hình ảnh rõ ràng hơn, đồng thời duy trì cách giới thiệu dịch vụ nhất quán trên fanpage.", en: "Developed a logo and foundational content system to clarify the brand's visual identity and keep service communication consistent across the fanpage."
    },
    evidenceSummary: {
      vi: "Logo Design · Copywriting · Content Direction", en: "Logo Design · Copywriting · Content Direction"
    },
    roles: {
      vi: "Thiết kế logo, định hướng nội dung và copywriting", en: "Logo design, content direction, and copywriting"
    }, roleTags: [
      "Logo Design",
      "Copywriting",
      "Content Direction"
    ],
    engagement: {
      vi: "Freelance", en: "Freelance"
    },
    platforms: [
      "Facebook"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Thương hiệu cần một dấu hiệu nhận diện dễ ứng dụng cùng cách diễn đạt dịch vụ rõ ràng, phù hợp với fanpage và các điểm chạm cơ bản.", en: "The brand needed an adaptable visual mark and a clear way to communicate services across the fanpage and core touchpoints.",
      },
      strategy: {
        vi: "Thiết kế logo theo hướng dễ nhận biết và linh hoạt khi thu nhỏ; song song xây dựng nhóm chủ đề, cấu trúc bài viết và giọng điệu nhất quán.", en: "Designed a recognizable logo that remains legible at small sizes, while establishing content themes, post structures, and a consistent tone of voice.",
      },
      results: {
        vi: "Hoàn thiện nền tảng nhận diện và nội dung giúp fanpage trình bày dịch vụ mạch lạc hơn, đồng thời tạo khuôn mẫu để phát triển các bài viết tiếp theo.", en: "Completed a visual and content foundation that communicates services more clearly and provides a reusable framework for future posts.",
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
    },
    serviceCategory: {
      vi: "Content & Creative", en: "Content & Creative"
    },
    title: {
      vi: "Nội dung đa định dạng", en: "Multi-format Content"
    },
    cardDescription: {
      vi: "Lên kế hoạch, viết nội dung, thiết kế và sản xuất video giúp phòng khám duy trì hệ thống truyền thông đồng bộ, dễ tiếp cận và phù hợp với từng nhóm nhu cầu.", en: "Planned, wrote, designed, and produced video content to build a consistent, accessible communication system for different audience needs."
    },
    evidenceSummary: {
      vi: "Content Planning · Copywriting · Video Production", en: "Content Planning · Copywriting · Video Production"
    },
    roles: {
      vi: "Lập kế hoạch nội dung, copywriting, thiết kế, quay và dựng video", en: "Content planning, copywriting, design, filming, and video editing"
    }, roleTags: [
      "Content Planning",
      "Copywriting",
      "Video Production"
    ],
    engagement: {
      vi: "Full-time", en: "Full-time"
    },
    platforms: [
      "Facebook",
      "TikTok"
    ],
    metrics: [],
    detail: {
      overview: {
        vi: "Phụ trách nội dung in-house cho phòng khám da liễu, từ kế hoạch chủ đề đến sản xuất bài viết, thiết kế và video phục vụ truyền thông thường xuyên.", en: "Managed in-house content for a dermatology clinic, covering topic planning, copy, design, and video production for always-on communication.",
      },
      strategy: {
        vi: "Xây dựng kế hoạch theo nhóm dịch vụ và mối quan tâm của khách hàng; phát triển thông điệp thành bài viết, thiết kế, kịch bản và video, đồng thời trực tiếp quay dựng để giữ nội dung nhất quán.", en: "Structured content around service groups and customer concerns, then developed each message into posts, designs, scripts, and videos while handling filming and editing for consistency.",
      },
      results: {
        vi: "Hoàn thiện quy trình sản xuất nội dung đa định dạng, giúp fanpage duy trì hình ảnh đồng bộ, thông tin rõ ràng và có nền tảng tài sản để phát triển các nội dung tiếp theo.", en: "Established a multi-format content workflow that improved visual consistency, message clarity, and the reusable asset base for future communication.",
      },
      insight: {
        vi: "Với phòng khám phục vụ nhiều nhu cầu khác nhau, đa dạng định dạng nội dung (viết, thiết kế, video) giúp tiếp cận đúng nhóm khách hàng thay vì dùng một công thức chung cho tất cả.", en: "For a clinic serving varied patient needs, mixing content formats (copy, design, video) reaches each audience segment more precisely than a one-size-fits-all approach.",
      },
    },
    coverImage: "/work/dermatology-multi-format-content/thumb-brand.svg",
    coverVariant: "brand-content-creative", assets: [], confidential: true, dataStatus: "approved",
  },
];
