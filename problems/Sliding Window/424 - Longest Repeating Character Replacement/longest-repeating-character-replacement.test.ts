// 424. Longest Repeating Character Replacement (Medium)
// https://leetcode.com/problems/longest-repeating-character-replacement/
// NeetCode 150: Sliding Window
//
// You are given a string s and an integer k. You can choose any character of the string and change it to any
// other uppercase English character. You can perform this operation at most k times.
//
// Return the length of the longest substring containing the same letter you can get after performing the above
// operations.

import { describe, expect, it } from "vitest";
import { characterReplacement } from "./longest-repeating-character-replacement.ts";

describe("424. Longest Repeating Character Replacement", () => {
    it("example 1", () => {
        const s = "ABAB";
        const k = 2;
        expect(characterReplacement(s, k)).toBe(4);
    });

    it("example 2", () => {
        const s = "AABABBA";
        const k = 1;
        expect(characterReplacement(s, k)).toBe(4);
    });
});
