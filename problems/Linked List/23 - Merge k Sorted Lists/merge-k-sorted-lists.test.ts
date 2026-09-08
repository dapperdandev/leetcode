// 23. Merge k Sorted Lists (Hard)
// https://leetcode.com/problems/merge-k-sorted-lists/
// NeetCode 150: Linked List
//
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
//
// Merge all the linked-lists into one sorted linked-list and return it.

import { describe, expect, it } from "vitest";
import { arrayToList, listToArray } from "../../../lib/structures.ts";
import { mergeKLists } from "./merge-k-sorted-lists.ts";

describe("23. Merge k Sorted Lists", () => {
    it("example 1", () => {
        const lists = [
            [1, 4, 5],
            [1, 3, 4],
            [2, 6]
        ].map((values) => arrayToList(values));
        expect(listToArray(mergeKLists(lists))).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
    });

    it("example 2", () => {
        const lists = [].map((values) => arrayToList(values));
        expect(listToArray(mergeKLists(lists))).toEqual([]);
    });

    it("example 3", () => {
        const lists = [[]].map((values) => arrayToList(values));
        expect(listToArray(mergeKLists(lists))).toEqual([]);
    });
});
