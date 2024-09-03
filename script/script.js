const PlayBottom = document.querySelector("#firstStartPage > .PlayBottom");
const mapSliderGallery = document.querySelector("#mapSlider > .gallery");
const mapMoveRightBtn = document.querySelector(
    "#levelSelect > .mapMoveRightBtn"
);
const mapMoveLeftBtn = document.querySelector("#levelSelect > .mapMoveLeftBtn");
const MainMenuLevels = document.querySelectorAll(".unlocked");

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
    settingsMenu.className = "show";
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
    setTimeout(() => {
        loading.style.display = "none";
        levelAudio.play();
        levelAudio.volume = 0;
        levelContainer.style.display = "block";
        levelOne.style.display = "block";
    }, 10);
});

// const background1 = "url('../img/level_one/co2.png')";
// const background2 = "url('../img/level_one/co1.png')";
// const background3 = "url('../img/level_one/trucxanhdam1.png')";
// const background4 = "url('../img/level_one/trucxanhdam2.png')";
// const background5 = "url('../img/level_one/trucxanhdam3.png')";

// const numRepetitions1 = Math.floor(Math.random() * 5) + 1;
// const numRepetitions2 = Math.floor(Math.random() * 5) + 1;
// const numRepetitions3 = Math.floor(Math.random() * 5) + 1;
// const numRepetitions4 = Math.floor(Math.random() * 5) + 1;
// const numRepetitions5 = Math.floor(Math.random() * 5) + 1;

// const backgrounds = [];
// const bambooBackgrounds = [];

// for (let i = 0; i < numRepetitions1; i++) {
//     backgrounds.push(background1);
// }
// for (let i = 0; i < numRepetitions2; i++) {
//     backgrounds.push(background2);
// }

// const addRepetitions = (background, numRepetitions) => {
//     for (let i = 0; i < numRepetitions; i++) {
//         bambooBackgrounds.push(background);
//     }
// };

// addRepetitions(background3, numRepetitions3);
// addRepetitions(background4, numRepetitions4);
// addRepetitions(background5, numRepetitions5);

// const backgroundImageValue = backgrounds.join(",");
// const bambooBackgroundImageValue = bambooBackgrounds.join(",");


// document.querySelector(".floor").style.backgroundImage = backgroundImageValue;
// document.querySelector(".bamboo").style.backgroundImage =
//     bambooBackgroundImageValue;
