// 416. Partition Equal Subset Sum (Medium)
// https://leetcode.com/problems/partition-equal-subset-sum/
// NeetCode 150: 1-D Dynamic Programming
//
// Given an integer array nums, return true if you can partition the array into two subsets such that the sum
// of the elements in both subsets is equal or false otherwise.

import { describe, expect, it } from "vitest";
import { canPartition } from "./partition-equal-subset-sum.ts";

describe("416. Partition Equal Subset Sum", () => {
    it("example 1", () => {
        const nums = [1, 5, 11, 5];
        expect(canPartition(nums)).toBe(true);
    });

    it("example 2", () => {
        const nums = [1, 2, 3, 5];
        expect(canPartition(nums)).toBe(false);
    });
});
