var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(826,400);

    block1 = createSprite(0,380,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,380,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,380,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(726,380,200,30);
    block4.shapeColor = "green";

   

    ball = createSprite(random(20,806),100, 40,40);
    ball.shapeColor = rgb(255,255,255);

    ball.velocityX = -3
    ball.velocityY = 5
  

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

     
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX = 0
        ball.velocityY = 0
        music.stop();
  
       
        
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
    }
        
        if(block4.isTouching(ball) && ball.bounceOff(block4)){
            ball.shapeColor = "green";
        }

    drawSprites();
}


