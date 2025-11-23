function testPow() {
    let x = parseFloat(document.getElementById('pow-x').value);
    let n = parseInt(document.getElementById('pow-n').value);
    let result = pow(x, n);
    document.getElementById('pow-result').textContent = 'Результат: ' + result;
}

function testGcd() {
    let a = parseInt(document.getElementById('gcd-a').value);
    let b = parseInt(document.getElementById('gcd-b').value);
    let result = gcd(a, b);
    document.getElementById('gcd-result').textContent = 'Результат: ' + result;
}

function testMinDigit() {
    let x = parseInt(document.getElementById('minDigit-x').value);
    let result = minDigit(x);
    document.getElementById('minDigit-result').textContent = 'Результат: ' + result;
}

function testPluralize() {
    let n = parseInt(document.getElementById('pluralize-n').value);
    let result = pluralizeRecords(n);
    document.getElementById('pluralize-result').textContent = result;
}

function testFibb() {
    let n = parseInt(document.getElementById('fibb-n').value);
    let result = fibb(n);
    document.getElementById('fibb-result').textContent = 'Результат: ' + result;
}

function testSort() {
    try {
        let arrayStr = document.getElementById('sort-array').value;
        let key = document.getElementById('sort-key').value;
        let array = JSON.parse(arrayStr);
        let result = getSortedArray(array, key);
        document.getElementById('sort-result').textContent = 'Результат: ' + JSON.stringify(result, null, 2);
    } catch (e) {
        document.getElementById('sort-result').textContent = 'Ошибка: ' + e.message;
    }
}

function testCesar() {
    let str = document.getElementById('cesar-str').value;
    let shift = parseInt(document.getElementById('cesar-shift').value);
    let action = document.getElementById('cesar-action').value;
    let result = cesar(str, shift, action);
    document.getElementById('cesar-result').textContent = 'Результат: ' + result;
}