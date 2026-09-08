// 743. Network Delay Time (Medium)
// https://leetcode.com/problems/network-delay-time/
// NeetCode 150: Advanced Graphs
//
// You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as
// directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the
// time it takes for a signal to travel from source to target.
//
// We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive
// the signal. If it is impossible for all the n nodes to receive the signal, return -1.

import { describe, expect, it } from "vitest";
import { networkDelayTime } from "./network-delay-time.ts";

describe("743. Network Delay Time", () => {
    it("example 1", () => {
        const times = [
            [2, 1, 1],
            [2, 3, 1],
            [3, 4, 1]
        ];
        const n = 4;
        const k = 2;
        expect(networkDelayTime(times, n, k)).toBe(2);
    });

    it("example 2", () => {
        const times = [[1, 2, 1]];
        const n = 2;
        const k = 1;
        expect(networkDelayTime(times, n, k)).toBe(1);
    });

    it("example 3", () => {
        const times = [[1, 2, 1]];
        const n = 2;
        const k = 2;
        expect(networkDelayTime(times, n, k)).toBe(-1);
    });
});
