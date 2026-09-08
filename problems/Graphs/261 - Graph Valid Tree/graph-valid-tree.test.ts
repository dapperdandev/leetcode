// 261. Graph Valid Tree (Medium) - LeetCode Premium
// https://leetcode.com/problems/graph-valid-tree/
// NeetCode 150: Graphs
//
// You have a graph of n nodes labeled from 0 to n - 1 and a list of edges where edges[i] = [a_i, b_i]
// indicates an undirected edge between nodes a_i and b_i. Return true if the edges make up a valid tree, and
// false otherwise.

import { describe, expect, it } from "vitest";
import { validTree } from "./graph-valid-tree.ts";

describe("261. Graph Valid Tree", () => {
    it("example 1", () => {
        const n = 5;
        const edges = [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 4]
        ];
        expect(validTree(n, edges)).toBe(true);
    });

    it("example 2", () => {
        const n = 5;
        const edges = [
            [0, 1],
            [1, 2],
            [2, 3],
            [1, 3],
            [1, 4]
        ];
        expect(validTree(n, edges)).toBe(false);
    });
});
