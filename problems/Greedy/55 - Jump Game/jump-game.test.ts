// 55. Jump Game (Medium)
// https://leetcode.com/problems/jump-game/
// NeetCode 150: Greedy
//
// You are given an integer array nums. You are initially positioned at the array's first index, and each
// element in the array represents your maximum jump length at that position.
//
// Return true if you can reach the last index, or false otherwise.

import { describe, expect, it } from "vitest";
import { canJump } from "./jump-game.ts";

describe("55. Jump Game", () => {
    it("example 1", () => {
        const nums = [2, 3, 1, 1, 4];
        expect(canJump(nums)).toBe(true);
    });

    it("example 2", () => {
        const nums = [3, 2, 1, 0, 4];
        expect(canJump(nums)).toBe(false);
    });
});
