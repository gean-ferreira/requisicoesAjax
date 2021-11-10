var API_URL = "https://api.github.com/users/";
var USERNAME = "geanroberto";

// Requisição com XMLHttpRequest
function reqXML() {
	var httprequest = new XMLHttpRequest();
	httprequest.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var p = document.getElementById("ReqXML");
			p.innerHTML = httprequest.responseText;
		}
	};

	httprequest.open("get", API_URL + USERNAME, true);
	httprequest.send();
}

// Requisição com Promisse
function reqPromisse() {
	fetch(`${API_URL}${USERNAME}`)
		.then((response) => response.json())
		.then((dados) => {
			const p = document.getElementById("ReqPromisse");
			p.innerHTML = JSON.stringify(dados);
		})
}

// Requisição com Async/Await
async function reqAsyncAwait() {
	const response = await fetch(`${API_URL}${USERNAME}`);
	const dados = await response.json();
	const p = document.getElementById("ReqAsyncAwait");
	p.innerHTML = JSON.stringify(dados);
}