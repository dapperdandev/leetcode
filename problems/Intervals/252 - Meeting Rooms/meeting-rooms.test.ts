// 252. Meeting Rooms (Easy) - LeetCode Premium
// https://leetcode.com/problems/meeting-rooms/
// NeetCode 150: Intervals
//
// Given an array of meeting time intervals where intervals[i] = [start_i, end_i), determine if a person could
// attend all meetings.

import { describe, expect, it } from "vitest";
import { canAttendMeetings } from "./meeting-rooms.ts";

describe("252. Meeting Rooms", () => {
    it("example 1", () => {
        const intervals = [
            [0, 30],
            [5, 10],
            [15, 20]
        ];
        expect(canAttendMeetings(intervals)).toBe(false);
    });

    it("example 2", () => {
        const intervals = [
            [7, 10],
            [2, 4]
        ];
        expect(canAttendMeetings(intervals)).toBe(true);
    });
});
