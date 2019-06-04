function setup() {
  createCanvas(720, 960);
  bcolor = ('#'+letters[int(random(26))]+float(int(random(0,9)))+float(int(random(0,9)))+'ff'+float(int(random(9)))+letters[int(random(26))])
  lcolor1= random(255)
  print(bcolor)
  lcolor2= random(255)
  lcolor3= random(255)
  corner = int(random(1,3))
  word1 = int(random(0,1099))
  word2 = int(random(0,2333))
  lword = int(random(0,2333))
  title = (adjectives[word1]+' '+nouns[word2])
  type = int(random(4))
  truefont = ""
  frameRate(60)
  fontt()
  subt = ('the ' + nouns[int(random(0,2333))] +' of the ' +adjectives[int(random(0,1099))]+ ' ' +nouns[word2])
  pref = float(int(random(2,33)))
  sel = ('bgimages/File'+ pref +'.jpg')
  im = loadImage(sel)
  print(sel)
  adj = random(-1,1)
}

function draw() {
    background(bcolor)
    image(im,0+adj,0-adj,width,height)
  
    stroke(0)
    strokeWeight(10)
    fill(255)
    textSize(50)
    textFont(truefont)
    text((title),width/2-(textWidth(title)/2), 200)
    textSize(30)
    text(subt,width/2-(textWidth(subt)/2),700)

    textSize(30)
    noStroke()
    textFont('Arial')
  
    if (corner == 1){
      fill (lcolor1,lcolor2,lcolor3)
      rect(50,40,textWidth(nouns[lword]+25),50)
      fill(bcolor)
      text(nouns[lword],70,75)
    }
    if (corner == 2){
      fill (lcolor1,lcolor2,lcolor3)
      rect(50,height-115,textWidth(nouns[lword]+25),50)
      fill(bcolor)
      text(nouns[lword],70,height-80)
    }

}