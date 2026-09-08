// 235. Lowest Common Ancestor of a Binary Search Tree (Medium)
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// NeetCode 150: Trees
//
// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
//
// According to the definition of LCA on Wikipedia: &ldquo;The lowest common ancestor is defined between two
// nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a
// descendant of itself).&rdquo;

import { describe, expect, it } from "vitest";
import { arrayToTree, findNode } from "../../../lib/structures.ts";
import { lowestCommonAncestor } from "./lowest-common-ancestor-of-a-binary-search-tree.ts";

describe("235. Lowest Common Ancestor of a Binary Search Tree", () => {
    it("example 1", () => {
        const root = arrayToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
        const p = findNode(root, 2)!;
        const q = findNode(root, 8)!;
        expect(lowestCommonAncestor(root, p, q)?.val).toBe(6);
    });

    it("example 2", () => {
        const root = arrayToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
        const p = findNode(root, 2)!;
        const q = findNode(root, 4)!;
        expect(lowestCommonAncestor(root, p, q)?.val).toBe(2);
    });

    it("example 3", () => {
        const root = arrayToTree([2, 1]);
        const p = findNode(root, 2)!;
        const q = findNode(root, 1)!;
        expect(lowestCommonAncestor(root, p, q)?.val).toBe(2);
    });
});
