// 102. Binary Tree Level Order Traversal (Medium)
// https://leetcode.com/problems/binary-tree-level-order-traversal/
// NeetCode 150: Trees
//
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to
// right, level by level).

import { describe, expect, it } from "vitest";
import { arrayToTree } from "../../../lib/structures.ts";
import { levelOrder } from "./binary-tree-level-order-traversal.ts";

describe("102. Binary Tree Level Order Traversal", () => {
    it("example 1", () => {
        const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
        expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
    });

    it("example 2", () => {
        const root = arrayToTree([1]);
        expect(levelOrder(root)).toEqual([[1]]);
    });

    it("example 3", () => {
        const root = arrayToTree([]);
        expect(levelOrder(root)).toEqual([]);
    });
});
