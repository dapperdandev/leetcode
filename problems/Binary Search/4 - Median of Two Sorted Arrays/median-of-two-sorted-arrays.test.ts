// 4. Median of Two Sorted Arrays (Hard)
// https://leetcode.com/problems/median-of-two-sorted-arrays/
// NeetCode 150: Binary Search
//
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted
// arrays.
//
// The overall run time complexity should be O(log (m+n)).

import { describe, expect, it } from "vitest";
import { findMedianSortedArrays } from "./median-of-two-sorted-arrays.ts";

describe("4. Median of Two Sorted Arrays", () => {
    it("example 1", () => {
        const nums1 = [1, 3];
        const nums2 = [2];
        expect(findMedianSortedArrays(nums1, nums2)).toBeCloseTo(2, 5);
    });

    it("example 2", () => {
        const nums1 = [1, 2];
        const nums2 = [3, 4];
        expect(findMedianSortedArrays(nums1, nums2)).toBeCloseTo(2.5, 5);
    });
});
