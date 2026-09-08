// 297. Serialize and Deserialize Binary Tree (Hard)
// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
// NeetCode 150: Trees
//
// Serialization is the process of converting a data structure or object into a sequence of bits so that it can
// be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed
// later in the same or another computer environment.
//
// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your
// serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be
// serialized to a string and this string can be deserialized to the original tree structure.
//
// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not
// necessarily need to follow this format, so please be creative and come up with different approaches
// yourself.

import { describe, expect, it } from "vitest";
import { arrayToTree, treeToArray } from "../../../lib/structures.ts";
import { deserialize, serialize } from "./serialize-and-deserialize-binary-tree.ts";

describe("297. Serialize and Deserialize Binary Tree", () => {
    it("example 1", () => {
        const root = arrayToTree([1, 2, 3, null, null, 4, 5]);
        expect(treeToArray(deserialize(serialize(root)))).toEqual([1, 2, 3, null, null, 4, 5]);
    });

    it("example 2", () => {
        const root = arrayToTree([]);
        expect(treeToArray(deserialize(serialize(root)))).toEqual([]);
    });
});
