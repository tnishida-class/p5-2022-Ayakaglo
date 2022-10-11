function setup(){
  for(let i= 100; i>=10; i=i-10){
   if(i>=60){stroke(255,0,0);}
    else{stroke(0,0,255);}
    
     const s = 50
     ellipse(s,s,i)
   }
  }
