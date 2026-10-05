"use client";

import { useEffect, useRef, useState } from "react";

type RoadmapPoint = { x: number; y: number };

// Where each milestone sits on the two paths, in the SVG's 100 x 1000 viewBox.
const WIDE_MILESTONES: RoadmapPoint[] = [
  { x: 64, y: 125 },
  { x: 36, y: 375 },
  { x: 64, y: 625 },
  { x: 36, y: 875 },
];
const COMPACT_MILESTONES: RoadmapPoint[] = [125, 375, 625, 875].map((y) => ({ x: 50, y }));
// Matches the breakpoint in globals.css where the roadmap switches to its compact path.
const COMPACT_QUERY = "(max-width: 820px)";

function getRoadmapMilestoneThresholds(path: SVGPathElement, milestonePoints: RoadmapPoint[]) {
  const totalLength = path.getTotalLength();
  const samples = 1200;

  return milestonePoints.map((target) => {
    let closestLength = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    for (let index = 0; index <= samples; index += 1) {
      const length = totalLength * (index / samples);
      const point = path.getPointAtLength(length);
      const distance = Math.hypot(point.x - target.x, point.y - target.y);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestLength = length;
      }
    }

    return closestLength / totalLength;
  });
}

export function useExperienceRoadmap() {
  const roadmapRef = useRef<HTMLDivElement | null>(null);
  const activeIndexRef = useRef(-1);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const roadmap = roadmapRef.current;
    if (!roadmap) return;

    let frameId = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactLayout = window.matchMedia(COMPACT_QUERY);
    // One track per layout; only the one matching the current breakpoint is visible and drawn.
    const tracks = ([["wide", WIDE_MILESTONES], ["compact", COMPACT_MILESTONES]] as const).map(([name, milestones]) => {
      const path = roadmap.querySelector<SVGPathElement>(`.roadmap-path-${name}`);
      if (!path) return null;
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      return { path, length, thresholds: getRoadmapMilestoneThresholds(path, milestones) };
    });

    const updateRoadmap = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        const track = tracks[compactLayout.matches ? 1 : 0];
        const progressPath = track?.path;
        const pathLength = track?.length ?? 1;
        const thresholds = track?.thresholds ?? [0.125, 0.375, 0.625, 0.875];

        if (reducedMotion.matches) {
          roadmap.style.setProperty("--roadmap-progress", "1");
          if (progressPath) progressPath.style.strokeDashoffset = "0";
          activeIndexRef.current = thresholds.length - 1;
          setActiveIndex(thresholds.length - 1);
          return;
        }

        const rect = roadmap.getBoundingClientRect();
        const revealLine = window.innerHeight * 0.72;
        const finishLine = window.innerHeight * 0.28;
        const travelDistance = Math.max(rect.height + revealLine - finishLine, 1);
        const progress = Math.min(Math.max((revealLine - rect.top) / travelDistance, 0), 1);
        const nextActiveIndex = thresholds.reduce(
          (active, threshold, index) => progress >= threshold ? index : active,
          -1,
        );

        roadmap.style.setProperty("--roadmap-progress", progress.toFixed(4));
        if (progressPath) {
          progressPath.style.strokeDashoffset = `${pathLength * (1 - progress)}`;
        }

        const viewportHeight = window.innerHeight;
        const fadeDistance = Math.max(viewportHeight * 0.42, 280);
        const steps = roadmap.querySelectorAll<HTMLElement>(".roadmap-step");

        steps.forEach((step, index) => {
          const card = step.querySelector<HTMLElement>(".experience-card");
          const cardTop = card?.getBoundingClientRect().top ?? step.getBoundingClientRect().top;
          const visibility = Math.min(Math.max((viewportHeight - cardTop) / fadeDistance, 0), 1);
          const isCurrent = index === nextActiveIndex;
          const isPast = index < nextActiveIndex;
          const opacity = isCurrent ? 1 : isPast ? 0.9 : 0.08 + visibility * 0.82;
          const scale = isCurrent ? 1.015 : isPast ? 0.985 : 0.94 + visibility * 0.055;
          const shift = isCurrent || isPast ? 0 : (1 - visibility) * 42;
          const milestoneOpacity = index <= nextActiveIndex ? 1 : 0.18 + visibility * 0.58;
          const milestoneScale = index <= nextActiveIndex ? 1 : 0.72 + visibility * 0.22;

          step.style.setProperty("--step-opacity", opacity.toFixed(3));
          step.style.setProperty("--step-scale", scale.toFixed(3));
          step.style.setProperty("--step-shift", `${shift.toFixed(2)}px`);
          step.style.setProperty("--milestone-opacity", milestoneOpacity.toFixed(3));
          step.style.setProperty("--milestone-scale", milestoneScale.toFixed(3));
        });

        if (nextActiveIndex !== activeIndexRef.current) {
          activeIndexRef.current = nextActiveIndex;
          setActiveIndex(nextActiveIndex);
        }
      });
    };

    const resizeObserver = new ResizeObserver(updateRoadmap);
    resizeObserver.observe(roadmap);
    updateRoadmap();
    window.addEventListener("scroll", updateRoadmap, { passive: true });
    window.addEventListener("resize", updateRoadmap);
    reducedMotion.addEventListener("change", updateRoadmap);
    compactLayout.addEventListener("change", updateRoadmap);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updateRoadmap);
      window.removeEventListener("resize", updateRoadmap);
      reducedMotion.removeEventListener("change", updateRoadmap);
      compactLayout.removeEventListener("change", updateRoadmap);
    };
  }, []);

  return { roadmapRef, activeIndex };
}
