// 76. Minimum Window Substring (Hard)
// https://leetcode.com/problems/minimum-window-substring/
// NeetCode 150: Sliding Window
//
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such
// that every character in t (including duplicates) is included in the window. If there is no such substring,
// return the empty string "".
//
// The testcases will be generated such that the answer is unique.

import { describe, expect, it } from "vitest";
import { minWindow } from "./minimum-window-substring.ts";

describe("76. Minimum Window Substring", () => {
    it("example 1", () => {
        const s = "ADOBECODEBANC";
        const t = "ABC";
        expect(minWindow(s, t)).toBe("BANC");
    });

    it("example 2", () => {
        const s = "a";
        const t = "a";
        expect(minWindow(s, t)).toBe("a");
    });

    it("example 3", () => {
        const s = "a";
        const t = "aa";
        expect(minWindow(s, t)).toBe("");
    });
});
