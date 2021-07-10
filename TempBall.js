class TempBall{
    constructor(x, y, radius){
        var options = {
            isStatic : false,
            restitution : 0.6,
            friction : 0.2,
            density : 1
            

        }



        this.body = Bodies.circle(x, y, radius, options);
 //       Matter.Body.setAngle( this.body, angle);
          World.add(world,this.body);
        this.width = radius;
        this.height = radius;


        this.image = loadImage("spr_yellowBall2.png");

        this.radius = radius;


    }

    display(){
        
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        if (goal ===1)
        {
            World.remove(world, this.body);
          goal=0;
        }else 
        {ellipseMode(CENTER);
       image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        }

    }
}