// 100. Same Tree (Easy)
// https://leetcode.com/problems/same-tree/
// NeetCode 150: Trees
//
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
//
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same
// value.

import { describe, expect, it } from "vitest";
import { arrayToTree } from "../../../lib/structures.ts";
import { isSameTree } from "./same-tree.ts";

describe("100. Same Tree", () => {
    it("example 1", () => {
        const p = arrayToTree([1, 2, 3]);
        const q = arrayToTree([1, 2, 3]);
        expect(isSameTree(p, q)).toBe(true);
    });

    it("example 2", () => {
        const p = arrayToTree([1, 2]);
        const q = arrayToTree([1, null, 2]);
        expect(isSameTree(p, q)).toBe(false);
    });

    it("example 3", () => {
        const p = arrayToTree([1, 2, 1]);
        const q = arrayToTree([1, 1, 2]);
        expect(isSameTree(p, q)).toBe(false);
    });
});
