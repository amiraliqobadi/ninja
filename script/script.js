const PlayBottom = document.querySelector("#firstStartPage > .PlayBottom");
const mapSliderGallery = document.querySelector("#mapSlider > .gallery");
const mapMoveRightBtn = document.querySelector(
    "#levelSelect > .mapMoveRightBtn"
);
const mapMoveLeftBtn = document.querySelector("#levelSelect > .mapMoveLeftBtn");
const MainMenuLevels = document.querySelectorAll(".unlocked");
const allClick = document.querySelectorAll(".clickSound")

allClick.forEach((allClick) => {
    allClick.addEventListener("click", () => {
        auAllClick.play();
    });
});

auEvent1.play();
auMenu.volume = 0.7;
levelAudio.pause();
PlayBottom.onclick = () => {
    firstStartPage.className = "hide";
    levelSelect.className = "show";
    auMenu.play();
    auEvent1.pause();
    mapMoveLeftBtn.style.display = "none";
    mapMoveRightBtn.style.display = "block";
};

var mapSliderposition = 0;

mapRight = () => {
    mapSliderposition = mapSliderposition - 100;
    mapSliderGallery.style.left = mapSliderposition + "%";
};

mapMoveRightBtn.onclick = () => {
    if (mapSliderposition > -200) {
        mapRight();
        mapMoveLeftBtn.style.display = "block";
    } else if ((mapSliderposition = -200)) {
        mapRight();
        mapMoveRightBtn.style.display = "none";
    }
};

mapLeft = () => {
    mapSliderposition = mapSliderposition + 100;
    mapSliderGallery.style.left = mapSliderposition + "%";
};

mapMoveLeftBtn.onclick = () => {
    if (mapSliderposition < -100) {
        mapLeft();
        mapMoveRightBtn.style.display = "block";
    } else if ((mapSliderposition = -100)) {
        mapMoveLeftBtn.style.display = "none";
        mapLeft();
    }
};

MainMenuLevels.forEach((MainMenuLevels) => {
    MainMenuLevels.addEventListener("click", () => {
        if (MainMenuLevels.className === "unlocked") {
            MainMenuLevels.className = "selected";
            playBtn.style.display = "block";
        } else if (MainMenuLevels.className === "selected") {
            MainMenuLevels.className = "unlocked";
        }
    });
});

settings.onclick = () => {
    settingsMenu.classList.replace("hide", "show");
    levelSelect.className = "hide";
    playBtn.style.display = "none";

    MainMenuLevels.forEach((MainMenuLevels) => {
        MainMenuLevels.className = "unlocked";
    });
};

backBtn.onclick = () => {
    settingsMenu.className = "hide";
    levelSelect.className = "show";
};

cond = true;

musicChange.onclick = () => {
    if (cond == true) {
        auMenu.volume = 0;
        cond = false;
        musicChange.innerHTML = "Music: Off";
    } else {
        auMenu.volume = 1;
        cond = true;
        musicChange.innerHTML = "Music: On";
    }
};

// level one

playBtn.addEventListener("click", () => {
    mainMenu.style.display = "none";
    loading.style.display = "block";
    auEvent1.pause();
    auMenu.pause();
    auMenu.currentTime = 0;
    setTimeout(() => {
        loading.style.display = "none";
        levelAudio.play();
        levelAudio.volume = 0.7;
        levelContainer.style.display = "block";
        levelOne.style.display = "block";
    }, 2000);
});

backToMM.addEventListener("click", () => {
    loading.style.display = "block";
    levelContainer.style.display = "block";
    levelOne.style.display = "none";
    levelAudio.pause();
    pauseMenu.classList.replace("show", "hide");
    setTimeout(() => {
        mainMenu.style.display = "block";
        loading.style.display = "none";
        auMenu.play();
    }, 500);
});

pauseBtn.onclick = () =>{
    pauseMenu.classList.replace("hide", "show");
}
resumeBtn.onclick = () =>{
    pauseMenu.classList.replace("show", "hide");
}

