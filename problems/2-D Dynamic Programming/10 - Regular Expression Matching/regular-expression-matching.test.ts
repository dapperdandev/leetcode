// 10. Regular Expression Matching (Hard)
// https://leetcode.com/problems/regular-expression-matching/
// NeetCode 150: 2-D Dynamic Programming
//
// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'
// where:
//
// - '.' Matches any single character.
//
// - '*' Matches zero or more of the preceding element.
//
// Return a boolean indicating whether the matching covers the entire input string (not partial).

import { describe, expect, it } from "vitest";
import { isMatch } from "./regular-expression-matching.ts";

describe("10. Regular Expression Matching", () => {
    it("example 1", () => {
        const s = "aa";
        const p = "a";
        expect(isMatch(s, p)).toBe(false);
    });

    it("example 2", () => {
        const s = "aa";
        const p = "a*";
        expect(isMatch(s, p)).toBe(true);
    });

    it("example 3", () => {
        const s = "ab";
        const p = ".*";
        expect(isMatch(s, p)).toBe(true);
    });
});
