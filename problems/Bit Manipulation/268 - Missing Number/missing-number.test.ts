// 268. Missing Number (Easy)
// https://leetcode.com/problems/missing-number/
// NeetCode 150: Bit Manipulation
//
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range
// that is missing from the array.

import { describe, expect, it } from "vitest";
import { missingNumber } from "./missing-number.ts";

describe("268. Missing Number", () => {
    it("example 1", () => {
        const nums = [3, 0, 1];
        expect(missingNumber(nums)).toBe(2);
    });

    it("example 2", () => {
        const nums = [0, 1];
        expect(missingNumber(nums)).toBe(2);
    });

    it("example 3", () => {
        const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
        expect(missingNumber(nums)).toBe(8);
    });
});
