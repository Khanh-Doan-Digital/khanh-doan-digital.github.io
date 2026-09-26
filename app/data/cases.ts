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
      vi: "Mình điều phối Meta, TikTok và Google/YouTube trong 45 ngày, với khoảng 854,6 triệu đồng chi tiêu quảng cáo và hơn 110,4 triệu lượt hiển thị.",
      en: "I coordinated Meta, TikTok, and Google/YouTube over 45 days, with about VND 854.6M in ad spend and more than 110.4M impressions.",
    },
    evidenceSummary: {
      vi: "Đa nền tảng · 854,6 triệu đồng chi tiêu quảng cáo · hơn 110,4 triệu lượt hiển thị",
      en: "Multi-platform · VND 854.6M media spend · 110.4M+ impressions",
    },
    roles: {
      vi: "Lập kế hoạch, triển khai đa nền tảng và điều phối",
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
        vi: "Đây là chiến dịch xây độ phủ lớn cho ngành phân bón trên Meta, TikTok và Google/YouTube. Mỗi nền tảng giữ một vai trò riêng để vừa mở rộng nhận biết, vừa giữ tương tác và hội thoại với khách hàng tiềm năng.",
        en: "A large-scale awareness campaign for the fertilizer category across Meta, TikTok, and Google/YouTube. Each platform played a distinct role in expanding reach while sustaining engagement and qualified conversations.",
      },
      strategy: {
        vi: "Mình giao cho mỗi nền tảng một vai trò riêng. Meta lo Reach, Impressions và Messaging; TikTok lo Reach và Video Views; Google chạy GDN cùng các định dạng YouTube Skippable, Bumper và Non-skippable. Trong quá trình chạy, mình theo dõi tần suất, CPM và độ phủ chéo để chuyển ngân sách giữa các nền tảng cho hợp lý.",
        en: "I gave each platform its own role. Meta handled Reach, Impressions, and Messaging; TikTok handled Reach and Video Views; Google ran GDN alongside YouTube Skippable, Bumper, and Non-skippable formats. While the campaign ran, I tracked frequency, CPM, and cross-platform reach to shift budget between platforms.",
      },
      results: {
        vi: "Tổng chi tiêu quảng cáo là 854,6 triệu đồng, tạo hơn 110,4 triệu lượt hiển thị. Riêng Meta có 12,66 triệu người tiếp cận, 71,67 triệu lượt hiển thị, 3,13 triệu lượt tương tác và 2.110 cuộc hội thoại. TikTok tạo 31,23 triệu lượt xem video. Google/YouTube thêm hơn 7,08 triệu lượt hiển thị và 3,01 triệu lượt xem công khai.",
        en: "VND 854.6M in media spend generated more than 110.4M impressions. Meta alone reached 12.66M people, delivered 71.67M impressions, 3.13M engagements, and 2,110 conversations; TikTok generated 31.23M video views; Google/YouTube added 7.08M impressions and 3.01M public views.",
      },
      accountScope: {
        vi: "Mình là đầu mối giữa khách hàng và team triển khai, theo dõi mục tiêu, ngân sách, lịch nội dung, kịch bản, tiến độ sản xuất và báo cáo. Cả gói hợp tác khoảng 1,5 tỷ đồng trong 3 tháng. Con số 854,6 triệu đồng là chi tiêu quảng cáo đã kiểm tra trong giai đoạn 45 ngày.",
        en: "I was the point of contact between the client and the delivery team, tracking objectives, budget, content schedules, scripts, production timelines, and reporting. The full engagement was about VND 1.5B over 3 months; the VND 854.6M figure is verified ad spend for the 45-day period.",
      },
      insight: {
        vi: "Mình nhận ra rằng phân vai kênh rõ ràng, cùng việc theo dõi tần suất và CPM của từng nền tảng, giúp chuyển ngân sách linh hoạt mà không làm lẫn mục tiêu.",
        en: "I learned that clear channel roles, combined with tracking frequency and CPM on each platform, let me move budget flexibly without mixing up objectives.",
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
      vi: "Meta tạo 7.705 lượt đăng ký website với CPA trung bình 64,3 nghìn đồng. Mình đồng thời mở rộng traffic qua TikTok và Google cho một khóa học giá trị cao.",
      en: "Meta generated 7,705 website registrations at an average CPA of VND 64.3K. At the same time, I expanded traffic through TikTok and Google for a high-value course.",
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
        vi: "Đây là hệ thống thu lead cho khóa học dinh dưỡng giá khoảng 20–40 triệu đồng. Bài toán là cân bằng giữa số lượng đăng ký, chất lượng traffic và việc nuôi dưỡng người học trước khi tư vấn.",
        en: "A lead-generation system for nutrition courses valued at approximately VND 20–40M, requiring a balance between registration volume, traffic quality, and lead nurturing before consultation.",
      },
      strategy: {
        vi: "Meta tập trung vào chuyển đổi đăng ký trên website. TikTok mở rộng traffic và Landing Page Views. Google bổ sung nhu cầu chủ động qua tìm kiếm và mạng hiển thị. Mình đánh giá từng nền tảng riêng thay vì gộp chung, để không làm sai lệch bức tranh funnel.",
        en: "Meta focused on website registration conversions. TikTok expanded traffic and Landing Page Views. Google captured active demand through search and display. I evaluated each platform separately instead of lumping them together, so the funnel picture stayed accurate.",
      },
      results: {
        vi: "Meta tạo 7.705 lượt đăng ký từ 495,5 triệu đồng chi tiêu, CPA trung bình 64.309 đồng. TikTok tạo 108.454 Landing Page Views, CTR khoảng 16,49% và tỷ lệ Click-to-LPV 87,3%. Google ghi nhận 313.753 lượt hiển thị và 16.006 lượt nhấp.",
        en: "Meta generated 7,705 registrations from VND 495.5M in spend at an average CPA of VND 64,309. TikTok delivered 108,454 Landing Page Views, a 16.49% CTR, and an 87.3% Click-to-LPV rate; Google added 313,753 impressions and 16,006 clicks.",
      },
      accountScope: {
        vi: "Mình làm đầu mối với khách hàng, thống nhất KPI và media plan, đồng thời điều phối ngân sách, landing page, nội dung quảng cáo và quy trình theo dõi lead. Ngân sách quảng cáo dao động khoảng 40–100 triệu đồng mỗi tháng, chưa gồm chi phí quản lý và sản xuất nội dung.",
        en: "I was the client’s point of contact, aligned KPIs and the media plan, and coordinated budget, landing pages, ad content, and lead tracking. Monthly ad spend ranged from about VND 40–100M, excluding management and content production costs.",
      },
      insight: {
        vi: "Đánh giá riêng từng nền tảng giúp bức tranh funnel luôn chính xác, kể cả khi mục tiêu và giai đoạn dữ liệu mỗi nơi một khác.",
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
      vi: "Chiến dịch tạo 24.762 cuộc hội thoại với chi phí trung bình khoảng 2,9 nghìn đồng, ghi nhận 725 đơn hàng và ROAS 5,35 trong 6 tháng phân tích.",
      en: "The campaign generated 24,762 conversations at an average cost of about VND 2.9K, recording 725 purchases and a 5.35 ROAS over the 6-month analysis period.",
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
        vi: "Chiến dịch tập trung tạo tin nhắn cho nhóm sản phẩm bồn nước và bể phốt. Mình kết nối thêm dữ liệu mua hàng từ chiến dịch chuyển đổi để đánh giá chất lượng hội thoại bằng doanh thu, thay vì chỉ nhìn chi phí mỗi tin nhắn.",
        en: "The campaign focused on generating messages for water tanks and septic systems. I also connected purchase data from conversion campaigns to judge conversation quality by revenue, not just cost per message.",
      },
      strategy: {
        vi: "Mình chia nhóm theo nhu cầu sản phẩm và khu vực, giữ lại những creative có tỷ lệ phản hồi tốt, rồi đối chiếu tin nhắn với lượt mua để ưu tiên các nhóm quảng cáo tạo ra giá trị kinh doanh thật.",
        en: "I segmented by product need and location, kept the creatives with strong response rates, and matched messages against purchases to prioritize the ad groups that created real business value.",
      },
      results: {
        vi: "73,0 triệu đồng chi tiêu tạo 24.762 cuộc hội thoại, khoảng 2.949 đồng mỗi cuộc. Hệ thống ghi nhận 725 lượt mua, doanh thu 390,7 triệu đồng, ROAS 5,35 và CTR 5,14%.",
        en: "VND 73.0M in spend generated 24,762 conversations at approximately VND 2,949 each. The account recorded 725 purchases, VND 390.7M in revenue, a 5.35 ROAS, and a 5.14% CTR.",
      },
      accountScope: {
        vi: "Mình tiếp nhận yêu cầu, phối hợp nội dung và theo dõi chất lượng tin nhắn cùng kết quả mua hàng. Sau đó mình tổng hợp báo cáo và đề xuất điều chỉnh theo nhu cầu thị trường. Ngân sách quảng cáo khoảng 10–15 triệu đồng mỗi tháng.",
        en: "I took in client requests, coordinated content, and tracked message quality alongside purchase results. I then compiled reports and recommended adjustments based on market demand. Monthly ad spend was about VND 10–15M.",
      },
      insight: {
        vi: "Đánh giá lead bằng đơn hàng và doanh thu giúp mình tránh tối ưu cho những cuộc hội thoại rẻ nhưng ít giá trị.",
        en: "Evaluating leads by orders and revenue kept me from optimizing toward cheap but low-value conversations.",
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
      vi: "Gói ra mắt 250 triệu đồng trong 3 tháng. Riêng 2 tháng phân tích, Meta và TikTok tạo hơn 3,5 triệu lượt xem/tiếp cận, cùng nhiều tương tác và tăng trưởng cộng đồng.",
      en: "A VND 250M, three-month launch package. In the two-month analysis period alone, Meta and TikTok generated more than 3.5M views/reach, along with strong engagement and community growth.",
    },
    evidenceSummary: {
      vi: "Ra mắt đa kênh · Meta và TikTok · 2 tháng phân tích",
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
        vi: "Sản phẩm nước hoa cá nhân hóa bằng AI cần cùng lúc tạo độ phủ, giải thích một concept mới và xây dựng cộng đồng trên hai nền tảng.",
        en: "An AI-personalized fragrance product needed to build awareness, explain a new concept, and grow community signals across two platforms.",
      },
      strategy: {
        vi: "Meta lo Reach, Engagement, Page Likes và Messaging. TikTok tập trung vào Reach và Follow. Mình đánh giá creative theo khả năng giải thích sản phẩm và tạo hành động phù hợp với từng tầng nhận biết.",
        en: "Meta handled Reach, Engagement, Page Likes, and Messaging, while TikTok focused on Reach and Follows. I assessed creatives by how well they explained the product and drove the right action at each awareness stage.",
      },
      results: {
        vi: "Trong giai đoạn được chọn, khoảng 50 triệu đồng media tạo 228.296 lượt tương tác, 1.655 lượt thích/theo dõi trang và khoảng 1,2 triệu người tiếp cận trên Meta. TikTok tạo 2,35 triệu lượt xem video, tiếp cận 918.320 người và thêm 972 lượt theo dõi, chi phí trung bình 5.716 đồng.",
        en: "In the selected period, approximately VND 50M in media generated 228,296 engagements, 1,655 page likes/follows, and about 1.2M reach on Meta. TikTok delivered 2.35M video views, reached 918,320 people, and added 972 follows at an average cost of VND 5,716.",
      },
      accountScope: {
        vi: "Mình điều phối mục tiêu truyền thông, media plan, nội dung và creative giữa khách hàng với team sản xuất, đồng thời theo dõi ngân sách và tiến độ ra mắt trong gói 250 triệu đồng/3 tháng.",
        en: "I coordinated communication objectives, the media plan, content, and creative between the client and the production team, while tracking budget and launch progress within the VND 250M, three-month package.",
      },
      insight: {
        vi: "Giai đoạn ra mắt cần phân vai kênh rõ ngay từ đầu, để độ phủ và tương tác không phải tranh nhau cùng một ngân sách.",
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
      vi: "Meta tạo 5.736 cuộc hội thoại với CPA trung bình 29,9 nghìn đồng. TikTok bổ sung 2,77 triệu lượt xem và hơn 105 nghìn lượt nhấp cho các khóa học trẻ em, giao tiếp và người đi làm.",
      en: "Meta generated 5,736 conversations at an average CPA of VND 29.9K, while TikTok added 2.77M views and more than 105K clicks for children's, communication, and working-adult courses.",
    },
    evidenceSummary: {
      vi: "5.736 cuộc hội thoại · Funnel và phối hợp landing page", en: "5,736 conversations · Funnel and landing-page coordination"
    },
    roles: {
      vi: "Lập media plan, tối ưu lead và phối hợp landing page", en: "Media planning, lead optimization, and landing page coordination"
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
        vi: "Danh mục khóa học phục vụ nhiều nhóm tuổi và nhu cầu, từ trẻ em đến người lớn và người đi làm. Bài toán chính là giữ nguồn lead ổn định trong khi thông điệp và landing page phải hợp với từng nhóm học viên.",
        en: "The course portfolio served multiple age groups and needs, from children to adults and working professionals. The challenge was maintaining a stable lead flow while tailoring messages and landing pages to each learner segment.",
      },
      strategy: {
        vi: "Mình tách riêng khóa học, đối tượng và creative. Meta ưu tiên hội thoại, TikTok mở rộng lượt xem và lượt nhấp. Mình đối chiếu chất lượng lead với phản hồi từ tư vấn để điều chỉnh thông điệp, ngân sách và landing page.",
        en: "I separated courses, audiences, and creatives. Meta prioritized conversations, while TikTok expanded views and clicks. I matched lead quality against feedback from the consultation team to adjust messaging, budget, and landing pages.",
      },
      results: {
        vi: "Meta dùng 204 triệu đồng để tạo 5.736 cuộc hội thoại, CPA trung bình 29.933 đồng và CTR 3,50%. TikTok tạo 2,77 triệu lượt xem, hơn 105 nghìn lượt nhấp, CTR 3,78% và CPC trung bình 188 đồng.",
        en: "Meta invested VND 204M to generate 5,736 conversations at an average CPA of VND 29,933 and a 3.50% CTR. TikTok delivered 2.77M views, more than 105K clicks, a 3.78% CTR, and an average CPC of VND 188.",
      },
      accountScope: {
        vi: "Mình làm đầu mối với khách hàng, thống nhất KPI và điều phối paid media, landing page, nội dung cùng quy trình theo dõi lead. Ngân sách quảng cáo khoảng 15–25 triệu đồng mỗi tháng, chưa gồm chi phí quản lý, nội dung và sản xuất.",
        en: "I was the client’s point of contact, aligned KPIs, and coordinated paid media, landing pages, content, and lead tracking. Monthly ad spend was about VND 15–25M, excluding management, content, and production costs.",
      },
      insight: {
        vi: "Tách rõ kênh tạo hội thoại và kênh mở rộng traffic giúp mình đánh giá đúng đóng góp của từng nền tảng vào funnel.",
        en: "Clearly separating the conversation channel from the traffic channel let me measure each platform’s real contribution to the funnel.",
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
      vi: "Trong 6 tháng, Meta tạo hơn 603 nghìn lượt tương tác, còn TikTok tạo 9,94 triệu lượt hiển thị và 8,08 triệu lượt xem với CPM khoảng 4,4 nghìn đồng.",
      en: "Across six months, Meta generated more than 603K engagements, while TikTok delivered 9.94M impressions and 8.08M views at an average CPM of approximately VND 4.4K.",
    },
    evidenceSummary: {
      vi: "603.802 tương tác Meta · 9,94 triệu lượt hiển thị TikTok · mình trực tiếp phụ trách 17 tháng",
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
          vi: "Lượt hiển thị TikTok", en: "TikTok impressions"
        }, value: "9.94M", verified: true
      },
    ],
    detail: {
      overview: {
        vi: "Đây là hoạt động always-on cho ngành thức ăn thú cưng, kết hợp tương tác trên Meta với độ phủ và lượt xem trên TikTok để giữ thương hiệu luôn hiện diện trong thời gian dài.",
        en: "An always-on program for the pet food category, combining Meta engagement with TikTok reach and video views to sustain long-term brand presence.",
      },
      strategy: {
        vi: "Mình duy trì nhịp thử nghiệm creative đều đặn. Meta ưu tiên tương tác, video view và link click về TikTok Shop, còn TikTok đảm nhận độ phủ. Mình theo dõi tần suất và chi phí phân phối để làm mới nội dung đúng lúc.",
        en: "I kept a steady creative-testing rhythm. Meta prioritized engagement, video views, and link clicks to TikTok Shop, while TikTok carried reach. I tracked frequency and delivery cost to refresh content at the right time.",
      },
      results: {
        vi: "Meta tạo 603.802 lượt tương tác, CTR 5,29% và 2,34 triệu lượt hiển thị. TikTok tạo 9,94 triệu lượt hiển thị, 8,08 triệu lượt xem, tiếp cận 2,10 triệu người, CPM trung bình 4.366 đồng.",
        en: "Meta generated 603,802 engagements, a 5.29% CTR, and 2.34M impressions. TikTok delivered 9.94M impressions, 8.08M views, reached 2.10M people, and achieved an average CPM of VND 4,366.",
      },
      accountScope: {
        vi: "Mình điều phối khách hàng, paid media, nội dung và creative, đồng thời theo dõi ngân sách, tiến độ và báo cáo trong phạm vi dự án khoảng 80–90 triệu đồng mỗi tháng. Chi tiêu quảng cáo trực tiếp khoảng 12–18 triệu đồng mỗi tháng.",
        en: "I coordinated the client, paid media, content, and creative, while tracking budget, progress, and reporting within a project scope of about VND 80–90M per month. Direct ad spend was about VND 12–18M per month.",
      },
      insight: {
        vi: "Với mô hình always-on, tần suất và chi phí phân phối là tín hiệu cho mình biết khi nào cần làm mới creative.",
        en: "In an always-on model, frequency and delivery cost are the signals that tell me when creatives need refreshing.",
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
      vi: "Tăng khách hàng địa phương", en: "Local Customer Growth"
    },
    cardDescription: {
      vi: "Meta tạo 1.498 cuộc hội thoại từ 12,1 triệu đồng, quy đổi khoảng 8,1 nghìn đồng mỗi cuộc. TikTok bổ sung 310 nghìn lượt hiển thị cho các đợt truyền thông địa phương.", en: "Meta generated 1,498 conversations from VND 12.1M in spend, with an estimated blended cost of VND 8.1K per conversation; TikTok added 310K impressions across local campaign flights."
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
        vi: "Đây là quảng cáo theo từng đợt cho một nhà hàng buffet. Mục tiêu chính là tạo hội thoại ở khu vực phục vụ, và thêm độ phủ video khi cần tăng nhận biết.",
        en: "Campaign-flight advertising for a buffet restaurant, prioritizing local conversations and adding video reach when broader awareness was needed.",
      },
      strategy: {
        vi: "Mình tách nhóm theo khu vực và ưu đãi, đồng thời theo dõi chi phí hội thoại, CTR và chất lượng tương tác để dồn ngân sách về những nhóm ổn định. TikTok hỗ trợ thêm độ phủ và lượt xem video trong các đợt truyền thông ngắn.",
        en: "I split ad groups by area and offer, and tracked conversation cost, CTR, and engagement quality to move budget toward the most stable groups. TikTok added reach and video views during short campaign flights.",
      },
      results: {
        vi: "Trong giai đoạn dữ liệu được chọn, Meta dùng 12,1 triệu đồng, ghi nhận 1.498 cuộc hội thoại, 477.679 lượt hiển thị và CTR 4,08%. Chi phí hội thoại quy đổi khoảng 8,1 nghìn đồng. TikTok tạo 310.412 lượt hiển thị và 66.384 lượt xem tập trung 6 giây, tương đương tỷ lệ 21,39%.",
        en: "In the selected data period, Meta spent VND 12.1M and recorded 1,498 conversations, 477,679 impressions, and a 4.08% CTR; the estimated blended cost was approximately VND 8.1K per conversation. TikTok delivered 310,412 impressions and 66,384 focused six-second views, a 21.39% rate.",
      },
      accountScope: {
        vi: "Mình làm đầu mối với khách hàng, phối hợp nội dung và vận hành Meta/TikTok, đồng thời theo dõi ngân sách, kết quả và báo cáo theo từng đợt. Dữ liệu được hiển thị gồm 12,1 triệu đồng chi tiêu Meta trong 6 tháng và 2 triệu đồng chi tiêu TikTok trong 1 tháng.",
        en: "I was the client’s point of contact, coordinated content, ran Meta/TikTok, and tracked budget, results, and reporting for each flight. The data shown covers VND 12.1M in Meta spend over 6 months and VND 2M in TikTok spend over 1 month.",
      },
      insight: {
        vi: "Với ngân sách địa phương nhỏ, phân vai rõ giữa kênh tạo hội thoại và kênh hỗ trợ độ phủ giúp mình tận dụng tối đa từng đồng chi tiêu.",
        en: "With a small local budget, clearly splitting the conversation channel from the reach channel helped me get the most out of every dong spent.",
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
      vi: "Khoảng 60,2 triệu đồng chi tiêu tạo 1.282 cuộc hội thoại và 311 lượt đăng ký website, cho phép so sánh trực tiếp hiệu quả của hai luồng thu lead.", en: "Approximately VND 60.2M in spend generated 1,282 conversations and 311 website registrations, enabling a direct comparison between two lead-capture flows."
    },
    evidenceSummary: {
      vi: "1.282 hội thoại + 311 đăng ký website · So sánh hai luồng funnel", en: "1,282 conversations + 311 website registrations · Funnel comparison"
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
        vi: "Chiến dịch nhà ở xã hội chạy song song hai mục tiêu Tin nhắn và Đăng ký trên website, vừa giảm ma sát khi tư vấn, vừa thu lead có cấu trúc.",
        en: "A social housing campaign ran Messages and Website Registration objectives in parallel to reduce consultation friction while capturing structured leads.",
      },
      strategy: {
        vi: "Mình tách ngân sách, creative và báo cáo cho từng luồng, đánh giá theo CPA riêng và kiểm tra chất lượng lead trước khi điều chỉnh phân bổ. Mình không gộp hai loại kết quả thành một chỉ số chung.",
        en: "I separated budget, creatives, and reporting for each flow, judged each by its own CPA, and checked lead quality before reallocating spend. I never merged the two result types into a single metric.",
      },
      results: {
        vi: "Luồng Tin nhắn dùng 41,5 triệu đồng để tạo 1.282 cuộc hội thoại, CPA 32.393 đồng. Luồng Website dùng 18,6 triệu đồng để tạo 311 lượt đăng ký, CPA khoảng 59.927 đồng. CTR của hai nhóm lần lượt là 3,90% và 4,75%.",
        en: "The Messages flow invested VND 41.5M to generate 1,282 conversations at a VND 32,393 CPA. The Website flow invested VND 18.6M to generate 311 registrations at an approximate VND 59,927 CPA; CTR reached 3.90% and 4.75%, respectively.",
      },
      insight: {
        vi: "Chạy song song hai mục tiêu trên cùng một tệp giúp mình thấy rõ luồng nào tạo lead rẻ hơn, và luồng nào hợp hơn với cách người ta tìm hiểu bất động sản.",
        en: "Running two objectives in parallel on the same audience showed me clearly which flow produced cheaper leads, and which better fit how people research real estate.",
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
      vi: "Tăng khách hàng quan tâm", en: "Customer Interest Growth"
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
        vi: "Chiến dịch kết hợp Meta để tạo hội thoại với TikTok Traffic và Livestream để mở rộng điểm chạm cho một tiệm vàng trong thời gian ngắn.",
        en: "The campaign combined Meta conversation generation with TikTok Traffic and Livestream activity to expand touchpoints for a jewelry retailer within a short period.",
      },
      strategy: {
        vi: "Meta tập trung vào tin nhắn. TikTok tách riêng traffic và livestream để đo đúng theo từng mục tiêu. Mình điều phối nội dung và lịch quay theo từng đợt bán hàng, và không đánh giá livestream bằng các chỉ số traffic thông thường.",
        en: "Meta focused on messages. TikTok split traffic and livestream so each was measured against its own objective. I coordinated content and filming schedules around each sales push, and didn’t judge livestreams by standard traffic metrics.",
      },
      results: {
        vi: "Meta dùng 14,7 triệu đồng để tạo 417 cuộc hội thoại, CPA 35.252 đồng, CTR 4,67% và 285.342 lượt hiển thị. TikTok Traffic tạo 600.856 lượt hiển thị, 15.640 lượt nhấp, CTR 2,60% và CPC 346 đồng. Livestream ghi nhận 249 lượt xem hiệu quả.",
        en: "Meta invested VND 14.7M to generate 417 conversations at a VND 35,252 CPA, a 4.67% CTR, and 285,342 impressions. TikTok Traffic delivered 600,856 impressions, 15,640 clicks, a 2.60% CTR, and VND 346 CPC; Livestream activity recorded 249 effective views.",
      },
      accountScope: {
        vi: "Mình làm đầu mối với khách hàng, thống nhất kế hoạch tháng, rồi điều phối nội dung, lịch quay dựng, phê duyệt và paid media. Tổng phạm vi dự án khoảng 40 triệu đồng trong tháng, trong đó chi tiêu quảng cáo đã kiểm tra khoảng 20,7 triệu đồng.",
        en: "I was the client’s point of contact, aligned the monthly plan, then coordinated content, filming/editing schedules, approvals, and paid media. The total project scope was about VND 40M for the month, of which about VND 20.7M was verified ad spend.",
      },
      insight: {
        vi: "Với ngành cần tư vấn trực tiếp như trang sức, kết hợp hội thoại 1-1 và livestream giúp khách quyết định nhanh hơn so với chỉ chạy quảng cáo tĩnh.",
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
      vi: "Tăng nhận biết và tương tác", en: "Awareness & Engagement"
    },
    cardDescription: {
      vi: "Trong 6 tháng, 54,2 triệu đồng chi tiêu tạo 45.723 lượt tương tác với chi phí trung bình 1.186 đồng, cùng 834 cuộc hội thoại hỗ trợ nhu cầu tại địa phương.", en: "Across six months, VND 54.2M in spend generated 45,723 engagements at an average cost of VND 1,186, alongside 834 conversations supporting local demand."
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
        vi: "Đây là quảng cáo cho một nhà hàng lẩu, ưu tiên tương tác để giữ độ hiện diện tại địa phương và hỗ trợ hội thoại khi khách muốn đặt bàn hoặc tìm hiểu dịch vụ.",
        en: "Advertising for a hotpot restaurant, prioritizing engagement to sustain local visibility and support conversations around reservations and service inquiries.",
      },
      strategy: {
        vi: "Mình tối ưu creative theo những nội dung có tín hiệu tương tác tốt, kiểm soát tần suất trong vùng phục vụ, và xem tin nhắn là chỉ số hỗ trợ thay vì trộn với mục tiêu tương tác chính.",
        en: "I optimized creatives around content with strong engagement signals, controlled frequency within the service area, and treated messages as a supporting metric rather than mixing them into the main engagement objective.",
      },
      results: {
        vi: "54,2 triệu đồng chi tiêu tạo 45.723 lượt tương tác, chi phí trung bình 1.186 đồng. Chiến dịch tiếp cận 607.017 người, tạo 3,13 triệu lượt hiển thị, CTR 2,25% và ghi nhận 834 cuộc hội thoại.",
        en: "VND 54.2M in spend generated 45,723 engagements at an average cost of VND 1,186; the campaign reached 607,017 people, delivered 3.13M impressions, achieved a 2.25% CTR, and recorded 834 conversations.",
      },
      insight: {
        vi: "Giữ tương tác đều đặn trong thời gian dài giúp nhà hàng luôn nằm trong lựa chọn của khách quanh khu vực, thay vì chỉ chạy theo từng đợt ngắn.",
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
      vi: "Tuyển sinh qua Meta Ads", en: "Enrollment via Meta Ads"
    },
    cardDescription: {
      vi: "Trong 2 tháng, các nhóm tuyển sinh tạo 559 cuộc hội thoại với chi phí trung bình khoảng 20,2 nghìn đồng, cùng với việc điều phối nội dung và lịch quay.", en: "Across two months, enrollment campaigns generated 559 conversations at an average cost of approximately VND 20.2K, supported by content and filming coordination."
    },
    evidenceSummary: {
      vi: "559 hội thoại · Tuyển sinh và điều phối sản xuất nội dung", en: "559 conversations · Enrollment and production coordination"
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
        vi: "Chiến dịch tuyển sinh cho một trường mầm non tư thục cần tạo hội thoại trong bán kính phù hợp, đồng thời thể hiện môi trường học tập một cách đáng tin.",
        en: "Enrollment advertising for a private nursery and preschool needed to generate conversations within a relevant radius while presenting the learning environment credibly.",
      },
      strategy: {
        vi: "Mình tách nhóm tuyển sinh khỏi các hoạt động tương tác, ưu tiên khu vực gần trường, và điều phối nội dung, lịch quay theo những câu hỏi thực tế của phụ huynh.",
        en: "I separated enrollment ad groups from engagement activity, prioritized areas near the school, and coordinated content and filming schedules around parents’ real questions.",
      },
      results: {
        vi: "Các nhóm tuyển sinh dùng khoảng 11,3 triệu đồng để tạo 559 cuộc hội thoại, chi phí trung bình khoảng 20.245 đồng. Toàn tài khoản tiếp cận 52.018 người, tạo 323.207 lượt hiển thị và CTR 3,15%.",
        en: "Enrollment ad groups invested approximately VND 11.3M to generate 559 conversations at an average cost of about VND 20,245. The account reached 52,018 people, delivered 323,207 impressions, and achieved a 3.15% CTR.",
      },
      accountScope: {
        vi: "Mình làm đầu mối với khách hàng, lên kế hoạch tuyển sinh, rồi điều phối nội dung, lịch quay, phê duyệt và paid media. Ngân sách quảng cáo khoảng 4–5 triệu đồng mỗi tháng theo từng đợt tuyển sinh.",
        en: "I was the client’s point of contact, planned the enrollment campaign, then coordinated content, filming schedules, approvals, and paid media. Monthly ad spend was about VND 4–5M during each enrollment period.",
      },
      insight: {
        vi: "Với giáo dục mầm non, nội dung hình ảnh thật và được cập nhật liên tục quan trọng không kém tối ưu quảng cáo, vì phụ huynh cần thấy môi trường học thật trước khi liên hệ.",
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
      vi: "Tạo 423 cuộc hội thoại trong 4 tháng với CPA trung bình khoảng 44 nghìn đồng. Mình cũng tái cấu trúc tệp để giảm ảnh hưởng của lịch sử tương tác ảo.",
      en: "The campaign generated 423 conversations over 4 months at an average CPA of about VND 44K. I also restructured audiences to reduce the impact of a history of fake engagement.",
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
        vi: "Fanpage có lịch sử tương tác kém chất lượng, khiến các tín hiệu bề mặt dễ làm tối ưu đi sai hướng. Mục tiêu là tạo hội thoại thật cho lớp yoga, đồng thời kiểm soát chất lượng tệp.", en: "The page carried a history of low-quality engagement, making surface signals unreliable for optimization. The objective was to generate genuine yoga inquiries while improving audience quality control."
      },
      strategy: {
        vi: "Mình tách các nhóm đáng ngờ, siết khu vực và độ mới của tệp, loại trừ các cụm tương tác chất lượng thấp, và đánh giá bằng nội dung hội thoại thay vì chỉ nhìn CPA. Creative được thử nghiệm theo khả năng thu hút đúng nhu cầu học.", en: "I isolated suspicious segments, tightened location and audience recency, excluded low-quality engagement clusters, and judged results by conversation content rather than CPA alone. Creatives were tested on how well they attracted people genuinely interested in learning."
      },
      results: {
        vi: "18,6 triệu đồng chi tiêu tạo 423 cuộc hội thoại, CPA trung bình 43.965 đồng. Chiến dịch tiếp cận 67.489 người, tạo 375.133 lượt hiển thị, CTR 3,80% và 3.530 lượt nhấp liên kết.", en: "VND 18.6M in spend generated 423 conversations at an average CPA of VND 43,965. The campaign reached 67,489 people, delivered 375,133 impressions, achieved a 3.80% CTR, and generated 3,530 link clicks."
      },
      insight: {
        vi: "CPA thấp chưa đủ khi tín hiệu tệp bị nhiễu. Mình cần đánh giá cả chất lượng hội thoại lẫn lịch sử tương tác.", en: "A low CPA isn’t enough when audience signals are noisy. I need to evaluate conversation quality and engagement history together."
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
      vi: "Thu hút khách hàng tiềm năng", en: "Lead Generation"
    },
    cardDescription: {
      vi: "Trong 2 tháng, 17,9 triệu đồng chi tiêu tạo 253 cuộc hội thoại, tiếp cận hơn 295 nghìn người và giữ được luồng khách quan tâm cho ngành ô tô cao cấp.", en: "Across two months, VND 17.9M in spend generated 253 conversations, reached more than 295K people, and sustained an inquiry flow for the premium automotive category."
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
        vi: "Đây là chiến dịch tin nhắn cho ngành ô tô cao cấp, nơi CPA cần được đọc cùng chất lượng hội thoại và việc chuyển tiếp thành công cho đội tư vấn.", en: "A messaging campaign for premium automotive, where CPA needed to be considered alongside conversation quality and successful handoff to the sales team.",
      },
      strategy: {
        vi: "Mình tách creative theo nhu cầu tìm hiểu xe, kiểm soát khu vực và tần suất, đồng thời theo dõi chất lượng phản hồi để không tối ưu chỉ theo số lượng tin nhắn.", en: "I split creatives by vehicle-research intent, controlled location and frequency, and tracked response quality so I wasn’t optimizing for message volume alone.",
      },
      results: {
        vi: "17,9 triệu đồng chi tiêu tạo 253 cuộc hội thoại, CPA trung bình 70.830 đồng. Chiến dịch tiếp cận 295.512 người, tạo 558.256 lượt hiển thị, CTR 1,43% và 4.272 lượt nhấp liên kết.", en: "VND 17.9M in spend generated 253 conversations at an average CPA of VND 70,830. The campaign reached 295,512 people, delivered 558,256 impressions, achieved a 1.43% CTR, and generated 4,272 link clicks.",
      },
      insight: {
        vi: "Với sản phẩm giá trị cao như ô tô, giữ độ tiếp cận đủ rộng song song với tối ưu hội thoại giúp mình không bỏ lỡ những khách còn đang tìm hiểu.", en: "For a high-value product like a car, keeping reach broad alongside conversation optimization helped me avoid missing buyers who were still researching.",
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
      vi: "Trong một tháng, gần 10 triệu đồng chi tiêu tạo 197 cuộc hội thoại ở nhóm tin nhắn và 1.679 lượt tương tác ở nhóm nội dung. Mỗi mục tiêu được báo cáo riêng.", en: "Within one month, nearly VND 10M in spend generated 197 conversations from the messaging campaign and 1,679 engagements from the content campaign, reported separately by objective."
    },
    evidenceSummary: {
      vi: "Tin nhắn và Tương tác được báo cáo tách biệt", en: "Messages and Engagement reported separately"
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
        vi: "Chiến dịch ô tô kết hợp mục tiêu Tin nhắn để thu nhu cầu và Tương tác để lan tỏa nội dung, nhưng mình không gộp hai loại kết quả vào cùng một chỉ số.", en: "An automotive campaign combined a Messages objective to capture demand with an Engagement objective to spread content, but I never merged the two result types into one metric.",
      },
      strategy: {
        vi: "Mình tách ngân sách, creative và KPI theo từng mục tiêu. Tin nhắn được đánh giá bằng CPA, tương tác bằng chi phí mỗi kết quả, và mình vẫn theo dõi độ phủ chung.", en: "I separated budget, creatives, and KPIs by objective. Messages were judged by CPA and engagement by cost per result, while I still tracked overall reach.",
      },
      results: {
        vi: "Nhóm Tin nhắn tạo 197 cuộc hội thoại, CPA 40.349 đồng. Nhóm Tương tác tạo 1.679 lượt tương tác, chi phí trung bình 1.222 đồng. Toàn chiến dịch tiếp cận 381.553 người và tạo 739.129 lượt hiển thị.", en: "The Messages campaign generated 197 conversations at a VND 40,349 CPA. The Engagement campaign produced 1,679 engagements at an average cost of VND 1,222; the overall activity reached 381,553 people and delivered 739,129 impressions.",
      },
      insight: {
        vi: "Báo cáo tách biệt theo mục tiêu giúp mình tránh đánh giá sai khi trộn tin nhắn có ý định cao với tương tác bề mặt.", en: "Reporting separately by objective kept me from misjudging performance by mixing high-intent messages with surface-level engagement.",
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
      vi: "Thu hút khách hàng tiềm năng", en: "Lead Generation"
    },
    cardDescription: {
      vi: "Mình kết nối Meta Ads, nội dung fanpage và landing page thành một luồng thu lead. Trong một tháng, chiến dịch tạo 51 cuộc hội thoại với CTR 4,44%.", en: "I connected Meta Ads, fanpage content, and a landing page into a single lead flow. In one month, the campaign generated 51 conversations with a 4.44% CTR."
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
        vi: "Dự án xây dựng cần một hành trình thống nhất từ nội dung fanpage và quảng cáo đến landing page, để khách hiểu dịch vụ trước khi để lại nhu cầu.", en: "A construction project needed a consistent journey from Facebook content and ads to a landing page, helping prospects understand the service before inquiring.",
      },
      strategy: {
        vi: "Mình đồng bộ thông điệp giữa fanpage, creative và landing page, tối ưu quảng cáo cho tin nhắn, và sắp xếp landing page theo nhu cầu, năng lực và lời kêu gọi hành động.", en: "I aligned messaging across the fanpage, creatives, and landing page, optimized ads for messages, and structured the landing page around needs, capabilities, and clear calls to action.",
      },
      results: {
        vi: "4,0 triệu đồng chi tiêu tạo 51 cuộc hội thoại, CPA 78.912 đồng. Chiến dịch tiếp cận 43.986 người, tạo 88.599 lượt hiển thị, CTR 4,44% và 1.871 lượt nhấp liên kết.", en: "VND 4.0M in spend generated 51 conversations at a VND 78,912 CPA. The campaign reached 43,986 people, delivered 88,599 impressions, achieved a 4.44% CTR, and generated 1,871 link clicks.",
      },
      accountScope: {
        vi: "Mình làm đầu mối với khách hàng, phối hợp nội dung Facebook, landing page, phê duyệt và paid media, đồng thời theo dõi tiến độ và báo cáo. Tổng phạm vi dự án khoảng 15 triệu đồng/tháng, gồm khoảng 4 triệu đồng chi tiêu quảng cáo.", en: "I was the client’s point of contact, coordinated Facebook content, the landing page, approvals, and paid media, and tracked progress and reporting. The total project scope was about VND 15M per month, including about VND 4M in ad spend.",
      },
      insight: {
        vi: "Với ngành cần nhiều niềm tin như xây dựng, việc nối liền quảng cáo, nội dung và landing page giúp khách có đủ thông tin trước khi để lại liên hệ.", en: "For a trust-heavy category like construction, connecting ads, content, and the landing page gives customers enough information before they leave their contact details.",
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
      vi: "Tuyển sinh đa nền tảng", en: "Multi-platform Enrollment"
    },
    cardDescription: {
      vi: "Kết hợp Facebook Messages và TikTok Click-to-Zalo trong một đợt tuyển sinh, với ngân sách quảng cáo khoảng 10–16 triệu đồng. Mình điều phối đồng bộ account, nội dung và quay dựng.", en: "Combined Facebook Messages and TikTok Click-to-Zalo in one enrollment campaign, with about VND 10–16M in ad spend. I coordinated account, content, and production together."
    },
    evidenceSummary: {
      vi: "Facebook sang Messenger và TikTok sang Zalo", en: "Facebook-to-Messenger and TikTok-to-Zalo"
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
        vi: "Đợt tuyển sinh cho một trung tâm Hàn ngữ và tư vấn du học cần kết hợp hội thoại trực tiếp trên Facebook với luồng chuyển sang Zalo từ TikTok.", en: "An enrollment campaign for Korean language and study-abroad consulting needed to combine direct Facebook conversations with TikTok traffic routed to Zalo.",
      },
      strategy: {
        vi: "Facebook tập trung vào Tin nhắn, TikTok tập trung vào Click-to-Zalo. Mình điều phối nội dung và lịch quay dựng theo từng nhóm chương trình, để CTA và điểm đến luôn thống nhất.", en: "Facebook focused on Messages, while TikTok focused on Click-to-Zalo. I coordinated content and filming/editing schedules by program group so calls to action and destinations always matched.",
      },
      results: {
        vi: "Mình hoàn thành hệ thống tuyển sinh hai nền tảng trong ngân sách quảng cáo khoảng 10–16 triệu đồng cho một tháng, với luồng Facebook sang Messenger và TikTok sang Zalo được theo dõi riêng. Mình sẽ bổ sung số liệu chi tiết sau khi có ảnh dashboard đã kiểm tra.", en: "I delivered a two-platform enrollment system within about VND 10–16M in ad spend for one month, with the Facebook-to-Messenger and TikTok-to-Zalo flows tracked separately. I’ll add detailed figures once the dashboard screenshots are verified.",
      },
      accountScope: {
        vi: "Mình làm đầu mối với khách hàng và lên kế hoạch tuyển sinh, đồng thời điều phối ngân sách, paid media, nội dung, lịch quay dựng, phê duyệt và tiến độ triển khai.", en: "I was the client’s point of contact and planned the enrollment campaign, while coordinating budget, paid media, content, filming/editing schedules, approvals, and delivery timelines.",
      },
      insight: {
        vi: "Dẫn lead về kênh nhắn tin mà từng nhóm đối tượng quen dùng (Messenger cho Facebook, Zalo cho TikTok) giúp tăng tỷ lệ phản hồi so với dồn tất cả vào một kênh.", en: "Routing leads to the messaging channel each audience already prefers (Messenger for Facebook, Zalo for TikTok) improves response rates compared to funneling everyone into one channel.",
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
      vi: "Mình phát triển một hệ thống nhận diện dùng nhất quán từ logo, guideline và banner đến bộ tài liệu bán hàng, biển chỉ dẫn và nội dung thương hiệu.", en: "I developed an identity system used consistently across the logo, guidelines, and banners through to sales materials, wayfinding signage, and brand copy."
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
        vi: "Mình chuẩn hóa cách dùng logo, màu sắc, bố cục và giọng điệu, rồi chuyển thành các ứng dụng thực tế để đội ngũ triển khai đồng bộ trên cả online và offline.", en: "I standardized logo usage, color, layout, and tone of voice, then turned them into practical applications so the team could execute consistently online and offline.",
      },
      results: {
        vi: "Mình hoàn thiện một hệ thống nhận diện có thể mở rộng, giúp các ấn phẩm mới luôn nhất quán mà vẫn linh hoạt theo từng mục đích truyền thông.", en: "I completed a scalable identity system that keeps new materials consistent while staying flexible for each communication purpose.",
      },
      insight: {
        vi: "Có bộ guideline rõ ràng ngay từ đầu giúp các hạng mục sau (banner, tài liệu, biển chỉ dẫn) được triển khai nhanh và đồng bộ hơn, thay vì thiết kế rời rạc từng lần.", en: "A clear guideline set from the start lets downstream materials (banners, sales docs, wayfinding) ship faster and stay consistent, instead of being designed piecemeal each time.",
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
      vi: "Mình xây logo và hệ thống nội dung nền tảng để thương hiệu có hình ảnh rõ ràng hơn, đồng thời giới thiệu dịch vụ nhất quán trên fanpage.", en: "I built a logo and a foundational content system to give the brand a clearer image and keep service messaging consistent on the fanpage."
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
        vi: "Thương hiệu cần một dấu hiệu nhận diện dễ ứng dụng, cùng cách giới thiệu dịch vụ rõ ràng, phù hợp với fanpage và các điểm chạm cơ bản.", en: "The brand needed an adaptable visual mark and a clear way to communicate services across the fanpage and core touchpoints.",
      },
      strategy: {
        vi: "Mình thiết kế logo dễ nhận biết và vẫn rõ nét khi thu nhỏ, đồng thời xây dựng nhóm chủ đề, cấu trúc bài viết và giọng điệu nhất quán.", en: "I designed a recognizable logo that stays sharp at small sizes, and set up content themes, post structures, and a consistent tone of voice.",
      },
      results: {
        vi: "Mình hoàn thiện nền tảng nhận diện và nội dung, giúp fanpage trình bày dịch vụ mạch lạc hơn và có sẵn khuôn mẫu để phát triển các bài viết tiếp theo.", en: "I completed the identity and content foundation, helping the fanpage present services more clearly, with ready-made templates for future posts.",
      },
      insight: {
        vi: "Với doanh nghiệp dịch vụ, một hệ thống nội dung nền tảng giúp giữ giọng thương hiệu nhất quán ngay cả khi số lượng bài đăng tăng lên.", en: "For a services business, a foundational content system keeps the brand voice consistent even as posting volume grows.",
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
      vi: "Mình lên kế hoạch, viết nội dung, thiết kế và sản xuất video để phòng khám có hệ thống truyền thông đồng bộ, dễ tiếp cận và phù hợp với từng nhóm nhu cầu.", en: "I planned, wrote, designed, and produced videos to give the clinic a consistent, accessible communication system suited to each group of needs."
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
        vi: "Mình phụ trách nội dung in-house cho một phòng khám da liễu, từ kế hoạch chủ đề đến bài viết, thiết kế và video cho truyền thông thường xuyên.", en: "I handled in-house content for a dermatology clinic, from topic planning to posts, design, and video for ongoing communication.",
      },
      strategy: {
        vi: "Mình xây kế hoạch theo nhóm dịch vụ và mối quan tâm của khách hàng, rồi phát triển từng thông điệp thành bài viết, thiết kế, kịch bản và video. Mình trực tiếp quay dựng để nội dung luôn nhất quán.", en: "I built the plan around service groups and customer concerns, then developed each message into posts, designs, scripts, and videos. I filmed and edited myself to keep content consistent.",
      },
      results: {
        vi: "Mình hoàn thiện quy trình sản xuất nội dung đa định dạng, giúp fanpage giữ hình ảnh đồng bộ, thông tin rõ ràng và có sẵn nền tảng tài sản để phát triển nội dung tiếp theo.", en: "I set up a multi-format content workflow that keeps the fanpage visually consistent and clear, with a base of assets ready for future content.",
      },
      insight: {
        vi: "Với phòng khám phục vụ nhiều nhu cầu khác nhau, đa dạng định dạng nội dung (bài viết, thiết kế, video) giúp tiếp cận đúng từng nhóm khách hơn là dùng một công thức chung.", en: "For a clinic serving varied patient needs, mixing content formats (copy, design, video) reaches each audience segment more precisely than a one-size-fits-all approach.",
      },
    },
    coverImage: "/work/dermatology-multi-format-content/thumb-brand.svg",
    coverVariant: "brand-content-creative", assets: [], confidential: true, dataStatus: "approved",
  },
];
