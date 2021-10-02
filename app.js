 
 
function Add(){
    var u=document.getElementById("todo");
    var li=document.createElement("li");
    var liText=document.createTextNode(u.value);
    li.appendChild(liText);
    // li.setAttribute("class","Gt");
    // li.setAttribute("Button","Update");
    li.setAttribute("class","mt");
    
    var btn=document.createElement("button");
    var btnText=document.createTextNode("Edit");
    btn.appendChild(btnText);
    li.appendChild(btn);
    btn.setAttribute("onclick","myFun(this)")
    btn.setAttribute("class","btnn")
    
    var btndel=document.createElement("button");
    var delText=document.createTextNode("Delete");
    btndel.appendChild(delText);
    li.appendChild(btndel);
    btndel.setAttribute("onclick","frt(this)");
    btndel.setAttribute("class","btnde")

    var v=document.getElementById("made");
    v.appendChild(li);
    u.value="";
    console.log(li);

 }

 function myFun(f){
     var gte=f.parentNode.firstChild.nodeValue;
     var gy=prompt("Enter Updated Value",gte);
     f.parentNode.firstChild.nodeValue=gy;
     
 }
 function frt(e){
      e.parentNode.remove();
 }
//  function Update(){
//      console.log("yes");
//  }


function Deleted(){
    made.innerHTML="";
}
