var video;

//volume slider, make first line of code console.log(this.value) and see what it does
//mute button pay careful that attribute is muteD not mute or volume is true or false

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
 });

 document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
 });

 document.querySelector("#slower").addEventListener("click", function () {
	console.log("I want to slow the video!");
	video.playbackRate *=0.95;
	console.log("speed is ", video.playbackRate);
 });

 document.querySelector("#faster").addEventListener("click", function () {
	console.log("speeding up");
	video.playbackRate /=0.95;
	console.log("speed is ", video.playbackRate);
 });

 document.querySelector("#skip").addEventListener("click", function () {
	console.log("skipping ahead!");
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Video current time is", video.CurrentTime);
 });

//mute - I tried to start doing this so triple triple check
document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted == false) {
		console.log("Muting video");
		video.muted = true;
	}

	else {
		console.log("Unmuting video");
		video.muted = false;
	}
}

//volume
document.querySelector("#slider").addEventListener("click", function () {
	console.log("Changing volume");
	//video.volume = value / 100;
	document.querySelector("#volume").innerHTML = //????;
}

 //volume slider, review the this.
 //styled/original is about styling css of video - how to implement CSS in Javascript?

 //started in lecture 3/29 second half