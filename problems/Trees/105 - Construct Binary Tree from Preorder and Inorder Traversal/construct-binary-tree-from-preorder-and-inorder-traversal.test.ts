// 105. Construct Binary Tree from Preorder and Inorder Traversal (Medium)
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// NeetCode 150: Trees
//
// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and
// inorder is the inorder traversal of the same tree, construct and return the binary tree.

import { describe, expect, it } from "vitest";
import { treeToArray } from "../../../lib/structures.ts";
import { buildTree } from "./construct-binary-tree-from-preorder-and-inorder-traversal.ts";

describe("105. Construct Binary Tree from Preorder and Inorder Traversal", () => {
    it("example 1", () => {
        const preorder = [3, 9, 20, 15, 7];
        const inorder = [9, 3, 15, 20, 7];
        expect(treeToArray(buildTree(preorder, inorder))).toEqual([3, 9, 20, null, null, 15, 7]);
    });

    it("example 2", () => {
        const preorder = [-1];
        const inorder = [-1];
        expect(treeToArray(buildTree(preorder, inorder))).toEqual([-1]);
    });
});
