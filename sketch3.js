
let w = ['article','adolecense','berkeley','brown','craft','consume','dromedary','downtime','empty','entropy','friendly','finite','gray','galaxy','hangover','house','ingenios','ireplacable','jester','java','kelidescope','koala','lingering','looser','monopoly','manipulate','noah','nigeria','open','orphan','presious','partial','queasy','quail','river','racism','stuborn','semantics','trippy','targeted','unavailing','utopian','viscuos','vast','wholesome','weary','xerox','xylophone','young','yardwork','zachary','zipper']
let value2 = 0;
let value = 0
let value3 = 0;
let letter = "";
let m = 0;

function setup() {
  createCanvas(550, 550);
	textSize(58);
}
	
function draw() {

    background(value,100,value3);
	fill((value3/2),50,(value2/2))
	text(letter, 50, 450);

		}

function keyTyped() {
	if (key === 'a') {
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(0,2))]
		m = 0;
  } 
	else if (key === 'b') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(2,4))]
		m = 0;
  } 
	else if (key === 'c') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(4,6))]
		m = 0;
  } 
	else if (key === 'd') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(6,8))]
		m = 0;
  } 
	else if (key === 'e') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(8,10))]
		m = 0;
  } 
	else if (key === 'f') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(10,12))]
		m = 0;
  } 
	else if (key === 'g') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(12,14))]
		m = 0;
  } 
	else if (key === 'h') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(14,16))]
		m = 0;
  } 
	else if (key === 'i') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(16,18))]
		m = 0;
  } 
	else if (key === 'j') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(18,20))]
		m = 0;
  } 
	else if (key === 'k') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(20,22))]
		m = 0;
  } 
	else if (key === 'l') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(22,24))]
		m = 0;
  } 
	else if (key === 'm') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(24,26))]
		m = -38;
  } 
	else if (key === 'n') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(26,28))]
		m = 0;
  } 
	else if (key === 'o') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(28,30))]
		m = 0;
  } 
	else if (key === 'p') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(30,32))]
		m = 0;
  } 
	else if (key === 'q') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(32,34))]
		m = 0;
  } 
	else if (key === 'r') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(34,36))]
		m = 0;
  } 
	else if (key === 's') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(36,38))]
		m = 0;
  } 
	else if (key === 't') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(38,40))]
		m = 0;
  } 
	else if (key === 'u') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(40,42))]
		m = 0;
  } 
	else if (key === 'v') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(42,44))]
		m = 0;
  } 
	else if (key === 'w') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(44,46))]
		m = 0;
  } 
	else if (key === 'x') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(46,48))]
		m = 0;
  } 
	else if (key === 'y') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(48,50))]
		m = 0;
  } 
	else if (key === 'z') {
    value = random(255);
		value2 = random(255);
		value3 = random(255);
		letter = w[int(random(50,52))]
		m = 0;
  } 
}