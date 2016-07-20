/**
 * Created by Administrator on 2016/7/20.
 */
//cwd  当前工作目录
console.log(process.cwd());
console.log(__dirname);
process.chdir('../');
process.chdir(__dirname);
console.log(process.cwd());
console.log(__dirname);