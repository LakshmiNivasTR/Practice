function sol(){
    document.getElementById("result").value=""
}
function dis(value){
document.getElementById("result").value+=value;
}
function call(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value=q;
}