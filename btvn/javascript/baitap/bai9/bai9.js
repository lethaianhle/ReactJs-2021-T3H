function  isPalindrome(n) {

    let resever = 0;

    let temp;

    while(n % 10 > 0){
        temp = n % 10;
        console.log("temp: ", temp);
        resever = resever*10 + temp;
        console.log("resever:", resever);
        n = parseInt(n / 10);
        console.log("n:", n);
        console.log("---")
    }

    return resever
}

function check() {
    let inputNumber = Number(document.getElementById('inputNumber').value);

    let display = document.getElementById('display');

    if(isNaN(inputNumber)){
        display.innerText = "Dữ liệu nhập vào sai!";
    } else if(isPalindrome(inputNumber) === inputNumber){
        display.innerText = `${inputNumber} là số đối xứng`;
    } else if(isPalindrome(inputNumber) != inputNumber){
        display.innerText = `${inputNumber} không là số đối xứng`;
    }
}

