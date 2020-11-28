let container = document.querySelector(".form-container");

let before = document.getElementById("before");
let formula = document.getElementById("regex");
let after = document.getElementById("after");

let regex;
// formula.value = regex;

before.addEventListener("input", forwardConvert);
formula.addEventListener("input", updateRegex);
after.addEventListener("input", backwardConvert);

function forwardConvert(e) {
    //validate regex first
    try {regex.test(before.value)}
    catch(err) {
        return;
    }

    // after.value = before.value.replace(regex, "");
    after.value = before.value.match(regex).join("");
    
    // after.value = regex.exec(before.value);
}

//include split, replace, match, search modes

function updateRegex(e) {
    //validate regex first
    try {RegExp(e.target.value, "g")}
    catch(err) {
        // console.log(err)
        formula.style.color = "red";
        after.style.color = "red";
        return;
    }
    //it's valid, so continue
    regex = RegExp(e.target.value, "g");
    formula.style.color = "black";
    after.style.color = "black";

    //use empty string if null result
    if (regex.test(before.value)) {
        // after.value = before.value.replace(regex, "");
        after.value = before.value.match(regex).join("");

        // console.log(before.value.replace(regex, ""))
        // after.value = regex.exec(before.value);
        // console.log(before.value.match(regex))
    } 
    // else {
    //     after.value = "";
    // }
}

function backwardConvert(e) {
    //The hard part
    //compare before and after

    //using differences, determine appropriate regex 
    //update formula to reflect new regex
}