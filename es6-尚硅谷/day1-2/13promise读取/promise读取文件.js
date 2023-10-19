const fs = require('fs')
//
// fs.readFile('./resources/为学.md',(err,data) =>{
//     if(err) throw err;
//     console.log(data.toString());
// })

// 使用promise封装
const p = new Promise(function(resolve,reject){
    fs.readFile('./resources/为学.md',(err,data)=>{
        if(err) reject(err)
        // 如果成功,调用resolve改变promise状态为成功，
        // 通过往里边传参还能设置它的值
        resolve(data)
    })
})

p.then(function(value){
    console.log(value.toString());
},function(reason){
    console.log("读取失败！");
    console.log(reason);
})
