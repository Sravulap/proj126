function setup(){
    canvas = createCanvas(500,400);
    canvas.position(450, 220);

    video = createCapture(VIDEO);
    video.hide();
    video.size(500,400);
}

function draw(){
    image(video, 0, 0, 500, 400);
}