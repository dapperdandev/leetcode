// 778. Swim in Rising Water (Hard)
// https://leetcode.com/problems/swim-in-rising-water/
// NeetCode 150: Advanced Graphs
//
// You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that
// point (i, j).
//
// It starts raining, and water gradually rises over time. At time t, the water level is t, meaning any cell
// with elevation less than equal to t is submerged or reachable.
//
// You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both
// squares individually are at most t. You can swim infinite distances in zero time. Of course, you must stay
// within the boundaries of the grid during your swim.
//
// Return the minimum time until you can reach the bottom right square (n - 1, n - 1) if you start at the top
// left square (0, 0).

import { describe, expect, it } from "vitest";
import { swimInWater } from "./swim-in-rising-water.ts";

describe("778. Swim in Rising Water", () => {
    it("example 1", () => {
        const grid = [
            [0, 2],
            [1, 3]
        ];
        expect(swimInWater(grid)).toBe(3);
    });

    it("example 2", () => {
        const grid = [
            [0, 1, 2, 3, 4],
            [24, 23, 22, 21, 5],
            [12, 13, 14, 15, 16],
            [11, 17, 18, 19, 20],
            [10, 9, 8, 7, 6]
        ];
        expect(swimInWater(grid)).toBe(16);
    });
});
