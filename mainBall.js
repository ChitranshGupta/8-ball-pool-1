class mainBall{

        constructor(x, y, width, height){

            this.body = createSprite(x, y, width, height);     
            this.image = loadImage("spr_ball2.png");
    
    
        }
    
        display(){
            this.body.addImage("zxc", this.image);
            this.body.scale = 0.1; 
    
        }
    }