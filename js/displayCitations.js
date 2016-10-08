function displayCitations(){
	var quotes=document.getElementsByTagName("blockquote");
	for (i=0; i<quotes.length; i++){
		if (!quotes[i].getAttribute("cite")) continue;
		var url=quotes[i].getAttribute("cite");
		var quoteChildren=quotes[i].getElementsByTagName("*");
		if (quoteChildren.length<1) continue;
		var elem=quoteChildren[quoteChildren.length-1];
		var link=document.createElement("a");
		var linkTxt=document.createTextNode("source"+(i+1));
		link.appendChild(linkTxt);
		link.setAttribute("href", url);
		var superScript=document.createElement("sup");
		superScript.appendChild(link);
		elem.appendChild(superScript);
	}
}

addLoadEvent(displayCitations);