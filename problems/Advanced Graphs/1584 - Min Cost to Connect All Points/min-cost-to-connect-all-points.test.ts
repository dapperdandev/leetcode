// 1584. Min Cost to Connect All Points (Medium)
// https://leetcode.com/problems/min-cost-to-connect-all-points/
// NeetCode 150: Advanced Graphs
//
// You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i]
// = [xi, yi].
//
// The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| +
// |yi - yj|, where |val| denotes the absolute value of val.
//
// Return the minimum cost to make all points connected. All points are connected if there is exactly one
// simple path between any two points.

import { describe, expect, it } from "vitest";
import { minCostConnectPoints } from "./min-cost-to-connect-all-points.ts";

describe("1584. Min Cost to Connect All Points", () => {
    it("example 1", () => {
        const points = [
            [0, 0],
            [2, 2],
            [3, 10],
            [5, 2],
            [7, 0]
        ];
        expect(minCostConnectPoints(points)).toBe(20);
    });

    it("example 2", () => {
        const points = [
            [3, 12],
            [-2, 5],
            [-4, 1]
        ];
        expect(minCostConnectPoints(points)).toBe(18);
    });
});
