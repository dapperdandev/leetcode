import { expect, test } from "vitest";
import { reverse } from "./reverse-integer";

test.each([
    [123, 321],
    [-123, -321],
    [120, 21],
    [0, 0]
])("returns the correct reversed integer for %d", (input, expected) => {
    const result = reverse(input);
    expect(result).toEqual(expected);
});
