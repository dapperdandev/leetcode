// 48. Rotate Image (Medium)
// https://leetcode.com/problems/rotate-image/
// NeetCode 150: Math & Geometry
//
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
//
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT
// allocate another 2D matrix and do the rotation.

import { describe, expect, it } from "vitest";
import { rotate } from "./rotate-image.ts";

describe("48. Rotate Image", () => {
    it("example 1", () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        rotate(matrix);
        expect(matrix).toEqual([
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3]
        ]);
    });

    it("example 2", () => {
        const matrix = [
            [5, 1, 9, 11],
            [2, 4, 8, 10],
            [13, 3, 6, 7],
            [15, 14, 12, 16]
        ];
        rotate(matrix);
        expect(matrix).toEqual([
            [15, 13, 2, 5],
            [14, 3, 4, 1],
            [12, 6, 8, 9],
            [16, 7, 10, 11]
        ]);
    });
});
