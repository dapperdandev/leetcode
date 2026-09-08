// 133. Clone Graph (Medium)
// https://leetcode.com/problems/clone-graph/
// NeetCode 150: Graphs
//
// Given a reference of a node in a connected undirected graph.
//
// Return a deep copy (clone) of the graph.
//
// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

import { describe, expect, it } from "vitest";
import { arrayToGraph, graphToArray } from "../../../lib/structures.ts";
import { cloneGraph } from "./clone-graph.ts";

describe("133. Clone Graph", () => {
    it("example 1", () => {
        const node = arrayToGraph([
            [2, 4],
            [1, 3],
            [2, 4],
            [1, 3]
        ]);
        expect(graphToArray(cloneGraph(node))).toEqual([
            [2, 4],
            [1, 3],
            [2, 4],
            [1, 3]
        ]);
    });

    it("example 2", () => {
        const node = arrayToGraph([[]]);
        expect(graphToArray(cloneGraph(node))).toEqual([[]]);
    });

    it("example 3", () => {
        const node = arrayToGraph([]);
        expect(graphToArray(cloneGraph(node))).toEqual([]);
    });
});
