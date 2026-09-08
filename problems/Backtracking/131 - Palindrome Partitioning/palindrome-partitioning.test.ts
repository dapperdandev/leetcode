// 131. Palindrome Partitioning (Medium)
// https://leetcode.com/problems/palindrome-partitioning/
// NeetCode 150: Backtracking
//
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all
// possible palindrome partitioning of s.

import { describe, expect, it } from "vitest";
import { sortDeep } from "../../../lib/structures.ts";
import { partition } from "./palindrome-partitioning.ts";

describe("131. Palindrome Partitioning", () => {
    it("example 1", () => {
        const s = "aab";
        expect(sortDeep(partition(s))).toEqual(
            sortDeep([
                ["a", "a", "b"],
                ["aa", "b"]
            ])
        );
    });

    it("example 2", () => {
        const s = "a";
        expect(sortDeep(partition(s))).toEqual(sortDeep([["a"]]));
    });
});
