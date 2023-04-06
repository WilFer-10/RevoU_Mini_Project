// Clear Form Input
function clearform() {
  document.getElementById("area.for").textContent="";
  document.getElementById("area.cal").textContent="";
  document.getElementById("tri.area").textContent="";
}

// Calculate Triangle Area & Perimeter
function triarea() {
    const a = parseFloat(document.getElementById("tri.base").value);
    const t = parseFloat(document.getElementById("tri.height").value);
    let tri_area = (a * t) / 2;
    document.getElementById("area.for").textContent = "L = ½ x a x t";
    document.getElementById("area.cal").textContent = "L = ½ x " + a + " cm x " + t + " cm = " + tri_area + " cm";
    document.getElementById("tri.area").textContent = "The area of triangle is " + tri_area + " cm"; 
  }