const yes = document.getElementById("alert-yes");
const no = document.getElementById("alert-no");
const text = document.getElementById("daun");


function yesBtn() {
    text.innerText = "Я так и знал)"
    yes.style.display = "none"
    no.style.display = "none"
}

function noBtn() {
    const rand = Math.floor(Math.random() * 101);
    no.style.transform = "translateX("+ `${rand}`+ "px) translateY("+ `${rand}`+ "px)"
    // no.style.transform = "translateY(100px)"
}

no.addEventListener("click", () => {
    noBtn()
})

yes.addEventListener("click", () => {
    yesBtn()
})