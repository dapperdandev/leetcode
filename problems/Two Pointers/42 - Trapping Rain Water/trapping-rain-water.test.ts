// 42. Trapping Rain Water (Hard)
// https://leetcode.com/problems/trapping-rain-water/
// NeetCode 150: Two Pointers
//
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how
// much water it can trap after raining.

import { describe, expect, it } from "vitest";
import { trap } from "./trapping-rain-water.ts";

describe("42. Trapping Rain Water", () => {
    it("example 1", () => {
        const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
        expect(trap(height)).toBe(6);
    });

    it("example 2", () => {
        const height = [4, 2, 0, 3, 2, 5];
        expect(trap(height)).toBe(9);
    });
});
