// 110. Balanced Binary Tree (Easy)
// https://leetcode.com/problems/balanced-binary-tree/
// NeetCode 150: Trees
//
// Given a binary tree, determine if it is height-balanced.

import { describe, expect, it } from "vitest";
import { arrayToTree } from "../../../lib/structures.ts";
import { isBalanced } from "./balanced-binary-tree.ts";

describe("110. Balanced Binary Tree", () => {
    it("example 1", () => {
        const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
        expect(isBalanced(root)).toBe(true);
    });

    it("example 2", () => {
        const root = arrayToTree([1, 2, 2, 3, 3, null, null, 4, 4]);
        expect(isBalanced(root)).toBe(false);
    });

    it("example 3", () => {
        const root = arrayToTree([]);
        expect(isBalanced(root)).toBe(true);
    });
});
