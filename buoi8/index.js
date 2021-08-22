let h3 = document.getElementById("js-first-title");
let containerElem = document.getElementById("js-container");
console.log(h3);
let color = "red";
h3.style.color = "red";
h3.style.borderTop = "1px silver solid";

h3.classList.add("bg-dark");

let pElem = document.createElement("p");
pElem.innerText = "Description";
containerElem.appendChild(pElem);

setTimeout(() =>{
    containerElem.removeChild(pElem);
}, 10000)

// event handler
function userClick(){
    alert("Hello!");
}

let btnClick = document.querySelector(".js-btn-click");

btnClick.addEventListener("click", () => {
    alert("shoiteata!");
})


