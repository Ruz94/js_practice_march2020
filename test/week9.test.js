const { sumMultiples, isValidDNA, getComplementaryDNA, isItPrime, createMatrix, areWeCovered } = require("../challenges/week9");

describe("sumMultiples", () => {
  test("throws an error if not passed an array", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");

    expect(() => {
      sumMultiples("foo");
    }).toThrow("an Array is required");

    expect(() => {
      sumMultiples(4);
    }).toThrow("an Array is required");
  });

  test("returns the sum of any numbers that are a multiple of 3 or 5", () => {
    const result = sumMultiples([1, 3, 5]);
    const expected = 8;
    expect(result).toBe(expected);
  });

  test("works with decimal numbers", () => {
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

  test("Check if array contains more than 1 character", () => {
    expect(isValidDNA("ACTG")).toBe(true);
    expect(isValidDNA("ABC")).toBe(false);
    expect(isValidDNA("GTCAA")).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("returns a string of the complimentary base pairs of DNA String - T always pairs with A, and C always pairs with G", () => {
    expect(getComplementaryDNA("ACTG")).toEqual("TGAC");
    expect(getComplementaryDNA("GTCA")).toEqual("CAGT");
  });

  test("returns strings of the same length as its complimentary base pair ", () => {
    expect(getComplementaryDNA("CAGTACT")).toEqual("GTCATGA");
    expect(getComplementaryDNA("GCTGAC")).toEqual("CGACTG");
    expect(getComplementaryDNA("GTACT")).toEqual("CATGA");
  });

  test("throws an error if string doesn't include valid DNA String", () => {
    expect(() => {
      getComplementaryDNA("");
    }).toThrow("valid DNA string required");
  });
});

describe("isItPrime", () => {
  test("returns false if n isn't a number", () => {
    expect(isItPrime("1")).toBe(false);
  });

  test("returns false if number is <= 1", () => {
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(0)).toBe(false);
  });

  test("returns false if number is decimal", () => {
    expect(isItPrime(0.9)).toBe(false);
    expect(isItPrime(4.9)).toBe(false);
  });

  test("returns false if number is not a prime number", () => {
    expect(isItPrime(8)).toBe(false);
    expect(isItPrime(9)).toBe(false);
  });

  test("returns true if number can be divided evenly by 1 and itself ", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(11)).toBe(true);
    expect(isItPrime(151)).toBe(true);
  });
});

describe("createMatrix", () => {
  test("returns a matrix of 1 * 1 when passed 1", () => {
    const result = createMatrix(1, "foo");
    const expected = [["foo"]];
    expect(result).toEqual(expected);
  });

  test("returns a matrix of 3 * 3 when passed 3", () => {
    const result = createMatrix(3, "foo");
    const expected = [
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ];
    expect(result).toEqual(expected);
  });

  test("returns a matrix of the same length as number that is passed in", () => {
    const result = createMatrix(6, "foo");
    const expected = [
      ["foo", "foo", "foo", "foo", "foo", "foo"],
      ["foo", "foo", "foo", "foo", "foo", "foo"],
      ["foo", "foo", "foo", "foo", "foo", "foo"],
      ["foo", "foo", "foo", "foo", "foo", "foo"],
      ["foo", "foo", "foo", "foo", "foo", "foo"],
      ["foo", "foo", "foo", "foo", "foo", "foo"],
    ];
    expect(result).toEqual(expected);

    const arr = createMatrix(10, "foo");
    const arrExpected = [
      ["foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo"],
      ["foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo"],
      ["foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo"],
      ["foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo"],
      ["foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo"],
      ["foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo"],
      ["foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo"],
      ["foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo"],
      ["foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo"],
      ["foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo"],
    ];
    expect(arr).toEqual(arrExpected);
  });

  test("returns empty array if different data type is passed in for n", () => {
    const arr = createMatrix("", "foo");
    const arrExpected = [];
    expect(arr).toEqual(arrExpected);
  });
});

describe("areWeCovered", () => {
  test("returns false if there are no staff at all", () => {
    expect(areWeCovered([], "Sunday")).toBe(false);
    expect(areWeCovered([], "Monday")).toBe(false);
    expect(areWeCovered([], "Tuesday")).toBe(false);
    expect(areWeCovered([], "Wednesday")).toBe(false);
    expect(areWeCovered([], "Thursday")).toBe(false);
    expect(areWeCovered([], "Friday")).toBe(false);
    expect(areWeCovered([], "Saturday")).toBe(false);
  });

  test("returns false if there are staff but < 3 are not scheduled to work", () => {
    const staff = [
      { name: "Tim", rota: ["Saturday", "Sunday", "Tuesday", "Thursday", "Friday"] },
      { name: "Dave", rota: ["Saturday", "Sunday", "Monday", "Wednesday", "Thursday"] },
      { name: "Sam", rota: ["Sunday", "Monday", "Tuesday", "Thursday", "Friday"] },
      { name: "John", rota: ["Saturday", "Monday", "Tuesday", "Wednesday", "Friday"] },
    ];
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
  });

  test("returns true if there are >= 3 staff scheduled to work", () => {
    const staff = [
      { name: "Tim", rota: ["Saturday", "Sunday", "Tuesday", "Thursday", "Friday"] },
      { name: "Dave", rota: ["Saturday", "Sunday", "Monday", "Wednesday", "Thursday"] },
      { name: "Sam", rota: ["Saturday", "Sunday", "Monday", "Tuesday", "Thursday", "Friday"] },
      { name: "John", rota: ["Saturday", "Monday", "Tuesday", "Wednesday", "Friday"] },
    ];
    expect(areWeCovered(staff, "Monday")).toBe(true);
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
    expect(areWeCovered(staff, "Thursday")).toBe(true);
    expect(areWeCovered(staff, "Friday")).toBe(true);
    expect(areWeCovered(staff, "Saturday")).toBe(true);
  });
});
