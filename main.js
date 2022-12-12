song = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload() {
    song = loadSound("audio.mp3");
    song2 = loadSound("audio.mp3")
}

function setup() {
    canvas = createCanvas(600,600);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function draw() {
    image(video,0,0,600,600);
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded() {
    console.log("PoseNet model is loaded");
}

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        console.log("LEFT WIRST X = "+leftWristX);
        console.log("LEFT WRIST Y = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log("RIGHT WRIST X = "+rightWristX);
        console.log("RIGHT WRIST Y = "+rightWristY);
    }
}