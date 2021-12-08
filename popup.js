let interval;
let timeLeft;

const displayStatus = function() { //function to handle the display of time and buttons
	chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
	  const startButton = document.getElementById('start');
	  const finishButton = document.getElementById('finish');

	  //CODE TO BLOCK CAPTURE ON YOUTUBE, DO NOT DELETE
	  // if(tabs[0].url.toLowerCase().includes("youtube")) {
	  //   status.innerHTML = "Capture is disabled on this site due to copyright";
	  // } else {
		chrome.runtime.sendMessage({currentTab: tabs[0].id}, (response) => {			

			startButton.style.display ="block" ;
			finishButton.style.display = "block";

		});
	  // }
	});
  }

  


//manipulation of the displayed buttons upon message from background



//initial display for popup menu when opened
document.addEventListener('DOMContentLoaded', function() {
  displayStatus();
  const startButton = document.getElementById('start');
  const finishButton = document.getElementById('finish');
  const cancelButton = document.getElementById('cancel');
  startButton.onclick = () => {chrome.runtime.sendMessage("startCapture")};
  finishButton.onclick = () => {chrome.runtime.sendMessage("stopCapture")};
  cancelButton.onclick = () => {chrome.runtime.sendMessage("cancelCapture")};


});
