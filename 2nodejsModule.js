// creating own module
// if we have to use one js code to another we can use it by module techniques 
// it can be as php include file;

myDateTime = ()=>{
    return Date();
}
// data = {
//     name : "suaraj",
//     age : 21,
//     Number:9809603594,
//     package:"node"
// }
// console.log(exports,require,__filename,__dirname);
module.exports = myDateTime;