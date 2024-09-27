// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

//solution with Array
var canConstruct_withArray = function (ransomNote, magazine) {
  let ransomArr = ransomNote.split("");
  let magazineArr = magazine.split("");
  let curr = 0;
  while (curr < ransomArr.length) {
    const index = magazineArr.indexOf(ransomArr[curr]);
    if (index !== -1) {
      magazineArr.splice(index, 1);
      curr++;
    } else {
      return false;
    }
  }
  return true;
};

console.log(canConstruct_withArray("aa", "aab"));

var canConstruct_withHashMap = function (ransomNote, magazine) {
  const magazineMap = {};

  for (let letter of magazine) {
    magazineMap[letter] = 1 + (magazineMap[letter] || 0);
  }
  for (let letter of ransomNote) {
    if (magazineMap[letter] > 0) {
      magazineMap[letter]--;
    } else {
      return false;
    }
  }
  return true;
};
console.log(canConstruct_withHashMap("aabbcccdddee", "aabbbccdddee"));
