function promiseAjax(params){
    var promise = new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                resolve(this.responseText);
            }
        }
        xhr.onerror = function(){
            reject('网络异常，请稍后再试');
        }

        //get参数
        if(params.method == 'get' && params.data){
            xhr.open(params.method,params.url+"?"+params.data,true)
        }else{
            xhr.open(params.method,params.url,true);
        }

        //post参数
        if(params.method == 'post'){
            xhr.setRequestHeader('Content-type',"application/x-www-form-urlencoded");
            xhr.send(params.data || '');
        }else{
            xhr.send(null);
        }
    });
    return promise;  //返回对象
}