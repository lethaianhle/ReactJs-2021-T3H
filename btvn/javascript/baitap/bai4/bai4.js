function isPrime(inputNumber){
    if(inputNumber < 2){
        return false;
    } else {
        for(let i = 2; i < inputNumber ;i++){
            if(inputNumber % i === 0){
                return false;
            }
        }
    }
    return true;
}

function println() {
    let display = document.getElementById("display");

    let inputNumber = Number(document.getElementById("inputNumber").value);

    let a = [];

    if(isNaN(inputNumber)){
        display.innerText = "Dữ liệu nhập vào sai!";
    } else {
        for(let i = 0; i <= inputNumber; i++ ){
            if(isPrime(i) == true){
                a.push(i);
            }
        }
        display.innerText = a.join(" ");
    }
}

