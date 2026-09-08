// 208. Implement Trie (Prefix Tree) (Medium)
// https://leetcode.com/problems/implement-trie-prefix-tree/
// NeetCode 150: Tries
//
// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve
// keys in a dataset of strings. There are various applications of this data structure, such as autocomplete
// and spellchecker.
//
// Implement the Trie class:
//
// - Trie() Initializes the trie object.
//
// - void insert(String word) Inserts the string word into the trie.
//
// - boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before),
// and false otherwise.
//
// - boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the
// prefix prefix, and false otherwise.

import { describe, expect, it } from "vitest";
import { runOps } from "../../../lib/structures.ts";
import { Trie } from "./implement-trie-prefix-tree.ts";

describe("208. Implement Trie (Prefix Tree)", () => {
    it("example 1", () => {
        const ops = ["Trie", "insert", "search", "search", "startsWith", "insert", "search"];
        const args = [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]];
        expect(runOps(Trie, ops, args)).toEqual([null, null, true, false, true, null, true]);
    });
});
