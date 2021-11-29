
var play =1 ;
var end =0;
var gamestate = play

var fondo;
var FondoImg;
var zombie;
var oruga;
var suelo;
var ZombieImg;
var impulsos
var ImpulsosImg

function preload(){
   
FondoImg = loadImage("fondo.png");
ImpulsosImg = loadImage("impulsos.png");    
ZombieImg = loadImage("zombie.png");


}

function setup() {

createCanvas(600, 300);

fondo=createSprite(300,150,600,300);
fondo.addImage("Fondo",FondoImg);

suelo=createSprite(300,280,600,20);
oruga=createSprite(50,250,20,20);


grupoZombies = new Group();
suelo.visible = false;

 

}

function draw() {
 background("lightblue");

oruga.collide(impulsos);
oruga.collide(suelo);
oruga.velocityY = oruga.velocityY + 1;

salenZombies();
salenimpulsos();

if(gamestate === play){

    
        
   
    
    if(keyDown("space")&& oruga.y >= 250) {
        oruga.velocityY = -12;
            
        }

    // Esta indicación hace el cambio de juego.
    if(grupoZombies.isTouching(oruga)){
 
        gamestate = end;    
            
    }
    
} //fin de la llave del estado play

else if (gamestate === end){
    


    
    if(mousePressedOver(restart)) {
        reset();
      }
      
}

 drawSprites();
}

function salenZombies(){

    if (frameCount % 60 === 0){

        zombie=createSprite(600,260,30,20);
        zombie.velocityX = -5;
        zombie.lifetime = 300;
       grupoZombies.add(zombie);
       zombies.addImage("Zombie",ZombieImg);
       zombies.scale = 0.5;
        }
       
}

function reset(){
    gamestate = play
    zombie.destroyEach(); 
    impulsos.destroyEach(); 
    }

function salenimpulsos(){

    if (frameCount % 30 === 0){
    
    impulsos=createSprite(600,260,30,20);
    impulsos.velocityX = -5;
    impulsos.lifetime = 300;
    grupoimpulsos.add(impulsos);
    impulsos.addImage("Impulsos",ImpulsosImg);
    impulsos.scale = 0.5
    }
           
}
    