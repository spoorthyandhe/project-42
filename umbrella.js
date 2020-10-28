class Umbrella{
    constructor(x, y) {
        var options = {
          isStatic:true
        }
        this.x=x;
        this.y=y;
        this.image=loadImage("walking_1.png");
        this.radius=50;
        this.body=Bodies.circle(x,y,50,options);
          World.add(world, this.body);
      }
      display(){
       
        imageMode(CENTER);
       image(this.image,this.body.position.x,this.body.position.y+70,300,300);

      }
}