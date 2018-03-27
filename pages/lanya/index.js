// pages/lanya/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [],
    index: 0
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
  
    wx.openBluetoothAdapter({
      success: function (res) {
        console.log(res)

      }
    });
    wx.getBluetoothAdapterState({
      success: function (res) {
        console.log(res)
      }
    })

    wx.startBluetoothDevicesDiscovery({

      success: function (res) {
        console.log(res)
      }
    })
  

    function ab2hex(buffer) {
      var hexArr = Array.prototype.map.call(
        new Uint8Array(buffer),
        function (bit) {
          return ('00' + bit.toString(16)).slice(-2)
        }
      )
      return hexArr.join('');
    }
    var self = this;
    console.log(this);
   
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
  connectBtn(e){
  
    console.log(this.data.array[this.data.index]);
    var deviceId = this.data.array[this.data.index];
    wx.createBLEConnection({
      deviceId: deviceId,
      success: function (res) {
        console.log(res)
      },
      fail(res){
        console.log(res);
      }, complete(res){
        console.log(res);
      }
    })

  },
  findBtn(e){

    var self=this;
    wx.getBluetoothDevices({
      success: function (res) {
        console.log(res)
        for (var i = 0; i < res.devices.length; i++) {
          self.data.array.push(res.devices[i].deviceId);
          self.setData({ "array": self.data.array });
          console.log(res.devices[i].deviceId + ":" + res.devices[i].localName);
        }
      }
    })
   
  },
  bindPickerChange(e){
     console.log('picker发送选择改变，携带值为', e.detail.value)
     this.setData({
       index: e.detail.value
     })
   }
})