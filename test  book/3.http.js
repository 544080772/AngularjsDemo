/**
 * Created by Administrator on 2016/7/20.
 */
var http=require('http');
var fs=require('fs');
//mime根据文件类型后缀，获取content-type 对应的文件类型
var mime=require('mime');
function serve(request,response){
   // console.log(request.method,request.url);
   // console.log(request.headers);
    var url=request.url;
    if(url=='/'){
        response.statusCode=200;
        //设置响应类型，编码为utf-8
        response.setHeader('Content-Type','text/html;charset=utf-8');
        response.setHeader('name','zfpx');//设置响应头
        //读取文件内容，并且将内容写入响应体
        fs.readFile('index.html',function(err,data){
            response.write(data);//写入响应体
            response.end();
        });
    }else {
        static(url,response);
    }


    function static(url,response){
        response.setHeader('Content-Type',mime.lookup(url)+';charset=utf-8');
        fs.readFile(url.slice(1),function(err,data){
            response.write(data);
            response.end();
        });
    }

   /* response.write(new Date().toString());//写入响应提
    response.end();*/
}
//每当有请求来的时候，调用serve函数对客户端进行响应
var server=http.createServer(serve);
server.listen(8080,'localhost');


































