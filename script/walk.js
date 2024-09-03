let ninja = document.getElementById("ninja");

let left = 0;
let walkTimeout;

document.onkeydown = (e) => {
    e = e || window.event;

    if (e.keyCode == "39") {
        left += 10;
        ninja.style.left = left + "px";

        ninja.classList.remove("ninja_stand");
        ninja.classList.add("ninja_walk_right");
    } else if (e.keyCode == "37") {
        left -= 10;
        ninja.style.left = left + "px";
    }
};

document.onkeyup = (e) => {
    if (e.keyCode == "39") {
        ninja.classList.remove("ninja_walk_right");
        ninja.classList.add("ninja_stand");
    }
};
