/**
 * Created by Administrator on 2016/7/20.
 */
//console.log(global);
//console.log(this);
var name='ygl';
exports.name=name;
//console.log(this.name);//this ����ָ��ǰ��exports
/*
*   setImmediate clearImmediate
*   pid 4856   ����ID
*   process  ��ǰ���̶���
*
*/

//console.trace();

process.stdin.on('data',function(data){
    console.log(data.toString());
});


//�����ǰ���̵�ID
console.log(process.pid);