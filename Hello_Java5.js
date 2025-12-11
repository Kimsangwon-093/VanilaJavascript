// 연산자

// [1] 산술 연산자

  // 더하기 (+)
  var num1 = 10;
  var num2 = 20;
  sum = num1 + num2;

  console.log(sum);

  // 빼기 (-)
  var num1 = 50;
  var num2 = 10;
  minus = num1 - num2;

  console.log(minus);

  // 곱하기 (×)
  var num1 = 20;
  var num2 = 4;
  multi = num1 * num2;

  console.log(multi);

  // 나누기 (÷)
  var num1 = 40;
  var num2 = 8;
  division = num1 / num2;

  console.log(division);

  // 나머지 (%)
  var num1 = 18;
  var num2 = 7;
  remainder = num1 % num2;

  console.log(remainder);

// [2] 문자열 연결
  var str = "a" + "b";
  console.log(str);

  var str = "숫자" + 1;
  console.log(str);

  var str = "10" + 20;
  console.log(str);

// [3] 산술 대입 연산자

  var num = 10;
  var num = 5;

  // 산술 대입 연산자 >> += 더하기
  num = 10;
  num += 5;
  console.log(num); // 결과 >> 15 [ 5를 더하여 대입 ]

  // 산술 대입 연산자 >> -= 빼기 
  num = 10;
  num -= 5;
  console.log(num); // 결과 >> 10 [ 5를 빼서 대입 ]

  // 산술 대입 연산자 >> *= 빼기
  num = 10;
  num *= 5;
  console.log(num); // 결과 >> 50 [ 5를 곱해서 대입 ]

  // 산술 대입 연산자 >> /= 나누기
  num = 10;
  num /= 5;
  console.log(num); // 결과 >> 2 [ 5를 나누어서 대입 ]

  // 산술 대입 연산자 >> %= 나머지
  num = 18;
  num %= 7;
  console.log(num); // 결과 >> 4 [ 7을 나누어서 대입 ]

  // 문자열 연결  
  str = "안녕! ";
  str += "JavaScript!";
  console.log(str); // 결과 >> 안녕! JavaScript!
