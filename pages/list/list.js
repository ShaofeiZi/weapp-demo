// 创建一个页面对象
// 如果不显式调用，系统也会自动调用
// 也就是说：此文件可以留空
Page({
    // 自定义分享
    onShareAppMessage: function () {
        return {
            title: '啦啦德玛西亚',
            desc: '黑黑黑',
            path: '/page/user?id=123'
        }
    }
})