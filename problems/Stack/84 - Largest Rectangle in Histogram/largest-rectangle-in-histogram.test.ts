// 84. Largest Rectangle in Histogram (Hard)
// https://leetcode.com/problems/largest-rectangle-in-histogram/
// NeetCode 150: Stack
//
// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1,
// return the area of the largest rectangle in the histogram.

import { describe, expect, it } from "vitest";
import { largestRectangleArea } from "./largest-rectangle-in-histogram.ts";

describe("84. Largest Rectangle in Histogram", () => {
    it("example 1", () => {
        const heights = [2, 1, 5, 6, 2, 3];
        expect(largestRectangleArea(heights)).toBe(10);
    });

    it("example 2", () => {
        const heights = [2, 4];
        expect(largestRectangleArea(heights)).toBe(4);
    });
});
