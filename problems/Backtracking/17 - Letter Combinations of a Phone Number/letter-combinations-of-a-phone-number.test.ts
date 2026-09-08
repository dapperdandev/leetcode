// 17. Letter Combinations of a Phone Number (Medium)
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// NeetCode 150: Backtracking
//
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number
// could represent. Return the answer in any order.
//
// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map
// to any letters.

import { describe, expect, it } from "vitest";
import { sortDeep } from "../../../lib/structures.ts";
import { letterCombinations } from "./letter-combinations-of-a-phone-number.ts";

describe("17. Letter Combinations of a Phone Number", () => {
    it("example 1", () => {
        const digits = "23";
        expect(sortDeep(letterCombinations(digits))).toEqual(sortDeep(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]));
    });

    it("example 2", () => {
        const digits = "2";
        expect(sortDeep(letterCombinations(digits))).toEqual(sortDeep(["a", "b", "c"]));
    });
});
