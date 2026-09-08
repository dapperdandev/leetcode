// 46. Permutations (Medium)
// https://leetcode.com/problems/permutations/
// NeetCode 150: Backtracking
//
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in
// any order.

import { describe, expect, it } from "vitest";
import { sortDeep } from "../../../lib/structures.ts";
import { permute } from "./permutations.ts";

describe("46. Permutations", () => {
    it("example 1", () => {
        const nums = [1, 2, 3];
        expect(sortDeep(permute(nums))).toEqual(
            sortDeep([
                [1, 2, 3],
                [1, 3, 2],
                [2, 1, 3],
                [2, 3, 1],
                [3, 1, 2],
                [3, 2, 1]
            ])
        );
    });

    it("example 2", () => {
        const nums = [0, 1];
        expect(sortDeep(permute(nums))).toEqual(
            sortDeep([
                [0, 1],
                [1, 0]
            ])
        );
    });

    it("example 3", () => {
        const nums = [1];
        expect(sortDeep(permute(nums))).toEqual(sortDeep([[1]]));
    });
});
