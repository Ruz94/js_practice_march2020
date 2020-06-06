const { sumMultiples, isValidDNA, getComplementaryDNA, isItPrime, createMatrix, areWeCovered } = require("../challenges/week9");

describe("sumMultiples", () => {
  test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
    const result = sumMultiples([1, 3, 5]);
    const expected = 8;
    expect(result).toBe(expected);
  });

  test("it works okay with decimal numbers", () => {
    const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
    const expected = 30;
    expect(result).toBe(expected);
  });

  test("returns 0 if there are no multiples of 3 or 5", () => {
    expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("returns true if the string of characters contains a valid DNA string", () => {
    expect(isValidDNA("C")).toBe(true);
    expect(isValidDNA("G")).toBe(true);
    expect(isValidDNA("T")).toBe(true);
    expect(isValidDNA("A")).toBe(true);
  });

  test("returns false if the string of characters doesn't contain a valid DNA string", () => {
    expect(isValidDNA("F")).toBe(false);
    expect(isValidDNA("B")).toBe(false);
    expect(isValidDNA("R")).toBe(false);
  });

  test("The search string should not be case sensitive", () => {
    expect(isValidDNA("c")).toBe(true);
    expect(isValidDNA("g")).toBe(true);
    expect(isValidDNA("t")).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("return a string of the complimentary base pairs of DNA String - T always pairs with A, and C always pairs with G", () => {
    expect(getComplementaryDNA("ACTG")).toEqual("TGAC");
    expect(getComplementaryDNA("GTCA")).toEqual("CAGT");
  });

  test("returns strings of the same length as its complimentary base pair ", () => {
    expect(getComplementaryDNA("CAGTACT")).toEqual("GTCATGA");
    expect(getComplementaryDNA("GCTGAC")).toEqual("CGACTG");
    expect(getComplementaryDNA("GTACT")).toEqual("CATGA");
  });

  test("throws an error if string doesn't include valid DNA String ", () => {});
});
