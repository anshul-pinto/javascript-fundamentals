// given an array charset of 3 chars
// chars are r g b

// generate an array of size N by picking random char from charset

// sort that array

const RGB = ["r", "g", "b"];
const MAX_CHAR = 26;

const generateRandomArray = (n, array) => {
  const res = [];
  for (let i = 0; i < n; i += 1) {
    const randomIdx = Math.floor(Math.random() * array.length);
    res.push(RGB[randomIdx]);
  }
  return res;
};

function sortString(str) {
  // Hash array to keep count of characters.
  let letters = new Array(MAX_CHAR);
  for (let i = 0; i < MAX_CHAR; i++) {
    letters[i] = 0;
  }

  str.forEach((char) => {
    letters[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  });

  let idx = 0;
  letters.forEach((letter, letterIdx) => {
    for (let i = 0; i < letter; i += 1) {
      str[idx] = String.fromCharCode(letterIdx + "a".charCodeAt(0));
      idx += 1;
    }
  });
}

const testArr = generateRandomArray(10, RGB);
sortString(testArr);
console.log(testArr);
