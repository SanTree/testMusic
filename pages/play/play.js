// pages/play/play.js
// 导入配置文件
var config = require('../../config.js');
var app = getApp();//用于获取全局变量

Page({

  /**
   * 页面的初始数据
   */
  data: {
    song:{},//传入的歌曲信息
    isPlaying:false,//播放状态
  },

  // 页面载入事件处理函数
  onLoad:function(options){
    var self = this;
    var songid = app.globalData.community_id;//获取全局定义的变量

    if(songid===undefined){//未传入歌曲ID
       var currSong = wx.getStorageSync('curSong')||"";//从缓存中获取歌曲
      console.log(currSong)
       if(currSong == ""){//缓存中无歌曲
          var song = {songname:'未选择歌曲'};//显示未选择歌曲
          this.setData({
            song:song
          })
       }else{
         this.setData({
           song:currSong
         })
       }
    }else{
      var songlist = wx.getStorageSync('songlist')||[];//从缓存中取出歌曲列表
      // 在歌曲列表中查找songid指定的歌曲
      for(var i=0;i<songlist.length;i++){
        if(songlist[i].songid==songid){//找到对应的歌曲
           this.setData({
             song:songlist[i]//更新歌曲
           });
           break;
        }
      }

      // 缓存正在播放的歌曲
      wx.setStorageSync('curSong', this.data.song);
    }
  },

  // 播放/暂停
  playToggle:function(){
    var self = this;
    //没有歌曲要播放，则直接推退出
    console.log(this.data.song.songname)
    if(this.data.song.songname=="未选择歌曲"){
      return;
    }

    if(this.data.isPlaying){//正在播放
      wx.stopBackgroundAudio();//停止播放
    }else{//未播放，则开始播放 
      console.log(this.data.song.url)
       wx.playBackgroundAudio({
         dataUrl: this.data.song.url||this.data.song.m4a,
         success:function(res){
           console.log(res)
         }
       })
    }

    // 更新播放状态
    this.setData({
      isPlaying:!this.data.isPlaying
    })
  }

})