class Ninja {
    constructor(ninjaElement, floorElement, levelBgElement, jumpBtn) {
        this.ninja = ninjaElement;
        this.floor = floorElement;
        this.levelBg = levelBgElement;
        this.jumpBtn = jumpBtn;

        this.left = 0;
        this.leftBg = 0;
        this.ninjaBottom = 173;
        this.isJumping = false;
        this.jumpCount = 0;
        this.jumpHeight = 0;

        this.gravityInterval = null;
        this.bindEvents();
    }

    moveNinja(num) {
        this.ninja.style.transform = `scaleX(${num})`;
    }

    changeNinjaState(removeClasses, addClass) {
        this.ninja.classList.remove(...removeClasses);
        this.ninja.classList.add(addClass);
    }

    handleKeyDown(e) {
        e = e || window.event;
        if (e.keyCode === 68) {
            this.moveRight();
        } else if (e.keyCode === 65 && this.left !== 0) {
            this.moveLeft();
        } else if (e.keyCode === 65) {
            this.faceLeft();
        } else if (e.keyCode === 32) {
            this.jumpNinja();
        }
    }

    handleKeyUp(e) {
        if (e.keyCode === 68 || e.keyCode === 65) {
            if (!this.isJumping) {
                this.changeNinjaState(
                    ["ninja_walk_right"],
                    "ninja_stand_right"
                );
            }
        }
    }

    moveRight() {
        this.left -= 15;
        this.leftBg -= 3;
        this.floor.style.left = this.left + "px";
        this.levelBg.style.left = this.leftBg + "px";
        this.moveNinja(1);
        if (!this.isJumping) {
            this.changeNinjaState(
                ["ninja_stand_right", "ninja_stand_left"],
                "ninja_walk_right"
            );
        }
    }

    moveLeft() {
        this.left += 15;
        this.leftBg += 3;
        this.floor.style.left = this.left + "px";
        this.levelBg.style.left = this.leftBg + "px";
        this.moveNinja(-1);
        if (!this.isJumping) {
            this.changeNinjaState(
                ["ninja_stand_right", "ninja_stand_left"],
                "ninja_walk_right"
            );
        }
    }

    faceLeft() {
        this.moveNinja(-1);
        if (!this.isJumping) {
            this.changeNinjaState(
                ["ninja_stand_right", "ninja_stand_left"],
                "ninja_walk_right"
            );
        }
    }

    jumpNinja() {
        if (this.jumpCount < 2) {
            this.isJumping = true;
            this.jumpCount++;
            this.jumpHeight = this.jumpCount === 1 ? 350 : 500;

            if (this.gravityInterval) {
                clearInterval(this.gravityInterval);
            }

            let gravity = setInterval(() => {
                if (this.ninjaBottom < this.jumpHeight) {
                    this.ninjaBottom += 10;
                    this.ninja.style.bottom = this.ninjaBottom + "px";
                } else {
                    clearInterval(gravity);
                    this.fallNinja();
                }
            }, 20);

            this.ninja.classList.add("ninja_jump");
        }
    }

    fallNinja() {
        if (this.gravityInterval) {
            clearInterval(this.gravityInterval);
        }

        this.gravityInterval = setInterval(() => {
            if (this.ninjaBottom > 173) {
                this.ninjaBottom -= 10;
                this.ninja.style.bottom = this.ninjaBottom + "px";
            } else {
                clearInterval(this.gravityInterval);
                this.ninjaBottom = 173;
                this.jumpCount = 0;
                this.isJumping = false;
                this.ninja.classList.remove("ninja_fall");
                this.ninja.classList.remove("ninja_jump");
            }
        }, 45);

        this.ninja.classList.add("ninja_fall");
    }

    bindEvents() {
        document.onkeydown = this.handleKeyDown.bind(this);
        document.onkeyup = this.handleKeyUp.bind(this);

        if (this.jumpBtn) {
            this.jumpBtn.onclick = this.jumpNinja.bind(this);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const ninjaElement = document.getElementById("ninja");
    const floorElement = document.getElementById("floor");
    const levelBgElement = document.getElementById("levelOneBg");
    const jumpBtn = document.getElementById("jumpBtn");

    const ninja = new Ninja(
        ninjaElement,
        floorElement,
        levelBgElement,
        jumpBtn
    );
});
