// for...in >> 모든 객체를 반복하는 문법
// for...of >> 모든 iterable객체를 반복하는 문법(String, Array, Map, Set, TypeArray..)

let obj = {
  key1:'val1',
  key2:'val2'
}
for(let key in obj){
  console.log(obj[key]);
}

let str = 'abc';
for(let val of str){
  console.log(val);
}

let arr = [1, 2, 3];
for(let val of arr){
  console.log(val);
}