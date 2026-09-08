// 704. Binary Search (Easy)
// https://leetcode.com/problems/binary-search/
// NeetCode 150: Binary Search
//
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function
// to search target in nums. If target exists, then return its index. Otherwise, return -1.
//
// You must write an algorithm with O(log n) runtime complexity.

import { describe, expect, it } from "vitest";
import { search } from "./binary-search.ts";

describe("704. Binary Search", () => {
    it("example 1", () => {
        const nums = [-1, 0, 3, 5, 9, 12];
        const target = 9;
        expect(search(nums, target)).toBe(4);
    });

    it("example 2", () => {
        const nums = [-1, 0, 3, 5, 9, 12];
        const target = 2;
        expect(search(nums, target)).toBe(-1);
    });
});
