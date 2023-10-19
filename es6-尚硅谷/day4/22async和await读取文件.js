const fs = require('fs')

//读取为学
function readWeiXue() {
	return new Promise((resolve, reject) => {
		fs.readFile('./resources/为学.md', (err, data) => {
			//如果失败
			if (err) reject(err)
			//如果成功
			resolve(data)
		})
	})
}

//读取插秧诗
function readChaYangShi() {
	return new Promise((resolve, reject) => {
		fs.readFile('./resources/插秧诗.md', (err, data) => {
			//如果失败
			if (err) reject(err)
			//如果成功
			resolve(data)
		})
	})
}

//读取观书有感
function readGuanShu() {
	return new Promise((resolve, reject) => {
		fs.readFile('./resources/观书有感.md', (err, data) => {
			//如果失败
			if (err) reject(err)
			//如果成功
			resolve(data)
		})
	})
}

//声明async函数
async function main() {
	//获取为学
	let weixue = await readWeiXue()
	let chayang = await readChaYangShi()
	let guanshu = await readGuanShu()
	console.log(weixue.toString());
	console.log(chayang.toString());
	console.log(guanshu.toString());
}
// 弹幕：体现异步：只要有一个await语句后的promise对象是reject，
// 那么整个async函数都会中断执行。
main()