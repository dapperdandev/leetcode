// 51. N-Queens (Hard)
// https://leetcode.com/problems/n-queens/
// NeetCode 150: Backtracking
//
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack
// each other.
//
// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any
// order.
//
// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both
// indicate a queen and an empty space, respectively.

import { describe, expect, it } from "vitest";
import { sortDeep } from "../../../lib/structures.ts";
import { solveNQueens } from "./n-queens.ts";

describe("51. N-Queens", () => {
    it("example 1", () => {
        const n = 4;
        expect(sortDeep(solveNQueens(n))).toEqual(
            sortDeep([
                [".Q..", "...Q", "Q...", "..Q."],
                ["..Q.", "Q...", "...Q", ".Q.."]
            ])
        );
    });

    it("example 2", () => {
        const n = 1;
        expect(sortDeep(solveNQueens(n))).toEqual(sortDeep([["Q"]]));
    });
});
