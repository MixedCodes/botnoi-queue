const display = document.getElementById("queue-display");
const getQ    = "https://script.google.com/macros/s/AKfycby_1UE1oxLgkK3qlB38GB8o_MbpKbLE-xO5UmX519MebaCyw0cMGK7DsU_aHN2EpRfn/exec";
const deleteQ = "https://script.google.com/macros/s/AKfycbwfs-2Ci_wHEKgNPQJaO46xdDoZYqKWeJvzwhPaMbxZlvHcUX3Rm9xUjVly9AaEIxWy/exec?qID="

const buttonOp = '<button id="submit" type="button" onclick="del(';
const buttonEd = ')">ลบออกจากคิว</button>';

//setInterval(refresh, 10000);

const refresh = async () => {
	const response = await fetch(getQ);
	const data = await response.json();
	data.table.forEach(element => {
		const dateStr = element.timeStamp;
		const timelog = new Date(dateStr).toLocaleString();
		display.innerHTML = display.innerHTML + "<tr id='A"+element.queueNumber+"'><td>A"+element.queueNumber+"</td><td class='one'>"
							+element.customerName+"</td><td>"+ timelog +"</td><td class='alnright'>"
							+buttonOp+element.queueNumber+buttonEd+"</td></tr>";
	});
	
}

const del = async (queueNumber) => {
	const url = deleteQ+queueNumber;
	document.getElementById(`A${queueNumber}`).style.display = "none";
	fetch(url)
	.then(res=>{
		if(res.ok){ 
			console.log(res.body);
		}
	}).catch(err=>console.log(err));
}	

const notify = async (userID) => {
	
}

refresh();