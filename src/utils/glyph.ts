/**
 * Deterministic mycelium geometry — the brand mark, generated per seed.
 *
 * Same idea as the Three.js hero (src/components/site/MyceliumCanvas.astro):
 * independent nodes that connect into structure. Here it's computed at build
 * time and rendered as static SVG, so it costs nothing at runtime and looks
 * identical on every deploy for a given seed.
 */

export interface GlyphNode {
  x: number;
  y: number;
  r: number;
  /** High-degree node — drawn in the spore accent. */
  hub: boolean;
}

export interface GlyphEdge {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  /** Longer strands fade out, like real hyphae. */
  opacity: number;
}

export interface Glyph {
  nodes: GlyphNode[];
  edges: GlyphEdge[];
}

interface Options {
  /** Target node count inside the 100×100 viewBox. */
  count?: number;
  /** Minimum spacing between nodes (rejection sampling). */
  minDistance?: number;
  /** Nodes closer than this get connected. */
  linkDistance?: number;
  /** Max strands per node, so dense areas don't turn into a blob. */
  maxDegree?: number;
}

/** Small, fast, seedable PRNG. */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashString(value: string): number {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * Build a node network for `seed` inside a 100×100 viewBox.
 * The same seed always returns the same network.
 */
export function buildGlyph(seed: string, options: Options = {}): Glyph {
  const { count = 34, minDistance = 10, linkDistance = 25, maxDegree = 3 } = options;

  const random = mulberry32(hashString(seed));
  const points: { x: number; y: number }[] = [];

  // Rejection-sample points so they read as an organic scatter, not a grid.
  for (let attempt = 0; attempt < 3000 && points.length < count; attempt++) {
    const candidate = { x: random() * 100, y: random() * 100 };
    const spaced = points.every((p) => (p.x - candidate.x) ** 2 + (p.y - candidate.y) ** 2 > minDistance ** 2);
    if (spaced) points.push(candidate);
  }

  const degree = new Array(points.length).fill(0);
  const edges: GlyphEdge[] = [];

  // Connect close pairs, shortest first, capping how many strands a node takes.
  const pairs: { i: number; j: number; d: number }[] = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const d = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);
      if (d < linkDistance) pairs.push({ i, j, d });
    }
  }
  pairs.sort((a, b) => a.d - b.d);

  for (const { i, j, d } of pairs) {
    if (degree[i] >= maxDegree || degree[j] >= maxDegree) continue;
    degree[i]++;
    degree[j]++;
    edges.push({
      x1: round(points[i].x),
      y1: round(points[i].y),
      x2: round(points[j].x),
      y2: round(points[j].y),
      opacity: round(0.34 - (d / linkDistance) * 0.2),
    });
  }

  // The three best-connected nodes carry the accent.
  const hubs = new Set(
    degree
      .map((deg, index) => ({ deg, index }))
      .sort((a, b) => b.deg - a.deg)
      .slice(0, 3)
      .map((n) => n.index)
  );

  const nodes: GlyphNode[] = points.map((p, index) => ({
    x: round(p.x),
    y: round(p.y),
    r: round(hubs.has(index) ? 1.1 : 0.45 + degree[index] * 0.2),
    hub: hubs.has(index),
  }));

  return { nodes, edges };
}

function round(value: number): number {
  return Math.round(value * 100) / 100;
}
