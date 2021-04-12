const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,plane,rubber;
var iron;
var stoneobj;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(300,250);
iron = new Iron(100,250);
stoneobj = new stone(350,200); 
rubber=new Rubber(900,450,70);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    


    plane.display();
    hammer.display();
iron.display();
stoneobj.display();
rubber.display();

  

}