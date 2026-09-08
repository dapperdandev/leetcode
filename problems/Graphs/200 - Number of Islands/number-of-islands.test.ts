// 200. Number of Islands (Medium)
// https://leetcode.com/problems/number-of-islands/
// NeetCode 150: Graphs
//
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number
// of islands.
//
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You
// may assume all four edges of the grid are all surrounded by water.

import { describe, expect, it } from "vitest";
import { numIslands } from "./number-of-islands.ts";

describe("200. Number of Islands", () => {
    it("example 1", () => {
        const grid = [
            ["1", "1", "1", "1", "0"],
            ["1", "1", "0", "1", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "0"]
        ];
        expect(numIslands(grid)).toBe(1);
    });

    it("example 2", () => {
        const grid = [
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"]
        ];
        expect(numIslands(grid)).toBe(3);
    });
});
