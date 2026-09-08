// 322. Coin Change (Medium)
// https://leetcode.com/problems/coin-change/
// NeetCode 150: 1-D Dynamic Programming
//
// You are given an integer array coins representing coins of different denominations and an integer amount
// representing a total amount of money.
//
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be
// made up by any combination of the coins, return -1.
//
// You may assume that you have an infinite number of each kind of coin.

import { describe, expect, it } from "vitest";
import { coinChange } from "./coin-change.ts";

describe("322. Coin Change", () => {
    it("example 1", () => {
        const coins = [1, 2, 5];
        const amount = 11;
        expect(coinChange(coins, amount)).toBe(3);
    });

    it("example 2", () => {
        const coins = [2];
        const amount = 3;
        expect(coinChange(coins, amount)).toBe(-1);
    });

    it("example 3", () => {
        const coins = [1];
        const amount = 0;
        expect(coinChange(coins, amount)).toBe(0);
    });
});
