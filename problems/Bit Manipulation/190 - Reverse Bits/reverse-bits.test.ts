// 190. Reverse Bits (Easy)
// https://leetcode.com/problems/reverse-bits/
// NeetCode 150: Bit Manipulation
//
// Reverse bits of a given 32 bits signed integer.

import { describe, expect, it } from "vitest";
import { reverseBits } from "./reverse-bits.ts";

describe("190. Reverse Bits", () => {
    it("example 1", () => {
        const n = 43261596;
        expect(reverseBits(n)).toBe(964176192);
    });

    it("example 2", () => {
        const n = 2147483644;
        expect(reverseBits(n)).toBe(1073741822);
    });
});
