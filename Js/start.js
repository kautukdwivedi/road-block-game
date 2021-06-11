let canvas = document.getElementById("canvas1");
let ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext('2d');
canvas2.width = 600;
canvas2.height = 600;

let canvas3 = document.getElementById("canvas3");
let ctx3 = canvas3.getContext('2d');
canvas3.width = 600;
canvas3.height = 600;

let canvas4 = document.getElementById("canvas4");
let ctx4 = canvas4.getContext('2d');
canvas4.width = 600;
canvas4.height = 600;

let canvas5 = document.getElementById("canvas5");
let ctx5 = canvas5.getContext('2d');
canvas5.width = 600;
canvas5.height = 600;

//global variables

const grid = 80;
let keys = [];
let score = 0;
let collisionCount = 0;
let frame = 0;
let gameSpeed = 1;
let safe = false;
let highScore = 0;

const particlesArray = [];
const maxParticles = 300;
const ripplesArray = [];
const maxRipple = 20;
const carsArray = [];
const logsArray = [];
const lives = 4;

//images 
const background2 = new Image();
background2.src = "/Images/background2.png";

const grass = new Image();
grass.src = "/Images/grass.png";

const collisionImg = new Image();
collisionImg.src = "/Images/collisions.png";

const turtle = new Image();
turtle.src = "/Images/turtles.png";
let numberOfTurtles = 4;

const car = new Image();
car.src = "/Images/cars.png";
let numberOfCars = 3;

const log = new Image();
log.src = "/Images/log.png";

const frogImg = new Image();
frogImg.src = "/Images/frogs.png";

//sounds
const jumpS = new Audio('/sounds/jump.mp3');

const drop = new Audio('/sounds/water-droplet.mp3');