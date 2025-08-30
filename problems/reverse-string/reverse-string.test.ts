import { expect, test } from "vitest";
import { reverseString } from "./reverse-string";

test.each([
    [
        ["h", "e", "l", "l", "o"],
        ["o", "l", "l", "e", "h"]
    ],
    [
        ["H", "a", "n", "n", "a", "h"],
        ["h", "a", "n", "n", "a", "H"]
    ]
])("returns the correct reversed integer for %d", (input, expected) => {
    const result = reverseString(input);
    expect(result).toEqual(expected);
});
