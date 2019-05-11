function animate(ele,property){
    /*
	 * property = {
		width : 500
	}
	
	for(var attr in property){
		
	}
	
	
	 */
	
	
	
	clearInterval(ele.timer);
    ele.timer = setInterval(function(){
    	var flag = true;//所有的属性都到达了目标值
    	for(var attr in property){
    		console.log(attr);
            var current = 0;
            if(attr == "opacity"){
            	current = getStyle(ele,attr)*100;
            }else{
            	current = parseInt(getStyle(ele,attr));
            }
            var speed = (property[attr] - current) / 10;
            
            speed = speed > 0 ?  Math.ceil(speed) : Math.floor(speed);
			//if(property[attr] == current){
				//因为是多属性，总有最短的目标值会最快到达，只要一个属性到达目标值 ，
				//就会把其它的所有的属性对应的运动清除，使得其它属性到达 不了目标值 ，
				//这个bug如何处理？
				//需要定议一个控制开关，这个控制开关用来控制是否所有属性都到达了目标值 。
				//定义一个flag = true;true表示就是所有属性都到达了目标值 了。
				//只要有一个属性没有到达 目标值就将flag设置false;
				//property[attr] == current这个条件不成立，意味着还有属性没有到达目标值
            if(property[attr] != current){//表示属性没有到达目标值 。将flag设置false;
            	//clearInterval(ele.timer);
            	flag = false;
            }/*else{//因为这里表示的是属性已经到达目标值
            	
            }*/
            if(attr == "opacity"){//这一段代码不应该在这里操作
        		ele.style[attr] = (current + speed)/100;
        	}else if(attr == "zIndex"){
        		ele.style[attr] = property[attr];
        	}else{
        		ele.style[attr] = current + speed + "px";
        	}
    	}
    	if(flag){//所有属性都到达了目标值
    		//清除定时器
        		clearInterval(ele.timer);
        	}
        },10)
    }
   
	function getStyle(ele,attr){
		if(window.getComputedStyle){//现代浏览器
		return window.getComputedStyle(ele,null)[attr];
	}else{//ie8
		return ele.currentStyle[attr];
	}
}