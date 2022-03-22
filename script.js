const currentQueue = document.getElementById("current-queue");
const currentName = document.getElementById("current-name");
const getFrontUrl = "https://script.google.com/macros/s/AKfycbxTF6ZgyNTPwlZplPMRS0TBCOQsJPGt3dJuP4nsy7YNyAjCh6V4qdDRC8u3g-s9j4ME/exec";

// fetch(getFrontUrl)
// 	.then(response => {
// 		return response.json();
// 	})	.then(response => {
// 		console.log(response);
// 		let fetchedQueue = response.queueNumber;
// 	});

// console.log(fetchedQueue);

getData();


async function getData() {
	const response = await fetch(getFrontUrl);
	const data = await response.json();
	const queueNumber = data.queueNumber;
	const customerName = data.customerName;
	currentQueue.textContent = queueNumber;
	currentName.textContent = customerName;
}



