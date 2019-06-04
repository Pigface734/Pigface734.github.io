
 
function setup() {
  createCanvas(500, 500)
  textAlign(CENTER);
  background(255);
}
 
function draw() {
  noStroke()
  background(255)
  textSize(32);
  fill(0);
  text((2028-year()+" years ")+ (8-month()+' months ')+(31-day()+" days"),250,200)
  text((23-hour()+" hours ")+(59-minute()+" minutes ")+(60-second()+" seconds"),250,250)

    //cant wait

}