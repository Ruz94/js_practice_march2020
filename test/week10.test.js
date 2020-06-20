const { sumDigits, createRange, getScreentimeAlertList, hexToRGB, findWinner } = require("../challenges/week10");

describe("sumDigits", () => {
  test("throws an error if not passed n", () => {
    expect(() => {
      sumDigits();
    }).toThrow("n is required");
  });

  test("throws an error if not passed a number", () => {
    expect(() => {
      sumDigits("");
    }).toThrow("number is required");
  });

  test("throws an error if not passed a number", () => {
    expect(() => {
      sumDigits([2]);
    }).toThrow("number is required");
  });

  test("returns the sum of of number digits that are passed in", () => {
    expect(sumDigits(123)).toBe(6);
  });
});

describe("createRange", () => {
  test("throws an error if not passed start value", () => {
    expect(() => {
      createRange(undefined, "");
    }).toThrow("start is required");
  });

  test("throws an error if not passed end value", () => {
    expect(() => {
      createRange("", undefined);
    }).toThrow("end is required");
  });

  test("throws an error if not passed a number", () => {
    expect(() => {
      createRange("", 3);
    }).toThrow("number is required");
  });

  test("throws an error if not passed a number", () => {
    expect(() => {
      createRange(3, "");
    }).toThrow("number is required");
  });

  test("returns the range of numbers between start and end", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
  });

  test("returns the range of numbers between start and end with no step provided", () => {
    expect(createRange(3, 8)).toEqual([3, 4, 5, 6, 7, 8]);
  });
});

describe("getScreentimeAlertList", () => {
  test("throws an error if not passed date in the format (YYYY-MM-DD)", () => {
    expect(() => {
      getScreentimeAlertList("01-05-2019");
    }).toThrow("date is required");
  });

  test("returns an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
          { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
          { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
          { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
          { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
          { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
        ],
      },
      {
        username: "sarah_t_5679",
        name: "Sarah Turner",
        screenTime: [
          { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 60, facebook: 30, safari: 15 } },
          { date: "2019-05-02", usage: { twitter: 60, instagram: 45, facebook: 15 } },
          { date: "2019-05-03", usage: { twitter: 0, instagram: 15, facebook: 30 } },
          { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 35 } },
        ],
      },
    ];
    expect(getScreentimeAlertList(users, "2019-06-11")).toEqual(["sarah_t_5679"]);
    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
  });

  test("returns empty array if screen time <=100", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
          { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
          { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
          { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
          { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
          { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
        ],
      },
      {
        username: "sarah_t_5679",
        name: "Sarah Turner",
        screenTime: [
          { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 60, facebook: 30, safari: 15 } },
          { date: "2019-05-02", usage: { twitter: 60, instagram: 45, facebook: 15 } },
          { date: "2019-05-03", usage: { twitter: 0, instagram: 15, facebook: 30 } },
          { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 35 } },
        ],
      },
    ];
    expect(getScreentimeAlertList(users, "2019-05-03")).toEqual([]);
  });
});

describe.only("hexToRGB", () => {
  test("throws an error if not passed hexStr", () => {
    expect(() => {
      hexToRGB();
    }).toThrow("hexStr is required");

    expect(() => {
      hexToRGB(255, 17, 51);
    }).toThrow("string is required");
  });

  test("return hex code in RGB code", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    expect(hexToRGB("#FF5733")).toBe("rgb(255,87,51)");
    expect(hexToRGB("#3CE64E")).toBe("rgb(60,230,78)");
  });
});

describe("findWinner", () => {
  test("throws an error if not passed an array", () => {
    expect(() => {
      findWinner();
    }).toThrow("board is required");

    expect(() => {
      findWinner("foo");
    }).toThrow("an Array is required");

    expect(() => {
      findWinner(4);
    }).toThrow("an Array is required");
  });

  test("return results of winner", () => {
    const board = [
      ["X", "0", null],
      ["X", null, "0"],
      ["X", null, "0"],
    ];

    expect(findWinner(board, "X")).toBe("X");
    expect(findWinner(board, "0")).toBe("0");
    expect(findWinner(board, null)).toBe(null);
  });
});
