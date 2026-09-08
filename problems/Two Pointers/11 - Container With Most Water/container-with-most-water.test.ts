// 11. Container With Most Water (Medium)
// https://leetcode.com/problems/container-with-most-water/
// NeetCode 150: Two Pointers
//
// You are given an integer array height of length n. There are n vertical lines drawn such that the two
// endpoints of the ith line are (i, 0) and (i, height[i]).
//
// Find two lines that together with the x-axis form a container, such that the container contains the most
// water.
//
// Return the maximum amount of water a container can store.
//
// Notice that you may not slant the container.

import { describe, expect, it } from "vitest";
import { maxArea } from "./container-with-most-water.ts";

describe("11. Container With Most Water", () => {
    it("example 1", () => {
        const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
        expect(maxArea(height)).toBe(49);
    });

    it("example 2", () => {
        const height = [1, 1];
        expect(maxArea(height)).toBe(1);
    });
});
