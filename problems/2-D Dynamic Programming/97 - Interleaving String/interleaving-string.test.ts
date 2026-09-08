// 97. Interleaving String (Medium)
// https://leetcode.com/problems/interleaving-string/
// NeetCode 150: 2-D Dynamic Programming
//
// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
//
// An interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings
// respectively, such that:
//
// - s = s1 + s2 + ... + sn
//
// - t = t1 + t2 + ... + tm
//
// - |n - m| <= 1
//
// - The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
//
// Note: a + b is the concatenation of strings a and b.

import { describe, expect, it } from "vitest";
import { isInterleave } from "./interleaving-string.ts";

describe("97. Interleaving String", () => {
    it("example 1", () => {
        const s1 = "aabcc";
        const s2 = "dbbca";
        const s3 = "aadbbcbcac";
        expect(isInterleave(s1, s2, s3)).toBe(true);
    });

    it("example 2", () => {
        const s1 = "aabcc";
        const s2 = "dbbca";
        const s3 = "aadbbbaccc";
        expect(isInterleave(s1, s2, s3)).toBe(false);
    });

    it("example 3", () => {
        const s1 = "";
        const s2 = "";
        const s3 = "";
        expect(isInterleave(s1, s2, s3)).toBe(true);
    });
});
