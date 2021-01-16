class Bob {
    constructor(x, y) {
      var options = {
          'restitution':2.3,
          'friction':0,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(3);
        stroke("blue");
        fill(0,255,255);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  