function setup() {
canvas = createCanvas(450, 450);
canvas.position(600, 100);
video = createCapture(VIDEO);
video.size(500, 500);

}

function modelLoaded() {
    console.log("Model Loaded");
}

