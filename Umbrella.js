
class Umbrella{
constructor(x,y){
var options = {
    'isStatic': true,
}
this.body = Bodies.circle(x,y,50,options);
this.radius = 50;
this.image = loadImage("walking_1.png" )
}

display(){
var pos = this.body.position;
imageMode(CENTER);
image(this.image, pos.x, pos.y+70, 300, 300);

}
}