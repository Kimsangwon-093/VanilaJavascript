// 함수(function) >> 입력을 받아 출력을 하는 일련의 과정을 정의한 것


// 함수 선언식 >> 호이스팅에 영향을 받는다.
// 재할당이 가능하므로 함수명이 중복되지 않도록 조심해야 함

let a = 4;
let b = 6;

function fnc1(a, b) {
  return a + b;
}
console.log(a + b);

// 함수 표현식 >> 호이스팅에 영향을 받지 않는다.
// 함수 표현식 에서는 함수 이름을 생략한 익명함수로 사용 가능   
// const로 생성시 재할당되는 것을 방지 가능 

// 익명함수 기본구조 >> 
// const 함수명 = function(인자1, 인자2) {

  // return 인자1 + 인자2; 

// }

let num1 = 10;
let num2 = 5;

const fnc2 = function(num1, num2) {
  return num1 + num2;
}
console.log(num1 + num2);


// 화살표 함수 >> 데이터 타입 함수명 = (인자1, 인자2) => 인자1 + 인자2;

let val1 = 20;
let val2 = 50;

let fnc3 = (val1, val2) => val1 + val2;
console.log(val1 + val2);

// 인수(Argument)와 매개변수(Parameter), return문

// 인수 >> 함수를 호출할 때 전달되는 값
// 파라미터 >> 함수의 정의에서 전달받은 인수를 저장하는 변수
// return >> 함수의 연산 결과를 반환하기 위한 문법

function fnc1(a, b){
  return a + b;
}
fnc1(1, 2);

console.log(fnc1(1, 2));

// 즉시 실행 함수 >> 함수의 정의와 동시에 바로 호출되는 함수

let sum = (function(a, b){
  return a + b;
})(1, 3);
console.log(sum);

// 모듈패턴 예시
// const myClass = (function() {
//   const name = "홍길동";

//   return {
//     myClassPrintName: function() {
//       console.log(name + " 입니다.");
//     }
//   }
// })();
// myClass.myClassPrintName();





