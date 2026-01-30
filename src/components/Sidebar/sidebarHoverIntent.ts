export type HoverPoint = { x: number; y: number };
export type HoverRect = { left: number; top: number; right: number; bottom: number };

export function pointInTriangle(point: HoverPoint, a: HoverPoint, b: HoverPoint, c: HoverPoint) {
  const v0x = c.x - a.x;
  const v0y = c.y - a.y;
  const v1x = b.x - a.x;
  const v1y = b.y - a.y;
  const v2x = point.x - a.x;
  const v2y = point.y - a.y;

  const dot00 = v0x * v0x + v0y * v0y;
  const dot01 = v0x * v1x + v0y * v1y;
  const dot02 = v0x * v2x + v0y * v2y;
  const dot11 = v1x * v1x + v1y * v1y;
  const dot12 = v1x * v2x + v1y * v2y;

  const denom = dot00 * dot11 - dot01 * dot01;
  if (denom === 0) {
    return false;
  }
  const invDenom = 1 / denom;
  const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
  const v = (dot00 * dot12 - dot01 * dot02) * invDenom;

  return u >= 0 && v >= 0 && u + v <= 1;
}

export function pointInRect(point: HoverPoint, rect: HoverRect, padding = 0) {
  return (
    point.x >= rect.left - padding &&
    point.x <= rect.right + padding &&
    point.y >= rect.top - padding &&
    point.y <= rect.bottom + padding
  );
}

export function pointInQuad(point: HoverPoint, a: HoverPoint, b: HoverPoint, c: HoverPoint, d: HoverPoint) {
  return pointInTriangle(point, a, b, c) || pointInTriangle(point, a, c, d);
}

export function pointInSafeZone(
  point: HoverPoint,
  anchorRect: HoverRect,
  popoverRect: HoverRect,
  padding = 8,
) {
  if (pointInRect(point, anchorRect, padding) || pointInRect(point, popoverRect, padding)) {
    return true;
  }

  const a = { x: anchorRect.right, y: anchorRect.top - padding };
  const b = { x: popoverRect.left, y: popoverRect.top - padding };
  const c = { x: popoverRect.left, y: popoverRect.bottom + padding };
  const d = { x: anchorRect.right, y: anchorRect.bottom + padding };

  return pointInQuad(point, a, b, c, d);
}
