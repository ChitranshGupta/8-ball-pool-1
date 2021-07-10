class Player2Ball{
    constructor(x, y, width, height){
       
        
        this.body = createSprite(x, y, width, height);

        this.image = loadImage("spr_yellowBall1.png");



    }

    display(){

        this.body.addImage("asd", this.image);
        this.body.scale = 0.09; 


    }
}