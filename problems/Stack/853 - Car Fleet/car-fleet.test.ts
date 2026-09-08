// 853. Car Fleet (Medium)
// https://leetcode.com/problems/car-fleet/
// NeetCode 150: Stack
//
// There are n cars at given miles away from the starting mile 0, traveling to reach the mile target.
//
// You are given two integer arrays position and speed, both of length n, where position[i] is the starting
// mile of the ith car and speed[i] is the speed of the ith car in miles per hour.
//
// A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower
// car.
//
// A car fleet is a single car or a group of cars driving next to each other. The speed of the car fleet is the
// minimum speed of any car in the fleet.
//
// If a car catches up to a car fleet at the mile target, it will still be considered as part of the car fleet.
//
// Return the number of car fleets that will arrive at the destination.

import { describe, expect, it } from "vitest";
import { carFleet } from "./car-fleet.ts";

describe("853. Car Fleet", () => {
    it("example 1", () => {
        const target = 12;
        const position = [10, 8, 0, 5, 3];
        const speed = [2, 4, 1, 1, 3];
        expect(carFleet(target, position, speed)).toBe(3);
    });

    it("example 2", () => {
        const target = 10;
        const position = [3];
        const speed = [3];
        expect(carFleet(target, position, speed)).toBe(1);
    });

    it("example 3", () => {
        const target = 100;
        const position = [0, 2, 4];
        const speed = [4, 2, 1];
        expect(carFleet(target, position, speed)).toBe(1);
    });
});
