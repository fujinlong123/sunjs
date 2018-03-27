

//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    sumPrice:0,
    goodsCount:0,
    scrollTop:0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  
    tabs: [{ title: '选项一', content: '内容一' }, { title: '选项二', content: '内容二' }, { title: '选项三', content: '内容三' }]


  }, 


  //事件处理函数
  bindViewTap() {

    this.goodsList.addItem({ price: 12.01, name: "晨光鲜牛奶", num: 1, code: "6924686501115" });
    this.setData({"scrollTop":100000});
    /*wx.scanCode({
      success: (res) => {
        console.log(res);
      },
      complete: (res) => {

      }
    });*/
  },
  settleAccounts(){
   console.log( this.goodsList.getSumPrice());
  },

  touchStart(event) {
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

  onReady() {
    this.goodsList = this.selectComponent("#goodsListComp");
  },
  goodsListChange(){
    this.setData({ sumPrice:this.goodsList.getSumPrice()});
    this.setData({ goodsCount: this.goodsList.getGoodsCount() });
  }
  
})


