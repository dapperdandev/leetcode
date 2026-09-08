// 518. Coin Change II (Medium)
// https://leetcode.com/problems/coin-change-ii/
// NeetCode 150: 2-D Dynamic Programming
//
// You are given an integer array coins representing coins of different denominations and an integer amount
// representing a total amount of money.
//
// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any
// combination of the coins, return 0.
//
// You may assume that you have an infinite number of each kind of coin.
//
// The final answer is guaranteed to fit into a signed 32-bit integer.

import { describe, expect, it } from "vitest";
import { change } from "./coin-change-ii.ts";

describe("518. Coin Change II", () => {
    it("example 1", () => {
        const amount = 5;
        const coins = [1, 2, 5];
        expect(change(amount, coins)).toBe(4);
    });

    it("example 2", () => {
        const amount = 3;
        const coins = [2];
        expect(change(amount, coins)).toBe(0);
    });

    it("example 3", () => {
        const amount = 10;
        const coins = [10];
        expect(change(amount, coins)).toBe(1);
    });
});
