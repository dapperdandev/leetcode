// 295. Find Median from Data Stream (Hard)
// https://leetcode.com/problems/find-median-from-data-stream/
// NeetCode 150: Heap / Priority Queue
//
// The median is the middle value in an ordered integer list. If the size of the list is even, there is no
// middle value, and the median is the mean of the two middle values.
//
// - For example, for arr = [2,3,4], the median is 3.
//
// - For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
//
// Implement the MedianFinder class:
//
// - MedianFinder() initializes the MedianFinder object.
//
// - void addNum(int num) adds the integer num from the data stream to the data structure.
//
// - double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer
// will be accepted.

import { describe, expect, it } from "vitest";
import { runOps } from "../../../lib/structures.ts";
import { MedianFinder } from "./find-median-from-data-stream.ts";

describe("295. Find Median from Data Stream", () => {
    it("example 1", () => {
        const ops = ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"];
        const args = [[], [1], [2], [], [3], []];
        expect(runOps(MedianFinder, ops, args)).toEqual([null, null, null, 1.5, null, 2]);
    });
});
