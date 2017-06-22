var xhr = null;

function initXhr(){
	xhr = new XMLHttpRequest(); 
}
initXhr();

xhr.onreadystatechange = function(){
	if(xhr.readyState == 4 && xhr.status == 200) //xhr.status == 0 si ftp ou file
		maCallback(xhr.responseText); // ou maCallback(xhr.responseXML);
};

function maCallback(response){
	console.log(eval('(' + response + ')')["resultat"]);
	var h1 = document.createElement('h1');
	var text = document.createTextNode(eval('(' + response + ')')["resultat"]);
	h1.appendChild(text);
	document.body.appendChild(h1); 
}

function onLoaded(){
	document.getElementById("req_get").addEventListener('click', sendReq1);
	document.getElementById("req_post").addEventListener('click', sendReq2);
	/*var req_get = document.getElementById('req_get');
	req_get.addEventListener('click',function(){
		sendReq1();
	})*/
	
}


function sendReq1() {
	console.log("text");
	xhr.open("get", "http://localhost/seance5/index.php?variable=valeur", true);
	xhr.send(null);	
}

function sendReq2(){
	xhr.open("post", "http://localhost/seance5/index2.php", true);
	xhr.setRequestHeader('Content-Type',"application/x-www-form-urlencoded");
	xhr.send("variable="+document.getElementById("post_txt").value);	
}

/**function initXhr(){
	if (window.XMLHttpRequest) //tout navigateur modernes
		xhr = new XMLHttpRequest();
	else if (window.ActiveXObject)
			xhr = new ActiveXObject("Microsoft.XMLHTTP"); //ancienne version d'internet
	else // XMLHttpRequest non supporté par navigateur
		console.log("Votre navigateur ne supporte pas XMLHttpRequest...");
}
initXhr();

xhr.onreadystatechange = function(){
	if(xhr.readyState == 4 && xhr.status == 200) //xhr.status == 0 si ftp ou file
		maCallback(xhr.responseText); // ou maCallback(xhr.responseXML);
};**/