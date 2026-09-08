// 127. Word Ladder (Hard)
// https://leetcode.com/problems/word-ladder/
// NeetCode 150: Graphs
//
// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of
// words beginWord -> s1 -> s2 -> ... -> sk such that:
//
// - Every adjacent pair of words differs by a single letter.
//
// - Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
//
// - sk == endWord
//
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the
// shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

import { describe, expect, it } from "vitest";
import { ladderLength } from "./word-ladder.ts";

describe("127. Word Ladder", () => {
    it("example 1", () => {
        const beginWord = "hit";
        const endWord = "cog";
        const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
        expect(ladderLength(beginWord, endWord, wordList)).toBe(5);
    });

    it("example 2", () => {
        const beginWord = "hit";
        const endWord = "cog";
        const wordList = ["hot", "dot", "dog", "lot", "log"];
        expect(ladderLength(beginWord, endWord, wordList)).toBe(0);
    });
});
