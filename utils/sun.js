const config = require("config.js")
const sun={};


sun._loginError=function(msg,callback){
  wx.showToast({
    icon: 'warn',
    title: msg,
    complete:function(){
      if (typeof callback==='function'){
        callback();
      }
    }
  });
}


sun._loginSuccess = function (callback) {
  if (callback){
    callback();
  }
}

sun._login = function (options){
  //session 未过期，并且在本生命周期一直有效
  console.log('登录未过期');
  var sessionId = wx.getStorageSync("sessionId");
  console.log(sessionId);

  if (sessionId) {
    sun._loginSuccess(options.success);
    return;
  }
  //sessionId为空，重新登录
  wx.login({
    success: res => {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      console.log("接口基地址：" + config.baseServerUrl());
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
                sun._loginSuccess(options.success);

              } else {
              
                sun._loginError(result.msg,options.fail);
              }
            } else {
              sun._loginError("服务器异常,请稍候再试", options.fail);
            }
          },
          fail:function(res){
      
            sun._loginError("网络异常,请稍候再试", options.fail);
          }
        })
      } else {
        sun._loginError('登录失败,请稍候再试', options.fail);
      }
    }
  })
}


sun.login=function(options){
  wx.checkSession({
    success: function () {
     
        sun._login(options);

    },
    fail: function (options) {
      //登录态过期
      sun._login();
    }
  })
  sun.reportUserInfo();
}


sun.reportUserInfo= function () {
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
            var app=getApp();
            app.globalData.userInfo = res.userInfo
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


//封装wx.request 使得每次请求参数都会带上sessionId
sun.request=function(options){
  var data=options.data||{};

  var method = options.method||"GET";

  data.sessionId=wx.getStorageSync("sessionId");

  wx.request({
    method, method,
    url: options.url,
    data:data,
    success:function(res){
      if (typeof options.success==='function'){
        options.success(res);
      }
    },
    fail:function(res){
      if (typeof options.fail === 'function') {
        options.fail(res);
      }
    }
  })
}









module.exports = sun