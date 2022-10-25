function setup(){
  createCanvas(400, 400);
  background(240);

  
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 20以上100未満のランダムな数を代入
  }
  console.log(scores);

 
  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  console.log(sum);

    let largest, smallest;
  let average = sum/scores.length
  console.log(average);


  largest = 0;
  for(let i = 0; i < scores.length; i++){
    if(largest<=scores[i]){largest = scores[i] // BLANK[2]　ヒント：今までの最大値 largest と scores[i] を比較する
  }
  else{largest == largest}}
  console.log(largest);

  smallest = 100;
  for(let i = 0; i < scores.length; i++){
    if(smallest>=scores[i]){smallest = scores[i] // BLANK[2]　ヒント：今までの最大値 largest と scores[i] を比較する
  }
  else{smallest == smallest}}
  console.log(smallest);

  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }
  
  noStroke();

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
   
    if(scores[i] == largest){fill(255,0,0);
      rect(i * dx + 2, height - h, dx - 4, h);  }
    else if (scores[i] == smallest){fill(0,0,255);
      rect(i * dx + 2, height - h, dx - 4, h);  }
    else{fill(0);
      rect(i * dx + 2, height - h, dx - 4, h);  }
    // BLANK[4] ヒント: 条件分岐を使って色を変更します
         
    text(scores[i].toPrecision(3), i * dx, height - h);
  }
  //平均値入れる
  
  stroke(0,255,0);
  line(0, height-height*average/100,width, height-height*average/100);

}