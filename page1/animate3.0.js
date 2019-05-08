function animate(ele,target){
    clearInterval(ele.timer);
    ele.timer = setInterval(function(){
       	//因为使用的是offsetWidth或clientWhdth，这两个属性包含了国边框或内边距，每一次执行都会多出一点距离，最终达不到目标值 
   		//解决办法，获取css设置的相素值 。
        //var speed = (target - ele.offsetWidth) / 10;
        var speed = (target - parseInt(getStyle(ele,"width"))) / 10;
        
        speed = speed > 0 ?  Math.ceil(speed) : Math.floor(speed);
        if(target == parseInt(getStyle(ele,"width"))){
            clearInterval(ele.timer);
        }else{
            ele.style.width = parseInt(getStyle(ele,"width")) + speed + "px";
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