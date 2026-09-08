// 153. Find Minimum in Rotated Sorted Array (Medium)
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// NeetCode 150: Binary Search
//
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the
// array nums = [0,1,2,4,5,6,7] might become:
//
// - [4,5,6,7,0,1,2] if it was rotated 4 times.
//
// - [0,1,2,4,5,6,7] if it was rotated 7 times.
//
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0],
// a[1], a[2], ..., a[n-2]].
//
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
//
// You must write an algorithm that runs in O(log n) time.

import { describe, expect, it } from "vitest";
import { findMin } from "./find-minimum-in-rotated-sorted-array.ts";

describe("153. Find Minimum in Rotated Sorted Array", () => {
    it("example 1", () => {
        const nums = [3, 4, 5, 1, 2];
        expect(findMin(nums)).toBe(1);
    });

    it("example 2", () => {
        const nums = [4, 5, 6, 7, 0, 1, 2];
        expect(findMin(nums)).toBe(0);
    });

    it("example 3", () => {
        const nums = [11, 13, 15, 17];
        expect(findMin(nums)).toBe(11);
    });
});
