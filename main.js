// Triangle Perimeter Assignment Start Code

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get values of input
  let xA = document.getElementById("xA-in").value;
  let yA = document.getElementById("yA-in").value;
  let xB = document.getElementById("xB-in").value;
  let yB = document.getElementById("yB-in").value;
  let xC = document.getElementById("xC-in").value;
  let yC = document.getElementById("yC-in").value;

  // Calculate sides and perimeter using dist function
  let sideAB = dist(xA, yA, xB, yB);
  let sideAC = dist(xA, yA, xC, yC);
  let sideBC = dist(xB, yB, xC, yC);
  let perimeter = sideAB + sideAC + sideBC;

  // Output the results
  document.getElementById("output1").innerHTML = sideAB;
  document.getElementById("output2").innerHTML = sideAC;
  document.getElementById("output3").innerHTML = sideBC;
  document.getElementById("output4").innerHTML = perimeter;
}

// dist function calculates coordinates of two points
function dist(x1, y1, x2, y2) {
  let coordinateX = x2 - x1;
  let coordinateY = y2 - y1;
  return Math.sqrt(coordinateX ** 2 + coordinateY ** 2);
}
