function compareString(comparedLine, maxLength){
  return comparedLine.length <= maxLength;
}
// console.log(compareString('ssssss', 1050));//true
// console.log(compareString('aa', 1));//false
// console.log(compareString('aaa', 3));//true
// console.log(compareString('ammma', 10));//true

function isPolindrom(line){
  line = line.replaceAll(' ', '').toLowerCase();
  const length = line.length - 1;

  for(let i = 0; i < length / 2; i++){
    if(line[i] !== line[length-i]){
      return false;
    }
  }
  return true;
}
// console.log(isPolindrom('beb')); //true//
// console.log(isPolindrom('abababAbaBaba')); //true//
// console.log(isPolindrom('beBra s arbeb'));//true//
// console.log(isPolindrom('Кекс'));//false//
// console.log(isPolindrom('    Ке   к    '));//true//

function findNumber(line){
  let result = '';
  line = line.toString();

  for(let i = 0; i < line.length; i++){
    const currentSymbol = line[i];
    if(currentSymbol>= '0' && currentSymbol <= '9'){
      result+=currentSymbol;
    }
  }
  return parseInt(result, 10);
}
// console.log(findNumber('22s23ss'));//2223
// console.log(findNumber('NaN')); //NaN
// console.log(findNumber('lsdfjkdsj12i3ijwf8u218vkv')); //1238218
// console.log(findNumber(123)); //123
// console.log(findNumber(1.5));  // 15
