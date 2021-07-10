class LastBall{
    constructor(x, y, radius){
        var options = {
            isStatic : true,
            restitution : 0.6,
            friction : 1.2,
            density : 1

        }

        this.body = Bodies.circle(x, y, radius, options);
 //       Matter.Body.setAngle( this.body, angle);
          World.add(world,this.body);
        this.width = radius;
        this.height = radius;


        this.image = loadImage("spr_blackBall2.png");



    }

    display(){
        ellipseMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);

    }
}