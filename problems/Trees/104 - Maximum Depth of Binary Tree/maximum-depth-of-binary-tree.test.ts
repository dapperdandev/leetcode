// 104. Maximum Depth of Binary Tree (Easy)
// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// NeetCode 150: Trees
//
// Given the root of a binary tree, return its maximum depth.
//
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the
// farthest leaf node.

import { describe, expect, it } from "vitest";
import { arrayToTree } from "../../../lib/structures.ts";
import { maxDepth } from "./maximum-depth-of-binary-tree.ts";

describe("104. Maximum Depth of Binary Tree", () => {
    it("example 1", () => {
        const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
        expect(maxDepth(root)).toBe(3);
    });

    it("example 2", () => {
        const root = arrayToTree([1, null, 2]);
        expect(maxDepth(root)).toBe(2);
    });
});
