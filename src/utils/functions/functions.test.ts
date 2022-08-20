import { palindrome, average, isPrefix } from "./functions";

describe("Palindrome", () => {
  test("Of empty string", () => {
    expect(palindrome("")).toBe("");
  });

  test("Of rubensin", () => {
    expect(palindrome("rubensin")).toBe("nisnebur");
  });
});

describe("Average", () => {
  test("Of one value is zero", () => {
    expect(average([0])).toBe(0);
  });

  test("Of one value is the value itself", () => {
    expect(average([1])).toBe(1);
  });

  test("Of many is calculated correctly", () => {
    expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5);
  });
});

describe("Algotithms", () => {
  test("Is Prefix", () => {
    const res = isPrefix(
      ["Martin", "Pedro", "Maria", "Martina", "Marina", "Mongo"],
      ["Mart", "Mar", "Mong"]
    );
    expect(res).toStrictEqual([
      { word: "Mart", count: 2 },
      { word: "Mar", count: 4 },
      { word: "Mong", count: 1 },
    ]);
  });

  test("Order a Number Array (Ascending Numerical)", () => {
    const res = [16, 4, 9, 13, 2, 7, 12, 6, 11, 3, 10, 1, 5, 15, 8, 14].sort(
      (a, b) => a - b
    );
    expect(res).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    ]);
  });
});
