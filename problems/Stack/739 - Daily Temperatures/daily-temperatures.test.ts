// 739. Daily Temperatures (Medium)
// https://leetcode.com/problems/daily-temperatures/
// NeetCode 150: Stack
//
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that
// answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is
// no future day for which this is possible, keep answer[i] == 0 instead.

import { describe, expect, it } from "vitest";
import { dailyTemperatures } from "./daily-temperatures.ts";

describe("739. Daily Temperatures", () => {
    it("example 1", () => {
        const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
        expect(dailyTemperatures(temperatures)).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
    });

    it("example 2", () => {
        const temperatures = [30, 40, 50, 60];
        expect(dailyTemperatures(temperatures)).toEqual([1, 1, 1, 0]);
    });

    it("example 3", () => {
        const temperatures = [30, 60, 90];
        expect(dailyTemperatures(temperatures)).toEqual([1, 1, 0]);
    });
});
