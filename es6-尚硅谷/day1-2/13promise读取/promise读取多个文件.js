const fs = require('fs')
const { resolve } = require('path')

// fs.readFile('./resources/为学.md',(err,data1)=>{
//     fs.readFile('./resources/插秧诗.md',(err,data2)=>{
//         fs.readFile('./resources/观书有感.md',(err,data3)=>{
//             let result = data1 +'\r\n'+ data2 +'\r\n'+ data3;
//             console.log(result);
//         })
//     })
// })

// 使用promise实现
const p = new Promise((resolve,reject) =>{
    fs.readFile("./resources/为学.md",(err,data)=>{
        resolve(data)
    })
})

p.then(value => {
    // console.log(value.toString());
    //1.value 是第一个文件的内容
    // 4.因此在这返回一个promise
    return new Promise((resolve,reject)=>{
        fs.readFile("./resources/插秧诗.md",(err,data)=>{
            //2.此时data能拿到这个文件内容，但没法读下一个文件内容了
            //3.如果在这直接读，就又是fs.readFile，又嵌套又回调地狱
            // 5.此处value是第一文件内容那个，data是第二文件内容
            // 6.这里resolve成功，上面的then方法也是成功的，
            //  而且成功的值就是then方法返回promise成功的值
            resolve([value,data])
        })
    })
}).then(value => {
    // 7.此时value是第一和第二文件内容形成的数组
    return new Promise((resolve,reject)=>{
        fs.readFile("./resources/观书有感.md",(err,data)=>{
            // 压入
            value.push(data)
            resolve(value)
        })
    })
}).then(value =>{
    console.log(value.join('\r\n'));
})