// 54. Spiral Matrix (Medium)
// https://leetcode.com/problems/spiral-matrix/
// NeetCode 150: Math & Geometry
//
// Given an m x n matrix, return all elements of the matrix in spiral order.

import { describe, expect, it } from "vitest";
import { spiralOrder } from "./spiral-matrix.ts";

describe("54. Spiral Matrix", () => {
    it("example 1", () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        expect(spiralOrder(matrix)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

    it("example 2", () => {
        const matrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12]
        ];
        expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
    });
});
