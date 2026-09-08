// 323. Number of Connected Components in an Undirected Graph (Medium) - LeetCode Premium
// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
// NeetCode 150: Graphs
//
// You have a graph of n nodes labeled from 0 to n - 1 and a list of edges where edges[i] = [a_i, b_i]
// indicates an undirected edge between a_i and b_i. Return the number of connected components in the graph.

import { describe, expect, it } from "vitest";
import { countComponents } from "./number-of-connected-components-in-an-undirected-graph.ts";

describe("323. Number of Connected Components in an Undirected Graph", () => {
    it("example 1", () => {
        const n = 5;
        const edges = [
            [0, 1],
            [1, 2],
            [3, 4]
        ];
        expect(countComponents(n, edges)).toBe(2);
    });

    it("example 2", () => {
        const n = 5;
        const edges = [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4]
        ];
        expect(countComponents(n, edges)).toBe(1);
    });
});
