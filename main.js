var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_width=30;
block_height=30;
var player_object="";
var block_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(IMG){
        player_object=IMG;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(IMG){
        block_object=IMG;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(e.shiftKey==true && keypress=="80"){
        console.log("P and shift pressed together");
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(e.shiftKey==true && keypress=="77"){
        console.log("M and shift is pressed together");
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(keypress=="38"){
        up();
        console.log("Up key is pressed");
    }
    if(keypress=="40"){
        down();
        console.log("Down key is pressed");
    }
    if(keypress=="37"){
        left();
        console.log("Left key is pressed");
    }
    if(keypress=="39"){
        right();
        console.log("Right key is pressed");
    }
    if(keypress=="87"){
        new_image("wall.jpg");
        console.log("W is pressed");
    }
    if(keypress=="71"){
        new_image("ground.png");
        console.log("G is pressed");
    }
    if(keypress=="76"){
        new_image("light_green.png")
        console.log("L is pressed");
    }
    if(keypress=="84"){
        new_image("trunk.jpg");
        console.log("T is pressed");
    }
    if(keypress=="82"){
        new_image("roof.jpg");
        console.log("R is pressed");
    }
    if(keypress=="89"){
        new_image("yellow_wall.png");
        console.log("Y is pressed");
    }
    if(keypress=="68"){
        new_image("dark_green.png");
        console.log("D is pressed");
    }
    if(keypress=="85"){
        new_image("unique.png");
        console.log("U is pressed");
    }
    if(keypress=="67"){
        new_image("cloud.jpg");
        console.log("C is pressed");
    }
}
function up(){
    if(player_y>=0){
       player_y=player_y-block_height;
       console.log("block height="+block_height);
       console.log("Up key is pressed.x="+player_x+", y="+player_y);
       canvas.remove(player_object);
       player_update();
    }  
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        console.log("block height="+block_height);
        console.log("Down key is pressed.x="+player_x+", y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_width;
        console.log("block width="+block_width);
        console.log("Left is pressed.x="+player_x+", y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=850){
        player_x=player_x+block_width;
        console.log("block_width="+block_width);
        console.log("Right key is pressed.x="+player_x+", y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}