// 22. Generate Parentheses (Medium)
// https://leetcode.com/problems/generate-parentheses/
// NeetCode 150: Stack
//
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

import { describe, expect, it } from "vitest";
import { sortDeep } from "../../../lib/structures.ts";
import { generateParenthesis } from "./generate-parentheses.ts";

describe("22. Generate Parentheses", () => {
    it("example 1", () => {
        const n = 3;
        expect(sortDeep(generateParenthesis(n))).toEqual(sortDeep(["((()))", "(()())", "(())()", "()(())", "()()()"]));
    });

    it("example 2", () => {
        const n = 1;
        expect(sortDeep(generateParenthesis(n))).toEqual(sortDeep(["()"]));
    });
});
