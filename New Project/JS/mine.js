document.getElementById("show_button").addEventListener("click",function(){


document.getElementById("demo1").setAttribute("style","display:block;opacity:1;transition: 1s;");



});

document.getElementById("hide_button").addEventListener("click",function(){


 document.getElementById("demo1").setAttribute("style","display:none;transition: 1s;");



});



document.getElementById("show_button1").addEventListener("mouseover",function(){


document.getElementById("demo").setAttribute("style","opacity:1;transition: 5s;transform:rotate(360deg)");




});

document.getElementById("hide_button1").addEventListener("mouseover",function(){


document.getElementById("demo").setAttribute("style","");



});



document.getElementById("show1").addEventListener("click",clicek1);
function clicek1(){

document.getElementById("demo2").setAttribute("style","opacity:1;transform:scaleY(1);");




}
document.getElementById("hide1").addEventListener("click",clickda2);
function clickda2(){

document.getElementById("demo2").setAttribute("style","transform:scaleY(0);");




}