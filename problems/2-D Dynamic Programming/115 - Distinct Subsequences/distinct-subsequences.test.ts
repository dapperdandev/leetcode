// 115. Distinct Subsequences (Hard)
// https://leetcode.com/problems/distinct-subsequences/
// NeetCode 150: 2-D Dynamic Programming
//
// Given two strings s and t, return the number of distinct subsequences of s which equals t.
//
// The test cases are generated so that the answer fits on a 32-bit signed integer.

import { describe, expect, it } from "vitest";
import { numDistinct } from "./distinct-subsequences.ts";

describe("115. Distinct Subsequences", () => {
    it("example 1", () => {
        const s = "rabbbit";
        const t = "rabbit";
        expect(numDistinct(s, t)).toBe(3);
    });

    it("example 2", () => {
        const s = "babgbag";
        const t = "bag";
        expect(numDistinct(s, t)).toBe(5);
    });
});
