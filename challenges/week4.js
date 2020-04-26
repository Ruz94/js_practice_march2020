function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter((n) => n < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  return names.filter((n) => {
    if (n.charAt(0) === char) {
      return n;
    }
  });
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  return words.filter((w) => {
    if (w.includes("to ")) {
      return w;
    }
  });
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter((num) => Number.isInteger(num));
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  return users.map((u) => u.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.map((n) => {
    return Math.round(Math.sqrt(n) * 100) / 100;
  });
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  return sentences.filter((item) => item.toLowerCase().includes(str.toLowerCase()));
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  return triangles.map((t) => {
    return Math.max(...t);
  });
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides,
};
