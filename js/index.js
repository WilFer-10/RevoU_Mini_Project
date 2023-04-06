// Clear Form Input
function clearform() {
  //Clear Form Triangle Area
  document.getElementById("tri.area.for").textContent="";
  document.getElementById("tri.area.cal").textContent="";
  document.getElementById("tri.area").textContent="";
  
  //Clear Form Triangle Perimeter
  document.getElementById("tri.peri.for").textContent="";
  document.getElementById("tri.peri.cal").textContent="";
  document.getElementById("tri.peri").textContent="";

  //Clear Form Parallelogram Area
  document.getElementById("para.area.for").textContent="";
  document.getElementById("para.area.cal").textContent="";
  document.getElementById("para.area").textContent="";

  //Clear Form Triangle Perimeter
  //document.getElementById("para.peri.for").textContent="";
  //document.getElementById("para.peri.cal").textContent="";
  //document.getElementById("para.peri").textContent="";
}

// Calculate Triangle Area
function triarea() {
    const a = parseFloat(document.getElementById("tri.base.a").value);
    const t = parseFloat(document.getElementById("tri.height").value);
    let tri_area = (a * t) / 2;
    document.getElementById("tri.area.for").textContent = "L = ½ x a x t";
    document.getElementById("tri.area.cal").textContent = "L = ½ x " + a + " cm x " + t + " cm = " + tri_area + " cm";
    document.getElementById("tri.area").textContent = "The area of triangle is " + tri_area + " cm"; 
  }

// Calculate Triangle Area & Perimeter
function triperi() {
  const a = parseFloat(document.getElementById("tri.base.b").value);
  const b = parseFloat(document.getElementById("tri.side1").value);
  const c = parseFloat(document.getElementById("tri.side2").value);
  let tri_peri = a + b + c;
  document.getElementById("tri.peri.for").textContent = "K = a + b + c";
  document.getElementById("tri.peri.cal").textContent = "K = " + a + " cm + " + b + " cm = " + c + " cm = " + tri_peri + " cm";
  document.getElementById("tri.peri").textContent = "The perimeter of triangle is " + tri_peri + " cm"; 
}

// Calculate Triangle Area
function paraarea() {
  const a = parseFloat(document.getElementById("para.base.a").value);
  const t = parseFloat(document.getElementById("para.height").value);
  let para_area = a * t;
  document.getElementById("para.area.for").textContent = "L = a x t";
  document.getElementById("para.area.cal").textContent = "L = " + a + " cm x " + t + " cm = " + para_area + " cm";
  document.getElementById("para.area").textContent = "The area of parallelogram is " + para_area + " cm"; 
}