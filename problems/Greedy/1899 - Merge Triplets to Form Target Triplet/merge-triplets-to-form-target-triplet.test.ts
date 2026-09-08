// 1899. Merge Triplets to Form Target Triplet (Medium)
// https://leetcode.com/problems/merge-triplets-to-form-target-triplet/
// NeetCode 150: Greedy
//
// A triplet is an array of three integers. You are given a 2D integer array triplets, where triplets[i] = [ai,
// bi, ci] describes the ith triplet. You are also given an integer array target = [x, y, z] that describes the
// triplet you want to obtain.
//
// To obtain target, you may apply the following operation on triplets any number of times (possibly zero):
//
// - Choose two indices (0-indexed) i and j (i != j) and update triplets[j] to become [max(ai, aj), max(bi,
// bj), max(ci, cj)]. For example, if triplets[i] = [2, 5, 3] and triplets[j] = [1, 7, 5], triplets[j] will be
// updated to [max(2, 1), max(5, 7), max(3, 5)] = [2, 7, 5].
//
// Return true if it is possible to obtain the target triplet [x, y, z] as an element of triplets, or false
// otherwise.

import { describe, expect, it } from "vitest";
import { mergeTriplets } from "./merge-triplets-to-form-target-triplet.ts";

describe("1899. Merge Triplets to Form Target Triplet", () => {
    it("example 1", () => {
        const triplets = [
            [2, 5, 3],
            [1, 8, 4],
            [1, 7, 5]
        ];
        const target = [2, 7, 5];
        expect(mergeTriplets(triplets, target)).toBe(true);
    });

    it("example 2", () => {
        const triplets = [
            [3, 4, 5],
            [4, 5, 6]
        ];
        const target = [3, 2, 5];
        expect(mergeTriplets(triplets, target)).toBe(false);
    });

    it("example 3", () => {
        const triplets = [
            [2, 5, 3],
            [2, 3, 4],
            [1, 2, 5],
            [5, 2, 3]
        ];
        const target = [5, 5, 5];
        expect(mergeTriplets(triplets, target)).toBe(true);
    });
});
