function cesar(str, shift, action) {
  const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  const alphabetUpper = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let isUpper = false;
    let index = -1;
    
    if (alphabetUpper.indexOf(char) !== -1) {
      isUpper = true;
      index = alphabetUpper.indexOf(char);
    } else if (alphabet.indexOf(char) !== -1) {
      index = alphabet.indexOf(char);
    }
    
    if (index !== -1) {
      let newIndex;
      if (action === 'encode') {
        newIndex = (index + shift) % alphabet.length;
      } else {
        newIndex = (index - shift + alphabet.length) % alphabet.length;
      }
      
      if (isUpper) {
        result += alphabetUpper[newIndex];
      } else {
        result += alphabet[newIndex];
      }
    } else {
      result += char;
    }
  }
  
  return result;
}

// Расшифровка сообщения "эзтыхз фзъзъз" с различными сдвигами:
// При shift = 8: "хакуна матата"