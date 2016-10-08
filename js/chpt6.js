function addLoadEvent(func){
	var oldOnload = window.onload;
	if (typeof window.onload) {
		window.onload = func;
	} else{
		window.onload = function(){
			oldOnload();
			func();
		};
	};
};

function preparePlaceHolder(){
	var placeHolder=document.createElement("img");
	var para1=document.createElement("p");
	var txt1=document.createTextNode("choose an image.");
	placeHolder.setAttribute("src", "img/empty.png");
	placeHolder.setAttribute("id", "placeholder");
	placeHolder.setAttribute("alt", "empty");
	para1.setAttribute("id", "discription");
	para1.appendChild(txt1);
	document.getElementsByTagName("body")[0].appendChild(placeHolder);
	document.getElementsByTagName("body")[0].appendChild(para1);
}


//window.onload=onClick
function onClick(){
//	if (!document.getElementById) return false;
//	if (!document.getElementsByTagName) return false;
//	if (!document.getElementById("gallery")) return false;
	var content=document.getElementById("gallery")
	var links=content.getElementsByTagName("a");
	for (var i=0; i<links.length; i++){
		links[i].onclick=function(){
			showPic(this);
//			return false;
//			return showPic(this);
//			return showPic(this) ? false : true;
		}
	}
}

function showPic(whichPic){
//	if (!document.getElementById("placeholder")) return true;
	var source=whichPic.getAttribute("href");
	var photoholder=document.getElementById("placeholder");
	photoholder.setAttribute("src", source);
	
//	if (!document.getElementById("discription")) return false;
	var titleContent=whichPic.getAttribute("title");
	var discription=document.getElementById("discription");
	discription.firstChild.nodeValue=titleContent;		

	//return false;//important
};


//addLoadEvent(preparePlaceHolder);
addLoadEvent(onClick);
addLoadEvent(preparePlaceHolder);
