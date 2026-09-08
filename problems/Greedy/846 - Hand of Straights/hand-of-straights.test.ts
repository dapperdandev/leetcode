// 846. Hand of Straights (Medium)
// https://leetcode.com/problems/hand-of-straights/
// NeetCode 150: Greedy
//
// Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of
// size groupSize, and consists of groupSize consecutive cards.
//
// Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize,
// return true if she can rearrange the cards, or false otherwise.

import { describe, expect, it } from "vitest";
import { isNStraightHand } from "./hand-of-straights.ts";

describe("846. Hand of Straights", () => {
    it("example 1", () => {
        const hand = [1, 2, 3, 6, 2, 3, 4, 7, 8];
        const groupSize = 3;
        expect(isNStraightHand(hand, groupSize)).toBe(true);
    });

    it("example 2", () => {
        const hand = [1, 2, 3, 4, 5];
        const groupSize = 4;
        expect(isNStraightHand(hand, groupSize)).toBe(false);
    });
});
