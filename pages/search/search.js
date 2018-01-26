// pages/search/search.js
var common = require('../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['1','2','3','4']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     wx.showLoading({
       title: 'Loading',
     })
  },

  bumpDetail: function () {
    console.log(1)
    // wx.navigateTo({
    //   url: '/pages/detail/detail?a=1&b=2',
    //   success:function(){
    //     console.log('跳转success')
    //   }

    // })
    common.Bump()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var _this = this
    wx.request({
      url: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1516691240938', //仅为示例，并非真实的接口地址
      data: {
        // x: '',
        // y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        _this.setData({
          titles: res.data.data.hotkey

        })
        wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  onPullDownRefresh: function () {
    console.log('上啦刷新')
    setTimeout(function () {
      wx.stopPullDownRefresh()
      console.log('上啦刷新2秒后关闭了')
    }, 200)
  },
  onPageScroll: function (scrollTop) {
    console.log(scrollTop)
  },
  onReachBottom: function () {
    console.log('到底了')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})