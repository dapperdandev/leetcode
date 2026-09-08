// 66. Plus One (Easy)
// https://leetcode.com/problems/plus-one/
// NeetCode 150: Math & Geometry
//
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit
// of the integer. The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.
//
// Increment the large integer by one and return the resulting array of digits.

import { describe, expect, it } from "vitest";
import { plusOne } from "./plus-one.ts";

describe("66. Plus One", () => {
    it("example 1", () => {
        const digits = [1, 2, 3];
        expect(plusOne(digits)).toEqual([1, 2, 4]);
    });

    it("example 2", () => {
        const digits = [4, 3, 2, 1];
        expect(plusOne(digits)).toEqual([4, 3, 2, 2]);
    });

    it("example 3", () => {
        const digits = [9];
        expect(plusOne(digits)).toEqual([1, 0]);
    });
});
