// 15. 3Sum (Medium)
// https://leetcode.com/problems/3sum/
// NeetCode 150: Two Pointers
//
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k,
// and j != k, and nums[i] + nums[j] + nums[k] == 0.
//
// Notice that the solution set must not contain duplicate triplets.

import { describe, expect, it } from "vitest";
import { sortDeep } from "../../../lib/structures.ts";
import { threeSum } from "./3sum.ts";

describe("15. 3Sum", () => {
    it("example 1", () => {
        const nums = [-1, 0, 1, 2, -1, -4];
        expect(sortDeep(threeSum(nums))).toEqual(
            sortDeep([
                [-1, -1, 2],
                [-1, 0, 1]
            ])
        );
    });

    it("example 2", () => {
        const nums = [0, 1, 1];
        expect(sortDeep(threeSum(nums))).toEqual(sortDeep([]));
    });

    it("example 3", () => {
        const nums = [0, 0, 0];
        expect(sortDeep(threeSum(nums))).toEqual(sortDeep([[0, 0, 0]]));
    });
});
