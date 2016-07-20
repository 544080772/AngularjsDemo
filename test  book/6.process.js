/**
 * Created by Administrator on 2016/7/20.
 */
//当有输入发生的时候会触发data事件

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

