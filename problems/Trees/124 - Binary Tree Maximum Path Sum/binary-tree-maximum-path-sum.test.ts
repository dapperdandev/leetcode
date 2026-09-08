// 124. Binary Tree Maximum Path Sum (Hard)
// https://leetcode.com/problems/binary-tree-maximum-path-sum/
// NeetCode 150: Trees
//
// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge
// connecting them. A node can only appear in the sequence at most once. Note that the path does not need to
// pass through the root.
//
// The path sum of a path is the sum of the node's values in the path.
//
// Given the root of a binary tree, return the maximum path sum of any non-empty path.

import { describe, expect, it } from "vitest";
import { arrayToTree } from "../../../lib/structures.ts";
import { maxPathSum } from "./binary-tree-maximum-path-sum.ts";

describe("124. Binary Tree Maximum Path Sum", () => {
    it("example 1", () => {
        const root = arrayToTree([1, 2, 3]);
        expect(maxPathSum(root)).toBe(6);
    });

    it("example 2", () => {
        const root = arrayToTree([-10, 9, 20, null, null, 15, 7]);
        expect(maxPathSum(root)).toBe(42);
    });
});
