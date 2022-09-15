var tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  var ones = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];
  var th = ["", "thousand", "million", "billion", "trillion"];
  
  let num = 12345;
  
  function convert(num) {
    if (num < 20) {
      console.log(convertones(num));
    } else if (num >= 20 && num < 100) {
      console.log(convertTens(num));
    } else if (num >= 100 && num < 999) {
      console.log(convertThreeDigit(num));
    } else if(num>=1000 && num <10000){
        console.log(convertFourDigit(num));
    } else if(num>=10000 && num<100000){
      console.log(convertFiveDigit(num));
    } 
  }
  
  function convertones(num) {
    return ones[num];
  }
  function convertTens(num) {
    num = num.toString();
    return tens[Number(num[0])] + "-" + ones[Number(num[1])];
  }
  function convertTwoDigit(num) {
    if (num < 20) {
      return convertones(num);
    } else {
      return convertTens(num);
    }
  }
  function convertThreeDigit(num) {
    num = num.toString();
    return (
      ones[Number(num[0])] +
      " " +
      "hundred" +
      " " +
      convertTwoDigit(Number(num[1] + num[2]))
    );
  }
  function convertFourDigit(num){
      num = num.toString();
      return(
      convertones(Number(num[0]))+" "+ "thousand" +" "+convertThreeDigit(Number(num[1]+num[2]+num[3]))
      )
  }
  function convertFiveDigit(num){
      num = num.toString();
      return(
          convertTwoDigit(Number(num[0]+num[1]))+"thousand"+" "+convertThreeDigit(Number(num[1]+num[2]+num[3]))
      )
  }

  
  convert(99144);
  