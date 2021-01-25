// pages/base/base.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '小明',
    age: 18,
    hobbys:['篮球','羽毛球','兵兵球'],
    result:0,

  },
  addButtong(){
    //数据渲染 
    this.setData({
      result: this.data.result+=1
    })
  },
  subButtong(){
    //数据渲染 
    this.setData({
      result: this.data.result-=1
    })
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

  }
})