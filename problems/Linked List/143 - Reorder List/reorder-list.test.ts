// 143. Reorder List (Medium)
// https://leetcode.com/problems/reorder-list/
// NeetCode 150: Linked List
//
// You are given the head of a singly linked-list. The list can be represented as:

import { describe, expect, it } from "vitest";
import { arrayToList, listToArray } from "../../../lib/structures.ts";
import { reorderList } from "./reorder-list.ts";

describe("143. Reorder List", () => {
    it("example 1", () => {
        const head = arrayToList([1, 2, 3, 4]);
        reorderList(head);
        expect(listToArray(head)).toEqual([1, 4, 2, 3]);
    });

    it("example 2", () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        reorderList(head);
        expect(listToArray(head)).toEqual([1, 5, 2, 4, 3]);
    });
});
