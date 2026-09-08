// 309. Best Time to Buy and Sell Stock with Cooldown (Medium)
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
// NeetCode 150: 2-D Dynamic Programming
//
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
//
// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one
// and sell one share of the stock multiple times) with the following restrictions:
//
// - After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
//
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you
// buy again).

import { describe, expect, it } from "vitest";
import { maxProfit } from "./best-time-to-buy-and-sell-stock-with-cooldown.ts";

describe("309. Best Time to Buy and Sell Stock with Cooldown", () => {
    it("example 1", () => {
        const prices = [1, 2, 3, 0, 2];
        expect(maxProfit(prices)).toBe(3);
    });

    it("example 2", () => {
        const prices = [1];
        expect(maxProfit(prices)).toBe(0);
    });
});
