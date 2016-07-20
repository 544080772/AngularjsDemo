/**
 * Created by Administrator on 2016/7/20.
 */
//解析请求中具体的字段
var http=require('http');
var fs=require('fs');
var mime=require('mime');
var url=require('url');//对url进行处理，把字符串转成对象

function serve(request,response){
    //true表示query转成对象
   var urlObj= url.parse(request.url,true);
    console.log(urlObj);
    var pathname=urlObj.pathname;

    if(pathname=='/'){
        //设置响应类型，编码为utf-8
        response.setHeader('Content-Type','text/html;charset=utf-8');
        //读取文件的内容，并且将读到的内容写入响应体
        fs.readFile('index.html',function(err,data){
          response.write(data);//写入响应体
            response.end();
        });
    }else if(pathname=='/clock'){
       // response.setHeader('content-Type',mime.lookup(pathname)+';charset=utf-8');
        var counter=0;
        var timer=setInterval(function(){
            response.write(new Date().toString());
            counter++;
            if(counter==5){
                clearInterval(timer);
                response.end();
            }
        },1000);
    }else{
        static(pathname,response);
    }

    function static(pathname,response){
        response.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
        fs.readFile(pathname.slice(1),function(err,data){
            response.write(data);//写响应体
            response.end();
        });
    }
}

var server=http.createServer(serve);
server.listen('8081','localhost');

































