/* eslint-disable @next/next/no-img-element */
import type { PortfolioContent } from "../../data/content";
import { getPublicAssetUrl } from "../../lib/assets";

export function AboutSection({ content }: { content: PortfolioContent }) {
  return (
    <section className="about section-shell" id="about">
      <div className="about-label">
        <p className="kicker">{content.aboutKicker}</p>
        <div className="portrait-placeholder">
          <span aria-hidden="true">KHÁNH<br />ĐOAN</span>
          <img
            className="portrait-avatar"
            src={getPublicAssetUrl("/about/avatar.jpg")}
            alt="Khánh Đoan"
            width={640}
            height={640}
            loading="lazy"
            decoding="async"
          />
          <i aria-hidden="true">{content.experiences[0].role.toUpperCase()}</i>
        </div>
      </div>
      <div className="about-copy">
        <h2>{content.aboutTitle}</h2>
        <p>{content.aboutText}</p>
        <div className="principles-block">
          <p className="principles-label">{content.principlesLabel}</p>
          <ul className="principles">
            {content.principles.map((principle, index) => (
              <li key={principle}>
                <i aria-hidden="true">0{index + 1}</i>
                <div>
                  <strong>{principle}</strong>
                  <p>{content.principleDescriptions[index]}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
