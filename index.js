let container = document.querySelector(".form-container");

let before = document.getElementById("before");
let formula = document.getElementById("regex");
let after = document.getElementById("after");

// let regex = /./g
// formula.value = regex;

before.addEventListener("input", forwardConvert);
formula.addEventListener("input", updateRegex);
after.addEventListener("input", backwardConvert);

function forwardConvert(e) {
    after.value = before.value.match(regex);
}

function updateRegex(e) {
    regex = RegExp(e.target.value);
    after.value = before.value.match(regex);
}

function backwardConvert(e) {
    
}