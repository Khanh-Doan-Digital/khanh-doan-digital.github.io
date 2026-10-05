"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

import type { Language, PortfolioContent } from "../../data/content";
import type { CaseEvidence, CaseEvidenceGroup } from "../../data/types";
import { isPlatform, PlatformIcon } from "../ui/Icons";

type CaseEvidenceViewerProps = {
  content: PortfolioContent;
  evidence: CaseEvidence[];
  language: Language;
  // False while the header is still sliding open, so the iframe only loads once it has room.
  ready: boolean;
};

// The order of the tree's branches; items keep their data order within a branch.
const GROUP_ORDER: CaseEvidenceGroup[] = ["image", "content", "video", "link"];

const getGroup = (item: CaseEvidence): CaseEvidenceGroup => item.group ?? item.kind;
const getDrivePreviewUrl = (driveId: string) => `https://drive.google.com/file/d/${driveId}/preview`;
const pad = (value: number) => String(value).padStart(2, "0");

function EvidenceKindIcon({ kind }: { kind: CaseEvidence["kind"] }) {
  return (
    <svg className="case-evidence-kind" viewBox="0 0 18 18" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {kind === "image" && <path d="M3 4.5h12v9H3zM3 11.5l3.5-3 3 2.5 2-1.5 3.5 3M11.75 7.25h.01" />}
      {kind === "video" && <path d="M3 4.5h12v9H3zM7.5 7v4l3.5-2z" />}
      {kind === "link" && <path d="M7.5 10.5a3 3 0 0 0 4.2 0l2-2a3 3 0 0 0-4.2-4.2l-.7.7M10.5 7.5a3 3 0 0 0-4.2 0l-2 2a3 3 0 0 0 4.2 4.2l.7-.7" />}
    </svg>
  );
}

export function CaseEvidenceViewer({ content, evidence, language, ready }: CaseEvidenceViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fileIndex, setFileIndex] = useState(0);
  // The Drive file whose iframe has finished loading; anything else still shows the loader.
  const [loadedId, setLoadedId] = useState<string | null>(null);
  // Narrow screens keep the list in a sheet opened from the "more" button.
  const [menuOpen, setMenuOpen] = useState(false);
  const [collapsedGroups, setCollapsedGroups] = useState<CaseEvidenceGroup[]>([]);
  const listRef = useRef<HTMLUListElement | null>(null);

  // Evidence as a tree: one branch per group, and `ordered` is the same items flattened in display order.
  const { groups, ordered } = useMemo(() => {
    const branches = GROUP_ORDER
      .map((id) => ({ id, items: evidence.filter((item) => getGroup(item) === id) }))
      .filter((branch) => branch.items.length > 0);
    return { groups: branches, ordered: branches.flatMap((branch) => branch.items) };
  }, [evidence]);

  const total = ordered.length;
  const active = ordered[activeIndex];
  const activeFile = active.files[fileIndex];
  const pending = active.kind !== "link" && active.files.length === 0;
  const groupLabels: Record<CaseEvidenceGroup, string> = {
    image: content.evidenceImage,
    content: content.evidenceContent,
    video: content.evidenceVideo,
    link: content.evidenceLink,
  };

  const select = (index: number) => {
    const group = getGroup(ordered[index]);
    // Stepping onto an item inside a collapsed branch opens that branch.
    setCollapsedGroups((current) => current.filter((id) => id !== group));
    setActiveIndex(index);
    setFileIndex(0);
    setMenuOpen(false);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        // Close the sheet first; the modal's own Escape handling must not run for this press.
        event.preventDefault();
        event.stopPropagation();
        setMenuOpen(false);
        return;
      }
      const direction = event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1
        : event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : 0;
      if (direction === 0 || total < 2) return;
      event.preventDefault();
      const next = (activeIndex + direction + total) % total;
      const group = getGroup(ordered[next]);
      setCollapsedGroups((current) => current.filter((id) => id !== group));
      setActiveIndex(next);
      setFileIndex(0);
    };

    window.addEventListener("keydown", onKeyDown, true);
    return () => window.removeEventListener("keydown", onKeyDown, true);
  }, [activeIndex, menuOpen, ordered, total]);

  // Keep the active row visible without scrollIntoView, which would also scroll the clipped header.
  useEffect(() => {
    const list = listRef.current;
    const item = list?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!list || !item) return;
    const top = item.getBoundingClientRect().top - list.getBoundingClientRect().top + list.scrollTop;
    if (top < list.scrollTop) list.scrollTop = top;
    else if (top + item.offsetHeight > list.scrollTop + list.clientHeight) list.scrollTop = top + item.offsetHeight - list.clientHeight;
  }, [activeIndex]);

  return (
    <div className="case-evidence" data-menu-open={menuOpen ? "true" : undefined}>
      <div className="case-evidence-rail">
        <p className="case-evidence-heading"><span>{content.evidenceLabel}</span><span>{total}</span></p>
        <ul className="case-evidence-list" ref={listRef} aria-label={content.evidenceList}>
          {groups.map((group) => {
            const open = !collapsedGroups.includes(group.id);
            const firstIndex = ordered.indexOf(group.items[0]);
            return (
              <li className="case-evidence-group" key={group.id} style={{ "--i": firstIndex } as CSSProperties}>
                <button
                  className="case-evidence-branch"
                  type="button"
                  aria-expanded={open}
                  onClick={() => setCollapsedGroups((current) => (
                    open ? [...current, group.id] : current.filter((id) => id !== group.id)
                  ))}
                >
                  <svg viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M4.5 2.5 8 6l-3.5 3.5" />
                  </svg>
                  <span>{groupLabels[group.id]}</span>
                  <em>{group.items.length}</em>
                </button>
                {open && (
                  <ul>
                    {group.items.map((item, itemIndex) => {
                      const index = firstIndex + itemIndex;
                      const itemPending = item.kind !== "link" && item.files.length === 0;
                      return (
                        <li key={`${item.title.en}-${index}`} style={{ "--i": index + 1 } as CSSProperties}>
                          <button
                            className="case-evidence-leaf"
                            type="button"
                            aria-current={index === activeIndex ? "true" : undefined}
                            data-pending={itemPending ? "true" : undefined}
                            onClick={() => select(index)}
                          >
                            <span className="case-evidence-index">{pad(index + 1)}</span>
                            <span className="case-evidence-name">
                              {item.title[language]}
                              {itemPending && <small>{content.evidencePending}</small>}
                            </span>
                            {item.platform && isPlatform(item.platform)
                              ? <PlatformIcon name={item.platform} />
                              : <EvidenceKindIcon kind={item.kind} />}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {menuOpen && (
        <button className="case-evidence-scrim" type="button" aria-label={content.close} onClick={() => setMenuOpen(false)} />
      )}

      <div className="case-evidence-stage">
        <div className="case-evidence-bar">
          <button
            className="case-evidence-menu"
            type="button"
            aria-expanded={menuOpen}
            aria-label={content.evidenceList}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true" focusable="false">
              <circle cx="3" cy="8" r="1.4" /><circle cx="8" cy="8" r="1.4" /><circle cx="13" cy="8" r="1.4" />
            </svg>
          </button>
          <p aria-live="polite"><span>{pad(activeIndex + 1)}/{pad(total)}</span><strong>{active.title[language]}</strong></p>
          {total > 1 && (
            <div className="case-evidence-step">
              <button type="button" onClick={() => select((activeIndex - 1 + total) % total)} aria-label={content.previousEvidence}>←</button>
              <button type="button" onClick={() => select((activeIndex + 1) % total)} aria-label={content.nextEvidence}>→</button>
            </div>
          )}
        </div>

        {active.files.length > 1 && (
          <div className="case-evidence-tabs">
            {active.files.map((file, index) => (
              <button
                type="button"
                aria-pressed={index === fileIndex}
                key={file.driveId}
                onClick={() => setFileIndex(index)}
              >
                {file.label?.[language] ?? index + 1}
              </button>
            ))}
          </div>
        )}

        <div className="case-evidence-frame" data-loaded={activeFile && loadedId === activeFile.driveId ? "true" : undefined}>
          {pending && (
            <div className="case-evidence-empty">
              <EvidenceKindIcon kind={active.kind} />
              <strong>{content.evidencePending}</strong>
              <p>{content.evidencePendingText}</p>
            </div>
          )}
          {active.kind === "link" && active.href && (
            <div className="case-evidence-empty">
              <EvidenceKindIcon kind="link" />
              <strong>{active.title[language]}</strong>
              <p>{new URL(active.href).hostname}</p>
              <a className="case-evidence-open" href={active.href} target="_blank" rel="noopener noreferrer">
                <span>{content.openLink}</span>
                <svg viewBox="0 0 14 14" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 3h6v6M11 3 3.5 10.5" />
                </svg>
              </a>
            </div>
          )}
          {activeFile && (
            <>
              {/* Drive's own toolbar in the preview already offers "open in a new window". */}
              {ready && (
                <iframe
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  key={activeFile.driveId}
                  onLoad={() => setLoadedId(activeFile.driveId)}
                  src={getDrivePreviewUrl(activeFile.driveId)}
                  title={active.title[language]}
                />
              )}
              <p className="case-evidence-loader" role="status"><span aria-hidden="true" />{content.evidenceLoading}</p>
            </>
          )}
        </div>

        {active.note && <p className="case-evidence-note">{active.note[language]}</p>}
      </div>
    </div>
  );
}
