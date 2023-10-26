let y;
let x;
////////////////////////////////////////
let q;
let w;
let a;
let b;
let c;
let d;
///////////////////////////////////
let o;
let p;
let h;
let u;
let i;
let j;
let k;
///////////////////////////////////
let img; 
let ing;

function preload() {

  img = loadImage("Arrows-.jpg");
  ing = loadImage("R.png");
  
}

////////////////////////////////////////////////////////////
function setup() {
  createCanvas(800, 800);
   background(0);
y = 400;
x = 400;
//////////
q = 400;
w = 400;
a = 600;
b = 600;
c = 200;
d = 200;
/////////////////////
o = 400;
p = 400;
h = 600;
u = 600;
i = 600;
j = 200;
k = 200; 
  
}
//////////////////////////////////////////////////////////
function draw() {
  
   image(img, 718, 740, 80, 70);
   image(ing, 0, 760, 40, 40);
  
  rectMode(CENTER);
  stroke(173, 51, 255)
  fill(0)
  rect(x, y, 10);
  
if (keyIsDown (UP_ARROW)) {
  y = y - 8
} else if (keyIsDown(DOWN_ARROW)){
  y = y + 8;
} else if (keyIsDown(LEFT_ARROW)){
  x = x - 8;
} else if (keyIsDown(RIGHT_ARROW)){
  x = x + 8;
}
  
/////////////////////////////////////////////////////////
stroke(255);
  fill(0);
  rect(q, w, 30);
  
  q = q + random(0, 0);

  q, w = lane(q, w);
  
  stroke(157, 252, 3);
  fill(0);
  rect(a, b, 20);
  
  a, b = lane(a, b);
  
  stroke(3, 181, 252);
  fill(0);
  rect(c, d, 20);
  
  c, d = lane(c, d);

  //////////////////////////////////////////////////////
  stroke(255);
  fill(0);
  rect(o, p, 30);
  
  p = p + random(0, 0);

  p, o = lane(p, o);

  stroke(3, 252, 69);
  fill(0);
  rect(u, i, 20);
  
  i, u = lane(i, u);
  
  stroke(3, 44, 252);
  fill(0);
  rect(j, k, 20);
  
  k, j = lane(k, j);
  

}
////////////////////////////////////////////////////////////
function lane(w, h) {
  w = w + random(0,0);
  h = h - 7;
  
  if (h < 0) {
    h = height;
  }  
  
  return w, h;
}

///////////////////////////////////////////////////////////
function keyPressed() {

if (keyCode === 82) {
       value = random(255);
  background(random(225));
   }
}
