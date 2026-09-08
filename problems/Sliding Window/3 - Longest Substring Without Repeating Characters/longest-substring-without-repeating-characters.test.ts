// 3. Longest Substring Without Repeating Characters (Medium)
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// NeetCode 150: Sliding Window
//
// Given a string s, find the length of the longest substring without duplicate characters.

import { describe, expect, it } from "vitest";
import { lengthOfLongestSubstring } from "./longest-substring-without-repeating-characters.ts";

describe("3. Longest Substring Without Repeating Characters", () => {
    it("example 1", () => {
        const s = "abcabcbb";
        expect(lengthOfLongestSubstring(s)).toBe(3);
    });

    it("example 2", () => {
        const s = "bbbbb";
        expect(lengthOfLongestSubstring(s)).toBe(1);
    });

    it("example 3", () => {
        const s = "pwwkew";
        expect(lengthOfLongestSubstring(s)).toBe(3);
    });
});
