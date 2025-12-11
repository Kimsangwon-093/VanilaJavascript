// Scope >> 변수나 함수의 유효 범위 - 변수나 함수가 어디에 선언되었는지에 따라 접근 가능 여부가 달라짐

// 1. 전역스코프 >> 코드의 어느 곳에서나 접근 가능
let test = "전역스코프";

function put(){
 // test가 전역스코프이므로 put 함수 내에서도 사용 가능
  console.log(test); // << 함수 내 / 외 어디든 출력 가능 [let test]
}
put();
console.log(test);   // << 함수 내 / 외 어디든 출력 가능 [let test]