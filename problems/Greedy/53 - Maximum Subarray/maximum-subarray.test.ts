// 53. Maximum Subarray (Medium)
// https://leetcode.com/problems/maximum-subarray/
// NeetCode 150: Greedy
//
// Given an integer array nums, find the subarray with the largest sum, and return its sum.

import { describe, expect, it } from "vitest";
import { maxSubArray } from "./maximum-subarray.ts";

describe("53. Maximum Subarray", () => {
    it("example 1", () => {
        const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
        expect(maxSubArray(nums)).toBe(6);
    });

    it("example 2", () => {
        const nums = [1];
        expect(maxSubArray(nums)).toBe(1);
    });

    it("example 3", () => {
        const nums = [5, 4, -1, 7, 8];
        expect(maxSubArray(nums)).toBe(23);
    });
});
