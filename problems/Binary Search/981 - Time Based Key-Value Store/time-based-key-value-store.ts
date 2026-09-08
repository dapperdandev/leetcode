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

export class TimeMap {
    constructor() {}

    set(key: string, value: string, timestamp: number): void {
        throw new Error("Not implemented");
    }

    get(key: string, timestamp: number): string {
        throw new Error("Not implemented");
    }
}
