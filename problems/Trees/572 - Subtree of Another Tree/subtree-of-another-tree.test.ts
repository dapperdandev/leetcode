// 572. Subtree of Another Tree (Easy)
// https://leetcode.com/problems/subtree-of-another-tree/
// NeetCode 150: Trees
//
// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the
// same structure and node values of subRoot and false otherwise.
//
// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's
// descendants. The tree tree could also be considered as a subtree of itself.

import { describe, expect, it } from "vitest";
import { arrayToTree } from "../../../lib/structures.ts";
import { isSubtree } from "./subtree-of-another-tree.ts";

describe("572. Subtree of Another Tree", () => {
    it("example 1", () => {
        const root = arrayToTree([3, 4, 5, 1, 2]);
        const subRoot = arrayToTree([4, 1, 2]);
        expect(isSubtree(root, subRoot)).toBe(true);
    });

    it("example 2", () => {
        const root = arrayToTree([3, 4, 5, 1, 2, null, null, null, null, 0]);
        const subRoot = arrayToTree([4, 1, 2]);
        expect(isSubtree(root, subRoot)).toBe(false);
    });
});
