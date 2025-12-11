// 3. 호이스팅 >> 코드가 실행되기 전에 변수와 함수를 최상단에 끌어 올려지는 것 처럼 동작

// var의 호이스팅 문제
console.log(test); // undefined 출력
test = "aaa";
console.log(test); // "aaa" 출력
var test;