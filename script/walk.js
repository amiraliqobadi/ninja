let ninja = document.getElementById("ninja");
let left = 0;
let bottom = 26;
let isJumping = false;
let gravity = 2;
let gravityInterval;
let keys = {};

function startGravity() {
    if (!gravityInterval) {
        gravityInterval = setInterval(applyGravity, 60);
    }
}

function applyGravity() {
    if (bottom > 26) {
        bottom -= gravity;
        if (bottom <= 26) {
            bottom = 26;
            clearInterval(gravityInterval);
            gravityInterval = null;
            isJumping = false;
            ninja.classList.add("ninja_stand_right");
        }
        ninja.style.bottom = bottom + "%";
    }
}

document.onkeydown = (e) => {
    e = e || window.event;
    keys[e.keyCode] = true;

    if (keys[68]) {
        isJumping === true ? (left += 50) : (left += 15);
        ninja.style.left = left + "px";
        ninja.classList.remove("ninja_stand_right");
        ninja.classList.add("ninja_walk_right");
        ninja.style.transform = "scaleX(1)";
    }
    if (keys[65]) {
        isJumping === true ? (left -= 50) : (left -= 15);

        ninja.style.left = left + "px";
        ninja.classList.remove("ninja_stand_right");
        ninja.classList.add("ninja_walk_right");
        ninja.style.transform = "scaleX(-1)";
    }
    if (keys[87] && !isJumping) {
        isJumping = true;
        bottom += 50;
        ninja.style.bottom = bottom + "%";
        clearInterval(gravityInterval);
        gravityInterval = null;
    }
};

document.onkeyup = (e) => {
    e = e || window.event;
    keys[e.keyCode] = false;
    if (!keys[65] && !keys[68]) {
        ninja.classList.remove("ninja_walk_right");
        if (bottom === 26 && !isJumping) {
            ninja.classList.add("ninja_stand_right");
        }
    }

    if (!keys[87]) {
        startGravity();
    }
};
