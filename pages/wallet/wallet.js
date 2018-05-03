// pages/wallet/wallet.js
let app=getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    style:"unselected",
    money:10
  },
  selectButton(e) {
    this.setData({
      style:"unselected"
    })
    console.log(e)
  },
  recharge(){
    wx.request({
      url: 'http://127.0.0.1:3000/user/recharge',
      data:{
        phone:app.globalData.userInformation.phone,
        money:10
      },
      success(res) {
        wx.showToast({
          title: '充值成功',
          image: '/image/20.png',
          duration: 1500,
          success() {
            setTimeout(function(){
              wx.navigateBack({
                url: '../user/user',
              })
            },1500)
          }
        })
      },
      fail() {
        wx.showToast({
          title: '充值失败',
          image: '/image/19.png',
          duration: 1500
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})