// 703. Kth Largest Element in a Stream (Easy)
// https://leetcode.com/problems/kth-largest-element-in-a-stream/
// NeetCode 150: Heap / Priority Queue
//
// You are part of a university admissions office and need to keep track of the kth highest test score from
// applicants in real-time. This helps to determine cut-off marks for interviews and admissions dynamically as
// new applicants submit their scores.
//
// You are tasked to implement a class which, for a given integer k, maintains a stream of test scores and
// continuously returns the kth highest test score after a new score has been submitted. More specifically, we
// are looking for the kth highest score in the sorted list of all scores.
//
// Implement the KthLargest class:
//
// - KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of test scores
// nums.
//
// - int add(int val) Adds a new test score val to the stream and returns the element representing the kth
// largest element in the pool of test scores so far.

import { describe, expect, it } from "vitest";
import { runOps } from "../../../lib/structures.ts";
import { KthLargest } from "./kth-largest-element-in-a-stream.ts";

describe("703. Kth Largest Element in a Stream", () => {
    it("example 1", () => {
        const ops = ["KthLargest", "add", "add", "add", "add", "add"];
        const args = [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]];
        expect(runOps(KthLargest, ops, args)).toEqual([null, 4, 5, 5, 8, 8]);
    });

    it("example 2", () => {
        const ops = ["KthLargest", "add", "add", "add", "add"];
        const args = [[4, [7, 7, 7, 7, 8, 3]], [2], [10], [9], [9]];
        expect(runOps(KthLargest, ops, args)).toEqual([null, 7, 7, 7, 8]);
    });
});
