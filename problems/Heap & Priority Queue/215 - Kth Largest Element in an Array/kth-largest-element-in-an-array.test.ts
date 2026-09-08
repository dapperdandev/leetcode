// 215. Kth Largest Element in an Array (Medium)
// https://leetcode.com/problems/kth-largest-element-in-an-array/
// NeetCode 150: Heap / Priority Queue
//
// Given an integer array nums and an integer k, return the kth largest element in the array.
//
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
//
// Can you solve it without sorting?

import { describe, expect, it } from "vitest";
import { findKthLargest } from "./kth-largest-element-in-an-array.ts";

describe("215. Kth Largest Element in an Array", () => {
    it("example 1", () => {
        const nums = [3, 2, 1, 5, 6, 4];
        const k = 2;
        expect(findKthLargest(nums, k)).toBe(5);
    });

    it("example 2", () => {
        const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
        const k = 4;
        expect(findKthLargest(nums, k)).toBe(4);
    });
});
