/**
 * Created by Administrator on 2016/7/20.
 */
//�������뷢����ʱ��ᴥ��data�¼�

/*process.stdin.on('data',function(data){
    console.log(data.toString());
});*/

/*process.argv.forEach(function(val,index,array){
    console.log(val,index,array);
});*/



process.on('uncaughtException', function(){
    console.log('uncaughtException', e.message);
});

//process.kill(8244);
process.on('exit',function(){
    console.log('exit before run!');
});

console.log(b);
try{
    console.log(a);
}catch(e){
    console.log(e.message);
}

