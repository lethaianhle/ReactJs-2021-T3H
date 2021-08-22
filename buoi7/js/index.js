// let month = 3;
// if(month >= 1 && month <=3){
//     console.log("spring!");
// }   else if(month >= 4 && month <=6){
//     console.log("summer");
// } else if (month >=7 && month <=9){
//     console.log("autumn");
// } else if(month >=10 && month <= 12){
//     console.log("winnter");
// } else {
//     console.log("Error!");
// }

//switch case
// console.log("Switch");
// switch (month) {
//     case 1:
//         console.log("Spring!");
//         break;
//     case 2:
//         console.log("Spring!");
//         break;
//     case 3:
//         console.log("Spring!");
//         break; 
//     case 4:
//         console.log("Spring!");
//         break;
//     default:
//         console.log("default");
//         break;
// }

//for, while, do while, break
// let n = 10;
// for(let i = 0; i < n; i++){
//     console.log("Push up: ", i);
//     for(let j =0; j<n;j++){
//         console.log("          Run: ", j);
//     }
//     for(let k = 1; k<n; k++){
//         console.log( "hits xaf donw", k)
//     }
// }
// let x= 6;

// let numbers = [3, 4, 5, 6, 7];
// for(let i =0; i < numbers.length; i++){
//     if(x == numbers[i]){
//         console.log("Found: ", x);
//         break;
//     }
//     console.log("Step: " , i);
// }

//while
// let x = 7
// let numbers = [3, 4, 5, 6, 7, 8, 9];
// let i = 0;
// while (i < numbers.length) {
//     if(numbers[i] == x){
//         console.log("Found: ", x);
//         break;
//     }
//     console.log("Step: ", i);
//     i ++;
// }

// let inputNumberStr = window.prompt("Enter a number: ");
// console.log("inputNumber: ", inputNumberStr);
// let inputNumber = Number(inputNumberStr);
// console.log(inputNumber);
// while (Number.isNaN(inputNumber)){
//     let inputNumberStr = window.prompt("Enter a number: ");
//     inputNumber = Number(inputNumberStr);
// }
// console.log(inputNumber);

do {
    let inputNumberStr = window.prompt("Enter a number: ");
    var inputNumber = Number(inputNumberStr)
} while((Number.isNaN(inputNumber)));
console.log(inputNumber);
