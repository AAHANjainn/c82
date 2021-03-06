canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
mouseEvent = "";
var color = "black";
var radius = 40;
var width = 5 ;
 canvas.addEventListener("mousedown" , my_mousedown);

 function my_mousedown(e)
 {
     color = document.getElementById("color").Value;
     width = document.getElementById("width").value;
     radius = document.getElementById("radius").value;
mouseEvent = "mouseDown";
 }
 canvas.addEventListener("mouseup" , my_mouseup);
 function my_mouseup(e)
 {
     mouseEvent = "mouseup";
 }
 canvas.addEventListener("mouseleave" , my_mouseleave);
 function my_mouseleave(e)
 {
     mouseEvent = "mouseleave";
 }
canvas.addEventListener("mousemove" , my_mousemove);
 function my_mousemove(e)
 {
     current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.clientY - canvas.offsetTop;

     if (mouseEvent == "mouseDown"){
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = width;
         ctx.arc(current_position_of_mouse_x , current_position_of_mouse_y , radius , 0 , 2*Math.PI);
        ctx.stroke() 
        }
}

function clear_canvas(){
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);
}