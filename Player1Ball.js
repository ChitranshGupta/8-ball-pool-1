class Player1Ball{
    
    constructor(x, y, width, height){

        this.body = createSprite(x, y, width, height);
 


        this.image = loadImage("spr_redBall1.png");

        


    }

    display(){
        this.body.addImage("qwe", this.image);
        this.body.scale = 0.1; 

    }
}