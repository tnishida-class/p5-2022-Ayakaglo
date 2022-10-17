function setup() {
  createCanvas(200, 200);
 
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j)%2==0){
         fill(255);
     }
        else{
      fill(220,220,220);
        }
      rect(i*8, j*8,8,8)
            
            
          }
        }
  
  noStroke();
  for(let k = 0; k < 8; k++){
    for(let t = 0; t < 8; t++){
      if((k+t)%2==0){
         fill(255);
     }
        else if(t<3){
      fill(255,0,0);
        }
      else if(t<5){
        fill(220,220,220);
      }
      else{
        fill(0);
      }
      ellipse(4+8*k,4+8*t,6)
            
            
          }
        }
      
}