const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var maxDrop = 100;
var Drop = [];
var thunder1, thunder2, thunder3, thunder4;

var sprite;
var thunderFrame = 0;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png")
    thunder2 = loadImage("images/thunderbolt/2.png")
    thunder3 = loadImage("images/thunderbolt/3.png")
    thunder4 = loadImage("images/thunderbolt/4.png")
}

function setup(){
   canvas = createCanvas(300, 600);
   engine = Engine.create();
   world = engine.world;

   //for (var i = 0; i < maxDrop; i++){
    //Drop.push(new drop(random( 0, 300), random(0, 100)))
    if(frameCount%60 === 0){
    for (var i = 0; i < maxDrop; i++){
        Drop.push(new drop(random(0, 300), random(0, 100)))
    }}

   Umbrella = new umbrella(150, 470)
}

function draw(){
    Engine.update(engine);
    background("black");

    Umbrella.display();
    
    for(var i = 0; i < maxDrop; i++){
        Drop[i].display();
        Drop[i].update();
    }

    if(frameCount % 80 === 0){
        sprite = createSprite(random(0, 300), random(0, 50), 10, 10)
        var rand = Math.round(random(1, 4))
        switch(rand){
            case 1:
                sprite.addImage(thunder1)
                break;
            case 2:
                sprite.addImage(thunder2)
                break;
            case 3:
                sprite.addImage(thunder3)
                break;
            case 4:
                sprite.addImage(thunder4)
                break;
            default:
            break;
        }
        sprite.scale = random(0.3, 0.6)
        thunderFrame = frameCount
    }
    if(thunderFrame + 10 === frameCount&&sprite){
        sprite.destroy();
    }

    
    drawSprites()
}   

