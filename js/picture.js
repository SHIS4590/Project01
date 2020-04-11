var curIndex=0
var timeInterval=3000;
var arr=new Array();
arr[0]="picture/r1.PNG";
arr[1]="picture/r2.JPG";
arr[2]="picture/r3.JPG";
arr[3]="picture/r4.JPG";
arr[4]="picture/r5.JPG";
setInterval(changelmg,timeInterval);
function changelmg(){
    var obj=document.getElementById("obj");
    if(curIndex==arr.length-1){
        curIndex=0;
    }
    else{
        curIndex+=1;
    }
    obj.src=arr[curIndex];
}