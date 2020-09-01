var bullet, speed, weight;
var wall, thickness

function setup() {
  createCanvas(1600,400);

  bullet=createSprite(100,200,100,50);
  //bullet.shapeColor="white";

  wall=createSprite(1200,200,thickness,height/2);
  //wall.shapeColor=(80,80,80);

  speed=random(223,321);
  weight=random(30,52);

  thickness=random(22,83);

  bullet.velocityX=speed;


}

function draw() {
  background(0);  
 
 if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  
  {
    //bullet.velocityX=0;
    var Damage=0.5*weight*speed*speed/thickness*thickess*thickness;
    
    if(Damage>10){
     bullet.shapeColor=color(255,0,0);
    }

    if(Damage<10)
    {
      bullet.shapeColor=color(50,205,50);
    }
  }
 
 
  drawSprites();
}