// 45. Jump Game II (Medium)
// https://leetcode.com/problems/jump-game-ii/
// NeetCode 150: Greedy
//
// You are given a 0-indexed array of integers nums of length n. You are initially positioned at index 0.
//
// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you
// are at index i, you can jump to any index (i + j) where:
//
// - 0 <= j <= nums[i] and
//
// - i + j < n
//
// Return the minimum number of jumps to reach index n - 1. The test cases are generated such that you can
// reach index n - 1.

import { describe, expect, it } from "vitest";
import { jump } from "./jump-game-ii.ts";

describe("45. Jump Game II", () => {
    it("example 1", () => {
        const nums = [2, 3, 1, 1, 4];
        expect(jump(nums)).toBe(2);
    });

    it("example 2", () => {
        const nums = [2, 3, 0, 1, 4];
        expect(jump(nums)).toBe(2);
    });
});
