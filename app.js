const config = require("utils/config.js")

//app.js
App({
  onLaunch: function (options) {
    console.log(options.scene);
    wx.checkSession({
      success: function () {
        //session 未过期，并且在本生命周期一直有效
        console.log('登录未过期');
        var sessionId = wx.getStorageSync("sessionId");
        console.log(sessionId);
        //sessionId为空，重新登录
        if (!sessionId) {
          login();
        }
      },
      fail: function () {
        //登录态过期
        login();
      }
    });

    reportUserInfo();

  },

  globalData: {
    userInfo: null
  }
})







// 登录
var login = function () {
  wx.login({
    success: res => {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      console.log("接口基地址："+config.baseServerUrl());
      if (res.code) {
        wx.request({
          url: config.baseServerUrl() + "/weixin/onLogin",
          data: {
            code: res.code
          },
          success: function (res) {
            console.log(res);
            if (res.statusCode == 200) {
              var result = res.data;
              console.log(result);
              if (result.ret == 'success') {
                wx.setStorageSync(
                  'sessionId',
                  result.data.sessionId
                );

              } else {
                wx.showToast({
                  title: result.msg + ""
                });
              }
            }else{
              wx.showToast({
                title: "网络异常"
              });
            }
          }
        })
      } else {
        wx.showToast({
          title: '登录失败'
        })
      }
    }
  })
};


var reportUserInfo=function(){
  // 获取用户信息
  wx.getSetting({
    success: res => {
      if (!res.authSetting['scope.userInfo']) {
        wx.authorize({
          scope: 'scope.userInfo',
          success() {
            // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
          }
        })
      }

      if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        wx.getUserInfo({
          success: res => {
            // 可以将 res 发送给后台解码出 unionId
            console.log(res.userInfo);
            this.globalData.userInfo = res.userInfo
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            if (this.userInfoReadyCallback) {
              this.userInfoReadyCallback(res)
            }
          }
        })
      }
    }
  })
};