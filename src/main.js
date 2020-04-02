// variables
const canvas= document.getElementById('game');
const ctx = canvas.getContext('2d');


let score;
let highscore;
let player;
let gravity;
let obstacles;
let gameSpeed;
let keys = {};

document.addEventListener('keydown',function(evt){
    keys[evt.code]=true;
 

});
document.addEventListener('keyup',function(evt){
    keys[evt.code]= false;

});

class Player {
    constructor(x,y, width1, hieght1,color){
        this.x=x;
        this.y=y;
        this.width1=width1;
        this.hieght= hieght1;
        this.color= color;
        this.dy=0;
        this.jumpforce = 15;
        this.originalHeight= h;
        this.grounded= false;
        this.jumpTimer= 0;
         
    }
    Animate (){
            //Jump
            if(keys['Space']||keys['KeyW']){
               this.Jump();
    
            }else{
                this.jumpTimer=0;

            }

            //Shrinking

            if(keys['ShiftLeft']||keys['KeyS']){
                this.h=this.originalHeight/2;
            }else{
                this.hieght= this.originalHeight;

            }


            this.y= this.dy;


            //Gravity
        if(this,y+this.hieght<canvas.hieght){
            this.dy+= gravity;
            this.grounded= false;
        }
        else{
            this.dy=0;
            this.grounded=true;
            this.y= canvas.hieght-this.hieght1;

        }
       


        this.Draw();
    }
    Jump(){
        if (this.grounded && this.jumpTimer==0){
             this.jumpTimer=1;
             this.dy=-this.jumpForce;
        }
        else if (this.jumpTimer>0&&this.jumpTimer<15){
            this.jumpTimer++;
            this.dy=-this.jumpForce- (this.jumpTimer/50);

        }
         
    }

    Draw(){
        ctx.beginPath();
        ctx.fillStyle= this.color;
        ctx.fillRect= (this.x,this.y,this.width1,this.hieght1);
        ctx.closePath();

    }
}
function Start(){
    canvas.width = window.innerWidth;
    canvas.hieght= window.innerHeight;

    ctx.font = "20px sans-serif"

    gameSpeed= 3;
    gravity =0;
    highscore=0;
    score=0;
    player= new Player(25,canvas.hieght-150,50,50,'#FF5858');
    //player.Draw(); 
    requestAnimationFrame(Update;


}
function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0,0,canvas.width,canvas.hieght);

    player.Animate();

}
Start();
