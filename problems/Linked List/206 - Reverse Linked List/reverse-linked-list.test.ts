// 206. Reverse Linked List (Easy)
// https://leetcode.com/problems/reverse-linked-list/
// NeetCode 150: Linked List
//
// Given the head of a singly linked list, reverse the list, and return the reversed list.

import { describe, expect, it } from "vitest";
import { arrayToList, listToArray } from "../../../lib/structures.ts";
import { reverseList } from "./reverse-linked-list.ts";

describe("206. Reverse Linked List", () => {
    it("example 1", () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        expect(listToArray(reverseList(head))).toEqual([5, 4, 3, 2, 1]);
    });

    it("example 2", () => {
        const head = arrayToList([1, 2]);
        expect(listToArray(reverseList(head))).toEqual([2, 1]);
    });

    it("example 3", () => {
        const head = arrayToList([]);
        expect(listToArray(reverseList(head))).toEqual([]);
    });
});
