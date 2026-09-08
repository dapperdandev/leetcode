// 981. Time Based Key-Value Store (Medium)
// https://leetcode.com/problems/time-based-key-value-store/
// NeetCode 150: Binary Search
//
// Design a time-based key-value data structure that can store multiple values for the same key at different
// time stamps and retrieve the key's value at a certain timestamp.
//
// Implement the TimeMap class:
//
// - TimeMap() Initializes the object of the data structure.
//
// - void set(String key, String value, int timestamp) Stores the key key with the value value at the given
// time timestamp.
//
// - String get(String key, int timestamp) Returns a value such that set was called previously, with
// timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the
// largest timestamp_prev. If there are no values, it returns "".

import { describe, expect, it } from "vitest";
import { runOps } from "../../../lib/structures.ts";
import { TimeMap } from "./time-based-key-value-store.ts";

describe("981. Time Based Key-Value Store", () => {
    it("example 1", () => {
        const ops = ["TimeMap", "set", "get", "get", "set", "get", "get"];
        const args = [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]];
        expect(runOps(TimeMap, ops, args)).toEqual([null, null, "bar", "bar", null, "bar2", "bar2"]);
    });
});
