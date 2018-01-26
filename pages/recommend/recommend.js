// pages/recommend/recommend.js
var common = require('../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    radioList:[],
    songList:[],
    toView: 'red',
    scrollTop: 100,
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    src: '../../images/cat.jpg',
    mode: 'widthFix'
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('加载')
    wx.showLoading({
      title: '加载中',
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

  AjaxSlider: function () {
    var _this = this
    wx.request({
      url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1516675750260', //仅为示例，并非真实的接口地址
      data: {
        // x: '',
        // y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res)
      }
    })
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('初次渲染完成')
    var _this = this
    wx.request({
      url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1516690915871', //仅为示例，并非真实的接口地址
      data: {
        // x: '',
        // y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        _this.setData({
          imgUrls: res.data.data.slider,
          radioList: res.data.data.radioList,
          songList: res.data.data.songList
        })
         wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('显示')
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