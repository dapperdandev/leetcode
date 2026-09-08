// 70. Climbing Stairs (Easy)
// https://leetcode.com/problems/climbing-stairs/
// NeetCode 150: 1-D Dynamic Programming
//
// You are climbing a staircase. It takes n steps to reach the top.
//
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

import { describe, expect, it } from "vitest";
import { climbStairs } from "./climbing-stairs.ts";

describe("70. Climbing Stairs", () => {
    it("example 1", () => {
        const n = 2;
        expect(climbStairs(n)).toBe(2);
    });

    it("example 2", () => {
        const n = 3;
        expect(climbStairs(n)).toBe(3);
    });
});
