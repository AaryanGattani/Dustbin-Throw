class HOLDER {
    constructor(x, y, width, height) 
    {
      var options = 
      {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
       
    }
    display(){
      var pos =this.body.position;
      var ang =this.body.angle;
      rectMode(CENTER);
      fill("red");
      rect(pos.x,pos.y, this.width, this.height);
      
    }
  };