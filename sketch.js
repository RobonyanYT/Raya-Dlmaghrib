function setup() {
  createCanvas(400, 400);
}

function draw(){
  background('red');
/*
  line(0 , 0, 400, 400);
  line(400 , 0, 0, 400);
  line(400 ,200, 0, 200);
  line(200,0,200,400);
  
  
  rectMode(CENTER);
  rect(200,200,50, 400,100);
  rect(200,200,400, 50,100);
  let c = color(255, 204, 0);
  fill(c);
  let strokecolor = color(255, 0,255); // move
  stroke (strokecolor)
  strokeWeight(2)
*/
  // raya d lmeghrib
  //noStroke();
  let khdar = color(0, 150, 0);
  stroke(khdar);
  let ax=200, ay=70;
  let bx=300, by=300;
  let cx=70, cy=150;
  let dx=330, dy=150;
  let ex=100, ey=300;
  
  line(ax,ay, bx, by);
  line(bx, by, cx, cy);
  line(cx, cy, dx, dy);
  line(dx, dy, ex, ey);
  line(ex, ey, ax, ay);
  strokeWeight (4)

  
  
}


  

