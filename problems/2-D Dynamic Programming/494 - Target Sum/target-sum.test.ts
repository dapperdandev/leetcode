// 494. Target Sum (Medium)
// https://leetcode.com/problems/target-sum/
// NeetCode 150: 2-D Dynamic Programming
//
// You are given an integer array nums and an integer target.
//
// You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in
// nums and then concatenate all the integers.
//
// - For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build
// the expression "+2-1".
//
// Return the number of different expressions that you can build, which evaluates to target.

import { describe, expect, it } from "vitest";
import { findTargetSumWays } from "./target-sum.ts";

describe("494. Target Sum", () => {
    it("example 1", () => {
        const nums = [1, 1, 1, 1, 1];
        const target = 3;
        expect(findTargetSumWays(nums, target)).toBe(5);
    });

    it("example 2", () => {
        const nums = [1];
        const target = 1;
        expect(findTargetSumWays(nums, target)).toBe(1);
    });
});
