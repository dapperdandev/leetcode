// 647. Palindromic Substrings (Medium)
// https://leetcode.com/problems/palindromic-substrings/
// NeetCode 150: 1-D Dynamic Programming
//
// Given a string s, return the number of palindromic substrings in it.
//
// A string is a palindrome when it reads the same backward as forward.
//
// A substring is a contiguous sequence of characters within the string.

import { describe, expect, it } from "vitest";
import { countSubstrings } from "./palindromic-substrings.ts";

describe("647. Palindromic Substrings", () => {
    it("example 1", () => {
        const s = "abc";
        expect(countSubstrings(s)).toBe(3);
    });

    it("example 2", () => {
        const s = "aaa";
        expect(countSubstrings(s)).toBe(6);
    });
});
