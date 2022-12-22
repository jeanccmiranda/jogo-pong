//ball
let ballPositionX = 350;
let ballPositionY = 200;
let ballDiameter = 15;
let ballRadius = ballDiameter / 2 ;
let ballSpeedX = 6;
let ballSpeedY = 6;

//players

let playerOnePositionX = 0;
let playerOnePositionY = 170;
let playerTwoPositionX = 690;
let playerTwoPositionY = 170;
let playerWidth = 10;
let playerHeight = 70;
let playerCollision = false;

//score
let playerOneScore = 0;
let playerTwoScore = 0;





function ballDisplay(){
  circle(ballPositionX, ballPositionY, ballDiameter);
}

function playerDisplay(x, y){
  rect(x, y, playerWidth, playerHeight);
}

function scoreDisplay(score, positionX, PositionY){
  fill(255);
  text(score, positionX, PositionY);
}

function ballMovement(){
  ballPositionX += ballSpeedX;
  ballPositionY += ballSpeedY;
}

function playerOneMovement(){
  if (keyIsDown(87) && playerOnePositionY > 1){
    playerOnePositionY -= 10;
  }
  
  if (keyIsDown(83) && playerOnePositionY < 340){
    playerOnePositionY += 10;
  }
}

function playerTwoMovement(){
  if(ballPositionY > playerTwoPositionY && playerTwoPositionY < 330){
    playerTwoPositionY += 5;
  }
  
  else{
    playerTwoPositionY -= 5;
  }
}

function scoreCounter(){
  if (ballPositionX < 1){
    playerTwoScore++;

    
  }
  
  if (ballPositionX > width){
    playerOneScore++;

  }
}



function borderCollider(){
  if(ballPositionX < 1 || ballPositionX > width){
    ballSpeedX *= -1;
    
  }
  
  
  if(ballPositionY < 1 || ballPositionY > height){
    ballSpeedY *= -1;
    
  }
}

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(0);
  ballDisplay();
  playerDisplay(playerOnePositionX, playerOnePositionY);
  playerDisplay(playerTwoPositionX, playerTwoPositionY);
  scoreDisplay(playerOneScore, 200, 20);
  scoreDisplay(playerTwoScore, 500, 20);
  ballMovement();
  borderCollider();
  scoreCounter();
  playerOneMovement();
  playerTwoMovement();
  playerCollider(playerOnePositionX, playerOnePositionY);
  playerCollider(playerTwoPositionX, playerTwoPositionY);
  
}


  function playerCollider(x, y){
    playerCollision = collideRectCircle(x, y, playerWidth, playerHeight, ballPositionX, ballPositionY, ballRadius);
    
    if(playerCollision){
      ballSpeedX *= -1;
    }
  }




