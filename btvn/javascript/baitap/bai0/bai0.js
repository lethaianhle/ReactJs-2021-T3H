function checkIsPrime(inputNumber){
    if(inputNumber < 2){
        return false;
    } else {
        for(let i = 2; i < inputNumber ;i++){
            if(inputNumber % i === 0){
                return false
            }
        }
    }
    return true;
}

function isPrime() {
    let inputNumber = document.getElementById("inputNumber").value;

    if(isNaN(inputNumber)){
        display.innerHTML = `Dữ liệu nhập vào sai!`;
    } else if(checkIsPrime(inputNumber) == true){
        display.innerHTML = `${inputNumber} là số nguyên tố`;
    } else if(checkIsPrime(inputNumber) == false){
        display.innerHTML = `${inputNumber} không phải là số nguyên tố`;
    }
}