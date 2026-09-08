// 217. Contains Duplicate (Easy)
// https://leetcode.com/problems/contains-duplicate/
// NeetCode 150: Arrays & Hashing
//
// Given an integer array nums, return true if any value appears at least twice in the array, and return false
// if every element is distinct.

export function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>(nums);

    if (nums.length == seen.size) return false;

    return true;
}
