function convertToRoman(val) {
  let roman = '';
  while (val > 0) {
    switch (true) {
      case val >= 1000:
        roman += 'M';
        val -= 1000;
        break;
      case val >= 900:
        roman += 'CM';
        val -= 900;
        break;
      case val >= 500:
        roman += 'D';
        val -= 500;
        break;
      case val >= 400:
        roman += 'CD';
        val -= 400;
        break;
      case val >= 100:
        roman += 'C';
        val -= 100;
        break;
      case val >= 90:
        roman += 'XC';
        val -= 90;
        break;
      case val >= 50:
        roman += 'L';
        val -= 50;
        break;
      case val >= 40:
        roman += 'XL';
        val -= 40;
        break;
      case val >= 10:
        roman += 'X';
        val -= 10;
        break;
      case val >= 9:
        roman += 'IX';
        val -= 9;
        break;
      case val >= 5:
        roman += 'V';
        val -= 5;
        break;
      case val >= 4:
        roman += 'IV';
        val -= 4;
        break;
      case val >= 1:
        roman += 'I';
        val -= 1;
        break;
    }
  }
  console.log(roman)
  return roman;
}

convertToRoman(649);
