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

  //Clear Form Parallelogram Perimeter
  document.getElementById("para.peri.for").textContent="";
  document.getElementById("para.peri.cal").textContent="";
  document.getElementById("para.peri").textContent="";
}

// Calculate Triangle Area
function triarea() {
    const a = parseFloat(document.getElementById("tri.base.a").value);
    const t = parseFloat(document.getElementById("tri.height").value);
    let tri_area = (a * t) / 2;
    document.getElementById("tri.area.for").textContent = "L = ½ x a x t";
    document.getElementById("tri.area.cal").textContent = "L = ½ x " + a + " cm x " + t + " cm = " + tri_area + " cm²";
    document.getElementById("tri.area").textContent = "The area of Triangle is " + tri_area + " cm²"; 
  }

// Calculate Triangle Perimeter
function triperi() {
  const a = parseFloat(document.getElementById("tri.base.b").value);
  const b = parseFloat(document.getElementById("tri.side1").value);
  const c = parseFloat(document.getElementById("tri.side2").value);
  let tri_peri = a + b + c;
  document.getElementById("tri.peri.for").textContent = "K = a + b + c";
  document.getElementById("tri.peri.cal").textContent = "K = " + a + " cm + " + b + " cm + " + c + " cm = " + tri_peri + " cm";
  document.getElementById("tri.peri").textContent = "The perimeter of Triangle is " + tri_peri + " cm"; 
}

// Calculate Parallelogram Area
function paraarea() {
  const a = parseFloat(document.getElementById("para.base.a").value);
  const t = parseFloat(document.getElementById("para.height").value);
  let para_area = a * t;
  document.getElementById("para.area.for").textContent = "L = a x t";
  document.getElementById("para.area.cal").textContent = "L = " + a + " cm x " + t + " cm = " + para_area + " cm²";
  document.getElementById("para.area").textContent = "The area of Parallelogram is " + para_area + " cm²"; 
}

// Calculate Parallelogram Perimeter
function paraperi() {
  const a = parseFloat(document.getElementById("para.base.b").value);
  const b = parseFloat(document.getElementById("para.side").value);
  let para_peri = 2 * (a + b);
  document.getElementById("para.peri.for").textContent = "K = 2 x ( a + b )";
  document.getElementById("para.peri.cal").textContent = "K = 2 x ( " + a + " cm + " + b + " cm ) = " + para_peri + " cm";
  document.getElementById("para.peri").textContent = "The perimeter of Parallelogram is " + para_peri + " cm"; 
}