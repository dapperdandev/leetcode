// 238. Product of Array Except Self (Medium)
// https://leetcode.com/problems/product-of-array-except-self/
// NeetCode 150: Arrays & Hashing
//
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the
// elements of nums except nums[i].
//
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//
// You must write an algorithm that runs in O(n) time and without using the division operation.

import { describe, expect, it } from "vitest";
import { productExceptSelf } from "./product-of-array-except-self.ts";

describe("238. Product of Array Except Self", () => {
    it("example 1", () => {
        const nums = [1, 2, 3, 4];
        expect(productExceptSelf(nums)).toEqual([24, 12, 8, 6]);
    });

    it("example 2", () => {
        const nums = [-1, 1, 0, -3, 3];
        expect(productExceptSelf(nums)).toEqual([0, 0, 9, 0, 0]);
    });
});
