class Ripple{
    constructor(x,y){
        this.x = x+27;
        this.y = y+27;
        this.radius = Math.random()*20 + 1;
        this.opacity = 1;
        this.directionX = Math.random() - 0.5;
        this.directionY = Math.random() - 0.5;
    }
    draw(){
        ctx1.strokeStyle = 'rgba(255,255,255,' + this.opacity + ')';
        ctx1.beginPath();
        ctx1.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx1.stroke();
        ctx1.closePath();
    }
    update(){
        if(this.opacity > 0){
            this.opacity -= 0.009;
        }
        if(this.radius < 50){
            this.radius += 0.7;
            this.x -= 0.03;
            this.y -= 0.03;
        }
    }
}

function handleRipples(){
    //ripple effect
    for(let i = 0; i < ripplesArray.length;i++){
        ripplesArray[i].update();
        ripplesArray[i].draw();
    }
    if(ripplesArray.length > maxRipple){
        for( let i = 0; i < 5; i++){
            ripplesArray.pop();
        }
    }
    if((keys[37] || keys[38] || keys[39] || keys[40]) && frog.y < 250 && frog.y > 100 && particlesArray.length < maxParticles +10){
        for(let i = 0; i < 20; i++){
            ripplesArray.unshift(new Ripple(frog.x,frog.y));
        }
    }
}