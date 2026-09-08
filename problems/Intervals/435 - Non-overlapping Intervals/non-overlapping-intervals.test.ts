// 435. Non-overlapping Intervals (Medium)
// https://leetcode.com/problems/non-overlapping-intervals/
// NeetCode 150: Intervals
//
// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of
// intervals you need to remove to make the rest of the intervals non-overlapping.
//
// Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are
// non-overlapping.

import { describe, expect, it } from "vitest";
import { eraseOverlapIntervals } from "./non-overlapping-intervals.ts";

describe("435. Non-overlapping Intervals", () => {
    it("example 1", () => {
        const intervals = [
            [1, 2],
            [2, 3],
            [3, 4],
            [1, 3]
        ];
        expect(eraseOverlapIntervals(intervals)).toBe(1);
    });

    it("example 2", () => {
        const intervals = [
            [1, 2],
            [1, 2],
            [1, 2]
        ];
        expect(eraseOverlapIntervals(intervals)).toBe(2);
    });

    it("example 3", () => {
        const intervals = [
            [1, 2],
            [2, 3]
        ];
        expect(eraseOverlapIntervals(intervals)).toBe(0);
    });
});
