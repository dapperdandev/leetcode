// 21. Merge Two Sorted Lists (Easy)
// https://leetcode.com/problems/merge-two-sorted-lists/
// NeetCode 150: Linked List
//
// You are given the heads of two sorted linked lists list1 and list2.
//
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the
// first two lists.
//
// Return the head of the merged linked list.

import { describe, expect, it } from "vitest";
import { arrayToList, listToArray } from "../../../lib/structures.ts";
import { mergeTwoLists } from "./merge-two-sorted-lists.ts";

describe("21. Merge Two Sorted Lists", () => {
    it("example 1", () => {
        const list1 = arrayToList([1, 2, 4]);
        const list2 = arrayToList([1, 3, 4]);
        expect(listToArray(mergeTwoLists(list1, list2))).toEqual([1, 1, 2, 3, 4, 4]);
    });

    it("example 2", () => {
        const list1 = arrayToList([]);
        const list2 = arrayToList([]);
        expect(listToArray(mergeTwoLists(list1, list2))).toEqual([]);
    });

    it("example 3", () => {
        const list1 = arrayToList([]);
        const list2 = arrayToList([0]);
        expect(listToArray(mergeTwoLists(list1, list2))).toEqual([0]);
    });
});
