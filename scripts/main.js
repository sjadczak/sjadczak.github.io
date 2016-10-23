var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-image.jpg') {
      myImage.setAttribute ('src','images/test-image2.jpg');
    } else {
      myImage.setAttribute ('src','images/test-image.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Learn about Malfunctions, ' + myName + '!';
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Learn about Malfunctions, ' + storedName + '!';
}

myButton.onclick = function() {
	setUserName();
}