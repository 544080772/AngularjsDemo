/**
 * Created by Administrator on 2016/7/20.
 */
//���������о�����ֶ�
var http=require('http');
var fs=require('fs');
var mime=require('mime');
var url=require('url');//��url���д������ַ���ת�ɶ���

function serve(request,response){
    //true��ʾqueryת�ɶ���
   var urlObj= url.parse(request.url,true);
    console.log(urlObj);
    var pathname=urlObj.pathname;

    if(pathname=='/'){
        //������Ӧ���ͣ�����Ϊutf-8
        response.setHeader('Content-Type','text/html;charset=utf-8');
        //��ȡ�ļ������ݣ����ҽ�����������д����Ӧ��
        fs.readFile('index.html',function(err,data){
          response.write(data);//д����Ӧ��
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
            response.write(data);//д��Ӧ��
            response.end();
        });
    }
}

var server=http.createServer(serve);
server.listen('8081','localhost');

































