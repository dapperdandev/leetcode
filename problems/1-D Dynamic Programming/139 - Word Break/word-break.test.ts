// 139. Word Break (Medium)
// https://leetcode.com/problems/word-break/
// NeetCode 150: 1-D Dynamic Programming
//
// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a
// space-separated sequence of one or more dictionary words.
//
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

import { describe, expect, it } from "vitest";
import { wordBreak } from "./word-break.ts";

describe("139. Word Break", () => {
    it("example 1", () => {
        const s = "leetcode";
        const wordDict = ["leet", "code"];
        expect(wordBreak(s, wordDict)).toBe(true);
    });

    it("example 2", () => {
        const s = "applepenapple";
        const wordDict = ["apple", "pen"];
        expect(wordBreak(s, wordDict)).toBe(true);
    });

    it("example 3", () => {
        const s = "catsandog";
        const wordDict = ["cats", "dog", "sand", "and", "cat"];
        expect(wordBreak(s, wordDict)).toBe(false);
    });
});
