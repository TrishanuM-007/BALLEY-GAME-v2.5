class Circle{
    constructor(x, y) {
        var options = {
           static: true
        }
        this.body = Bodies.circle(x, y,20, options);
        //this.radius = radius
       // this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("Blue");
        stroke("black")
        strokeWeight(4)
       ellipseMode(RADIUS);
       ellipse (0,0,20,20);
        pop();
      }
}