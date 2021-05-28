const currentNumbers = document.getElementById('currentOperand');
const previousNumbers = document.getElementById('previousOperand');

function myClear() {
    currentNumbers.innerHTML = '';
    previousNumbers.innerHTML = '';
}

function clearPrevious() {
    previousNumbers.innerHTML = '';
}

function addNumber(num) {
    if (num === '.' && currentNumbers.innerHTML.includes('.')) return;
    currentNumbers.innerHTML = currentNumbers.innerHTML + num;
}

function operation(operation) {
    if(operation === '-' && currentNumbers.innerHTML === '') {
        currentNumbers.innerHTML = currentNumbers.innerHTML + '-';
    } else {
        previousNumbers.innerHTML = `${currentNumbers.innerHTML } ${operation}`;
        currentNumbers.innerHTML = '';
    }
}

function myDelete() {
    const deleteLastNumber = currentNumbers.innerHTML;
    currentNumbers.innerHTML = deleteLastNumber.substring(0, deleteLastNumber.length - 1);
}

function equal() {
    const operation = previousNumbers.innerHTML.slice(-1);

    const convertCurrentNumbers = parseFloat(currentNumbers.innerHTML);
    const convertPreviousString = parseFloat(previousNumbers.innerHTML);

    switch (operation) {
        case '+':
            let plus = convertCurrentNumbers + convertPreviousString;
            currentNumbers.innerHTML = +plus.toFixed(10);
            clearPrevious();
            break;
        case '-':
            let minus = convertPreviousString - convertCurrentNumbers;
            currentNumbers.innerHTML = +minus.toFixed(10);
            clearPrevious();
        break;
        case '*':
            let multi = convertCurrentNumbers * convertPreviousString;
            currentNumbers.innerHTML = +multi.toFixed(10);
            clearPrevious();
        break;
        case '÷':
            let div = convertPreviousString / convertCurrentNumbers;
            currentNumbers.innerHTML = +div.toFixed(10);
            clearPrevious();
        break;
        case '^':
            let pow = Math.pow(convertPreviousString, convertCurrentNumbers);
            currentNumbers.innerHTML = +pow.toFixed(10);
            clearPrevious();
        break;
        default:
            break;
    }
}

function sqrt(){
    let convertCurrentNumbers = parseFloat(currentNumbers.innerHTML);
    previousNumbers.innerHTML = currentNumbers.innerHTML + '√';
    currentNumbers.innerHTML = Math.sqrt(convertCurrentNumbers);
}