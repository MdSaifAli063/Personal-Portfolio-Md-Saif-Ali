/**
 * Generates custom GitHub contribution data spelling "MD SAIF ALI" in a 7-row dot-matrix
 */
export interface ContributionItem {
  date: string;
  count: number;
  level: number;
}

const FONT_7: Record<string, number[][]> = {
  M: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  D: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  S: [
    [0, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  A: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  I: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  F: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  L: [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
  ],
  ' ': [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ],
};

export function generateNameContributions(): ContributionItem[] {
  const text = ['M', 'D', ' ', 'S', 'A', 'I', 'F', ' ', 'A', 'L', 'I'];
  const grid: number[][] = Array.from({ length: 7 }, () => []);

  // 2 leading blank columns for breathing room
  for (let r = 0; r < 7; r++) grid[r].push(0, 0);

  text.forEach((char, idx) => {
    const glyph = FONT_7[char] || FONT_7[' '];
    for (let r = 0; r < 7; r++) {
      grid[r].push(...glyph[r]);
      if (char !== ' ' && idx < text.length - 1 && text[idx + 1] !== ' ') {
        grid[r].push(0);
      }
    }
  });

  // 2 trailing blank columns
  for (let r = 0; r < 7; r++) grid[r].push(0, 0);

  const totalCols = grid[0].length;
  const contributions: ContributionItem[] = [];
  // Sunday Jan 5, 2025
  const start = new Date('2025-01-05T00:00:00.000Z');

  for (let c = 0; c < totalCols; c++) {
    for (let r = 0; r < 7; r++) {
      const d = new Date(start);
      d.setUTCDate(d.getUTCDate() + (c * 7 + r));
      const isLit = grid[r][c] === 1;

      contributions.push({
        date: d.toISOString().slice(0, 10),
        count: isLit ? 12 + ((r + c) % 8) : 0,
        level: isLit ? 3 + ((r + c) % 2) : 0,
      });
    }
  }

  return contributions;
}

export default generateNameContributions;
