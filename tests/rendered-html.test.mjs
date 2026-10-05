import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const pagesRoot = new URL("../dist/pages/", import.meta.url);

test("exports the portfolio as a static GitHub Pages document", async () => {
  const html = await readFile(new URL("index.html", pagesRoot), "utf8");

  assert.match(html, /^<!DOCTYPE html>/i);
  assert.match(html, /<title>Khánh Đoan — Performance Marketing &amp; Account Management/i);
  assert.match(html, /Đọc dữ liệu - tìm insight,/);
  assert.match(html, /id="expertise"/);
  assert.match(html, /id="work"/);
  assert.match(html, /id="contact"/);
  assert.match(html, /\/_next\/static\//);
  const sectionOrder = ["home", "numbers", "about", "expertise", "work", "experience", "contact"]
    .map((id) => html.indexOf(`id="${id}"`));
  assert.ok(sectionOrder.every((position) => position >= 0));
  assert.deepEqual([...sectionOrder].sort((left, right) => left - right), sectionOrder);
  assert.equal((html.match(/data-expertise-kind="core"/g) ?? []).length, 4);
  assert.equal((html.match(/data-expertise-kind="supporting"/g) ?? []).length, 1);
  assert.equal((html.match(/data-case-tier="flagship"/g) ?? []).length, 5);
  assert.match(html, /Tối ưu tin nhắn và doanh thu/);
  // Flagship cases render as a stack of folders, each with its tab and two headline metrics.
  assert.equal((html.match(/class="case-folder-tab"/g) ?? []).length, 5);
  assert.equal((html.match(/data-metric-status="verified"/g) ?? []).length, 10);
  // Evidence-only cases have no list of their own; each capability opens them in the case modal.
  assert.doesNotMatch(html, /additional-evidence|data-evidence-case/);
  assert.equal((html.match(/<button[^>]*class="expertise-evidence-count"/g) ?? []).length, 5);
  assert.doesNotMatch(html, /project-carousel|PERFORMANCE \/ CREATIVE|ROAS ↗|CPL ↓|VTR ↗/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
  // Link previews on social and chat platforms depend on these tags.
  assert.match(html, /<meta name="description" content="[^"]{50,}"/);
  assert.match(html, /<meta property="og:image" content="[^"]+\/og-v3\.jpg"/);
  assert.match(html, /<meta property="og:url" content="[^"]+"/);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image"/);
});

test("includes GitHub Pages routing and Jekyll bypass files", async () => {
  await Promise.all([
    access(new URL("index.html", pagesRoot)),
    access(new URL("404.html", pagesRoot)),
    access(new URL(".nojekyll", pagesRoot)),
    access(new URL("og-v3.jpg", pagesRoot)),
    access(new URL("_next/", pagesRoot)),
  ]);
});

test("does not ship unapproved case copy in browser assets", async () => {
  const nextRoot = new URL("_next/", pagesRoot);
  const pending = [nextRoot];
  const files = [];

  while (pending.length > 0) {
    const directory = pending.pop();
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const url = new URL(entry.name, directory);
      if (entry.isDirectory()) pending.push(new URL(`${entry.name}/`, directory));
      else if (entry.name.endsWith(".js")) files.push(url);
    }
  }

  const browserSource = (await Promise.all(files.map((file) => readFile(file, "utf8")))).join("\n");
  assert.doesNotMatch(browserSource, /Course Registration Growth/);
  assert.doesNotMatch(browserSource, /🟨|\[___\]|⇔/);
});

test("ships the evidence viewer with Drive previews and renamed industries", async () => {
  const nextRoot = new URL("_next/", pagesRoot);
  const pending = [nextRoot];
  const sources = [];

  while (pending.length > 0) {
    const directory = pending.pop();
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const url = new URL(entry.name, directory);
      if (entry.isDirectory()) pending.push(new URL(`${entry.name}/`, directory));
      else if (entry.name.endsWith(".js")) sources.push(await readFile(url, "utf8"));
    }
  }

  // Case data reaches the browser through the page's serialized props; UI copy through the bundles.
  const shipped = [await readFile(new URL("index.html", pagesRoot), "utf8"), ...sources].join("\n");
  const ships = (text) => shipped.includes(text);
  // Evidence is embedded through Drive's preview page, one iframe at a time.
  assert.ok(ships("drive.google.com/file/d/"), "Drive preview URL");
  assert.ok(ships("16HXQNQBoobaUs2r96hGXXWeRClCY5H9W"), "Case 1 evidence file");
  assert.ok(ships("Đang bổ sung"), "pending evidence label");
  assert.ok(ships("hoanmydesign.com.vn"), "Case 15 landing page link");
  assert.ok(ships("Nhà ở xã hội"), "renamed Case 8 industry");
  assert.ok(!ships("Nước hoa cá nhân hóa") && !ships("Dịch vụ doanh nghiệp"), "old industry names");
});
