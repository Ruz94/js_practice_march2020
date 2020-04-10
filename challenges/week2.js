function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === "Manchester") {
    return true;
  }
  return false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // A bus can hold 40 people. This function should return how many buses are required for the number of people

  //divide people by 40 store in variable
  //return variable round up to nearest whole number

  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (!Array.isArray(arr)) throw new Error("array is required");
  return arr.filter((s) => s === "sheep").length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.address.postCode.charAt(0) === "M" && person.address.city === "Manchester") {
    return true;
  }
  return false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode,
};
