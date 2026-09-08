// 567. Permutation in String (Medium)
// https://leetcode.com/problems/permutation-in-string/
// NeetCode 150: Sliding Window
//
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
//
// In other words, return true if one of s1's permutations is the substring of s2.

import { describe, expect, it } from "vitest";
import { checkInclusion } from "./permutation-in-string.ts";

describe("567. Permutation in String", () => {
    it("example 1", () => {
        const s1 = "ab";
        const s2 = "eidbaooo";
        expect(checkInclusion(s1, s2)).toBe(true);
    });

    it("example 2", () => {
        const s1 = "ab";
        const s2 = "eidboaoo";
        expect(checkInclusion(s1, s2)).toBe(false);
    });
});
