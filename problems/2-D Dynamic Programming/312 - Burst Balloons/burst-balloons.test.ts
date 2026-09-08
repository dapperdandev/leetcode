// 312. Burst Balloons (Hard)
// https://leetcode.com/problems/burst-balloons/
// NeetCode 150: 2-D Dynamic Programming
//
// You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented
// by an array nums. You are asked to burst all the balloons.
//
// If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes
// out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.
//
// Return the maximum coins you can collect by bursting the balloons wisely.

import { describe, expect, it } from "vitest";
import { maxCoins } from "./burst-balloons.ts";

describe("312. Burst Balloons", () => {
    it("example 1", () => {
        const nums = [3, 1, 5, 8];
        expect(maxCoins(nums)).toBe(167);
    });

    it("example 2", () => {
        const nums = [1, 5];
        expect(maxCoins(nums)).toBe(10);
    });
});
