class Frog {
    constructor() {
        this.spritWidth = 250;
        this.spritHeight = 250;
        this.height = this.spritHeight / 5;
        this.width = this.spritWidth / 5;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - this.height - 40;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
    }
    update() {
        //up down right left
        if (keys[38]) {
            if (this.moving === false) {
                this.y -= grid;
                this.moving = true;
                this.frameX = 1;
                this.frameY = 0;
            }
        }
        if (keys[40]) {
            if (this.moving === false && this.y < canvas.height - this.height * 2) {
                this.y += grid;
                this.moving = true;
                this.frameY = 3;
            }
        }
        if (keys[39]) {
            if (this.moving === false && this.x < canvas.width - this.width * 2) {
                this.x += grid;
                this.moving = true;
                this.frameY = 1;
            }
        }
        if (keys[37]) {
            if (this.moving === false && this.x > this.width) {
                this.x -= grid;
                this.moving = true;
                this.frameY = 2;
            }
        }
        if (this.y < 0) {
            scoreUpdate();
        }
    }
    draw() {
        ctx3.drawImage(frogImg, this.frameX * this.spritWidth, this.frameY * this.spritHeight, this.spritWidth, this.spritHeight, this.x - 25, this.y - 25, this.width * 2, this.height * 2);
    }
    jump() {
        jumpS.play();
        if (this.moving === false)
            this.frameX = 1;
        else if (this.frameX === 1)
            this.frameX = 0;
        inwater = false;
    }
    reset() {
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - this.height - 40;
    }
}

const frog = new Frog();