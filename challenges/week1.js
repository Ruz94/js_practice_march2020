function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  //Check if word passed in has first char capitalized and return the word if so
  //Capitalise first char of word to uppercase then add it to the other characters of that string
  if (word.charAt(0).toUpperCase === word) {
    return word;
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // store first name and last name in a variable
  // get first letter from each word and capitalize letter
  // append period after first name initial

  const initials = firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();

  return initials;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (vatRate === undefined) throw new Error("vatRate is required");

  //create new variable with vatCost calculated
  const vatCost = originalPrice * (vatRate / 100);
  //return original price with vatCost added on
  return originalPrice + Math.round(vatCost * 100) / 100;
}
function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  //create new variable with discount calculated
  const discountRate = originalPrice * (reduction / 100);
  //return original price with discount added on
  return originalPrice - Math.round(discountRate * 100) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  //if even
  if (str.length % 2 === 0) {
    const secondIndex = str.length / 2;
    const firstIndex = secondIndex - 1;
    return `${str.charAt(firstIndex)}${str.charAt(secondIndex)}`;
  } else {
    //if odd
    // find number of characters in string
    //take away 1
    //half it
    //then find character of index
    const midCharIndex = (str.length - 1) / 2;
    return str.charAt(midCharIndex);
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // backward for loop
  //create variable to save string
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word.charAt(i);
  }
  return reversed;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  return words.map((w) => {
    return reverseWord(w);
  });
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // //make variable to store the total number of linux users
  let total = 0;
  //loop through array
  //check if type name matches linux
  //add total number of linux users
  users.forEach((u) => {
    if (u.type === "Linux") {
      total++;
    }
  });
  return total;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  const meanScore = scores.reduce((acc, c) => acc + c);
  return Math.round((meanScore / scores.length) * 100) / 100;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  if ((n % 3 === 0) & (n % 5 === 0)) {
    return "fizzbuzz";
  } else if (n % 3 === 0) {
    return "fizz";
  } else if (n % 5 === 0) {
    return "buzz";
  } else {
    return n;
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
};
