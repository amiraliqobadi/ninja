let ninja = document.getElementById("ninja");
let left = 0;
let bottom = 26;
let jumpCount = 0;
let gravity = 2;
let gravityInterval;
let keys = {};
let gravityTime = 60;

function startGravity() {
    if (!gravityInterval) {
        gravityInterval = setInterval(applyGravity, 80);
    }
}

function applyGravity() {
    if (bottom > 26) {
        bottom -= gravity;
        if (bottom <= 26) {
            bottom = 26;
            clearInterval(gravityInterval);
            gravityInterval = null;
            jumpCount = 0;
            ninja.classList.add("ninja_stand_right");
        }
        ninja.style.bottom = bottom + "%";
    }
}

document.onkeydown = (e) => {
    e = e || window.event;
    keys[e.keyCode] = true;

    if (keys[68]) {
        jumpCount > 0 ? (left += 20) : (left += 15);
        ninja.style.left = left + "px";
        ninja.classList.remove("ninja_stand_right");
        ninja.classList.add("ninja_walk_right");
        ninja.style.transform = "scaleX(1)";
    }
    if (keys[65]) {
        jumpCount > 0 ? (left -= 20) : (left -= 15);
        ninja.style.left = left + "px";
        ninja.classList.remove("ninja_stand_right");
        ninja.classList.add("ninja_walk_right");
        ninja.style.transform = "scaleX(-1)";
    }
    if (keys[32] && jumpCount < 2) {
        jumpCount++;
        bottom += 25;
        ninja.style.bottom = bottom + "%";
        ninja.classList.remove("ninja_stand_right");
        ninja.classList.add("ninja_jump");
        clearInterval(gravityInterval);
        gravityInterval = null;
    }
};

document.onkeyup = (e) => {
    e = e || window.event;
    keys[e.keyCode] = false;
    if (!keys[65] && !keys[68]) {
        ninja.classList.remove("ninja_walk_right");
        if (bottom === 26 && jumpCount === 0) {
            ninja.classList.add("ninja_stand_right");
        }
    }

    if (!keys[32]) {
        startGravity();
    }
};
