// switch 문 >> 조건에 따라서 서로 다른 처리를 하는 문법

/*
// 기본 문법
switch(검증 대상) {
	case 일치 검증 값:
		// 실행할 처리
		break;
	case 일치 검증 값:
		// 실행할 처리
		break;
	// 상위 case문에서 일치 검증 값이 없을 경우 실행
	default:
		// 실행할 처리
		break;
}
*/

let num = 19;

switch(num){
  case 20:
    num += 1;
    console.log(num);
    break;

  case 19:
    num -= 1;
    console.log(num);
    break;
}

let str = "독수리";

switch(str){
  case "사자":
    console.log('육상 동물');
    break;
  
  case "독수리":
    console.log('날개 동물');
    break;

  case "기타":
    console.log('그외 동물');
    break;
}