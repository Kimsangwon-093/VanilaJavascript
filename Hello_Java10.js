// do_while >> 우선 한번 처리를 실행하고 이후 조건을 체크하고 그결과에 따라 루프를 진행하는 문법
/*
기본문법
do{
	// 연산 처리
}
while(조건);
 */

var num = 0;

do{
  console.log('출력합니다.');
  num++;
}
while(num < 5);