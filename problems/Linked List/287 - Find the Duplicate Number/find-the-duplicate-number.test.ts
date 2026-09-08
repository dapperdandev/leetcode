// 287. Find the Duplicate Number (Medium)
// https://leetcode.com/problems/find-the-duplicate-number/
// NeetCode 150: Linked List
//
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n]
// inclusive.
//
// There is only one repeated number in nums, return this repeated number.
//
// You must solve the problem without modifying the array nums and using only constant extra space.

import { describe, expect, it } from "vitest";
import { findDuplicate } from "./find-the-duplicate-number.ts";

describe("287. Find the Duplicate Number", () => {
    it("example 1", () => {
        const nums = [1, 3, 4, 2, 2];
        expect(findDuplicate(nums)).toBe(2);
    });

    it("example 2", () => {
        const nums = [3, 1, 3, 4, 2];
        expect(findDuplicate(nums)).toBe(3);
    });

    it("example 3", () => {
        const nums = [3, 3, 3, 3, 3];
        expect(findDuplicate(nums)).toBe(3);
    });
});
