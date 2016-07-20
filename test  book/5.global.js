/**
 * Created by Administrator on 2016/7/20.
 */
//console.log(global);
//console.log(this);
var name='ygl';
exports.name=name;
//console.log(this.name);//this 就是指当前的exports
/*
*   setImmediate clearImmediate
*   pid 4856   进程ID
*   process  当前进程对象
*
*/

//console.trace();

process.stdin.on('data',function(data){
    console.log(data.toString());
});


//输出当前进程的ID
console.log(process.pid);