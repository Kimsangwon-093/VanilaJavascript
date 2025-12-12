// if문 >> 조건에 따라서 서로 다른 처리를 하는 문법

/*
// 기본형태
if(조건1) {
	// 조건1이 참이면 실행할 처리
}
// 조건1이 거짓일경우 다음 체크로 진행
else if(조건2) {
	// 조건2가 참이면 실행할 처리
}
// 앞선 조건1, 조건2 모두 거짓일경우 else가 실행
else {
  
}
*/

var num = 10;

if(num == 24){
	console.log('하루는 ' + num + ' 시간 입니다.');
}else{
	console.log('하루는 몇 시간이 라는 거예요?');
}

let max = 50;

 if(max == 100){
	console.log('Rank >> A+');
 }else if(max < 100 && max > 80){
	console.log('Rank >> B+');
 }else{
	console.log('Rank >> c+');
 }

 let str = '빼기';
 var num = 30;

 if(str == '더하기'){
	num += 10;
	console.log(num);
 }else if(str == '빼기'){
	num -= 1;
	console.log(num);
 }

 var score = 20;

 console.log("니 몇 점 받았노?");

 if(score == 100){
	console.log('소고기 사무라');
 }else if(score < 100 && score > 90){
	console.log('니는 돈까스 무라');
 }else if(score <= 80 && score >= 70){
	console.log('단어 30개씩 공부해라잉~?');
 }else{
	console.log('고마 디지뿌라!');
 }