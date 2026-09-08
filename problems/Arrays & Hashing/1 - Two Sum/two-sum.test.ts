import { expect, test } from "vitest";
import { twoSum } from "./two-sum";

test.each([
    [[2, 7, 11, 15], 9, [0, 1]],
    [[3, 2, 4], 6, [1, 2]]
])("returns the correct indices for a valid input", (nums, target, expected) => {
    const result = twoSum(nums, target);
    expect(result).toEqual(expected);
});
