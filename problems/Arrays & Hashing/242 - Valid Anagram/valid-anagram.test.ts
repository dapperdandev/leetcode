// 242. Valid Anagram (Easy)
// https://leetcode.com/problems/valid-anagram/
// NeetCode 150: Arrays & Hashing
//
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

import { describe, expect, it } from "vitest";
import { isAnagram } from "./valid-anagram.ts";

describe("242. Valid Anagram", () => {
    it("example 1", () => {
        const s = "anagram";
        const t = "nagaram";
        expect(isAnagram(s, t)).toBe(true);
    });

    it("example 2", () => {
        const s = "rat";
        const t = "car";
        expect(isAnagram(s, t)).toBe(false);
    });
});
