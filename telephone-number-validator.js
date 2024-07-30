function telephoneCheck(str) {
  let flag = false;
  str = str.replace(/\s/g, '')
  let numberCount = (str.match(/[0-9]/g)).length;
  console.log(str.match(/[^0-9()-]/g))
  
  if (/[^0-9()-]/g.test(str)){
    return false;
  }
  else if (numberCount == 11) {
    if (str[0] == 1) {
      if (str[1] == '(' && str[1 + 3] == ')') { flag = true }
      if (str.length == numberCount) { flag = true }
      if (str[4] == '-') { flag = true }
      if (str[str.length - 5] == '-') {
        flag = true
      }
      if (/\(|\)/g.test(str)){
      if((str.match(/\(|\)/g)).length == 1){ flag = false}
    }
    }
  }
  else if (numberCount == 10) {
    if (str.length == numberCount) { flag = true }
    if (str[0] == '(' && str[0 + 3] == ')') { flag = true }
    if ( str[3] == '-' || str[str.length - 5] == '-') { flag = true }
    if (/\(|\)/g.test(str)){
      if((str.match(/\(|\)/g)).length == 1){ flag = false}
    }
  }
  else {
    return false;
  }

  return flag;
}

let result = telephoneCheck("1(555)55?5-5555");

console.log(result)
