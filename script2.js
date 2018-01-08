 //slide show
function simpleMessage() {
	alert("This is just an alert box");
}

// settimeout is in milliseconds
//setTimeout(simpleMessage,5000);

var myImage = document.getElementById("mainImage");

var imageArray = ["_images/2.jpg","_images/1.jpg","_images/1.jpg",
				  "_images/previous.jpg","_images/contest.jpg"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds
var intervalHandle = setInterval(changeImage,5000);

myImage.onclick =  function() {
	clearInterval(intervalHandle);
};



      