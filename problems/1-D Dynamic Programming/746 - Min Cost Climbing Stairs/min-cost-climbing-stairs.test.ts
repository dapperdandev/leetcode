// 746. Min Cost Climbing Stairs (Easy)
// https://leetcode.com/problems/min-cost-climbing-stairs/
// NeetCode 150: 1-D Dynamic Programming
//
// You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
//
// Once you pay the cost, you can either climb one or two steps.
//
// You can either start from the step with index 0, or the step with index 1.
//
// Return the minimum cost to reach the top of the staircase, which is the position just past the last step
// (index cost.length).

import { describe, expect, it } from "vitest";
import { minCostClimbingStairs } from "./min-cost-climbing-stairs.ts";

describe("746. Min Cost Climbing Stairs", () => {
    it("example 1", () => {
        const cost = [10, 15, 20];
        expect(minCostClimbingStairs(cost)).toBe(15);
    });

    it("example 2", () => {
        const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
        expect(minCostClimbingStairs(cost)).toBe(6);
    });
});
