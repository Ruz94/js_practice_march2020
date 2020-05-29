const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  let index = nums.indexOf(n);
  if (index >= 0 && index < nums.length - 1) {
    return nums[index + 1];
  }
  return null;
};

const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  let countForZero = 0;
  let countForOne = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      countForZero++;
    } else {
      countForOne++;
    }
  }
  return {
    0: countForZero,
    1: countForOne,
  };
};

const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");

  return n.toString().split("").reverse().join("") - 0;
};

const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

  const merge = [].concat.apply([], arrs);
  return merge.reduce((a, b) => a + b);
};

const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  let temp = 0;
  if (arr.length <= 1) {
    return arr;
  } else {
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  for (let value of Object.values(haystack)) {
    if (typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
  }
  return false;
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

  let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  let split = str.toLowerCase().replace(regex, "").split(" ");

  const obj = {};

  split.forEach((word) => {
    obj[word] = obj[word] ? obj[word] + 1 : 1;
  });
  return obj;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
};
