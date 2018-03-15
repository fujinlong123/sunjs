

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
    resultHtml: "<b>总计:</b><span style='color:red;'>￥508.90</span><sub><span style='font-size:15px;'>(5件)</span></sub>",
    tabs: ["待收银", "已完成", "已取消"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
   
  },
  //事件处理函数
  bindViewTap () {
    wx.scanCode({
      success: (res) => {
        console.log(res);
      },
      complete: (res) => {

      }
    });
  },

  touchStart (event) {
   /* console.log(event);
    this.setData({
      startX: event.changedTouches[0].pageX
    });*/
  },
  touchEnd(event) {
    /*if ((event.changedTouches[0].pageX - this.data.startX) < 0) {
      console.log("向左滑动");
    } else if ((event.changedTouches[0].pageX - this.data.startX) > 0) {
      console.log("向右滑动");
    }
    var query = wx.createSelectorQuery();
    //选择id
    query.select('#2').boundingClientRect();
    query.exec(function (res) {
      //res就是 该元素的信息 数组
      console.log(res);
      //取高度
     
    })*/
  },




  tabClick(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  setting() {
    wx.navigateTo({
      url: '../setting/setting',
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }, 
  handleZanStepperChange(e) {
    var componentId = e.componentId;
    var stepper = e.stepper;

    this.setData({
      [`${componentId}.stepper`]: stepper
    });
  }
})


