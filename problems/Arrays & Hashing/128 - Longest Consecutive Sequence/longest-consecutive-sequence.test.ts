// 128. Longest Consecutive Sequence (Medium)
// https://leetcode.com/problems/longest-consecutive-sequence/
// NeetCode 150: Arrays & Hashing
//
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
//
// You must write an algorithm that runs in O(n) time.

import { describe, expect, it } from "vitest";
import { longestConsecutive } from "./longest-consecutive-sequence.ts";

describe("128. Longest Consecutive Sequence", () => {
    it("example 1", () => {
        const nums = [100, 4, 200, 1, 3, 2];
        expect(longestConsecutive(nums)).toBe(4);
    });

    it("example 2", () => {
        const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
        expect(longestConsecutive(nums)).toBe(9);
    });

    it("example 3", () => {
        const nums = [1, 0, 1, 2];
        expect(longestConsecutive(nums)).toBe(3);
    });
});
