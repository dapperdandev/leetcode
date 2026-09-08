// 684. Redundant Connection (Medium)
// https://leetcode.com/problems/redundant-connection/
// NeetCode 150: Graphs
//
// In this problem, a tree is an undirected graph that is connected and has no cycles.
//
// You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge
// added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already
// existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that
// there is an edge between nodes ai and bi in the graph.
//
// Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple
// answers, return the answer that occurs last in the input.

import { describe, expect, it } from "vitest";
import { findRedundantConnection } from "./redundant-connection.ts";

describe("684. Redundant Connection", () => {
    it("example 1", () => {
        const edges = [
            [1, 2],
            [1, 3],
            [2, 3]
        ];
        expect(findRedundantConnection(edges)).toEqual([2, 3]);
    });

    it("example 2", () => {
        const edges = [
            [1, 2],
            [2, 3],
            [3, 4],
            [1, 4],
            [1, 5]
        ];
        expect(findRedundantConnection(edges)).toEqual([1, 4]);
    });
});
