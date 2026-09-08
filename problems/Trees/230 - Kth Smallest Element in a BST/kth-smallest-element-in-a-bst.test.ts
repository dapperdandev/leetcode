// 230. Kth Smallest Element in a BST (Medium)
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
// NeetCode 150: Trees
//
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all
// the values of the nodes in the tree.

import { describe, expect, it } from "vitest";
import { arrayToTree } from "../../../lib/structures.ts";
import { kthSmallest } from "./kth-smallest-element-in-a-bst.ts";

describe("230. Kth Smallest Element in a BST", () => {
    it("example 1", () => {
        const root = arrayToTree([3, 1, 4, null, 2]);
        const k = 1;
        expect(kthSmallest(root, k)).toBe(1);
    });

    it("example 2", () => {
        const root = arrayToTree([5, 3, 6, 2, 4, null, null, 1]);
        const k = 3;
        expect(kthSmallest(root, k)).toBe(3);
    });
});
