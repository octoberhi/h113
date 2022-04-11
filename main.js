function preload(){
img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/800px-Google_Images_2015_logo.svg.png')
}
function setup(){
canvas = createCanvas(500,500);
canvas.center();
}

function draw(){
image(img, 150,150,200,200);
fill('red');
circle(50,50,75);
circle(425,50,75);
circle(50,425,75);
circle(425,425,75);
fill('green')
rect(87.5,37.5,300,20)
rect(37.5,87.5,20,300)
rect(420,87.5,20,300)
rect(87.5,420,300,20)
}


function take_snapshot(){
save('picture.png');
}