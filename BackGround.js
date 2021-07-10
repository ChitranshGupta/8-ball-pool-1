class backGround{
constructor(x, y, width, height){
       
        
        this.body = createSprite(x, y, width, height);

        this.image = loadImage("bg.png");



    }

    display(){

        this.body.addImage("zx", this.image);
        this.body.scale = 0.09; 


    }
}