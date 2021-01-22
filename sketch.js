const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function preload(){

    ubImg = loadImage("walking_1.png")
    
}

function setup(){
createCanvas(600, 900)
engine = Engine.create();
world = engine.world;

umbrella=new Umbrella(300,600)
image(ubImg, 400, 200)


}

function draw(){
background(0)
Engine.update(engine);
var maxDrops = 100;                                                                                 
for(var i=0; i<maxDrops; i++){
    drops.push(new createDrop(random(0,600), random(0, 600)));
}

if(this.rain.position.y > height){

    Matter.Body.setPosition(this.rain, {x: random(0,600), y: random(0,600)})

}
   umbrella.display();

}   

