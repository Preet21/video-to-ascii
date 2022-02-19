const density = "Ñ@#W$9876543210?!abc;:+=-,._";
// const density = '       .:-i|=+%O#@'
let video;
let asciiDiv;
// function preload() {
//     gloria = loadImage("gloria48.jpg");
// }

function setup() {
    createCanvas(400, 400);
    video = createCapture(VIDEO);
    video.size(64, 48);
    // asciiDiv = createDiv();
}

function draw() {
    background(0);
    // image(video, 0, 0, width, height);

    let w = width / video.width;
    let h = height / video.height;
    video.loadPixels();
    for (let i = 0; i < video.width; i++) {
        for (let j = 0; j < video.height; j++) {
            const pixelIndex = (i + j * video.width) * 4;
            const r = video.pixels[pixelIndex + 0];
            const g = video.pixels[pixelIndex + 1];
            const b = video.pixels[pixelIndex + 2];
            const avg = (r+g+b) / 3

            noStroke();
            fill(avg/2, 230, 0);

            const len = density.length;
            const charIndex = floor(map(avg, 0, 255, len, 0))


            textAlign(CENTER, CENTER);
            textSize(6);
            // square(i * w, j * h, w);
            text(density[charIndex], i * w + w * 0.5, j * h + h * 0.5);
        }
    }
}