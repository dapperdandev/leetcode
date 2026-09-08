// 56. Merge Intervals (Medium)
// https://leetcode.com/problems/merge-intervals/
// NeetCode 150: Intervals
//
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return
// an array of the non-overlapping intervals that cover all the intervals in the input.

import { describe, expect, it } from "vitest";
import { merge } from "./merge-intervals.ts";

describe("56. Merge Intervals", () => {
    it("example 1", () => {
        const intervals = [
            [1, 3],
            [2, 6],
            [8, 10],
            [15, 18]
        ];
        expect(merge(intervals)).toEqual([
            [1, 6],
            [8, 10],
            [15, 18]
        ]);
    });

    it("example 2", () => {
        const intervals = [
            [1, 4],
            [4, 5]
        ];
        expect(merge(intervals)).toEqual([[1, 5]]);
    });

    it("example 3", () => {
        const intervals = [
            [4, 7],
            [1, 4]
        ];
        expect(merge(intervals)).toEqual([[1, 7]]);
    });
});
