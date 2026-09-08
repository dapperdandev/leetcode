// 199. Binary Tree Right Side View (Medium)
// https://leetcode.com/problems/binary-tree-right-side-view/
// NeetCode 150: Trees
//
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the
// nodes you can see ordered from top to bottom.

import { describe, expect, it } from "vitest";
import { arrayToTree } from "../../../lib/structures.ts";
import { rightSideView } from "./binary-tree-right-side-view.ts";

describe("199. Binary Tree Right Side View", () => {
    it("example 1", () => {
        const root = arrayToTree([1, 2, 3, null, 5, null, 4]);
        expect(rightSideView(root)).toEqual([1, 3, 4]);
    });

    it("example 2", () => {
        const root = arrayToTree([1, 2, 3, 4, null, null, null, 5]);
        expect(rightSideView(root)).toEqual([1, 3, 4, 5]);
    });

    it("example 3", () => {
        const root = arrayToTree([1, null, 3]);
        expect(rightSideView(root)).toEqual([1, 3]);
    });

    it("example 4", () => {
        const root = arrayToTree([]);
        expect(rightSideView(root)).toEqual([]);
    });
});
