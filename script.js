var API_URL = "https://api.github.com/users/";
var USERNAME = "geanroberto";

// Requisição com XMLHttpRequest
function reqXML() {
	var httprequest = new XMLHttpRequest();
	httprequest.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var p = document.getElementById("idReqXML");
			p.innerHTML = httprequest.responseText;
		}
	};

	httprequest.open("get", API_URL + USERNAME, true);
	httprequest.send();
}