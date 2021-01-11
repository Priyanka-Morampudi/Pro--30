class Block{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution : 0.7,
          friction : 0.6,
          isStatic : false,
          
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visiblity = 255;

      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        if(this.body.speed < 5) {
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          strokeWeight(4);
          rect(0, 0, this.width, this.height);
          pop();
        } else {
          World.remove(world, this.body);
          push();
          this.Visibility = this.Visibility - 5;
          tint(255, this.Visibility);
          pop();
        }
      }
}
