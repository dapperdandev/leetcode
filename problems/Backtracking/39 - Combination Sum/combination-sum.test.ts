// 39. Combination Sum (Medium)
// https://leetcode.com/problems/combination-sum/
// NeetCode 150: Backtracking
//
// Given an array of distinct integers candidates and a target integer target, return a list of all unique
// combinations of candidates where the chosen numbers sum to target. You may return the combinations in any
// order.
//
// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if
// the frequency of at least one of the chosen numbers is different.
//
// The test cases are generated such that the number of unique combinations that sum up to target is less than
// 150 combinations for the given input.

import { describe, expect, it } from "vitest";
import { sortDeep } from "../../../lib/structures.ts";
import { combinationSum } from "./combination-sum.ts";

describe("39. Combination Sum", () => {
    it("example 1", () => {
        const candidates = [2, 3, 6, 7];
        const target = 7;
        expect(sortDeep(combinationSum(candidates, target))).toEqual(sortDeep([[2, 2, 3], [7]]));
    });

    it("example 2", () => {
        const candidates = [2, 3, 5];
        const target = 8;
        expect(sortDeep(combinationSum(candidates, target))).toEqual(
            sortDeep([
                [2, 2, 2, 2],
                [2, 3, 3],
                [3, 5]
            ])
        );
    });

    it("example 3", () => {
        const candidates = [2];
        const target = 1;
        expect(sortDeep(combinationSum(candidates, target))).toEqual(sortDeep([]));
    });
});
