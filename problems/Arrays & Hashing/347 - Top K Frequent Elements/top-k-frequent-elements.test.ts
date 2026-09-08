// 347. Top K Frequent Elements (Medium)
// https://leetcode.com/problems/top-k-frequent-elements/
// NeetCode 150: Arrays & Hashing
//
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer
// in any order.

import { describe, expect, it } from "vitest";
import { sortDeep } from "../../../lib/structures.ts";
import { topKFrequent } from "./top-k-frequent-elements.ts";

describe("347. Top K Frequent Elements", () => {
    it("example 1", () => {
        const nums = [1, 1, 1, 2, 2, 3];
        const k = 2;
        expect(sortDeep(topKFrequent(nums, k))).toEqual(sortDeep([1, 2]));
    });

    it("example 2", () => {
        const nums = [1];
        const k = 1;
        expect(sortDeep(topKFrequent(nums, k))).toEqual(sortDeep([1]));
    });

    it("example 3", () => {
        const nums = [1, 2, 1, 2, 1, 2, 3, 1, 3, 2];
        const k = 2;
        expect(sortDeep(topKFrequent(nums, k))).toEqual(sortDeep([1, 2]));
    });
});
