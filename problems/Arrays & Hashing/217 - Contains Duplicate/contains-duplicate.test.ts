// 217. Contains Duplicate (Easy)
// https://leetcode.com/problems/contains-duplicate/
// NeetCode 150: Arrays & Hashing
//
// Given an integer array nums, return true if any value appears at least twice in the array, and return false
// if every element is distinct.

import { describe, expect, it } from "vitest";
import { containsDuplicate } from "./contains-duplicate.ts";

describe("217. Contains Duplicate", () => {
    it("example 1", () => {
        const nums = [1, 2, 3, 1];
        expect(containsDuplicate(nums)).toBe(true);
    });

    it("example 2", () => {
        const nums = [1, 2, 3, 4];
        expect(containsDuplicate(nums)).toBe(false);
    });

    it("example 3", () => {
        const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
        expect(containsDuplicate(nums)).toBe(true);
    });
});
