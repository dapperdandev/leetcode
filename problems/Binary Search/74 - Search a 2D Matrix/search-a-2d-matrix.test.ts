// 74. Search a 2D Matrix (Medium)
// https://leetcode.com/problems/search-a-2d-matrix/
// NeetCode 150: Binary Search
//
// You are given an m x n integer matrix matrix with the following two properties:
//
// - Each row is sorted in non-decreasing order.
//
// - The first integer of each row is greater than the last integer of the previous row.
//
// Given an integer target, return true if target is in matrix or false otherwise.
//
// You must write a solution in O(log(m * n)) time complexity.

import { describe, expect, it } from "vitest";
import { searchMatrix } from "./search-a-2d-matrix.ts";

describe("74. Search a 2D Matrix", () => {
    it("example 1", () => {
        const matrix = [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60]
        ];
        const target = 3;
        expect(searchMatrix(matrix, target)).toBe(true);
    });

    it("example 2", () => {
        const matrix = [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60]
        ];
        const target = 13;
        expect(searchMatrix(matrix, target)).toBe(false);
    });
});
