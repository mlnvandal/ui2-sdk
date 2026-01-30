export type HoverPoint = {
    x: number;
    y: number;
};
export type HoverRect = {
    left: number;
    top: number;
    right: number;
    bottom: number;
};
export declare function pointInTriangle(point: HoverPoint, a: HoverPoint, b: HoverPoint, c: HoverPoint): boolean;
export declare function pointInRect(point: HoverPoint, rect: HoverRect, padding?: number): boolean;
export declare function pointInQuad(point: HoverPoint, a: HoverPoint, b: HoverPoint, c: HoverPoint, d: HoverPoint): boolean;
export declare function pointInSafeZone(point: HoverPoint, anchorRect: HoverRect, popoverRect: HoverRect, padding?: number): boolean;
