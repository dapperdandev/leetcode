// 1851. Minimum Interval to Include Each Query (Hard)
// https://leetcode.com/problems/minimum-interval-to-include-each-query/
// NeetCode 150: Intervals
//
// You are given a 2D integer array intervals, where intervals[i] = [lefti, righti] describes the ith interval
// starting at lefti and ending at righti (inclusive). The size of an interval is defined as the number of
// integers it contains, or more formally righti - lefti + 1.
//
// You are also given an integer array queries. The answer to the jth query is the size of the smallest
// interval i such that lefti <= queries[j] <= righti. If no such interval exists, the answer is -1.
//
// Return an array containing the answers to the queries.

import { describe, expect, it } from "vitest";
import { minInterval } from "./minimum-interval-to-include-each-query.ts";

describe("1851. Minimum Interval to Include Each Query", () => {
    it("example 1", () => {
        const intervals = [
            [1, 4],
            [2, 4],
            [3, 6],
            [4, 4]
        ];
        const queries = [2, 3, 4, 5];
        expect(minInterval(intervals, queries)).toEqual([3, 3, 1, 4]);
    });

    it("example 2", () => {
        const intervals = [
            [2, 3],
            [2, 5],
            [1, 8],
            [20, 25]
        ];
        const queries = [2, 19, 5, 22];
        expect(minInterval(intervals, queries)).toEqual([2, -1, 4, 6]);
    });
});
