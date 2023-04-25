function supports_html5_storage(){
	try{
		return 'localStorage' in window && window['localStorge'] !== null;
	}catch(e){
		return false;
	}

}

function refreshUnread(){
	//获取上一次记录的时间
	var lastTime = localStorage.getItem("lastTime");

	//判断是不是第一次访问该页面,若是的话就设置一个初始时间便于比较
	if(lastTime == null){
		lastTime = "p1";
		localStorage.setItem("lastTime", lastTime);
	}else{
		document.getElementById("firstBootHint").style.display = "none";
	}
}

//调用程序
//$(document).ready(function(){
//	if(supports_html5_storage()){
//		refreshUnread();
//	}
//});