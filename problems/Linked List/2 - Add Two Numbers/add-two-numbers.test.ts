// 2. Add Two Numbers (Medium)
// https://leetcode.com/problems/add-two-numbers/
// NeetCode 150: Linked List
//
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in
// reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a
// linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

import { describe, expect, it } from "vitest";
import { arrayToList, listToArray } from "../../../lib/structures.ts";
import { addTwoNumbers } from "./add-two-numbers.ts";

describe("2. Add Two Numbers", () => {
    it("example 1", () => {
        const l1 = arrayToList([2, 4, 3]);
        const l2 = arrayToList([5, 6, 4]);
        expect(listToArray(addTwoNumbers(l1, l2))).toEqual([7, 0, 8]);
    });

    it("example 2", () => {
        const l1 = arrayToList([0]);
        const l2 = arrayToList([0]);
        expect(listToArray(addTwoNumbers(l1, l2))).toEqual([0]);
    });

    it("example 3", () => {
        const l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
        const l2 = arrayToList([9, 9, 9, 9]);
        expect(listToArray(addTwoNumbers(l1, l2))).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });
});
