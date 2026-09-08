// 40. Combination Sum II (Medium)
// https://leetcode.com/problems/combination-sum-ii/
// NeetCode 150: Backtracking
//
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique
// combinations in candidates where the candidate numbers sum to target.
//
// Each number in candidates may only be used once in the combination.
//
// Note: The solution set must not contain duplicate combinations.

import { describe, expect, it } from "vitest";
import { sortDeep } from "../../../lib/structures.ts";
import { combinationSum2 } from "./combination-sum-ii.ts";

describe("40. Combination Sum II", () => {
    it("example 1", () => {
        const candidates = [10, 1, 2, 7, 6, 1, 5];
        const target = 8;
        expect(sortDeep(combinationSum2(candidates, target))).toEqual(
            sortDeep([
                [1, 1, 6],
                [1, 2, 5],
                [1, 7],
                [2, 6]
            ])
        );
    });

    it("example 2", () => {
        const candidates = [2, 5, 2, 1, 2];
        const target = 5;
        expect(sortDeep(combinationSum2(candidates, target))).toEqual(sortDeep([[1, 2, 2], [5]]));
    });
});
