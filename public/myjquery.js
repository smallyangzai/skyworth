//自执行的匿名函数
(function(w,undefined){
  // var aaa = 2000;
  // w.aaa = aaa; //为了在全局访问，需要挂载到window对象身上。
  function _$(params){
    // console.log(params); //Arguments ["#box", callee: ƒ, Symbol(Symbol.iterator): ƒ]
    var ele = params[0]; //'#box'
    var id = ele.substring(1); //获取到id box
    this.dom = document.getElementById(id); //获取到对应的dom对象
  }

  //给原型对象添加css和html
  _$.prototype = {
    constructor:_$, //显示指定constructor属性，保持原型链的完整
    css:function(){
      //如果没有传参，抛出一个异常给开发者
      if(arguments.length == 0){
        throw new Error('exception a arguments');
      }
      if(arguments.length == 1){
        //获取样式值
        return this.dom.style[arguments[0]];
      }
      if(arguments.length == 2){
        //设置样式
        this.dom.style[arguments[0]] = arguments[1];
        return this;
      }
      // return this; //链式调用的核心，一定要返回this,才可以继续往后调用
    },
    html:function(){
      //获取实参arguments
      if(arguments.length == 0){
        //没有传参，获取dom对象内容
        return this.dom.innerHTML;
      }

      if(arguments.length ==1){
        //传参，设置dom对象内容
        this.dom.innerHTML = arguments[0];
        return this;
      }
     
    }
  }

  //通过闭包访问返回类_$的实例对象
  window.$ = function(){
    return  new _$(arguments);
  }
  
})(window)
//传递window作为实参，是为了提高寻找全局变量window的速度