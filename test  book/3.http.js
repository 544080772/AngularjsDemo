/**
 * Created by Administrator on 2016/7/20.
 */
var http=require('http');
var fs=require('fs');
//mime�����ļ����ͺ�׺����ȡcontent-type ��Ӧ���ļ�����
var mime=require('mime');
function serve(request,response){
   // console.log(request.method,request.url);
   // console.log(request.headers);
    var url=request.url;
    if(url=='/'){
        response.statusCode=200;
        //������Ӧ���ͣ�����Ϊutf-8
        response.setHeader('Content-Type','text/html;charset=utf-8');
        response.setHeader('name','zfpx');//������Ӧͷ
        //��ȡ�ļ����ݣ����ҽ�����д����Ӧ��
        fs.readFile('index.html',function(err,data){
            response.write(data);//д����Ӧ��
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

   /* response.write(new Date().toString());//д����Ӧ��
    response.end();*/
}
//ÿ������������ʱ�򣬵���serve�����Կͻ��˽�����Ӧ
var server=http.createServer(serve);
server.listen(8080,'localhost');


































