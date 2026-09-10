// 242. Valid Anagram (Easy)
// https://leetcode.com/problems/valid-anagram/
// NeetCode 150: Arrays & Hashing
//
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

export function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false;
    
    const letters = new Map<string,number>();
 
    for (let i = 0; i < s.length; i++) {
        letters.set(s[i], (letters.get(s[i]) ?? 0) + 1);
        letters.set(t[i], (letters.get(t[i]) ?? 0) - 1);
    }

    return [...letters.values()].every(l => l == 0);
}
