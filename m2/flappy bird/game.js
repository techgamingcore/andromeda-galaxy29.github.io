var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

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

var gap = 32

function draw(){
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(pipe_top, 100, 0);
    ctx.drawImage(pipe_bottom, 100, 0 + pipe_top.height + gap);
}

pipe_bottom.onload = draw;