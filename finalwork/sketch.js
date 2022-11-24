// 最終課題を制作しよう

let x,y, movement
    
function setup(){
  createCanvas(200, 200);
  movement1 = 0;
  movement2 = 0
  movement3 = 0
  movement4 = 0
}

function draw(x,y){
  background(255);
  noStroke();
  lace(50,30,144,255,0,0,255, movement1,36);
  lace(45,255,0,255,255,182,193, movement2,36);
  lace(40,255,255,0,0,255,255,movement3,24);
  lace(35,152,251,152,50,205,50,movement4,24);
  movement1 += 0.008
  movement2 -= 0.01
  movement3 += 0.02
  movement4 -= 0.03
  title(15,78,72,93,93,108,123,100,100,70);
}

 function title(ts,tw1,tw2,tw3,th1,th2,th3,x,y,r){
   noStroke();
   fill(255,255,0);
   ellipse(x,y,r);
   fill(0);
   textSize(ts);
   text("Global",tw1,th1,);
   textSize(ts);
   text("Culture",tw2,th2,);
   textSize(ts);
   text("IT",tw3,th3,);
 }
function lace(size,cr1,cg1,cb1,cr2,cg2,cb2, move,en){
   for(let i = 0; i < en; i++){
    let theta = TWO_PI * i / en + move;
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
