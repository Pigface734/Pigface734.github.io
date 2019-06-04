var x = 275
var y = 275
var dir = 0
var speed = 6
var con = 20
paused = true
var falltime = 0
var rounds = 10
var rocx = 100
var rocy = 100
var m = 0
var highscore = 243
var scrbeet = false
var run = false


function preload(){
  soundFormats('mp3','ogg')
  pres = loadImage('startp.png')
  unpres = loadImage('startu.png')
  shelf = loadImage('sh.png')
  shelf2 = loadImage('sh2.png')
  warn = loadImage('warning.png')
  logo = loadImage('logo.png')
  none = loadImage('nothing.png')
  rock = loadImage('rock.png')
  scr = loadImage('score.png')
  
  song = loadSound('kakaey.mp3')
  font = loadFont('kakaey.ttf')
  words = loadFont('words.ttf')
  
  
}

function setup() {
  createCanvas(1200, 600);
  background(255,0,0);
  song.setVolume(1);
  die()
  textFont(font)

}

function draw() {
  var gameheight = height-100
  
  if (dir>0){
    fill(0,0,0,50)
    

    if (rounds-10 < highscore){
     scrbeet = false
    }
    
    if (falltime < 1000)
    	falltime = falltime + rounds;
    
  	if(falltime >= 1000){
      falltime = 0
   		rounds = rounds + 1 
      rocx = random(0,width-50)
      rocy = random(100,width-50)
    }
    
    if(falltime < 500){
     image(warn,rocx,rocy,80,80) 
    }
    
    if(falltime >= 500){
      fill(255)
      image(rock,rocx,rocy,80,80)
      if((x+50 > rocx && x-50 < rocx && y + 50 > rocy && y - 50 < rocy)){
        die()
      }
         
    }
    
    if((x > width) || (x < 0) || (y > height) || (y < height - gameheight)){
    	die()
    }

	}
  
  
  textSize(100);
  text(rounds-10,width/2-100,100)
  fill(100,0,0)
  rect(0,0,width,height-gameheight)
  
  fill(0,0,0,20);
  rect(0,height-gameheight,width,gameheight)
  
  if (keyIsDown(65)) {
    dir = 1

  }

  if (keyIsDown(68)) {
    dir = 2

  }

  if (keyIsDown(87)) {
  	dir = 3

  }

  if (keyIsDown(83)) {
  	dir = 4

  }
  
  if (dir == 1){
    x -= speed;
    if (run){
       x -= speed;
    }
  }
  if (dir == 2){
    x += speed;
  }
  if (dir == 3){
    y -= speed;
  }
  if (dir == 4){
  	y += speed; 
  }
	
  noStroke()
  fill(255-(dir*20), 0, 0);
  rect(x, y, 50, 50);
  fill(255)
  rect(x+10,y+10,30,30)
  fill(0)
  rect(x+20,y+20,10,10)
  
  textSize(100);
  fill(255)
  text(rounds-10,width/2-100,90)

  
  if (dir<=0){
    background(0,0,0)
  	image(animate(pres,unpres),width/2-150,height/2-50,300,300)
    image(logo,width/2-150,0,300,300)
    
  }
  if (rounds -10 > highscore){
    highscore = rounds -10 
    scrbeet = true
  }
  
  if (scrbeet){
    image(scr,50+(str(rounds-10).length*10),22.5,66,33)
  }
  
  fill(255)
  textSize(33)
  text(('highscore', highscore ),25,50) 
}
function die(){
	paused = true
    rounds = 10
    dir = 0
    x = 275
	y = 275
    rocx = random(10,500)
	rocy = random(10,500)
	song.stop()
	song.play()
    
  
}

function keyPressed(){
  if (keyCode == ESCAPE && dir>0){
    dir = 0
    paused = true
  }
  if(key = ''){
     run = true
  }
}

function animate(item1,item2){ 
  if (con >= 20 ){
    down = true
  }
  if (con <= 0 ){
    down = false
  }
  
  if(down){
   	con = con - 1
    return item1
  }
  if(!down){
		con = con + 1 
    return item2
  }
  
}
