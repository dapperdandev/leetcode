// 125. Valid Palindrome (Easy)
// https://leetcode.com/problems/valid-palindrome/
// NeetCode 150: Two Pointers
//
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all
// non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters
// and numbers.
//
// Given a string s, return true if it is a palindrome, or false otherwise.

import { describe, expect, it } from "vitest";
import { isPalindrome } from "./valid-palindrome.ts";

describe("125. Valid Palindrome", () => {
    it("example 1", () => {
        const s = "A man, a plan, a canal: Panama";
        expect(isPalindrome(s)).toBe(true);
    });

    it("example 2", () => {
        const s = "race a car";
        expect(isPalindrome(s)).toBe(false);
    });

    it("example 3", () => {
        const s = " ";
        expect(isPalindrome(s)).toBe(true);
    });
});
