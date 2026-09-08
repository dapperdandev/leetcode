// 198. House Robber (Medium)
// https://leetcode.com/problems/house-robber/
// NeetCode 150: 1-D Dynamic Programming
//
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of
// money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have
// security systems connected and it will automatically contact the police if two adjacent houses were broken
// into on the same night.
//
// Given an integer array nums representing the amount of money of each house, return the maximum amount of
// money you can rob tonight without alerting the police.

import { describe, expect, it } from "vitest";
import { rob } from "./house-robber.ts";

describe("198. House Robber", () => {
    it("example 1", () => {
        const nums = [1, 2, 3, 1];
        expect(rob(nums)).toBe(4);
    });

    it("example 2", () => {
        const nums = [2, 7, 9, 3, 1];
        expect(rob(nums)).toBe(12);
    });
});
