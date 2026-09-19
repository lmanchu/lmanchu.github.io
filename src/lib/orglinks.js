// 把身分資料裡的組織名稱換成指向官網的連結。
// 名單在 src/data/site.js 的 `orgs`；沒列進去的組織（查不到可信官網者）維持純文字。
import { orgs } from '../data/site.js';

const HTML = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
const escHtml = (s) => s.replace(/[&<>"]/g, (c) => HTML[c]);
const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// 每種語言各自編一條 regex。長的樣式排前面，交替比對才不會讓 IrisGo 先吃掉 IrisGo.AI。
function compile(lang) {
  const pats = [];
  for (const o of orgs) for (const p of o[lang] ?? []) pats.push({ p, href: o.href });
  pats.sort((a, b) => b.p.length - a.p.length);
  return { pats, rx: new RegExp(`(${pats.map((x) => escRe(x.p)).join('|')})`, 'g') };
}
const COMPILED = { zh: compile('zh'), en: compile('en') };

// 同一段文字裡同一個組織只連第一次，避免「AI Fund 驗證題目…由 AI Fund 領投」連兩次。
// scope 讓多段文字（例如完整版介紹的四段）共用同一份「已連過」記錄。
//
// 🔴 共用 scope 的幾段一定要在 frontmatter 依顯示順序先算完，不要丟進 .astro 模板裡邊渲染邊算：
// 元件與運算式的求值順序不保證，2026-09-18 實測年表 1994 那則就是 lines 先跑掉，
// 結果標題的 CCNS 沒連、內文第二次出現的才連。
export const newScope = () => ({ zh: new Set(), en: new Set() });

// 一組中英文字 → 一組已連結化的 HTML。
export const linkPair = ({ zh, en }, scope) => ({
  zh: linkOrgs(zh, 'zh', scope),
  en: linkOrgs(en, 'en', scope),
});

export function linkOrgs(text, lang, scope) {
  if (!text) return '';
  const { pats, rx } = COMPILED[lang];
  const seen = scope?.[lang] ?? new Set();
  let out = '';
  let last = 0;
  let m;
  rx.lastIndex = 0;
  while ((m = rx.exec(text)) !== null) {
    const hit = pats.find((x) => x.p === m[1]);
    out += escHtml(text.slice(last, m.index));
    if (hit && !seen.has(hit.href)) {
      seen.add(hit.href);
      out += `<a class="org" href="${hit.href}" target="_blank" rel="noopener">${escHtml(m[1])}</a>`;
    } else {
      out += escHtml(m[1]);
    }
    last = m.index + m[1].length;
  }
  return out + escHtml(text.slice(last));
}
