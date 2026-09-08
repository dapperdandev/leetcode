// 167. Two Sum II - Input Array Is Sorted (Medium)
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// NeetCode 150: Two Pointers
//
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers
// such that they add up to a specific target number. Let these two numbers be numbers[index1] and
// numbers[index2] where 1 <= index1 < index2 <= numbers.length.
//
// Return the indices of the two numbers index1 and index2, each incremented by one, as an integer array
// [index1, index2] of length 2.
//
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
//
// Your solution must use only constant extra space.

import { describe, expect, it } from "vitest";
import { twoSum } from "./two-sum-ii-input-array-is-sorted.ts";

describe("167. Two Sum II - Input Array Is Sorted", () => {
    it("example 1", () => {
        const numbers = [2, 7, 11, 15];
        const target = 9;
        expect(twoSum(numbers, target)).toEqual([1, 2]);
    });

    it("example 2", () => {
        const numbers = [2, 3, 4];
        const target = 6;
        expect(twoSum(numbers, target)).toEqual([1, 3]);
    });

    it("example 3", () => {
        const numbers = [-1, 0];
        const target = -1;
        expect(twoSum(numbers, target)).toEqual([1, 2]);
    });
});
