function loadDoc(link) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			writeDoc(this);
		};
	};
	xhttp.open("GET", link, true);
	xhttp.send();
};

function writeDoc(xml) {
	var i, xmlDoc = xml.responseXML, table = 
	"<tr><th>名称</th><th class='type'>类型</th><th>备注</th><th class='dl'>下载</th></tr>\n", 
	doc = xmlDoc.getElementsByTagName("res"), l = doc.length, ti;
	for (i = 0; i < l; i++) {
		ti = doc[i].getElementsByTagName("link")[0].getAttribute("title");
		table += "<tr><td>" + 
		doc[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</td><td>" + 
		doc[i].getElementsByTagName("type")[0].childNodes[0].nodeValue + "</td><td>" + 
		doc[i].getElementsByTagName("note")[0].childNodes[0].nodeValue + "</td><td>" + 
		"<a href='" + doc[i].getElementsByTagName("link")[0].childNodes[0].nodeValue + 
		"' target='_blank' title='" + ti + "'><span>" + ti + "</span></a></td></tr>\n";
	};
	document.getElementById("resources").innerHTML = table;
};