// 25. Reverse Nodes in k-Group (Hard)
// https://leetcode.com/problems/reverse-nodes-in-k-group/
// NeetCode 150: Linked List
//
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
//
// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes
// is not a multiple of k then left-out nodes, in the end, should remain as it is.
//
// You may not alter the values in the list's nodes, only nodes themselves may be changed.

import { describe, expect, it } from "vitest";
import { arrayToList, listToArray } from "../../../lib/structures.ts";
import { reverseKGroup } from "./reverse-nodes-in-k-group.ts";

describe("25. Reverse Nodes in k-Group", () => {
    it("example 1", () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const k = 2;
        expect(listToArray(reverseKGroup(head, k))).toEqual([2, 1, 4, 3, 5]);
    });

    it("example 2", () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const k = 3;
        expect(listToArray(reverseKGroup(head, k))).toEqual([3, 2, 1, 4, 5]);
    });
});
