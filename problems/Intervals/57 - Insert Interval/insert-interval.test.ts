// 57. Insert Interval (Medium)
// https://leetcode.com/problems/insert-interval/
// NeetCode 150: Intervals
//
// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent
// the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also
// given an interval newInterval = [start, end] that represents the start and end of another interval.
//
// Two intervals are considered overlapping if they share at least one point.
//
// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and
// intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
//
// Return intervals after the insertion.
//
// Note that you don't need to modify intervals in-place. You can make a new array and return it.

import { describe, expect, it } from "vitest";
import { insert } from "./insert-interval.ts";

describe("57. Insert Interval", () => {
    it("example 1", () => {
        const intervals = [
            [1, 3],
            [6, 9]
        ];
        const newInterval = [2, 5];
        expect(insert(intervals, newInterval)).toEqual([
            [1, 5],
            [6, 9]
        ]);
    });

    it("example 2", () => {
        const intervals = [
            [1, 2],
            [3, 5],
            [6, 7],
            [8, 10],
            [12, 16]
        ];
        const newInterval = [4, 8];
        expect(insert(intervals, newInterval)).toEqual([
            [1, 2],
            [3, 10],
            [12, 16]
        ]);
    });
});
