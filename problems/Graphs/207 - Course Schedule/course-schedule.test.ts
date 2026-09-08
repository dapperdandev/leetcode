// 207. Course Schedule (Medium)
// https://leetcode.com/problems/course-schedule/
// NeetCode 150: Graphs
//
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an
// array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you
// want to take course ai.
//
// - For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
//
// Return true if you can finish all courses. Otherwise, return false.

import { describe, expect, it } from "vitest";
import { canFinish } from "./course-schedule.ts";

describe("207. Course Schedule", () => {
    it("example 1", () => {
        const numCourses = 2;
        const prerequisites = [[1, 0]];
        expect(canFinish(numCourses, prerequisites)).toBe(true);
    });

    it("example 2", () => {
        const numCourses = 2;
        const prerequisites = [
            [1, 0],
            [0, 1]
        ];
        expect(canFinish(numCourses, prerequisites)).toBe(false);
    });
});
