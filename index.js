let container = document.querySelector(".form-container");

let before = document.getElementById("before");
let formula = document.getElementById("regex");
let after = document.getElementById("after");

// let regex = /[^hl]+/g
// formula.value = regex;

before.addEventListener("input", forwardConvert);
formula.addEventListener("input", updateRegex);
after.addEventListener("input", backwardConvert);

function forwardConvert(e) {
    console.log(before.value.match(regex))
        if (regex.test(before.value)) {
        after.value = before.value.match(regex).join("");
    } else {
        after.value = "";
    }
}

function updateRegex(e) {
    //validate regex first
    try {RegExp(e.target.value,"g")}
    catch(err) {
        formula.style.color = "red";
        return;
    }
    //it's valid, so continue
    regex = RegExp(e.target.value,"g");
    formula.style.color = "black";

    //use empty string if null result
    if (regex.test(before.value)) {
        after.value = before.value.match(regex).join("");
    } else {
        after.value = "";
    }

    console.log(after.value)
}

function backwardConvert(e) {
    //The hard part
    //compare before and after

    //using differences, determine appropriate regex 
    //update formula to reflect new regex
}