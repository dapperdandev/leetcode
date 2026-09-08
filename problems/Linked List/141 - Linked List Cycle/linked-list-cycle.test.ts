// 141. Linked List Cycle (Easy)
// https://leetcode.com/problems/linked-list-cycle/
// NeetCode 150: Linked List
//
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
//
// There is a cycle in a linked list if there is some node in the list that can be reached again by
// continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's
// next pointer is connected to. Note that pos is not passed as a parameter.
//
// Return true if there is a cycle in the linked list. Otherwise, return false.

import { describe, expect, it } from "vitest";
import { arrayToListWithCycle } from "../../../lib/structures.ts";
import { hasCycle } from "./linked-list-cycle.ts";

describe("141. Linked List Cycle", () => {
    it("example 1", () => {
        const head = arrayToListWithCycle([3, 2, 0, -4], 1);
        expect(hasCycle(head)).toBe(true);
    });

    it("example 2", () => {
        const head = arrayToListWithCycle([1, 2], 0);
        expect(hasCycle(head)).toBe(true);
    });

    it("example 3", () => {
        const head = arrayToListWithCycle([1], -1);
        expect(hasCycle(head)).toBe(false);
    });
});
