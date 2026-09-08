// 210. Course Schedule II (Medium)
// https://leetcode.com/problems/course-schedule-ii/
// NeetCode 150: Graphs
//
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an
// array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you
// want to take course ai.
//
// - For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
//
// Return the ordering of courses you should take to finish all courses. If there are many valid answers,
// return any of them. If it is impossible to finish all courses, return an empty array.

import { describe, expect, it } from "vitest";
import { findOrder } from "./course-schedule-ii.ts";

/** A valid answer is any ordering of all courses that respects every prerequisite pair [a, b] (take b before a). */
function isValidOrder(order: number[], numCourses: number, prerequisites: number[][]): boolean {
    if (order.length !== numCourses || new Set(order).size !== numCourses) return false;
    const position = new Map(order.map((course, index) => [course, index]));
    return prerequisites.every(([course, prerequisite]) => position.get(prerequisite)! < position.get(course)!);
}

describe("210. Course Schedule II", () => {
    it("example 1", () => {
        const numCourses = 2;
        const prerequisites = [[1, 0]];
        const result = findOrder(numCourses, prerequisites);
        expect(isValidOrder(result, numCourses, prerequisites)).toBe(true);
    });

    it("example 2", () => {
        const numCourses = 4;
        const prerequisites = [
            [1, 0],
            [2, 0],
            [3, 1],
            [3, 2]
        ];
        const result = findOrder(numCourses, prerequisites);
        expect(isValidOrder(result, numCourses, prerequisites)).toBe(true);
    });

    it("example 3", () => {
        const numCourses = 1;
        const prerequisites: number[][] = [];
        const result = findOrder(numCourses, prerequisites);
        expect(isValidOrder(result, numCourses, prerequisites)).toBe(true);
    });
});
