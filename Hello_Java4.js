// 데이터 타입 >> 여러 종류의 데이터를 식별하는 분류

// 1. number >> 숫자 
let num1 = 12;
let num2 = 24;

console.log(num1);
console.log(num2);

// 2. string >> 문자열
let str1 = "김상원";
let str2 = "하현균";

console.log(str1);
console.log(str2);

// 3. boolean
let bool1 = false;
let bool2 = true;

console.log(bool1);
console.log(bool2);

// 4.Null >> 존재하지 않는 값
let letNull = null;
console.log(letNull);

// 5.symbol >> 고유하고 변경 불가능한 값
let symbolVar = Symbol('symbol');
console.log(symbolVar);

// 6.object >> 여러 개의 키 - 값 쌍으로 이루어진 복합데이터 타입 (객체)
let obj = {
  key1: 'value1',
  key2: 123,
  key3: true
};
console.log(obj); 

// 7.배열 데이터 타입 예시
let letArray = [1, 2, 3, 'four', true];
console.log(letArray);