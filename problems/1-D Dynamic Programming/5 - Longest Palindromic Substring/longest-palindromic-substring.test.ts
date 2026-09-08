// 5. Longest Palindromic Substring (Medium)
// https://leetcode.com/problems/longest-palindromic-substring/
// NeetCode 150: 1-D Dynamic Programming
//
// Given a string s, return the longest palindromic substring in s.

import { describe, expect, it } from "vitest";
import { longestPalindrome } from "./longest-palindromic-substring.ts";

describe("5. Longest Palindromic Substring", () => {
    it("example 1", () => {
        const s = "babad";
        const result = longestPalindrome(s);
        expect(result.length).toBe(3);
        expect(result).toBe([...result].reverse().join(""));
        expect(s).toContain(result);
    });

    it("example 2", () => {
        const s = "cbbd";
        const result = longestPalindrome(s);
        expect(result.length).toBe(2);
        expect(result).toBe([...result].reverse().join(""));
        expect(s).toContain(result);
    });
});
