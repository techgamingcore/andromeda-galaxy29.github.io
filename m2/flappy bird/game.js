var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var bird = new Image();
bird.src = "assets/bird.png";
var bg = new Image();
bg.src = "assets/bg.png";
var ground = new Image();
ground.src = "assets/ground.png";
var pipe_top = new Image();
pipe_top.src = "assets/pipe_top.png";
var pipe_bottom = new Image();
pipe_bottom.src = "assets/pipe_bottom.png";

function draw(){
    context.drawImage(bg, 0, 0);
}

pipe_bottom.onload = draw;