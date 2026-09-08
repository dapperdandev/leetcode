// 355. Design Twitter (Medium)
// https://leetcode.com/problems/design-twitter/
// NeetCode 150: Heap / Priority Queue
//
// Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is
// able to see the 10 most recent tweets in the user's news feed.
//
// Implement the Twitter class:
//
// - Twitter() Initializes your twitter object.
//
// - void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call
// to this function will be made with a unique tweetId.
//
// - List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each
// item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be
// ordered from most recent to least recent.
//
// - void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID
// followeeId.
//
// - void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user
// with ID followeeId.

import { describe, expect, it } from "vitest";
import { runOps } from "../../../lib/structures.ts";
import { Twitter } from "./design-twitter.ts";

describe("355. Design Twitter", () => {
    it("example 1", () => {
        const ops = ["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"];
        const args = [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]];
        expect(runOps(Twitter, ops, args)).toEqual([null, null, [5], null, null, [6, 5], null, [5]]);
    });
});
