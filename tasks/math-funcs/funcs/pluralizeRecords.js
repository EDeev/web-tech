function pluralizeRecords(n) {
  let recordForm = "записей";
  let wasForm = "было найдено";
  
  let lastDigit = n % 10;
  let lastTwoDigits = n % 100;
  
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    //pass
  } else if (lastDigit === 1) {
    recordForm = "запись";
    wasForm = "была найдена";
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    recordForm = "записи";
  }
  
  return `В результате выполнения запроса ${wasForm} ${n} ${recordForm}`;
}