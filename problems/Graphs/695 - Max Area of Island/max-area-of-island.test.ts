// 695. Max Area of Island (Medium)
// https://leetcode.com/problems/max-area-of-island/
// NeetCode 150: Graphs
//
// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected
// 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
//
// The area of an island is the number of cells with a value 1 in the island.
//
// Return the maximum area of an island in grid. If there is no island, return 0.

import { describe, expect, it } from "vitest";
import { maxAreaOfIsland } from "./max-area-of-island.ts";

describe("695. Max Area of Island", () => {
    it("example 1", () => {
        const grid = [
            [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
        ];
        expect(maxAreaOfIsland(grid)).toBe(6);
    });

    it("example 2", () => {
        const grid = [[0, 0, 0, 0, 0, 0, 0, 0]];
        expect(maxAreaOfIsland(grid)).toBe(0);
    });
});
