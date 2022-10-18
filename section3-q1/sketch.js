let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 150;
}

function draw(){
  background(160, 192, 255);
 if(keyIsDown(" ".charCodeAt(0))){{if(count>80) count = (count -20) % cycle;
  
  // BLANK[1]
 }
  if(count>30){count = (count + 3) % cycle;}
else{count = (count + 1) % cycle;}
  fill(255,0,0);
  ellipse(width / 2, height / 2, count);
      }

  else{
    if(count>80) {count = (count -50) % cycle;
  
  // BLANK[1]
 }
  if(count>30){count = (count + 3) % cycle;}
else{count = (count + 1) % cycle;}
  fill(255,0,0);
  ellipse(width / 2, height / 2, count);
      
  }
}
