class Dustbin {
    constructor(x, y, width,height) {
       
       
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
   
   
    display(){
      var pos =this.body.position;
      this.body.isStatic =true
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  