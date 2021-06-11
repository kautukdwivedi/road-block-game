function animate(){
    ctx1.clearRect(0,0,canvas.width,canvas.height);
    ctx2.clearRect(0,0,canvas.width,canvas.height);
    ctx3.clearRect(0,0,canvas.width,canvas.height);
    ctx4.clearRect(0,0,canvas.width,canvas.height);
    ctx5.clearRect(0,0,canvas.width,canvas.height);
    handleRipples();
    ctx2.drawImage(background2,0,0);
    handleParticles();
    frog.draw();
    frog.update();
    handleObstacle();
    handleScoreBoard();
    ctx4.drawImage(grass,0,0);
    frame++;
    requestAnimationFrame(animate);
}
animate();

//event listners
window.addEventListener('keydown',function(e){
   keys = [];
   keys[e.keyCode] = true;
   if(keys[37] || keys[38] || keys[39] || keys[40]){
       frog.jump();
   }
});

window.addEventListener('keyup',function(e){
    delete keys[e.keyCode];
    frog.moving = false;
    frog.frameX = 0;
});

function scoreUpdate(){
    score++;
    gameSpeed += 0.05;
    frog.reset();
}

function handleScoreBoard(){
    ctx4.fillStyle = "black";
    ctx4.strokeStyle = "black";
    ctx4.font = "15px Verdana";
    ctx4.strokeText("Score",265,15);
    ctx4.font = "60px Verdana";
    ctx4.fillText(score,270,65);
    ctx4.font = "15px Verdana";
    ctx4.strokeText("Lives: "+ (lives - collisionCount),10,175);
    ctx4.strokeText("Game Speed: "+gameSpeed.toFixed(1),10,195);
    ctx4.strokeText("High Score: "+highScore,10,215);
}

function collision(first,second){
    return !(first.x >second.x + second.width || first.x +first.width < second.x || first.y > second.y + second.height || first.y + first.height < second.y); 
}

function resetGame(){
    if(collisionCount === lives){
        if(highScore < score){
            highScore = score;
        }
        score = 0;
        collisionCount = 0;
        gameSpeed = 1;
    }else{
        collisionCount++;
    }
    frog.reset();
}