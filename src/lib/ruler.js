// 產生 ASCII 年份尺（純 ASCII：+ - O，確保等寬字型下刻度與標籤對齊）。
// scale = 每一年幾個字元；labels = 'ticks'（每個刻度都標，撞到就換到下排）或 'ends'（只標頭尾）。
export function buildRuler({ start, end, ticks, scale, labels = 'ticks' }) {
  const width = (end - start) * scale + 1; // 刻度位置 0..width-1，最後一格是「現在」
  const line = Array(width - 1).fill('-');
  for (const y of ticks) {
    const i = (y - start) * scale;
    if (i >= 0 && i < width - 1) line[i] = '+';
  }
  line[0] = '+';

  const rowWidth = width + 2;
  const above = Array(rowWidth).fill(' ');
  const below = Array(rowWidth).fill(' ');
  const fits = (row, at, len) => {
    for (let i = Math.max(0, at - 1); i <= Math.min(rowWidth - 1, at + len); i++) if (row[i] !== ' ') return false;
    return at >= 0 && at + len <= rowWidth;
  };
  const put = (row, text, at) => [...text].forEach((ch, k) => { row[at + k] = ch; });

  const years = labels === 'ends' ? [start, end] : [...ticks.filter((y) => y > start), start, end].sort((a, b) => a - b);
  for (const y of years) {
    const text = String(y);
    const pos = (y - start) * scale;
    let at;
    if (y === start) at = 0;
    else if (labels === 'ends') at = width - text.length;
    else at = Math.min(pos - Math.floor(text.length / 2), rowWidth - text.length);
    if (fits(above, at, text.length)) put(above, text, at);
    else if (labels !== 'ends' && fits(below, at, text.length)) put(below, text, at);
  }
  return {
    above: above.join('').trimEnd(),
    line: line.join(''),
    below: below.join('').trimEnd(),
  };
}
