// 62. Unique Paths (Medium)
// https://leetcode.com/problems/unique-paths/
// NeetCode 150: 2-D Dynamic Programming
//
// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).
// The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move
// either down or right at any point in time.
//
// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach
// the bottom-right corner.
//
// The test cases are generated so that the answer will be less than or equal to 2 * 109.

import { describe, expect, it } from "vitest";
import { uniquePaths } from "./unique-paths.ts";

describe("62. Unique Paths", () => {
    it("example 1", () => {
        const m = 3;
        const n = 7;
        expect(uniquePaths(m, n)).toBe(28);
    });

    it("example 2", () => {
        const m = 3;
        const n = 2;
        expect(uniquePaths(m, n)).toBe(3);
    });
});
