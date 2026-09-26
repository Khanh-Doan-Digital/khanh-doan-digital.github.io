"use client";

import { useEffect, useState } from "react";

import type { Language, PortfolioContent } from "../../data/content";
import { ArrowDownIcon, ArrowDownRightIcon, DownloadIcon, PlatformIcon, platforms } from "../ui/Icons";

function useCountUp(target: number, delay = 0) {
  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameId = 0;

    frameId = window.requestAnimationFrame(() => {
      setIsVisible(true);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setValue(target);
        return;
      }

      const duration = 950;
      const startTime = window.performance.now() + delay;

      const update = (currentTime: number) => {
        const progress = Math.min(Math.max((currentTime - startTime) / duration, 0), 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));

        if (progress < 1) frameId = window.requestAnimationFrame(update);
      };

      frameId = window.requestAnimationFrame(update);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [target, delay]);

  return { value, isVisible };
}

function AnimatedSpend() {
  const { value, isVisible } = useCountUp(600);

  return (
    <strong className={isVisible ? "board-spend is-visible" : "board-spend"} aria-label="VND 600M+">
      <span aria-hidden="true">{value}M</span><sup aria-hidden="true">+</sup>
    </strong>
  );
}

type BoardCountProps = {
  target: number;
  delay: number;
  format: (value: number) => string;
};

function BoardCount({ target, delay, format }: BoardCountProps) {
  const { value } = useCountUp(target, delay);

  return <strong aria-label={format(target)}><span aria-hidden="true">{format(value)}</span></strong>;
}

const formatPlatforms = (value: number) => value.toString().padStart(2, "0");
const formatIndustries = (value: number) => `${value}+`;

type HeroSectionProps = {
  content: PortfolioContent;
  language: Language;
};

export function HeroSection({ content, language }: HeroSectionProps) {
  const [descriptionLead, descriptionTail] = content.heroDescription.split("Khánh Đoan");
  const [tailBeforePlatforms, tailAfterPlatforms] = descriptionTail.split("{platforms}");
  // Keep punctuation right after the icons (e.g. ",") on the same line as them.
  const iconsPunctuation = tailAfterPlatforms.match(/^\S*/)?.[0] ?? "";
  const currentRole = content.experiences[0];

  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <p className="kicker reveal">{content.heroLabel}</p>
        <h1 className="reveal reveal-delay-1">
          {content.heroTitleA}<br />
          <em>{content.heroTitleB}</em>
        </h1>
        <p className="hero-description reveal reveal-delay-2">
          {descriptionLead}<strong className="hero-name">Khánh Đoan</strong>{tailBeforePlatforms}
          <span className="hero-platforms-group">
            <span className="hero-platforms">
              {platforms.map((platform) => <PlatformIcon key={platform} name={platform} />)}
            </span>
            {iconsPunctuation}
          </span>
          {tailAfterPlatforms.slice(iconsPunctuation.length)}
        </p>
        <div className="hero-actions reveal reveal-delay-3">
          <a className="primary-button" href="#work">{content.viewWork}<ArrowDownRightIcon /></a>
          <button className="text-button" type="button" title={content.cvSoon}>{content.download}<DownloadIcon /></button>
        </div>
      </div>

      <div className="performance-board-reveal reveal reveal-delay-2">
        <div className="performance-board-stage">
          <div className="performance-board" aria-label={content.livePanel}>
            <div className="board-role">
              <strong>{currentRole.role}</strong>
              <span>{content.since} {currentRole.start}</span>
            </div>
            <div className="board-main">
              <p>{content.monthlySpend}</p>
              <div className="board-spend-row">
                <AnimatedSpend key={language} />
                <span className="board-currency">
                  <span>{content.monthlySpendCurrency.slice(0, 1)}</span>{content.monthlySpendCurrency.slice(1)}
                </span>
              </div>
            </div>
            <div className="board-scope">
              <p>{content.scopeLabel}</p>
              <ol>
                {content.scopeSteps.map((step, index) => (
                  <li key={step}><b>{String(index + 1).padStart(2, "0")}</b><span>{step}</span></li>
                ))}
              </ol>
            </div>
            <div className="board-grid">
              <div>
                <span>{content.platforms}</span>
                <BoardCount key={language} target={platforms.length} delay={110} format={formatPlatforms} />
                <small>META · TIKTOK · GOOGLE · YOUTUBE</small>
              </div>
              <div>
                <span>{content.industries}</span>
                <BoardCount key={language} target={content.industriesCount} delay={220} format={formatIndustries} />
                <small>{content.industriesExamples}</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#numbers"><ArrowDownIcon />{content.scroll}</a>
    </section>
  );
}
