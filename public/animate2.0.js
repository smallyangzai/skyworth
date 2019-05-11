//动画左移
var timer = null;
function animate(ele,target){
    clearInterval(timer);
    timer = setInterval(function(){
        //var speed = target - ele.offsetLeft > 0 ? 5 : -5;
        //让speed由大到小的变化。
        var speed = (target - ele.offsetLeft) / 10;
        //因为speed最后会是一个小数，小数在小于0.5后，ele.offsetLeft会四舍五入，
        //直接把小数总价去掉，ele.offsetLeft一直保持在495，
        //500-495永远得不到一个小于5的数。最后形成了一个死循环
        //如何解决？
        //在speed为正数时让speed向上取整，目的为了让ele.offsetLeft不再出现小数的情况，最后以1的值加上去 。
        //在speed为负数时让speed向下取整，目的为了让ele.offsetLeft不再出现小数的情况 最后以-1的值一直减下去。
        
        speed = speed > 0 ?  Math.ceil(speed) : Math.floor(speed);
        console.log(speed,ele.offsetLeft);
        //if(Math.abs(target - ele.offsetLeft) < 5){//这里的条件，误差变大，最后几步的操作，按 1 相加。
        if(target == ele.offsetLeft){
            clearInterval(timer);
        }else{
            ele.style.left = ele.offsetLeft + speed + "px";
        }
    },10)
}