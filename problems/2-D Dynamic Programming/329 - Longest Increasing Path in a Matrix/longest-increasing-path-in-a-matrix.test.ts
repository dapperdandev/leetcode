// 329. Longest Increasing Path in a Matrix (Hard)
// https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
// NeetCode 150: 2-D Dynamic Programming
//
// Given an m x n integers matrix, return the length of the longest increasing path in matrix.
//
// From each cell, you can either move in four directions: left, right, up, or down. You may not move
// diagonally or move outside the boundary (i.e., wrap-around is not allowed).

import { describe, expect, it } from "vitest";
import { longestIncreasingPath } from "./longest-increasing-path-in-a-matrix.ts";

describe("329. Longest Increasing Path in a Matrix", () => {
    it("example 1", () => {
        const matrix = [
            [9, 9, 4],
            [6, 6, 8],
            [2, 1, 1]
        ];
        expect(longestIncreasingPath(matrix)).toBe(4);
    });

    it("example 2", () => {
        const matrix = [
            [3, 4, 5],
            [3, 2, 6],
            [2, 2, 1]
        ];
        expect(longestIncreasingPath(matrix)).toBe(4);
    });

    it("example 3", () => {
        const matrix = [[1]];
        expect(longestIncreasingPath(matrix)).toBe(1);
    });
});
