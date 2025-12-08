/**
 * deepClone function
 * Takes any javascript value and returns a new value
 * that is deep copy of the input
 */

function deepClone(value) {
  // Primitive data types - string, number, boolean, null, undefined
  if (value == null || value == undefined || typeof value != "object") {
    return value;
  }

  // Date
  if(value instanceof Date) {
    return new Date(value);
  }

  // Array
  if (Array.isArray(value)) {
    return value.map((val) => deepClone(val));
  }

  // object
  const result = {};
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      result[key] = deepClone(value[key]);
    }
  }
  return result;
}

// Implementation
const sampleArray = [1, [2, 3], 4, 5, 6];
console.log(deepClone(sampleArray));

const sampleObj = {
  name: "Rama",
  age: 25,
  dob: new Date("12-01-2025"),
  admin: {
    isAdmin: true,
    access: false,
  },
};
console.log(deepClone(sampleObj));
