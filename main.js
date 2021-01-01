canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
color="black";
width_of_line=2;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
 current_position_of_x=e.clientX-canvas.offsetLeft;
 current_position_of_y=e.clientY-canvas.offsetTop;
 if(mouseEvent=="mouseDown"){
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=width_of_line;
     ctx.arc(200,200,40,0,2*Math.PI);

     ctx.moveTo(last_position_of_x,last_position_of_y);

     ctx.lineTo(current_position_of_x,current_position_of_y);
     ctx.stroke();

 }
 last_position_of_x=current_position_of_x;
 last_position_of_y=current_position_of_y;

}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
