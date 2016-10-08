function displayAbbreviations() {
	var abbreviations=document.getElementsByTagName("abbr");
	var def=new Array();
	for(var i=0; i<abbreviations.length; i++){
		var definition=abbreviations[i].getAttribute("title");
		var key=abbreviations[i].firstChild.nodeValue;
		def[key]=definition;
	}
	var dlist=document.createElement("dl");
	for(key in def){
		var definition=def[key];
		var dtitle=document.createElement("dt")
		var dtitleTxt=document.createTextNode(key);
		var ddsec=document.createElement("dd");
		var ddsecTxt=document.createTextNode(definition);
		dtitle.appendChild(dtitleTxt);
		ddsec.appendChild(ddsecTxt);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddsecTxt);
	}
	var header=document.createElement("h2");
	var headerTxt=document.createTextNode("ABBREVIATIONS");
	header.appendChild(headerTxt);
	document.body.appendChild(header);
	document.getElementsByTagName("body")[0].appendChild(dlist);
}
addLoadEvent(displayAbbreviations)
//function displayCitations(){
//	var cite=document.getElementsByTagName("blockquote");
//	for(var i=0; i<cite.length; i++){
//		var source=cite[i].getAttribute("cite");
//		var alink=document.createElement("a");
//		var alinkTxt=document.createTextNode("link1");
//		alink.setAttribute("href", source);
//		alink.appendChild(alinkTxt);
//		document.getElementsByTagName("body")[0].appendChild(alink);
//	}
//}
//window.onload=function(){
//	displayAbbreviations();
//	displayCitations();
//}
