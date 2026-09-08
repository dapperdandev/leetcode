// 226. Invert Binary Tree (Easy)
// https://leetcode.com/problems/invert-binary-tree/
// NeetCode 150: Trees
//
// Given the root of a binary tree, invert the tree, and return its root.

import { describe, expect, it } from "vitest";
import { arrayToTree, treeToArray } from "../../../lib/structures.ts";
import { invertTree } from "./invert-binary-tree.ts";

describe("226. Invert Binary Tree", () => {
    it("example 1", () => {
        const root = arrayToTree([4, 2, 7, 1, 3, 6, 9]);
        expect(treeToArray(invertTree(root))).toEqual([4, 7, 2, 9, 6, 3, 1]);
    });

    it("example 2", () => {
        const root = arrayToTree([2, 1, 3]);
        expect(treeToArray(invertTree(root))).toEqual([2, 3, 1]);
    });

    it("example 3", () => {
        const root = arrayToTree([]);
        expect(treeToArray(invertTree(root))).toEqual([]);
    });
});
