const currentQueue = document.getElementById("current-queue");
const currentName = document.getElementById("current-name");
const currentNumber = document.getElementById("current-number");
const name = document.getElementById("name");
const getFrontUrl = "https://script.google.com/macros/s/AKfycbxTF6ZgyNTPwlZplPMRS0TBCOQsJPGt3dJuP4nsy7YNyAjCh6V4qdDRC8u3g-s9j4ME/exec";
const pushBackUrl = "https://script.google.com/macros/s/AKfycbxp_HgiAezssFr79vq84-Vl-YkGiEMCnYuvlZQ8eRY-BPe73_dDZTMeWhrW_UBryGpE/exec?name=";
const postConfig = {
	method: "Post",
    headers: {
      'Content-Type': 'application/json'
    },
	body: JSON.stringify(name)
};

// fetch(getFrontUrl)
// 	.then(response => {
// 		return response.json();
// 	})	.then(response => {
// 		console.log(response);
// 		let fetchedQueue = response.queueNumber;
// 	});

// console.log(fetchedQueue);

getFront();

function confirmation() {
	if (name.value != "") {
		if (confirm("ท่านแน่ใจหรือไม่ว่าจะจองคิว Are you sure you would like to queue for the restaurant?")) {
			pushBack();
			name.value = "";
			alert("ขอบคุณที่จองคิวค่ะ Thank you so much for queueing up!");
		} else {
			return false;
		}
	}
}

async function getFront() {
	const response = await fetch(getFrontUrl);
	const data = await response.json();
	const queueNumber = data.queueNumber;
	const customerName = data.customerName;
	const waiting = data.waiting - 1;
	currentQueue.textContent = queueNumber;
	currentName.textContent = `คุณ ${customerName}`;
	currentNumber.textContent = `จำนวนคนรอคิว (Queues in line): ${waiting}`;
}

async function pushBack() {
	const response = await fetch(`${pushBackUrl}${name.value}`);
}

