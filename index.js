function isPalindrome(word) {
  // Write your algorithm here
  const len = word.length;
  //loop thru half of the string
  for(let i=0; i<len/2; i++)
  {
    if (word[i] !== word[len -1 -i]){
      return false;
    }
    else{
      return true;
    }

  }
   word = prompt('Enter a word:')
  //call the function
  console.log(isPalindrome(madam));
  

}

/* 
  Add your pseudocode here
  iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false

if we reach the middle, and all the letters match, return true

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
