let ninja = document.getElementById("ninja");

let left = 0;

document.onkeydown = (e) => {
    e = e || window.event;

    if (e.keyCode == "39") {
        left += 10;
        ninja.style.left = left + "px";

        ninja.classList.remove("ninja_stand_right", "ninja_stand_left");
        ninja.classList.add("ninja_walk_right");
        ninja.style.transform = "scaleX(1)";
    } else if (e.keyCode == "37") {
        left -= 10;
        ninja.style.left = left + "px";

        ninja.classList.remove("ninja_stand_right", "ninja_stand_left");
        ninja.classList.add("ninja_walk_right");
        ninja.style.transform = "scaleX(-1)";
    }
};

document.onkeyup = (e) => {
    if (e.keyCode == "39" || e.keyCode == "37") {
        ninja.classList.remove("ninja_walk_right");
        ninja.classList.add("ninja_stand_right");
    }
};
