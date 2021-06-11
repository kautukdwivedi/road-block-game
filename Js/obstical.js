class Obstacle {
    constructor(x, y, speed, type, width, height) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.type = type;
        this.width = width;
        this.height = height;
        this.frameX = 0;
        this.frameY = 0;
        this.randomValue = Math.floor(Math.random() * 30 + 30);
        this.carType = Math.floor(Math.random() * numberOfCars);
        this.trutleType = Math.floor(Math.random() * numberOfTurtles);
    }
    draw() {
        if (this.type === 'turtle') {
            if (frame % this.randomValue === 0) {
                if (this.frameX >= 1) this.frameX = 0;
                else this.frameX++;
            }
            ctx1.drawImage(turtle, this.frameX * 70,this.trutleType * 70, 70, 70, this.x, this.y, this.width, this.height);
        } else if (this.type === 'log') {
            ctx1.drawImage(log, this.x, this.y, this.width, this.height);
        } else {
            ctx2.drawImage(car, this.frameX * this.width, this.carType * this.height, grid * 2, grid, this.x, this.y, this.width, this.height);
        }
    }
    update() {
        this.x += this.speed * gameSpeed;
        if (this.speed > 0) {
            if (this.x > canvas.width + this.height) {
                this.x = 0 - this.width;
                this.carType = Math.floor(Math.random() * numberOfCars);
            }
        } else {
            this.frameX = 1;
            if (this.x < 0 - this.width) {
                this.x = canvas.width + this.width;
                this.carType = Math.floor(Math.random() * numberOfCars);
            }
        }
    }
}

function initObstacle() {
    //lane 1
    for (let i = 0; i <= 1; i++) {
        let x = i * 350;
        carsArray.push(new Obstacle(x, canvas.height - grid * 2 - 20, 1, 'car', grid * 2, grid));
    }
    //lane 2
    for (let i = 0; i <= 1; i++) {
        let x = i * 300;
        carsArray.push(new Obstacle(x, canvas.height - grid * 3 - 20, -1.3, 'car', grid * 2, grid));
    }
    //lane 3
    for (let i = 0; i <= 1; i++) {
        let x = i * 400;
        carsArray.push(new Obstacle(x, canvas.height - grid * 4 - 20, 1.6, 'car', grid * 2, grid));
    }
    //lane 4
    for (let i = 0; i <= 1; i++) {
        let x = i * 400;
        logsArray.push(new Obstacle(x, canvas.height - grid * 5 - 20, -2, 'log', grid * 2, grid));
    }
    //lane 5
    for (let i = 0; i <= 2; i++) {
        let x = i * 200;
        logsArray.push(new Obstacle(x, canvas.height - grid * 6 - 20, 1, 'turtle', grid, grid));
    }
}
initObstacle();

function handleObstacle() {
    for (let i = 0; i < carsArray.length; i++) {
        carsArray[i].update();
        carsArray[i].draw();
    }
    for (let i = 0; i < logsArray.length; i++) {
        logsArray[i].update();
        logsArray[i].draw();
    }
    //handle collisions
    //cars
    for (let i = 0; i < carsArray.length; i++) {
        if (collision(frog, carsArray[i])) {
            ctx4.drawImage(collisionImg, 0, 100, 100, 100, frog.x, frog.y, 50, 50);
            resetGame();
        }
    }
    //logs/turtles
    if(frog.y < 250 && frog.y > 100){
        safe = false;
        for(let i = 0; i < logsArray.length; i++){
            if(collision(frog,logsArray[i])){
                frog.x += logsArray[i].speed;
                safe = true;
            }
        }
        if(!safe){
            for(let i = 0; i < 30; i++){
                ripplesArray.unshift(new Ripple(frog.x,frog.y));
            }
            drop.play();
            resetGame();
        }
    }
}