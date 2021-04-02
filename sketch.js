

var car,wall;
var speed,weightt
var thickness
function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
  car = createSprite(50, 200, 50, 10);
  wall = createSprite(1200,200,thickness,120)




speed = random(223,321)
weightt=random(400,1500)
car.velocityX = speed
}

function draw() {
  background("black");  
  if(wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX=0
    var deformation=0.5 * weightt * speed * speed/22509
    if(deformation>180){

      car.shapeColor = "white"
    }
    if(deformation<180 && deformation>100){

    car.shapeColor = "white"
    }
    if(deformation<100){
      car.shapeColor = "white"
    }
  }
  if(hasCollide(car,wall)){
var damage = 0.5*weightt*speed/(thickness*thickness*thickness)

if(damage>10){

  car.shapeColor = "red"

 
}
if(damage<10){

  car.shapeColor = "green"
}


  }
  drawSprites();
}


function hasCollide(lcar,lwall){
carRightEdge=lcar.x + lcar.width;
wallLeftEdge= lwall.x

if(carRightEdge>=wallLeftEdge){

return true

}
return false

}