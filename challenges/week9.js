/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (!arr) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("an Array is required");

  let total = 0;

  arr.forEach((num) => {
    if (num % 3 === 0 || num % 5 === 0) {
      total += num;
    }
  });
  return total;
};

/**
 * This function will receive a string of characters and should return true/false depending on
 * whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== "string") throw new Error("string required");

  const validLetters = ["C", "G", "T", "A"];

  if (str.length) {
    let result = true;
    str.split("").forEach((s) => {
      if (!validLetters.includes(s.toUpperCase())) {
        result = false;
      }
    });
    return result;
  }
  return false;
};

/**
 * This function will receive a valid DNA string (see above)
 * and should return a string of the complementary base pairs.
 * In DNA, T always pairs with A, and C always pairs with G.
 * So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  if (!isValidDNA(str)) throw new Error("valid DNA string required");

  return str
    .split("")
    .map((char) => {
      switch (char) {
        case "A":
          return "T";
        case "T":
          return "A";
        case "C":
          return "G";
        case "G":
          return "C";
        default:
          return null;
      }
    })
    .join("");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not.
 * A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = (n) => {
  if (n === undefined) throw new Error("n is required");

  if (typeof n !== "number" || n <= 1 || n % 1 !== 0) {
    return false;
  }
  // starting from 2 to eliminate numbers below 2 as they're all non-prime numbers
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/**
 * This function should receive a number
 * return an array of n arrays
 * each filled with n items.
 * The parameter "fill" should be used as the filler of the arrays.
 * For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");

  return Array.from(
    {
      length: n,
    },
    () => new Array(n).fill(fill)
  );
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day.
 * The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  if (staff.length < 3) {
    return false;
  }

  let counter = 0;
  staff.forEach((p) => {
    if (p.rota.includes(day)) {
      counter++;
    }
  });

  if (counter >= 3) {
    return true;
  }
  return false;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
};
