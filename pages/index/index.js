//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    listData: [
      { "code": "巧克力", "text": "1", "type": "8.6" },
      { "code": "卤蛋", "text": "1", "type": "1.6" },
      { "code": "康师傅方便面", "text": "1", "type": "5" },
      { "code": "康师傅方便面", "text": "1", "type": "5" },
      { "code": "康师傅方便面", "text": "1", "type": "5" },
      { "code": "康师傅方便面", "text": "1", "type": "5" },
      { "code": "康师傅方便面", "text": "1", "type": "5" },
      { "code": "康师傅方便面", "text": "1", "type": "5" }, 
      { "code": "康师傅方便面", "text": "1", "type": "5" },
      { "code": "康师傅方便面", "text": "1", "type": "5" },
      { "code": "康师傅方便面", "text": "1", "type": "5" }, 
      { "code": "康师傅方便面", "text": "1", "type": "5" },
      { "code": "康师傅方便面", "text": "1", "type": "5" }, 
      { "code": "康师傅方便面", "text": "1", "type": "5" }

     
    ],
    resultHtml:"<b>总计:</b><span style='color:red;'>￥508.90</span><sub><span style='font-size:15px;'>(5件)</span></sub>"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.scanCode({
      success: (res) => {
      },
      complete:(res)=>{
       
      }
    });
  },
  setting:function(){
    wx.navigateTo({
      url: '../setting/setting',
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      console.log(wx.getUserInfo);
      debugger;
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
