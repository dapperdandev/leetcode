// 212. Word Search II (Hard)
// https://leetcode.com/problems/word-search-ii/
// NeetCode 150: Tries
//
// Given an m x n board of characters and a list of strings words, return all words on the board.
//
// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are
// horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

import { describe, expect, it } from "vitest";
import { sortDeep } from "../../../lib/structures.ts";
import { findWords } from "./word-search-ii.ts";

describe("212. Word Search II", () => {
    it("example 1", () => {
        const board = [
            ["o", "a", "a", "n"],
            ["e", "t", "a", "e"],
            ["i", "h", "k", "r"],
            ["i", "f", "l", "v"]
        ];
        const words = ["oath", "pea", "eat", "rain"];
        expect(sortDeep(findWords(board, words))).toEqual(sortDeep(["eat", "oath"]));
    });

    it("example 2", () => {
        const board = [
            ["a", "b"],
            ["c", "d"]
        ];
        const words = ["abcb"];
        expect(sortDeep(findWords(board, words))).toEqual(sortDeep([]));
    });
});
