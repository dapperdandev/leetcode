// 253. Meeting Rooms II (Medium) - LeetCode Premium
// https://leetcode.com/problems/meeting-rooms-ii/
// NeetCode 150: Intervals
//
// Given an array of meeting time intervals where intervals[i] = [start_i, end_i), return the minimum number of
// conference rooms required.

import { describe, expect, it } from "vitest";
import { minMeetingRooms } from "./meeting-rooms-ii.ts";

describe("253. Meeting Rooms II", () => {
    it("example 1", () => {
        const intervals = [
            [0, 30],
            [5, 10],
            [15, 20]
        ];
        expect(minMeetingRooms(intervals)).toBe(2);
    });

    it("example 2", () => {
        const intervals = [
            [7, 10],
            [2, 4]
        ];
        expect(minMeetingRooms(intervals)).toBe(1);
    });
});
