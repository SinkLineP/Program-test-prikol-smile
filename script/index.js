const yes = document.getElementById("alert-yes");
const no = document.getElementById("alert-no");
const reload = document.getElementById("alert-reload");
const text = document.getElementById("daun");


function yesBtn() {
    text.innerText = "Я так и знал)"
    yes.style.display = "none"
    no.style.display = "none"
    reload.style.display = "block"
}

function noBtn() {
    const rand = Math.floor(Math.random() * 101);
    no.style.transform = "translateX("+ `${rand}`+ "px) translateY("+ `${rand}`+ "px)"
    // no.style.transform = "translateY(100px)"
}

function reloadPage() {
    location.reload()
}

no.addEventListener("click", () => {
    noBtn()
})

yes.addEventListener("click", () => {
    yesBtn()
})

reload.addEventListener("click", () => {
    reloadPage()
})


