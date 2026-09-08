// 33. Search in Rotated Sorted Array (Medium)
// https://leetcode.com/problems/search-in-rotated-sorted-array/
// NeetCode 150: Binary Search
//
// There is an integer array nums sorted in ascending order (with distinct values).
//
// Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k <
// nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ...,
// nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become
// [4,5,6,7,0,1,2].
//
// Given the array nums after the possible rotation and an integer target, return the index of target if it is
// in nums, or -1 if it is not in nums.
//
// You must write an algorithm with O(log n) runtime complexity.

import { describe, expect, it } from "vitest";
import { search } from "./search-in-rotated-sorted-array.ts";

describe("33. Search in Rotated Sorted Array", () => {
    it("example 1", () => {
        const nums = [4, 5, 6, 7, 0, 1, 2];
        const target = 0;
        expect(search(nums, target)).toBe(4);
    });

    it("example 2", () => {
        const nums = [4, 5, 6, 7, 0, 1, 2];
        const target = 3;
        expect(search(nums, target)).toBe(-1);
    });

    it("example 3", () => {
        const nums = [1];
        const target = 0;
        expect(search(nums, target)).toBe(-1);
    });
});
