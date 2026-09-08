// 338. Counting Bits (Easy)
// https://leetcode.com/problems/counting-bits/
// NeetCode 150: Bit Manipulation
//
// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the
// number of 1's in the binary representation of i.

import { describe, expect, it } from "vitest";
import { countBits } from "./counting-bits.ts";

describe("338. Counting Bits", () => {
    it("example 1", () => {
        const n = 2;
        expect(countBits(n)).toEqual([0, 1, 1]);
    });

    it("example 2", () => {
        const n = 5;
        expect(countBits(n)).toEqual([0, 1, 1, 2, 1, 2]);
    });
});
