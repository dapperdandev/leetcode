// 98. Validate Binary Search Tree (Medium)
// https://leetcode.com/problems/validate-binary-search-tree/
// NeetCode 150: Trees
//
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
//
// A valid BST is defined as follows:
//
// - The left subtree of a node contains only nodes with keys strictly less than the node's key.
//
// - The right subtree of a node contains only nodes with keys strictly greater than the node's key.
//
// - Both the left and right subtrees must also be binary search trees.

import { describe, expect, it } from "vitest";
import { arrayToTree } from "../../../lib/structures.ts";
import { isValidBST } from "./validate-binary-search-tree.ts";

describe("98. Validate Binary Search Tree", () => {
    it("example 1", () => {
        const root = arrayToTree([2, 1, 3]);
        expect(isValidBST(root)).toBe(true);
    });

    it("example 2", () => {
        const root = arrayToTree([5, 1, 4, null, null, 3, 6]);
        expect(isValidBST(root)).toBe(false);
    });
});
