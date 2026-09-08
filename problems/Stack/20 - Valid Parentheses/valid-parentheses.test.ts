// 20. Valid Parentheses (Easy)
// https://leetcode.com/problems/valid-parentheses/
// NeetCode 150: Stack
//
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input
// string is valid.
//
// An input string is valid if:
//
// - Open brackets must be closed by the same type of brackets.
//
// - Open brackets must be closed in the correct order.
//
// - Every close bracket has a corresponding open bracket of the same type.

import { describe, expect, it } from "vitest";
import { isValid } from "./valid-parentheses.ts";

describe("20. Valid Parentheses", () => {
    it("example 1", () => {
        const s = "()";
        expect(isValid(s)).toBe(true);
    });

    it("example 2", () => {
        const s: string = "()[]{}";
        expect(isValid(s)).toBe(true);
    });

    it("example 3", () => {
        const s = "(]";
        expect(isValid(s)).toBe(false);
    });

    it("example 4", () => {
        const s: string = "([])";
        expect(isValid(s)).toBe(true);
    });

    it("example 5", () => {
        const s = "([)]";
        expect(isValid(s)).toBe(false);
    });
});
