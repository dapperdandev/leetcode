// 286. Walls and Gates (Medium) - LeetCode Premium
// https://leetcode.com/problems/walls-and-gates/
// NeetCode 150: Graphs
//
// You are given an m x n grid rooms initialized with -1 (a wall or obstacle), 0 (a gate) or INF = 2^31 - 1 (an
// empty room). Fill each empty room with the distance to its nearest gate. If it is impossible to reach a
// gate, it should be filled with INF. Modify rooms in place.

import { describe, expect, it } from "vitest";
import { wallsAndGates } from "./walls-and-gates.ts";

describe("286. Walls and Gates", () => {
    it("example 1", () => {
        const rooms = [
            [2147483647, -1, 0, 2147483647],
            [2147483647, 2147483647, 2147483647, -1],
            [2147483647, -1, 2147483647, -1],
            [0, -1, 2147483647, 2147483647]
        ];
        wallsAndGates(rooms);
        expect(rooms).toEqual([
            [3, -1, 0, 1],
            [2, 2, 1, -1],
            [1, -1, 2, -1],
            [0, -1, 3, 4]
        ]);
    });

    it("example 2", () => {
        const rooms = [[-1]];
        wallsAndGates(rooms);
        expect(rooms).toEqual([[-1]]);
    });
});
