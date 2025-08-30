import { expect, test } from "vitest";
import { isPalindrome } from "./palindrome-number.ts";

test.each([
    [121, true],
    [-121, false],
    [11, true],
    [123, false]
])("%s returns %s", (num, expected) => {
    const result = isPalindrome(num);
    expect(result).toEqual(expected);
});
