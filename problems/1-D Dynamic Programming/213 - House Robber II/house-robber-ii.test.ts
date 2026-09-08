// 213. House Robber II (Medium)
// https://leetcode.com/problems/house-robber-ii/
// NeetCode 150: 1-D Dynamic Programming
//
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of
// money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor
// of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically
// contact the police if two adjacent houses were broken into on the same night.
//
// Given an integer array nums representing the amount of money of each house, return the maximum amount of
// money you can rob tonight without alerting the police.

import { describe, expect, it } from "vitest";
import { rob } from "./house-robber-ii.ts";

describe("213. House Robber II", () => {
    it("example 1", () => {
        const nums = [2, 3, 2];
        expect(rob(nums)).toBe(3);
    });

    it("example 2", () => {
        const nums = [1, 2, 3, 1];
        expect(rob(nums)).toBe(4);
    });

    it("example 3", () => {
        const nums = [1, 2, 3];
        expect(rob(nums)).toBe(3);
    });
});
