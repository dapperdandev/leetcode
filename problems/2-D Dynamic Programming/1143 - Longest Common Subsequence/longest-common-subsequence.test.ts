// 1143. Longest Common Subsequence (Medium)
// https://leetcode.com/problems/longest-common-subsequence/
// NeetCode 150: 2-D Dynamic Programming
//
// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no
// common subsequence, return 0.
//
// A subsequence of a string is a new string generated from the original string with some characters (can be
// none) deleted without changing the relative order of the remaining characters.
//
// - For example, "ace" is a subsequence of "abcde".
//
// A common subsequence of two strings is a subsequence that is common to both strings.

import { describe, expect, it } from "vitest";
import { longestCommonSubsequence } from "./longest-common-subsequence.ts";

describe("1143. Longest Common Subsequence", () => {
    it("example 1", () => {
        const text1 = "abcde";
        const text2 = "ace";
        expect(longestCommonSubsequence(text1, text2)).toBe(3);
    });

    it("example 2", () => {
        const text1 = "abc";
        const text2 = "abc";
        expect(longestCommonSubsequence(text1, text2)).toBe(3);
    });

    it("example 3", () => {
        const text1 = "abc";
        const text2 = "def";
        expect(longestCommonSubsequence(text1, text2)).toBe(0);
    });
});
