function fontt(){
  fontc = int(random(8,20))
  print(fontc)
  truefont = loadFont('f'+fontc+'.ttf')
  return truefont
}