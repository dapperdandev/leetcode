// 49. Group Anagrams (Medium)
// https://leetcode.com/problems/group-anagrams/
// NeetCode 150: Arrays & Hashing
//
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

import { describe, expect, it } from "vitest";
import { sortDeep } from "../../../lib/structures.ts";
import { groupAnagrams } from "./group-anagrams.ts";

describe("49. Group Anagrams", () => {
    it("example 1", () => {
        const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
        expect(sortDeep(groupAnagrams(strs))).toEqual(sortDeep([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]));
    });

    it("example 2", () => {
        const strs = [""];
        expect(sortDeep(groupAnagrams(strs))).toEqual(sortDeep([[""]]));
    });

    it("example 3", () => {
        const strs = ["a"];
        expect(sortDeep(groupAnagrams(strs))).toEqual(sortDeep([["a"]]));
    });
});
