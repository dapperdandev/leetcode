// 269. Alien Dictionary (Hard) - LeetCode Premium
// https://leetcode.com/problems/alien-dictionary/
// NeetCode 150: Advanced Graphs
//
// There is a new alien language that uses the English alphabet, but the order of the letters is unknown. You
// are given a list of strings words from the alien language's dictionary, sorted lexicographically by the
// rules of this language. Return a string of the unique letters in the new alien language sorted in
// lexicographically increasing order. If there is no solution, return "". If there are multiple solutions,
// return any of them.

import { describe, expect, it } from "vitest";
import { alienOrder } from "./alien-dictionary.ts";

describe("269. Alien Dictionary", () => {
    it("example 1", () => {
        const words = ["wrt", "wrf", "er", "ett", "rftt"];
        expect(alienOrder(words)).toBe("wertf");
    });

    it("example 2", () => {
        const words = ["z", "x"];
        expect(alienOrder(words)).toBe("zx");
    });

    it("example 3", () => {
        const words = ["z", "x", "z"];
        expect(alienOrder(words)).toBe("");
    });
});
