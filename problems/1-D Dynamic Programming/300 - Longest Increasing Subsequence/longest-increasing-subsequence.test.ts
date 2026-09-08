// 300. Longest Increasing Subsequence (Medium)
// https://leetcode.com/problems/longest-increasing-subsequence/
// NeetCode 150: 1-D Dynamic Programming
//
// Given an integer array nums, return the length of the longest strictly increasing subsequence.

import { describe, expect, it } from "vitest";
import { lengthOfLIS } from "./longest-increasing-subsequence.ts";

describe("300. Longest Increasing Subsequence", () => {
    it("example 1", () => {
        const nums = [10, 9, 2, 5, 3, 7, 101, 18];
        expect(lengthOfLIS(nums)).toBe(4);
    });

    it("example 2", () => {
        const nums = [0, 1, 0, 3, 2, 3];
        expect(lengthOfLIS(nums)).toBe(4);
    });

    it("example 3", () => {
        const nums = [7, 7, 7, 7, 7, 7, 7];
        expect(lengthOfLIS(nums)).toBe(1);
    });
});
