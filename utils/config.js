

const baseServerUrl = () => {
  var url="";
  if(isDev()){
    //url = "https://5a9a315a-0.gz.1251521026.clb.myqcloud.com/sun";
    url = "http://127.0.0.1:9080/sun";
  }else{
    url = "https://5a9a315a-0.gz.1251521026.clb.myqcloud.com/sun"; 
  }
  return url;
}


const isDev=()=>{
  var b=false;
  wx.getSystemInfo({
    success: function (res) {
      if (res.platform == 'devtools') {
        b=true;
      } 
    },
  })
  return b;
}


module.exports = {
  baseServerUrl: baseServerUrl,
  isDev: isDev
}
