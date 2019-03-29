(function(module){
  var exports=module.exports={};
  // 接口应用ID
  var appid = 90588;
  // 接口密钥
  var secret = "77b488386f124c69b26c8b141506214b";
  // get方式的参数
  var param = "?showapi_appid="+appid+"&showapi_sign="+secret;
  // 热门榜单访问接口
  var hotUrl = "http://route.showapi.com/213-4"+param;
  // 根据歌名、人名查询歌曲接口
  var searchByNameUrl = "http://route.showapi.com/213-1"+param;
  var searchBIdUrl = "http://route.showapi.com/213-2" + param;

  module.exports = {
    config:{
      hotUrl:hotUrl,
      searchByNameUrl: searchByNameUrl,
      searchBIdUrl: searchBIdUrl
    }
  };
})(module);

/*以上代码将易源接口的接入点URL、appid和secret等都封装起来，并以config对象的属性形式提供。其他页面引入config.js后，就可使用config.hotUrl这样的形势直接引用了。*/