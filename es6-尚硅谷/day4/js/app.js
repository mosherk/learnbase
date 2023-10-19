// 静态引入
// import * as m1 from "./hello"

const btn = document.getElementById('btn')

btn.onclick = function(){
    //动态引入，返回结果是个promise对象
    //而promise对象成功的值是就是hello.js模块暴露出来的对象
    import('./hello.js').then(module =>{
        // console.log(module);
        module.hello()
    })
}



