// 79. Word Search (Medium)
// https://leetcode.com/problems/word-search/
// NeetCode 150: Backtracking
//
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
//
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are
// horizontally or vertically neighboring. The same letter cell may not be used more than once.

import { describe, expect, it } from "vitest";
import { exist } from "./word-search.ts";

describe("79. Word Search", () => {
    it("example 1", () => {
        const board = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"]
        ];
        const word = "ABCCED";
        expect(exist(board, word)).toBe(true);
    });

    it("example 2", () => {
        const board = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"]
        ];
        const word = "SEE";
        expect(exist(board, word)).toBe(true);
    });

    it("example 3", () => {
        const board = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"]
        ];
        const word = "ABCB";
        expect(exist(board, word)).toBe(false);
    });
});
