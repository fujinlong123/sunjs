const localStorage={};

localStorage.getStoreCode=function(){
  return wx.getStorageSync('storeCode');
}

localStorage.setStoreCode = function (storeCode) {
  return wx.setStorageSync('storeCode', storeCode);
}




module.exports = localStorage