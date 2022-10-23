let tag = "";
const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

const fontSizes = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const body = document.querySelector("body");
const divMain = document.getElementById("main");

for (let i = 0; i < 200; i++) {
    let rand = Math.floor(Math.random() * alphabet.length);
    let element = document.createElement("span");
    element.setAttribute("id", alphabet[rand] + i);
    element.innerHTML = alphabet[rand];
    element.className = "element";
    element.style.opacity = Math.random() * 0.7;
    element.style.margin = "10px";
    element.style.position = "absolute";
    element.style.left = Math.floor(Math.random() * 2000) + "px";
    element.style.top = Math.floor(Math.random() * 2000) + "px";
    element.style.animationDelay =
        Math.floor(Math.random() * (15 - 2) + 2) + "s";
    element.style.animationDuration =
        Math.floor(Math.random() * (50 - 10) + 10) + "s";
    element.style.fontSize =
        Math.floor(Math.random() * (60 - 20) + 20) + "px";
    document.getElementById("content").appendChild(element);
}

let mElement = document.querySelectorAll("span[id^='M']");
mElement.forEach((m) => {
    m.addEventListener("mouseenter", function () {
        let lastOpacity = this.style.opacity;
        this.style.opacity = "1";
    });
    m.addEventListener("click", function () {
        console.log(this);
    });
    m.addEventListener("mouseleave", function () {
        console.log("burada");
    });
});

let kElement = document.querySelectorAll("span[id^='K']");
kElement.forEach((k) => {
    k.addEventListener("click", function () {
        console.log(this);
    });
});
