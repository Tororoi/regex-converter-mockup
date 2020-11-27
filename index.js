let container = document.querySelector(".form-container");

let before = document.getElementById("before");
let formula = document.getElementById("regex");
let after = document.getElementById("after");

container.addEventListener("input", readout);

function readout(e) {
    container.childNodes.forEach(t => {
        t.value = e.target.value;
    })
}