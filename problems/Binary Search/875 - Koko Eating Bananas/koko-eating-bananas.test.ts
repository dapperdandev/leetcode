// 875. Koko Eating Bananas (Medium)
// https://leetcode.com/problems/koko-eating-bananas/
// NeetCode 150: Binary Search
//
// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have
// gone and will come back in h hours.
//
// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats
// k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat
// any more bananas during this hour.
//
// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
//
// Return the minimum integer k such that she can eat all the bananas within h hours.

import { describe, expect, it } from "vitest";
import { minEatingSpeed } from "./koko-eating-bananas.ts";

describe("875. Koko Eating Bananas", () => {
    it("example 1", () => {
        const piles = [3, 6, 7, 11];
        const h = 8;
        expect(minEatingSpeed(piles, h)).toBe(4);
    });

    it("example 2", () => {
        const piles = [30, 11, 23, 4, 20];
        const h = 5;
        expect(minEatingSpeed(piles, h)).toBe(30);
    });

    it("example 3", () => {
        const piles = [30, 11, 23, 4, 20];
        const h = 6;
        expect(minEatingSpeed(piles, h)).toBe(23);
    });
});
