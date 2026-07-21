import { describe, expect, it } from "vitest";
import { dedupeVersions, marketingVersion } from "./VersionSelect";

describe("VersionSelect", () => {
  it("dedupes", () => {
    expect(dedupeVersions(["v1", "v1"]).length).toBe(1);
  });
  it("strips rc", () => {
    expect(marketingVersion("v2.4.0-rc.1")).toBe("v2.4.0");
  });
});
