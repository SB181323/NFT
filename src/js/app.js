let $ = document
let svelem = $.getElementById("svelem")
let svelem2 = $.getElementById("svelem2")
let divelem = $.getElementById("divelem")

function openmenu() {
    divelem.classList.add("div")
}

function closemenu() {
    divelem.style.display = "none"
    divelem.classList.add("")
}