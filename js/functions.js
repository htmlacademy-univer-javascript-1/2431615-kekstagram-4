const compareString = (comparedLine, maxLength) => comparedLine.length <= maxLength;

compareString('ss', 1);

const isPolindrom = (line) => {
  line = line.replaceAll(' ', '').toLowerCase();
  const length = line.length - 1;

  for(let i = 0; i < length / 2; i++){
    if(line[i] !== line[length-i]){
      return false;
    }
  }
  return true;
};

isPolindrom('bobs');

const findNumber= (line) => {
  let result = '';
  line = line.toString();

  for(let i = 0; i < line.length; i++){
    const currentSymbol = line[i];
    if(currentSymbol>= '0' && currentSymbol <= '9'){
      result+=currentSymbol;
    }
  }
  return parseInt(result, 10);
};

findNumber('s2');

