/**
 * Created by Administrator on 2016/7/20.
 */
//cwd  ��ǰ����Ŀ¼
console.log(process.cwd());
console.log(__dirname);
process.chdir('../');
process.chdir(__dirname);
console.log(process.cwd());
console.log(__dirname);