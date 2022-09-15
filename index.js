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
  
  let num = 12345;

  //<---------------------------------------- Enter a number in the convert function-------------------------->
  convert(111212345);




  //<----------------------------------------code starts here---------------------------------------------->
  
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
    } else if (num>=100000 && num<1000000) {
      console.log(convertSixDigit(num));
    } else if(num>=1000000 && num<10000000){
      console.log(convertSevenDigit(num));
    } else if(num>=10000000 && num<100000000){
      console.log(convertEightDigit(num));
    } else if(num>=100000000 && num<1000000000){
      console.log(convertNineDigit(num));
    } else {
      console.log("Number is out of bounds please enter a number within 9 digits");
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
          convertTwoDigit(Number(num[0]+num[1]))+"thousand"+" "+convertThreeDigit(Number(num[2]+num[3]+num[4]))
      )
  }
  function convertSixDigit(num){
      num = num.toString();
      return(
          convertones(Number(num[0])) + " "+"lakh"+" "+convertFiveDigit(Number(num[1]+num[2]+num[3]+num[4]+num[5]))
      )
  }
  function convertSevenDigit(num){
      num = num.toString();
      return(
          convertTwoDigit(Number(num[0]+num[1])) + " "+"lakh"+" "+convertFiveDigit(Number(num[2]+num[3]+num[4]+num[5]+num[6]))
      )
  }
  function convertEightDigit(num){
      num = num.toString();
      return(
          convertones(Number(num[0])) + " " + "crore" + " "+convertSevenDigit(Number(num[1]+num[2]+num[3]+num[4]+num[5]+num[6]+num[7]))
      )
  }
  function convertNineDigit(num){
      num = num.toString();
      return(
          convertTwoDigit(Number(num[0]+num[1])) + " " + "crore" + " "+convertSevenDigit(Number(num[2]+num[3]+num[4]+num[5]+num[6]+num[7]+num[8]))
      )
  }
  
  