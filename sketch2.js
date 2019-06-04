ballCount = 1000
let b = []

function setup() {
  createCanvas(600, 600);
  for (i = 0; i < ballCount; i ++){
    b[i] = new Ball(random(250,350),random(250,350),random(50,100))
  }
}

function draw() {
  for (i = 0; i < ballCount; i ++){
    b[i].move()
    b[i].show()
  }
}

class Ball {
 constructor(x,y,r){
  this.x = x
  this.y = y
  this.r = r
  this.dirx = 0
  this.diry = 0
 }
  show(){
    noStroke()
    fill(this.diry + mouseY,this.dirx - mouseX,this.dirx + mouseY,20)
    ellipse(this.x,this.y,this.r,this.r)
  }
  move(){
    if (mouseIsPressed && (width > mouseX && mouseX > 0)){
    if(mouseX > width/2){
     this.dirx = (width - (mouseX/2))/5
    }
    if(mouseX < width/2){
     this.dirx = -(mouseX/2)
    }
    
    if(mouseY > height/2){
     this.diry = (height - (mouseX/2))/5
    }
    if(mouseY < height/2){
     this.diry = -(mouseX/2)
      }
    }
    
    if (!mouseIsPressed || (width < mouseX || mouseX < 0)){
      this.dirx = 0
      this.diry = 0
    }
      
    if (this.x > width || this.x < 0){
    this.x = this.x + -random(-1,(this.x - (width/2))+this.dirx)
    }
    
    if (this.x < width && this.x > 0){
    this.x = this.x + -random(-1,(this.x - (width/2))+this.dirx)
    }
    
    if (this.y > width || this.y < 0){
    this.y = this.y + -random(-1,(this.y - (height/2))+this.diry)
    }
    
    if (this.y < width && this.y > 0){
    this.y = this.y + -random(-1,(this.y - (height/2))+this.diry)
    }
    
    
  }
}