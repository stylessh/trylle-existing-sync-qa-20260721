/** Dedupe semver strings (seed). */
export function dedupeVersions(v: string[]) {
  return [...new Set(v)];
}

/** Parse marketing version from a tag (seed stub). */
export function marketingVersion(tag: string): string {
  return tag.replace(/-rc\.\d+$/i, "");
}
