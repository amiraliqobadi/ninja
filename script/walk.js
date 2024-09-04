let ninja = document.getElementById("ninja");

let left = 0;

let leftBg = 0

ninjaMoveAnim = (num) =>{
    ninja.style.transform = `scaleX(${num})`;
}

ninjaStopMove = (removeVar, addVar) =>{
    ninja.classList.remove(`${removeVar}`);
    ninja.classList.add(`${addVar}`);
}

document.onkeydown = (e) => {
    e = e || window.event;

    if (e.keyCode == "68") {
        left -= 15;
        leftBg -= 3;

        floor.style.left = left + "px";
        levelOneBg.style.left = leftBg + "px";

        ninjaMoveAnim(1)
        ninjaStopMove(["ninja_stand_right", "ninja_stand_left"], ["ninja_walk_right"])
    } else if (e.keyCode == "65" && left != 0) {
        left += 15;
        leftBg += 3;

        floor.style.left = left + "px";
        levelOneBg.style.left = leftBg + "px";

        ninjaMoveAnim(-1)
        ninjaStopMove(["ninja_stand_right", "ninja_stand_left"], ["ninja_walk_right"])
    }
    else if (e.keyCode == "65") {
        ninjaMoveAnim(-1)
        ninjaStopMove(["ninja_stand_right", "ninja_stand_left"], ["ninja_walk_right"])
    }
};

document.onkeyup = (e) => {
    if (e.keyCode == "68" || e.keyCode == "65") {
        ninjaStopMove(["ninja_walk_right"], ["ninja_stand_right"])
    }
};

jumpNinja = () =>{
    if (ninja.classList !="ninja_jump"){

        ninja.classList.add("ninja_jump");

        setTimeout(() => {
            ninja.classList.remove("ninja_jump");
        }, 800);
    }

    else if (ninja.classList = "ninja_jump"){
        ninja.style.bottom = ninjaBottom + 150 + "px";
    }
}

// window.addEventListener("keydown", (e) => {
//     if(e.keyCode == 32){
//         jumpNinja();
//     }
// })

jumpBtn.onclick = function(){
    jumpNinja();
}
