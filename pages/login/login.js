
const sun = require("../../utils/sun.js")

// pages/login/login.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginError:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.login();
    wx.showLoading({
      title: '加载中数据中',
    });
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
  
  },

  login:function(){
    var page=this;
    sun.login({
      success:function(){
        wx.redirectTo({
          url: '/pages/index/index'
        })
        wx.hideLoading();
      },
      fail:function(){
        page.setData({loginError:true});
      },
      complete:function(){
        wx.hideLoading();
      }
    
    });
  }

})