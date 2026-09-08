// 73. Set Matrix Zeroes (Medium)
// https://leetcode.com/problems/set-matrix-zeroes/
// NeetCode 150: Math & Geometry
//
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
//
// You must do it in place.

import { describe, expect, it } from "vitest";
import { setZeroes } from "./set-matrix-zeroes.ts";

describe("73. Set Matrix Zeroes", () => {
    it("example 1", () => {
        const matrix = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
        ];
        setZeroes(matrix);
        expect(matrix).toEqual([
            [1, 0, 1],
            [0, 0, 0],
            [1, 0, 1]
        ]);
    });

    it("example 2", () => {
        const matrix = [
            [0, 1, 2, 0],
            [3, 4, 5, 2],
            [1, 3, 1, 5]
        ];
        setZeroes(matrix);
        expect(matrix).toEqual([
            [0, 0, 0, 0],
            [0, 4, 5, 0],
            [0, 3, 1, 0]
        ]);
    });
});
