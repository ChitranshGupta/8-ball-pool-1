class Stick{
    constructor(x, y, width, height){


        this.body = createSprite(x, y, width, height);
       
        this.width = width;
        this.height = height;

        this.image = loadImage("spr_stick.png");



    }

    display(){

        this.body.x = mouseX;
        this.body.y = mouseY;
        

     this.body.addImage("ad", this.image);
     this.body.scale = 1; 


    }
}