// 191. Number of 1 Bits (Easy)
// https://leetcode.com/problems/number-of-1-bits/
// NeetCode 150: Bit Manipulation
//
// Given a positive integer n, write a function that returns the number of set bits in its binary
// representation (also known as the Hamming weight).

import { describe, expect, it } from "vitest";
import { hammingWeight } from "./number-of-1-bits.ts";

describe("191. Number of 1 Bits", () => {
    it("example 1", () => {
        const n = 11;
        expect(hammingWeight(n)).toBe(3);
    });

    it("example 2", () => {
        const n = 128;
        expect(hammingWeight(n)).toBe(1);
    });

    it("example 3", () => {
        const n = 2147483645;
        expect(hammingWeight(n)).toBe(30);
    });
});
