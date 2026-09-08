// 152. Maximum Product Subarray (Medium)
// https://leetcode.com/problems/maximum-product-subarray/
// NeetCode 150: 1-D Dynamic Programming
//
// Given an integer array nums, find a subarray that has the largest product, and return the product.
//
// The test cases are generated so that the answer will fit in a 32-bit integer.
//
// Note that the product of an array with a single element is the value of that element.

import { describe, expect, it } from "vitest";
import { maxProduct } from "./maximum-product-subarray.ts";

describe("152. Maximum Product Subarray", () => {
    it("example 1", () => {
        const nums = [2, 3, -2, 4];
        expect(maxProduct(nums)).toBe(6);
    });

    it("example 2", () => {
        const nums = [-2, 0, -1];
        expect(maxProduct(nums)).toBe(0);
    });
});
