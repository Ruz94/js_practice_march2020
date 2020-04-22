function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  return nums.map((n) => {
    return n * n;
  });
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  return words
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  let counter = 0;
  people.forEach((i) => {
    counter = counter + i.subjects.length;
  });
  return counter;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let foundIngredient = false;
  menu.forEach((menuItem) => {
    if (menuItem.ingredients.includes(ingredient)) {
      foundIngredient = true;
    }
  });
  return foundIngredient;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  let newArr = [];
  arr1.forEach((num) => {
    if (arr2.includes(num) && !newArr.includes(num)) {
      newArr = [...newArr, num];
    }
  });
  return newArr.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
