let ninja = document.getElementById("ninja");

let left = 0;

document.onkeydown = (e) => {
    e = e || window.event;

    if (e.keyCode == "68") {
        left += 15;
        ninja.style.left = left + "px";

        ninja.classList.remove("ninja_stand_right", "ninja_stand_left");
        ninja.classList.add("ninja_walk_right");
        ninja.style.transform = "scaleX(1)";
    } else if (e.keyCode == "65") {
        left -= 15;
        ninja.style.left = left + "px";

        ninja.classList.remove("ninja_stand_right", "ninja_stand_left");
        ninja.classList.add("ninja_walk_right");
        ninja.style.transform = "scaleX(-1)";
    }
};

document.onkeyup = (e) => {
    if (e.keyCode == "68" || e.keyCode == "65") {
        ninja.classList.remove("ninja_walk_right");
        ninja.classList.add("ninja_stand_right");
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

window.addEventListener("keydown", (e) => {
    if(e.keyCode == 32){
        jumpNinja();
    }
})

jumpBtn.onclick = function(){
    jumpNinja();
}
