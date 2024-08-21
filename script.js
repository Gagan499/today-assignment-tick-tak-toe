const startbtn = document.querySelector(".btn");
const Guideins = document.querySelector(".Guide-ins");
const exitbtn = document.querySelector(".info-exit-btn");


startbtn.onclick = () => {
    Guideins.classList.add("active");
}

exitbtn.onclick = () => {
    Guideins.classList.remove("active");
}