// 50. Pow(x, n) (Medium)
// https://leetcode.com/problems/powx-n/
// NeetCode 150: Math & Geometry
//
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

import { describe, expect, it } from "vitest";
import { myPow } from "./powx-n.ts";

describe("50. Pow(x, n)", () => {
    it("example 1", () => {
        const x = 2;
        const n = 10;
        expect(myPow(x, n)).toBeCloseTo(1024, 5);
    });

    it("example 2", () => {
        const x = 2.1;
        const n = 3;
        expect(myPow(x, n)).toBeCloseTo(9.261, 5);
    });

    it("example 3", () => {
        const x = 2;
        const n = -2;
        expect(myPow(x, n)).toBeCloseTo(0.25, 5);
    });
});
