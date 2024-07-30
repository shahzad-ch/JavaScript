function palindrome(str) {
  let newStr = str.split(/[^a-z0-9]/i).filter(x => x != '').join('').toLowerCase();
  console.log(newStr)
  let newStr1 = '';
    for ( let j = newStr.length - 1; j >= 0; j--){
      newStr1 += newStr[j];
    }
  console.log(newStr1)
  if (newStr === newStr1){
    return true;
  }

  return false;
}

let result = palindrome("1 eye for of 1 eye.");

console.log(result)
