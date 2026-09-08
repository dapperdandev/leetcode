// 19. Remove Nth Node From End of List (Medium)
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// NeetCode 150: Linked List
//
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

import { describe, expect, it } from "vitest";
import { arrayToList, listToArray } from "../../../lib/structures.ts";
import { removeNthFromEnd } from "./remove-nth-node-from-end-of-list.ts";

describe("19. Remove Nth Node From End of List", () => {
    it("example 1", () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const n = 2;
        expect(listToArray(removeNthFromEnd(head, n))).toEqual([1, 2, 3, 5]);
    });

    it("example 2", () => {
        const head = arrayToList([1]);
        const n = 1;
        expect(listToArray(removeNthFromEnd(head, n))).toEqual([]);
    });

    it("example 3", () => {
        const head = arrayToList([1, 2]);
        const n = 1;
        expect(listToArray(removeNthFromEnd(head, n))).toEqual([1]);
    });
});
