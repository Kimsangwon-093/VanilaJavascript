//  1. 변수 & 상수

// var >> 중복선언 가능 , 재할당 가능 , 함수레벨 스코프

var name1 = "김상원";
console.log(name1);

var name2 = "홍길동";
console.log(name2);

// let >> 중복선언 불가능 , 재할당 가능 , 블록레벨 스코프
let name3 = "홍길동";
console.log(name3);

name4 = "갑돌이";
console.log(name4);

// const >> 중복 선언 불가능, 재할당 불가능, 블록레벨 스코프
const name5 = "홍길동";
const name6 = "갑순이";

console.log(name5);
console.log(name6);