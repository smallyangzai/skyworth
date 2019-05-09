//封装cookie的操作
//设置
function setCookie(k,v,d){
	if(arguments.length == 2){
		document.cookie = k+"="+v;
	}
	if(arguments.length == 3){
		var date = new Date();
		date.setDate(date.getDate()+d);
		document.cookie = k+'='+v+";repires="+date;
	}
}

//获取
function getCookie(k){
	var strCookie = document.cookie;
	if(strCookie == ''){
		return '';
	}

	var arrCookie = strCookie.split('; ');
	for (var i = 0; i < arrCookie.length; i++) {
		var item = arrCookie[i].split('=');
		if(item[0] == k){
			return item[1];
		}
	}
}

//删除
function removeCookie(k){
	setCookie(k,'',-1);
}