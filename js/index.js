// Calculate Triangle Area & Perimeter

function triarea() {
    const a = parseFloat(document.getElementById("tri.base").value);
    const t = parseFloat(document.getElementById("tri.height").value);
    let tri_area = (a * t) / 2;
    //const result_cal = "L = ½ x " + a + " x " + t;
    const result = "L = " + tri_area;
    document.getElementById("area.for").textContent = "L = ½ x a x t";
    document.getElementById("area.cal").textContent = "L = ½ x " + a + " x " + t;
    document.getElementById("tri.area").textContent = result; 
  }