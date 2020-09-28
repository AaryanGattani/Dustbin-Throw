class PAPER{
    constructor(x, y, radius) {
        var options = {
            'isStatic' : false,
            'restitution':0.4,
            'friction':0.5,
            'density':2,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
        
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
			 strokeWeight(3);
			 fill("red");
			 ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}