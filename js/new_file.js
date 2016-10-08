function styleHeaderSlibings(){
	var header=document.getElementsByTagName("h1");
	var elem;
	for (var i=0; i<header.length; i++) {
		elem=getNextElem(header[i].nextSibling);
		elem.style.fontWeight="bold";
	}
}

function getNextElem(elem){
	if (elem.nodeType==1) {
		return elem;
	};
	if (elem.nextSibling) {
		return getNextElem(elem.nextSibling)
	}
}
window.onload=function(){
	styleHeaderSlibings();
}
