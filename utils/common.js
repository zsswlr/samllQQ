// common.js
function Bump() {
  console.log(1)
  wx.navigateTo({
    url: '/pages/detail/detail?a=1&b=2',
    success: function () {
      console.log('跳转success')
    }

  })
}


module.exports.Bump = Bump