// Search Unsplash for candidate photos per image slot and build contact sheets.
// Usage: UNSPLASH_ACCESS_KEY=... node search.mjs <outDir>
import fs from "node:fs";

const key = process.env.UNSPLASH_ACCESS_KEY;
const out = process.argv[2];
fs.mkdirSync(out, { recursive: true });

// [slot, query, orientation]
const slots = [
  ["hero", "indian woman portrait natural light", "portrait"],
  ["skin", "facial skincare treatment woman", "portrait"],
  ["medi-facials", "facial mask spa treatment", "portrait"],
  ["laser", "laser skin treatment clinic", "portrait"],
  ["hair", "woman long dark hair", "portrait"],
  ["non-surgical-aesthetics", "aesthetic clinic face treatment", "portrait"],
  ["permanent-makeup", "eyebrows closeup woman", "portrait"],
  ["body", "spa massage back treatment", "portrait"],
  ["advanced", "doctor patient consultation woman", "portrait"],
  ["salon", "hair salon woman styling", "portrait"],
  ["salon-hair", "hairdresser hair care", "portrait"],
  ["salon-nails", "manicure nails hands", "portrait"],
  ["branch-bengaluru", "calm minimal clinic interior", "portrait"],
  ["pcos-pigmentation", "skincare serum bottles", "landscape"],
  ["bengaluru-monsoon-hair", "monsoon rain india", "landscape"],
  ["bridal-skin-timeline", "indian bride", "landscape"],
  ["laser-hair-reduction-indian-skin", "laser hair removal", "landscape"],
  ["sunscreen-indian-skin", "sunscreen skin", "landscape"],
  ["postpartum-hair-fall", "mother baby", "landscape"],
  ["medi-facial-or-salon-facial", "facial treatment", "landscape"],
  ["microblading-or-powder-brows", "eyebrow microblading", "landscape"],
  ["first-consultation-at-vo2", "dermatologist consultation", "landscape"],
  ["caring-for-nail-extensions", "nail art", "landscape"],
];

const all = {};
let remaining = "?";
for (const [slot, query, orientation] of slots) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=12&orientation=${orientation}&content_filter=high&client_id=${key}`;
  const res = await fetch(url);
  remaining = res.headers.get("x-ratelimit-remaining");
  if (!res.ok) {
    console.log(`${slot}: HTTP ${res.status} (remaining ${remaining})`);
    continue;
  }
  const data = await res.json();
  const results = data.results
    .filter((p) => !p.premium && !p.plus && !String(p.urls?.raw).includes("plus.unsplash.com"))
    .map((p) => ({
      id: p.id,
      alt: p.alt_description || p.description || "",
      width: p.width,
      height: p.height,
      color: p.color,
      raw: p.urls.raw,
      small: p.urls.small,
      name: p.user.name,
      username: p.user.username,
      profile: p.user.links.html,
      page: p.links.html,
      downloadLocation: p.links.download_location,
    }));
  all[slot] = { query, orientation, results };
  console.log(`${slot.padEnd(34)} ${results.length} candidates`);
}
fs.writeFileSync(`${out}/candidates.json`, JSON.stringify(all, null, 2));
console.log("rate limit remaining:", remaining);

// Contact sheets, a few slots each
const names = Object.keys(all);
for (let i = 0; i < names.length; i += 4) {
  const group = names.slice(i, i + 4);
  const rows = group
    .map((slot) => {
      const cells = all[slot].results
        .map((c, j) => `<figure><img src="${c.small}"><figcaption>${slot} #${j + 1}</figcaption></figure>`)
        .join("");
      return `<h2>${slot} · “${all[slot].query}”</h2><div class="row ${all[slot].orientation}">${cells}</div>`;
    })
    .join("");
  fs.writeFileSync(
    `${out}/sheet${i / 4 + 1}.html`,
    `<!doctype html><meta charset=utf-8><style>body{margin:0;padding:12px;font:12px system-ui;background:#fff}h2{font-size:14px;margin:12px 0 6px}.row{display:grid;grid-template-columns:repeat(12,1fr);gap:6px}figure{margin:0}img{width:100%;display:block;object-fit:cover}.portrait img{aspect-ratio:3/4}.landscape img{aspect-ratio:4/3}figcaption{font-size:10px;padding-top:2px}</style>${rows}`,
  );
}
console.log("sheets:", Math.ceil(names.length / 4));
