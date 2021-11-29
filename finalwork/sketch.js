let img;
function preload() {
  img = loadImage('fashion_usugi_girl.png');
}

function setup() {
  createCanvas(500, 500);

  // 表示する画像の左上隅の座標を (10, 10) にする
  // 表示する画像の幅と高さを 100 x 100 にする
  imageMode(CORNER);
  image(img, 10, 10, 100, 100);
}
