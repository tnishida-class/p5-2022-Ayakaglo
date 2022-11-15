// 最終課題を制作しよう

let x,y, movement
    
function setup(){
  createCanvas(200, 200);
  movement1 = 0;
  movement2 = 0
  movement3 = 0
}

function draw(x,y){
  background(255);
  noStroke();
  lace(50,30,144,255,0,0,255, movement1);
  lace(45,255,0,255,255,182,193, movement2);
  lace(40,255,255,0,0,255,255,movement3);
  movement1 += 0.03
  movement2 -= 0.02
  movement3 += 0.01
  title(80,100,100,100,60);
}

 function title(t1,t2,x,y,r){
      noStroke();
   fill(255,255,0);
   ellipse(x,y,r);
   fill(0);
   text("GC IT",t1,t2,);
      
 }
function lace(size,cr1,cg1,cb1,cr2,cg2,cb2, move){
   for(let i = 0; i < 36; i++){
    let theta = TWO_PI * i / 36 + move;
    x =100 + cos(theta) * size;
    y =100 + sin(theta) * size;
     if(i%2==0){
       fill(cr1,cg1,cb1);
       ellipse(x, y, 10); 
     }
     else{
       fill(cr2,cg2,cb2);
       ellipse(x,y,10);
    }
    
  }
}