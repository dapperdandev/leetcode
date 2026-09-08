// 1448. Count Good Nodes in Binary Tree (Medium)
// https://leetcode.com/problems/count-good-nodes-in-binary-tree/
// NeetCode 150: Trees
//
// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no
// nodes with a value greater than X.
//
// Return the number of good nodes in the binary tree.

import { describe, expect, it } from "vitest";
import { arrayToTree } from "../../../lib/structures.ts";
import { goodNodes } from "./count-good-nodes-in-binary-tree.ts";

describe("1448. Count Good Nodes in Binary Tree", () => {
    it("example 1", () => {
        const root = arrayToTree([3, 1, 4, 3, null, 1, 5]);
        expect(goodNodes(root)).toBe(4);
    });

    it("example 2", () => {
        const root = arrayToTree([3, 3, null, 4, 2]);
        expect(goodNodes(root)).toBe(3);
    });

    it("example 3", () => {
        const root = arrayToTree([1]);
        expect(goodNodes(root)).toBe(1);
    });
});
