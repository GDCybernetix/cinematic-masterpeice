



function preload() {
  duck = loadModel("assets/12248_Bird_v1_L2.obj")
  duck_img = loadImage("assets/12248_Bird_v1_diff.jpg")
  funkytown = loadSound("assets/funky town low quality.mp3")
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  noStroke()
  let angle = frameCount * 0.3;
  translate(0, 25, 600)
  rotateX(-5)
  rotateZ(angle * 0.7);
  texture(duck_img)
  model(duck)
  orbitControl();

  if (funkytown.isPlaying() == false) {
    funkytown.play();
  }
}