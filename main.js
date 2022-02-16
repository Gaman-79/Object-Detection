img="";
status69="";
object=[];
function preload(){
img=loadImage("dog_cat.jpg");
}
function setup(){
canvas=createCanvas(550,600);
canvas.center();
canvas.position(500,100);
object=ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Object";
}
function modelLoaded(){
    console.log("wierd is weird");
    status69=true;
    object.detect(img,gotResult);
}
function draw(){
image(img,0,0,550,600);
 if (status69 !="") {
     for (w = 0;w < object.length;w++) {
        document.getElementById("status").innerHTML="Status: Object Detected";
        fill("#FF0000");
        pt=floor(object[w].confidence*100);
        text(object[w].label+" "+pt+"%",object[w].x,object[w].y);
        noFill();
        stroke("#FF0000");
        rect(object[w].x,object[w].y,object[w].width,object[w].height);
     }
 }
}
function gotResult(error,result){
    if (error) {
    console.log(error);
        
    }
else {
    console.log(result);
    object=result;
}
}