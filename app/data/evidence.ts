import type { CaseEvidence, CaseEvidenceFile, LocalizedText } from "./types";

const text = (vi: string, en: string = vi): LocalizedText => ({ vi, en });

const file = (driveId: string, label?: LocalizedText): CaseEvidenceFile => ({ driveId, label });

function image(title: LocalizedText, files: string | CaseEvidenceFile[], platform?: string): CaseEvidence {
  return { kind: "image", title, platform, files: typeof files === "string" ? [file(files)] : files };
}

// Written posts and copy: shown like an image, listed under "Content".
function post(title: LocalizedText, driveId: string): CaseEvidence {
  return { ...image(title, driveId), group: "content" };
}

function video(title: LocalizedText, driveId?: string, note?: LocalizedText): CaseEvidence {
  return { kind: "video", title, files: driveId ? [file(driveId)] : [], note };
}

const metaReport = text("Báo cáo Meta Ads", "Meta Ads report");
const googleReport = text("Báo cáo Google Ads", "Google Ads report");
const tiktokReport = text("Báo cáo TikTok Ads", "TikTok Ads report");
const numbered = (vi: string, en: string, index: number) => {
  const suffix = ` · ${String(index).padStart(2, "0")}`;
  return text(vi + suffix, en + suffix);
};
const month = (index: number) => text(`Tháng ${index}`, `Month ${index}`);

// Evidence per case ID, in the order it is listed in the viewer. Files live on Google Drive
// and must stay shared as "anyone with the link" for the embedded preview to load.
export const caseEvidence: Record<number, CaseEvidence[]> = {
  1: [
    image(metaReport, "16HXQNQBoobaUs2r96hGXXWeRClCY5H9W", "Meta"),
    image(numbered("Báo cáo Google Ads", "Google Ads report", 1), "1uzjXkXguRZVuXTqyFF-hMIyUGUClJxFP", "Google"),
    image(numbered("Báo cáo Google Ads", "Google Ads report", 2), "1qXE1_QxDDe2FCquG97G57TwBxYKi6l47", "Google"),
    image(tiktokReport, "13FNsKAucThYPNZdWHu23x8FwvCHULS8v", "TikTok"),
  ],
  2: [
    image(metaReport, "1DphKmGPeI0i2ybYaKzSrnKl4yXiM7irv", "Meta"),
    image(googleReport, [
      file("1DxRbR5SX5TFiNxX9jNT1nujcFgzjEbPb", month(1)),
      file("1xSiRrTdoLufmhGWIM2Gg6Jnm86KqZuKn", month(2)),
    ], "Google"),
    image(tiktokReport, [
      file("1_9uD1aQo7Uglc5b6f1glnA9rb6iY9iYU", month(1)),
      file("1ozFqH1blKyOE-dKF32B639UfqdfT8maT", month(2)),
      file("1HE-cWUQ4TuzGKCiHE49F6b9cTuySL2JC", month(3)),
    ], "TikTok"),
  ],
  3: [
    image(text("Báo cáo chiến dịch", "Campaign report"), "1oyoG99iQ6EXyOPQav7KZZ_Wy-0dPCfqy"),
  ],
  4: [
    image(metaReport, "1bKEG8sYBOf1FDTb3_E3LcoAN9oXKn-CH", "Meta"),
    image(tiktokReport, [
      file("1THr5h5CQfSSl_sD_UUCDsK2PeemIEcM1", text("Lượt theo dõi", "Follows")),
      file("1lefW1WlaXN23mDh1vZTbIx5WyISpivCE", text("Độ phủ", "Reach")),
    ], "TikTok"),
    video(text("Video sản xuất", "Produced video"), undefined, text("Managed project & coordinated video production")),
  ],
  5: [
    image(text("Báo cáo Meta Ads tổng quan", "Meta Ads overview report"), "1SZQeFzSPsLqy6kzfdx7DgOUuHw8f0OIv", "Meta"),
    image(tiktokReport, "1bTwu0W7hA1-n9QUXT_YuLGotMWuDK4F5", "TikTok"),
  ],
  6: [
    image(metaReport, "1fkvYy56RTxOjSkHh2-uYYjnyHw1NP0X-", "Meta"),
    image(tiktokReport, "1kExJmX6KDYP91wmv9V6LLcyvjgtlmNSf", "TikTok"),
  ],
  7: [
    image(metaReport, "1DIjd38Nv_UDY5jDTDxMrLbn0a07rDVWE", "Meta"),
    image(tiktokReport, "1sgd0P-BFTCiqsAfWs9TyKru0fsK0JTs2", "TikTok"),
  ],
  8: [
    image(text("Meta Ads · Đăng ký trên landing page", "Meta Ads · Landing page registrations"), "1PVsT_fjkVFXzbU5ykRLNSvp7WLRb0WKW", "Meta"),
    image(text("Meta Ads · Tin nhắn", "Meta Ads · Messages"), "1RMncOt2R80k2w9ZvLuUfV6Hw6_bpoBN4", "Meta"),
  ],
  9: [
    image(metaReport, "18CDkThKcx4u7NoUBNHt9_JayDMJUMEkz", "Meta"),
    image(text("TikTok Ads · Click về Zalo", "TikTok Ads · Clicks to Zalo"), "1chrjxn_s86kZTsOVs3vyHmFOlNistwT8", "TikTok"),
    image(text("TikTok Live"), "1xN56d1w23NdFYZYiMwsDT6_yiZ-2NVec", "TikTok"),
  ],
  10: [image(metaReport, "13lTjhBwO4QoddzR0I8JBAIsx5liiBz36", "Meta")],
  11: [image(metaReport, "1r2PzssQlT1dK9wxFeEOZxDj1rRC4KjGq", "Meta")],
  12: [image(metaReport, "1Aka21a_ajTjAOEL1LfET11aLAP5DRUXP", "Meta")],
  13: [image(metaReport, "1x7464JkPwt1YlXeXxBXqf9-XnIKvdxWR", "Meta")],
  14: [image(metaReport, "1KMv_Wy3BVuBy9I5P2SeAMxbdoD6hN8Xw", "Meta")],
  15: [
    image(metaReport, "1B0gghYbbQBAMO2zp-dRIUfBEIPuTDkzN", "Meta"),
    {
      kind: "link",
      title: text("Landing page mình thực hiện", "Landing page I built"),
      files: [],
      href: "https://hoanmydesign.com.vn/",
    },
  ],
  16: [
    image(metaReport, "1ctwLdhIsXtSikXKDnUfoEVrFXi7KguH7", "Meta"),
    image(tiktokReport, "1HXdO3Bru7y2gQa9jpHicHJlVPE5GR92j", "TikTok"),
  ],
  17: [
    image(text("Mockup bộ nhận diện", "Brand identity mockup"), "1LJsnryAqFbPg4-7TS7lgY8yRqJlAm6mV"),
    image(text("Bài thuyết trình", "Presentation deck"), "1K3g5OLtDI_oDeZs4YdPfPqx3W2xx5_Ns"),
    image(text("Logo"), "1vPDPG71oIEjO61r0Ky6T6LI5ekqTPH1j"),
    image(text("Banner phòng họp", "Meeting room banner"), "1PlJzcUgfeKWbObPdn1GpOUo8xzAsDHNv"),
    image(numbered("Ấn phẩm Golf Park", "Golf Park artwork", 1), "1UZ_05TXVpr_-ShlhpYwR1aI0cBuQCMLa"),
    image(numbered("Ấn phẩm Golf Park", "Golf Park artwork", 2), "1PJywBg6zW_z1Vu48VBpqHO90wgt6abb6"),
    image(text("Ấn phẩm The Edu House", "The Edu House artwork"), "1ZRgNYbR1nwE1KE9Uxg9YKKEw66_YNzju"),
    post(numbered("Bài viết nội dung", "Content post", 1), "1u97QX0utDkE_qdme8FpCmvcYCKUV_BHl"),
    post(numbered("Bài viết nội dung", "Content post", 2), "1hMk7aS-W2_i_pPQeJUmgT0PrqfghuwKz"),
  ],
  18: [
    image(text("Logo"), "1hkliwVixoItMtBlun3oJM19yjG_p24pR"),
    image(numbered("Thiết kế", "Design", 1), "1HIrAQAgUoxUt9D_chSsNlIObPySyEtb3"),
    post(numbered("Bài viết nội dung", "Content post", 1), "1WS_3-3tr7ElIm0xS7ecUvpwNryCfRoL4"),
    image(numbered("Thiết kế", "Design", 2), "1VkvkY5GUpwUQCGBsMN58jFILRpKuYuPZ"),
    post(numbered("Bài viết nội dung", "Content post", 2), "1pM2NfKKIr44B3Qj6lMbjnqHmuvYhtYJT"),
    image(numbered("Thiết kế", "Design", 3), "1dflKkFd_GEPmWSESIj94fg1_i5oTAnZy"),
    image(numbered("Thiết kế", "Design", 4), "1uQiIiiNaIJn2PiJQ7iVW9MchYJuc8xmN"),
  ],
  19: [
    ...[
      "1HsxBrMyR3QTu43Udj7GSBdWIjpbmELMo",
      "1fXKRAwFuA4xL-mTKUIv5gTbuow2lJWGY",
      "1fqFW8BeepjxgA45i8MdUZaiJQM0VyUyP",
      "1Ry5NlSSPkEsrPItgQ4ExNo-Tl0SXSaPA",
      "1oYMCrMSyhuqE5rXukyFyS5HM5AeLci-Z",
      "1HTd1xqKfrfHDP0bmrh2Ef_F84Js1U-aC",
      "1ZY0GGbkcrod8engdsh8g5yMwB7oU7JPT",
      "1i_q67WBEs4RTQKz5SOdmErVDrKeTnGwp",
      "1PgA7bd1uT23KlPeCjYhaU3nVfe5EMJqP",
      "1Zb44gal-KySpZA0_b4NgiaUW1BcSvxSr",
      "1xZwpW_rspiPf1rI-wHKkU04PXK1ud3Vg",
    ].map((driveId, index) => post(numbered("Bài viết & thiết kế", "Copy & design", index + 1), driveId)),
    ...[
      "1jmdeooC0puqshDuVFM20colkpm4DjbZu",
      "1fHy-W7LuJPF9cXAXWtrdc2SEidUgGD0s",
      "1aIwEOe612pLD1hVr44wK56-DQFQNE88I",
      "1wdy7iTziu47TG--eW5Xg9TUahRwljtkG",
      "1Ro0Ty5BpyilfxVTEBMcN-Fbre4oc7Dl3",
    ].map((driveId, index) => video(numbered("Video quay & dựng", "Shot & edited video", index + 1), driveId)),
  ],
};
