// 787. Cheapest Flights Within K Stops (Medium)
// https://leetcode.com/problems/cheapest-flights-within-k-stops/
// NeetCode 150: Advanced Graphs
//
// There are n cities connected by some number of flights. You are given an array flights where flights[i] =
// [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.
//
// You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k
// stops. If there is no such route, return -1.

import { describe, expect, it } from "vitest";
import { findCheapestPrice } from "./cheapest-flights-within-k-stops.ts";

describe("787. Cheapest Flights Within K Stops", () => {
    it("example 1", () => {
        const n = 4;
        const flights = [
            [0, 1, 100],
            [1, 2, 100],
            [2, 0, 100],
            [1, 3, 600],
            [2, 3, 200]
        ];
        const src = 0;
        const dst = 3;
        const k = 1;
        expect(findCheapestPrice(n, flights, src, dst, k)).toBe(700);
    });

    it("example 2", () => {
        const n = 3;
        const flights = [
            [0, 1, 100],
            [1, 2, 100],
            [0, 2, 500]
        ];
        const src = 0;
        const dst = 2;
        const k = 1;
        expect(findCheapestPrice(n, flights, src, dst, k)).toBe(200);
    });

    it("example 3", () => {
        const n = 3;
        const flights = [
            [0, 1, 100],
            [1, 2, 100],
            [0, 2, 500]
        ];
        const src = 0;
        const dst = 2;
        const k = 0;
        expect(findCheapestPrice(n, flights, src, dst, k)).toBe(500);
    });
});
