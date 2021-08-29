function isSoLe(n) {
    while(n % 10 > 0){
        if((n % 10) % 2 == 0){
            return false;
        }
        n = parseInt(n / 10);
    }
    return true;
}

function check() {
    let inputNumber = Number(document.getElementById('inputNumber').value);

    let display = document.getElementById('display');

    if(isNaN(inputNumber)){
        display.innerText = "Dữ liệu nhập vào sai!";
    } else if(isSoLe(inputNumber) === true){
        display.innerText = `${inputNumber} là số do toàn số lẻ tạo thành!`;
    } else if(isSoLe(inputNumber) === false){
        display.innerText = `${inputNumber} không là số do toàn số lẻ tạo thành!`;
    }
}