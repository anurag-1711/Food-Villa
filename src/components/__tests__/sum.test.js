import { sum } from '../sum.js'

test("Check sum of 2 positive numbers", () => {
    expect(sum(2, 5)).toBe(7);
})