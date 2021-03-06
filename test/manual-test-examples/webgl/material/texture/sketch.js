/**
 * webgl texture example
 * video source: https://vimeo.com/90312869
 */
var img;
var vid;
var theta = 0;

function preload() {
  img = loadImage('assets/UV_Grid_Sm.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  //2D renderer
  // createCanvas(windowWidth, windowHeight);

  // img = loadImage("assets/cat.jpg");
  // vid = createVideo(["assets/360video_256crop_v2.mp4"]);
  //vid.loop();
  //vid.hide();
}

function draw() {
  background(255, 255, 255, 255);
  translate(-200, 0, 0);
  push();
  rotate(theta * mouseX * 0.001, [1, 1, 1]);

  //pass image as texture
  // texture(vid);
  texture(img);
  // normalMaterial();
  sphere();
  pop();
  translate(150, 0, 0);
  push();

  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  texture(img);
  //box(45);
  torus();
  pop();
  translate(150, 0, 0);
  push();

  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  texture(img);
  //box(45);
  cone();
  pop();
  translate(150, 0, 0);
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  texture(img);
  //box(45);
  box();
  pop();
  theta += 0.05;
}
