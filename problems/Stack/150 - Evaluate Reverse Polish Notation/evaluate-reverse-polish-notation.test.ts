// 150. Evaluate Reverse Polish Notation (Medium)
// https://leetcode.com/problems/evaluate-reverse-polish-notation/
// NeetCode 150: Stack
//
// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish
// Notation.
//
// Evaluate the expression. Return an integer that represents the value of the expression.
//
// Note that:
//
// - The valid operators are '+', '-', '*', and '/'.
//
// - Each operand may be an integer or another expression.
//
// - The division between two integers always truncates toward zero.
//
// - There will not be any division by zero.
//
// - The input represents a valid arithmetic expression in a reverse polish notation.
//
// - The answer and all the intermediate calculations can be represented in a 32-bit integer.

import { describe, expect, it } from "vitest";
import { evalRPN } from "./evaluate-reverse-polish-notation.ts";

describe("150. Evaluate Reverse Polish Notation", () => {
    it("example 1", () => {
        const tokens = ["2", "1", "+", "3", "*"];
        expect(evalRPN(tokens)).toBe(9);
    });

    it("example 2", () => {
        const tokens = ["4", "13", "5", "/", "+"];
        expect(evalRPN(tokens)).toBe(6);
    });

    it("example 3", () => {
        const tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
        expect(evalRPN(tokens)).toBe(22);
    });
});
