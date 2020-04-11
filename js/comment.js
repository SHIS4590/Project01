function $(id){return document.getElementById(id)}
function submitTest(){
    var msg = "Name："+$ ("input1").value;
    msg+="\n Phone number："+$("input2").value;
    msg+="\n E-mail："+$("input3").value;
    msg+="\n Comment："+$("input4").value;
    alert(msg);
    return false;
}
function resetTest(){alert("clear data");}