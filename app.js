// 创建一个应用程序对象
// 如果不显式调用，系统也会自动调用
// 也就是说：此文件可以留空
App({
	onLaunch: function () {
		console.log('App 初始化')
	},
	onShow: function () {
		console.log('App 显示')
	},
	onHide: function () {
		console.log('App 隐藏')
	}
})