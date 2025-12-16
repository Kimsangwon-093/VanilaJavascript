// for문 >> 특정 처리를 반복적으로 구현하고자 할 때 사용하는 문법

// 기본문법
/*
for(초기값; 조건식; 증감연산자) { 
	반복 하고 싶은 처리
}
 */

var num = 0;

for(num = 0; num < 5; num++) {
  console.log(`${num} 회 반복!`);
}

var num = 1;

for(num = 1; num < 10; num++) {
  console.log(`2 × ${num} = ` + 2*num);
}