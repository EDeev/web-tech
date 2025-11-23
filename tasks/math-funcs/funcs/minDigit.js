function minDigit(x) {
  let min = 9;
  while (x > 0) {
    let digit = x % 10;
    if (digit < min) {
      min = digit;
    }
    x = Math.floor(x / 10);
  }
  return min;
}