// 72. Edit Distance (Medium)
// https://leetcode.com/problems/edit-distance/
// NeetCode 150: 2-D Dynamic Programming
//
// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to
// word2.
//
// You have the following three operations permitted on a word:
//
// - Insert a character
//
// - Delete a character
//
// - Replace a character

import { describe, expect, it } from "vitest";
import { minDistance } from "./edit-distance.ts";

describe("72. Edit Distance", () => {
    it("example 1", () => {
        const word1 = "horse";
        const word2 = "ros";
        expect(minDistance(word1, word2)).toBe(3);
    });

    it("example 2", () => {
        const word1 = "intention";
        const word2 = "execution";
        expect(minDistance(word1, word2)).toBe(5);
    });
});
