// 271. Encode and Decode Strings (Medium) - LeetCode Premium
// https://leetcode.com/problems/encode-and-decode-strings/
// NeetCode 150: Arrays & Hashing
//
// Design an algorithm to encode a list of strings to a single string. The encoded string is then sent over the
// network and decoded back to the original list of strings. Implement encode and decode so that
// decode(encode(strs)) == strs.

import { describe, expect, it } from "vitest";
import { decode, encode } from "./encode-and-decode-strings.ts";

describe("271. Encode and Decode Strings", () => {
    it("example 1", () => {
        const strs = ["Hello", "World"];
        expect(decode(encode(strs))).toEqual(strs);
    });

    it("example 2", () => {
        const strs = [""];
        expect(decode(encode(strs))).toEqual(strs);
    });
});
