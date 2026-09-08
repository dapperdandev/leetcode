// 994. Rotting Oranges (Medium)
// https://leetcode.com/problems/rotting-oranges/
// NeetCode 150: Graphs
//
// You are given an m x n grid where each cell can have one of three values:
//
// - 0 representing an empty cell,
//
// - 1 representing a fresh orange, or
//
// - 2 representing a rotten orange.
//
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
//
// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is
// impossible, return -1.

import { describe, expect, it } from "vitest";
import { orangesRotting } from "./rotting-oranges.ts";

describe("994. Rotting Oranges", () => {
    it("example 1", () => {
        const grid = [
            [2, 1, 1],
            [1, 1, 0],
            [0, 1, 1]
        ];
        expect(orangesRotting(grid)).toBe(4);
    });

    it("example 2", () => {
        const grid = [
            [2, 1, 1],
            [0, 1, 1],
            [1, 0, 1]
        ];
        expect(orangesRotting(grid)).toBe(-1);
    });

    it("example 3", () => {
        const grid = [[0, 2]];
        expect(orangesRotting(grid)).toBe(0);
    });
});
