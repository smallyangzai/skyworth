//封装ajax-get/post请求（把需要变动的，用形参代替）

function ajaxGet(url,data,callback){
    //创建ajax对象
    var xhr = new XMLHttpRequest();
    //给onreadystatechange绑定监听函数，监听ajax对象的状态变化
    xhr.onreadystatechange = function(){
        //判断ajax的状态是否等于4，状态码是否等于200
        if(xhr.readyState == 4 && xhr.status == 200){
            callback(this.responseText);
        }
    }
    //创建一个http链接
    xhr.open('get', url + "?" + data,true);
    //发送请求
    xhr.send(null);
}


function ajaxPost(url,data,callback){
    //创建ajax对象
    var xhr = new XMLHttpRequest();
    //给onreadystatechange绑定监听函数，监听ajax对象的状态变化
    xhr.onreadystatechange = function(){
        //判断ajax的状态是否等于4，状态码是否等于200
        if(xhr.readyState == 4 && xhr.status == 200){
            callback(this.responseText);
        }
    }
    //创建一个http链接
    xhr.open('post', url ,true);
    //设置post请求头，模拟表单数据
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    //发送请求
    xhr.send(data);
}
