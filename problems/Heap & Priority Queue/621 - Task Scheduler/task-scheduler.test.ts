// 621. Task Scheduler (Medium)
// https://leetcode.com/problems/task-scheduler/
// NeetCode 150: Heap / Priority Queue
//
// You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU
// interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a
// constraint: there has to be a gap of at least n intervals between two tasks with the same label.
//
// Return the minimum number of CPU intervals required to complete all tasks.

import { describe, expect, it } from "vitest";
import { leastInterval } from "./task-scheduler.ts";

describe("621. Task Scheduler", () => {
    it("example 1", () => {
        const tasks = ["A", "A", "A", "B", "B", "B"];
        const n = 2;
        expect(leastInterval(tasks, n)).toBe(8);
    });

    it("example 2", () => {
        const tasks = ["A", "C", "A", "B", "D", "B"];
        const n = 1;
        expect(leastInterval(tasks, n)).toBe(6);
    });

    it("example 3", () => {
        const tasks = ["A", "A", "A", "B", "B", "B"];
        const n = 3;
        expect(leastInterval(tasks, n)).toBe(10);
    });
});
