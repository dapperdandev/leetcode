// 239. Sliding Window Maximum (Hard)
// https://leetcode.com/problems/sliding-window-maximum/
// NeetCode 150: Sliding Window
//
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very
// left of the array to the very right. You can only see the k numbers in the window. Each time the sliding
// window moves right by one position.
//
// Return the max sliding window.

import { describe, expect, it } from "vitest";
import { maxSlidingWindow } from "./sliding-window-maximum.ts";

describe("239. Sliding Window Maximum", () => {
    it("example 1", () => {
        const nums = [1, 3, -1, -3, 5, 3, 6, 7];
        const k = 3;
        expect(maxSlidingWindow(nums, k)).toEqual([3, 3, 5, 5, 6, 7]);
    });

    it("example 2", () => {
        const nums = [1];
        const k = 1;
        expect(maxSlidingWindow(nums, k)).toEqual([1]);
    });
});
