// 543. Diameter of Binary Tree (Easy)
// https://leetcode.com/problems/diameter-of-binary-tree/
// NeetCode 150: Trees
//
// Given the root of a binary tree, return the length of the diameter of the tree.
//
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path
// may or may not pass through the root.
//
// The length of a path between two nodes is represented by the number of edges between them.

import { describe, expect, it } from "vitest";
import { arrayToTree } from "../../../lib/structures.ts";
import { diameterOfBinaryTree } from "./diameter-of-binary-tree.ts";

describe("543. Diameter of Binary Tree", () => {
    it("example 1", () => {
        const root = arrayToTree([1, 2, 3, 4, 5]);
        expect(diameterOfBinaryTree(root)).toBe(3);
    });

    it("example 2", () => {
        const root = arrayToTree([1, 2]);
        expect(diameterOfBinaryTree(root)).toBe(1);
    });
});
