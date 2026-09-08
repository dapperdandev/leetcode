// 371. Sum of Two Integers (Medium)
// https://leetcode.com/problems/sum-of-two-integers/
// NeetCode 150: Bit Manipulation
//
// Given two integers a and b, return the sum of the two integers without using the operators + and -.

import { describe, expect, it } from "vitest";
import { getSum } from "./sum-of-two-integers.ts";

describe("371. Sum of Two Integers", () => {
    it("example 1", () => {
        const a = 1;
        const b = 2;
        expect(getSum(a, b)).toBe(3);
    });

    it("example 2", () => {
        const a = 2;
        const b = 3;
        expect(getSum(a, b)).toBe(5);
    });
});
