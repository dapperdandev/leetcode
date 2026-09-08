// 973. K Closest Points to Origin (Medium)
// https://leetcode.com/problems/k-closest-points-to-origin/
// NeetCode 150: Heap / Priority Queue
//
// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k,
// return the k closest points to the origin (0, 0).
//
// The distance between two points on the X-Y plane is the Euclidean distance (i.e., &radic;(x1 - x2)2 + (y1 -
// y2)2).
//
// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it
// is in).

import { describe, expect, it } from "vitest";
import { sortDeep } from "../../../lib/structures.ts";
import { kClosest } from "./k-closest-points-to-origin.ts";

describe("973. K Closest Points to Origin", () => {
    it("example 1", () => {
        const points = [
            [1, 3],
            [-2, 2]
        ];
        const k = 1;
        expect(sortDeep(kClosest(points, k))).toEqual(sortDeep([[-2, 2]]));
    });

    it("example 2", () => {
        const points = [
            [3, 3],
            [5, -1],
            [-2, 4]
        ];
        const k = 2;
        expect(sortDeep(kClosest(points, k))).toEqual(
            sortDeep([
                [3, 3],
                [-2, 4]
            ])
        );
    });
});
