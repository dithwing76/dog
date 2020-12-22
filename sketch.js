var doggy, database;
var position;
var foodStock,dog,happydog,foodS = 20
var dog, i =1

function preload(){
    dog =loadImage("Dog.png")
    happydog =loadImage("happydog.png")
}
function setup(){
    database = firebase.database();

    createCanvas(500,500);
    doggy = createSprite(250,250,10,10);
    doggy.addImage(dog)
    doggy.scale = 0.1
    //foodStock=database.ref('Food');
    //foodStock.on("value",readStock)
}

function draw(){
    background("cyan");
    //if(keyDown(LEFT_ARROW)){
        //changePosition(-1,0);
    //}
    //else if(keyDown(RIGHT_ARROW)){
        //changePosition(1,0);
    //}
    //else 
    if(keyDown(UP_ARROW)&&i ==1){
        //changePosition(0,-1);
        doggy.addImage(happydog)
        foodS = foodS -1
        i = 0
    }
    //else if(keyDown(DOWN_ARROW)){
        //changePosition(0,+1);
    //}
    drawSprites();
    if (frameCount%60 === 0){
        doggy.addImage(dog)
        i = 1
    }
    text ("food: "+foodS,40,100)
    text ("press up arrow to feed the dog",40,70)
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readPositon(data){
    position = data.val
    ball.x =position.x
    ball.y =position.y
}
function writePosition(x,y){
    database.ref("ball/position").set({
        'x': position.x+x,
        'y': position.y+y        
    })

}