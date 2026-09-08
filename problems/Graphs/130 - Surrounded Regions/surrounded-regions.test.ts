// 130. Surrounded Regions (Medium)
// https://leetcode.com/problems/surrounded-regions/
// NeetCode 150: Graphs
//
// You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:
//
// - Connect: A cell is connected to adjacent cells horizontally or vertically.
//
// - Region: To form a region connect every 'O' cell.
//
// - Surround: A region is surrounded if none of the 'O' cells in that region are on the edge of the board.
// Such regions are completely enclosed by 'X' cells.
//
// To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not
// need to return anything.

import { describe, expect, it } from "vitest";
import { solve } from "./surrounded-regions.ts";

describe("130. Surrounded Regions", () => {
    it("example 1", () => {
        const board = [
            ["X", "X", "X", "X"],
            ["X", "O", "O", "X"],
            ["X", "X", "O", "X"],
            ["X", "O", "X", "X"]
        ];
        solve(board);
        expect(board).toEqual([
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "O", "X", "X"]
        ]);
    });

    it("example 2", () => {
        const board = [["X"]];
        solve(board);
        expect(board).toEqual([["X"]]);
    });
});
