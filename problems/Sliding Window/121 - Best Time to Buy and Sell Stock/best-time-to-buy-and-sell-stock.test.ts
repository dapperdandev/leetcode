// 121. Best Time to Buy and Sell Stock (Easy)
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// NeetCode 150: Sliding Window
//
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
//
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in
// the future to sell that stock.
//
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

import { describe, expect, it } from "vitest";
import { maxProfit } from "./best-time-to-buy-and-sell-stock.ts";

describe("121. Best Time to Buy and Sell Stock", () => {
    it("example 1", () => {
        const prices = [7, 1, 5, 3, 6, 4];
        expect(maxProfit(prices)).toBe(5);
    });

    it("example 2", () => {
        const prices = [7, 6, 4, 3, 1];
        expect(maxProfit(prices)).toBe(0);
    });
});
