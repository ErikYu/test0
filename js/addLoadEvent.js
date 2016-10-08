function addLoadEvent(func){
	oldOnload=window.onload;
	if (typeof window.onload) {
		window.onload=func;
	} else{
		window.onload=function(){
			oldOnload();
			func();
		}
	}
}
