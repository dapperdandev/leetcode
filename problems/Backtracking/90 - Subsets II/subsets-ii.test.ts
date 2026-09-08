// 90. Subsets II (Medium)
// https://leetcode.com/problems/subsets-ii/
// NeetCode 150: Backtracking
//
// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
//
// The solution set must not contain duplicate subsets. Return the solution in any order.

import { describe, expect, it } from "vitest";
import { sortDeep } from "../../../lib/structures.ts";
import { subsetsWithDup } from "./subsets-ii.ts";

describe("90. Subsets II", () => {
    it("example 1", () => {
        const nums = [1, 2, 2];
        expect(sortDeep(subsetsWithDup(nums))).toEqual(sortDeep([[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]));
    });

    it("example 2", () => {
        const nums = [0];
        expect(sortDeep(subsetsWithDup(nums))).toEqual(sortDeep([[], [0]]));
    });
});
