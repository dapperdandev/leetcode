// 155. Min Stack (Medium)
// https://leetcode.com/problems/min-stack/
// NeetCode 150: Stack
//
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//
// Implement the MinStack class:
//
// - MinStack() initializes the stack object.
//
// - void push(int value) pushes the element value onto the stack.
//
// - void pop() removes the element on the top of the stack.
//
// - int top() gets the top element of the stack.
//
// - int getMin() retrieves the minimum element in the stack.
//
// You must implement a solution with O(1) time complexity for each function.

import { describe, expect, it } from "vitest";
import { runOps } from "../../../lib/structures.ts";
import { MinStack } from "./min-stack.ts";

describe("155. Min Stack", () => {
    it("example 1", () => {
        const ops = ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"];
        const args = [[], [-2], [0], [-3], [], [], [], []];
        expect(runOps(MinStack, ops, args)).toEqual([null, null, null, null, -3, null, 0, -2]);
    });
});
