
 
function setup() {
  var cnv = createCanvas(500, 200)
  textAlign(CENTER);
  background(255);
 cnv.position(50, 100);
}
 
function draw() {
  noStroke()
  background(255)
  textSize(32);
  fill(0);
  text((2028-year()+" years ")+ (8-month()+' months ')+(31-day()+" days"),250,50)
  text((23-hour()+" hours ")+(59-minute()+" minutes ")+(60-second()+" seconds"),250,100)

    //cant wait

}
