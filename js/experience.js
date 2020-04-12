var curIndex=0
    var timeInterval=1000;
    var arr=new Array();
    arr[0]="images/img11.JPG";
    arr[1]="images/img7.JPG";
    arr[2]="images/img9.JPG";
    arr[3]="images/img8.JPG";
    arr[4]="images/img12.JPG";
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