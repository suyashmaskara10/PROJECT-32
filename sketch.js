const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}
function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }
    
    // add condition to check if any background image is there to add


    Engine.update(engine);

    }

 


async function getBackgroundImg(){

    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var link = await response.json()
   var datetime= link.datetime;
   var hour = datetime.slice(11,13);


   if(hour>=4 && hour<=6){
        bg = "sunrise1.png";
   }
   else if(hour>=6 && hour<=8){
        bg = "sunrise2.png";
  }
   else if(hour>=23 && hour==0){
        bg = "sunrise10.png";
  }
   else if(hour==0 && hour<=3){
        bg = "sunrise11.png";
      }
   else{
        bg = "sunset12.png";
          }

          backgroundImg = loadImage(bg);
}
