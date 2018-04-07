const config = require("utils/config.js")
const sun = require("utils/sun.js")

//app.js
App({
  onLaunch: function (options) {

    sun.request({
      url:"ok"
    });

    sun.login();
  },

  globalData: {
    userInfo: null
  }
})









