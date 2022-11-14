// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",50,40,255,0,0);
}

function balloon(t,x,y,cr,cg,cb){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(cr,cg,cb);
  rect(x, y, w + p * 2, h + p * 2);
  fill(cr,cg+255,cb);
  text(t, p+x, h + p+y);
  fill(cr-255,cg,cb+255)
  triangle(x+w + p * 2-30, y + h + p * 2, x+w + p * 2,y+h+p * 2,x+w + p * 2-20,y + h + p * 2+20);
}
