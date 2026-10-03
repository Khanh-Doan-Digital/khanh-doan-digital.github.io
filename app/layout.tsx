import type { Metadata } from "next";
import "./globals.css";

export const dynamic = "force-static";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const title = "Khánh Đoan — Performance Marketing & Account Management";
const description =
  "Portfolio Performance Marketing & Account Management của Khánh Đoan — chiến lược paid media, tối ưu funnel, phân tích hiệu suất và điều phối account.";

// 1200×630 JPEG kept small so chat apps (Zalo, Messenger, WhatsApp) fetch it reliably.
// Rename the file when the artwork changes: platforms cache previews by image URL.
const shareImage = { url: `${siteUrl}/og-v3.jpg`, width: 1200, height: 630, type: "image/jpeg", alt: title };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Khánh Đoan" }],
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    title,
    description,
    type: "website",
    url: `${siteUrl}/`,
    siteName: "Khánh Đoan",
    locale: "vi_VN",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: shareImage.url, alt: shareImage.alt }],
  },
};

// Runs before first paint: gives each light section a different watercolor texture
// (--wash-1..6 in globals.css) and a random mirror, so the page varies on every visit.
// Without JS the CSS defaults apply.
const WASH_SECTIONS = ["about", "expertise", "experience", "contact"];
const WASH_COUNT = 6;
const randomWashScript = `(function(){try{
var s=${JSON.stringify(WASH_SECTIONS)},n=[],f=["none","scaleX(-1)","scaleY(-1)","scale(-1,-1)"],r=document.documentElement.style;
for(var i=1;i<=${WASH_COUNT};i++)n.push(i);
for(var i=n.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=n[i];n[i]=n[j];n[j]=t;}
s.forEach(function(k,i){r.setProperty("--wash-"+k,"var(--wash-"+n[i]+")");r.setProperty("--wash-"+k+"-flip",f[Math.floor(Math.random()*f.length)]);});
}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // the wash script sets inline custom properties on <html> before hydration
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: randomWashScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
