// 136. Single Number (Easy)
// https://leetcode.com/problems/single-number/
// NeetCode 150: Bit Manipulation
//
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//
// You must implement a solution with a linear runtime complexity and use only constant extra space.

import { describe, expect, it } from "vitest";
import { singleNumber } from "./single-number.ts";

describe("136. Single Number", () => {
    it("example 1", () => {
        const nums = [2, 2, 1];
        expect(singleNumber(nums)).toBe(1);
    });

    it("example 2", () => {
        const nums = [4, 1, 2, 1, 2];
        expect(singleNumber(nums)).toBe(4);
    });

    it("example 3", () => {
        const nums = [1];
        expect(singleNumber(nums)).toBe(1);
    });
});
