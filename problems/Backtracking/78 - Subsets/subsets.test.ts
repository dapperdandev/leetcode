// 78. Subsets (Medium)
// https://leetcode.com/problems/subsets/
// NeetCode 150: Backtracking
//
// Given an integer array nums of unique elements, return all possible subsets (the power set).
//
// The solution set must not contain duplicate subsets. Return the solution in any order.

import { describe, expect, it } from "vitest";
import { sortDeep } from "../../../lib/structures.ts";
import { subsets } from "./subsets.ts";

describe("78. Subsets", () => {
    it("example 1", () => {
        const nums = [1, 2, 3];
        expect(sortDeep(subsets(nums))).toEqual(sortDeep([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]));
    });

    it("example 2", () => {
        const nums = [0];
        expect(sortDeep(subsets(nums))).toEqual(sortDeep([[], [0]]));
    });
});
