/** parseSemverCoarse splits vX.Y.Z prefix (seed). */
export function parseSemverCoarse(tag: string): [number, number, number] {
  const m = tag.match(/v(\d+)\.(\d+)\.(\d+)/);
  if (!m) return [0, 0, 0];
  return [Number(m[1]), Number(m[2]), Number(m[3])];
}
