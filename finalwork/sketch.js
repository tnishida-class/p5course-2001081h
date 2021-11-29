
//最終課題 腹巻をまいたでべそのおじさんのへそを動かすゲームです





let x, y, vx, vy;
let grabbed; // 円をつかんでいるかどうかを記憶するために使う変数

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
  grabbed = false;



}



function draw(){
  background(255)

  for(let i = 0; i < 1000; i++){

    if(i % 2 == 0){
      strokeWeight(2);
    }
    else{
      strokeWeight(1);
    }
    let x = i * 10 + 10;
    line(x, 0, x, 100);
  }




  ellipse(x, y, 30);
    fill(0)
  ellipse(x,y,5)
 fill(255)
  if(!grabbed){ // つかんでいないときだけアニメーションさせる
    x += vx;
    y += vy;
    if(x < 0 || x > width){ vx = -0.8 * vx; }
    if(y < 0 || y > height){ vy = -0.8 * vy; }
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
  }
}

function keyPressed(){
  if(key == " "){　// スペースキーを押したらリセット
    x = width / 2;
    y = height / 2;
    vx = 0;
    vy = 0;
    grabbed = false;
  }
}

function mousePressed(){
  grabbed = dist(mouseX, mouseY, x, y) < 30; // distは２点の距離を求める関数
}

function mouseDragged(){
  if(grabbed){
    x = mouseX;
    y = mouseY;
  }
}

function mouseReleased(){
  if(grabbed){
    grabbed = false;
    vx = mouseX - pmouseX;
    vy = mouseY - pmouseY;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
