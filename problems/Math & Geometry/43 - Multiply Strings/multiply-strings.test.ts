// 43. Multiply Strings (Medium)
// https://leetcode.com/problems/multiply-strings/
// NeetCode 150: Math & Geometry
//
// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2,
// also represented as a string.
//
// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

import { describe, expect, it } from "vitest";
import { multiply } from "./multiply-strings.ts";

describe("43. Multiply Strings", () => {
    it("example 1", () => {
        const num1 = "2";
        const num2 = "3";
        expect(multiply(num1, num2)).toBe("6");
    });

    it("example 2", () => {
        const num1 = "123";
        const num2 = "456";
        expect(multiply(num1, num2)).toBe("56088");
    });
});
