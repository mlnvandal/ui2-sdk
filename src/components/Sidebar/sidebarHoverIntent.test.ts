import { describe, expect, it } from "vitest";
import { pointInSafeZone, pointInTriangle } from "./sidebarHoverIntent";

describe("sidebarHoverIntent", () => {
  it("detects points inside triangle", () => {
    const a = { x: 0, y: 0 };
    const b = { x: 10, y: 0 };
    const c = { x: 0, y: 10 };
    expect(pointInTriangle({ x: 2, y: 2 }, a, b, c)).toBe(true);
    expect(pointInTriangle({ x: 7, y: 7 }, a, b, c)).toBe(false);
  });

  it("detects points inside safe zone corridor toward popover", () => {
    const anchor = { left: 80, top: 80, right: 120, bottom: 140 };
    const popover = { left: 150, top: 70, right: 230, bottom: 160 };
    expect(pointInSafeZone({ x: 130, y: 110 }, anchor, popover, 0)).toBe(true);
    expect(pointInSafeZone({ x: 130, y: 40 }, anchor, popover, 0)).toBe(false);
  });
});
