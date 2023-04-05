// Calculate Triangle Area & Perimeter
function triarea(){
    var a = document.getElementById("tr.base").value;
    var t = document.getElementById("tr.height").value;
    var area = (a * t) / 2;
    var result = "Area: " + area ;
    document.getElementById("tr.area").innerHTML = result; 
  }