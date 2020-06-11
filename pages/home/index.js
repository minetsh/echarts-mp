const { echarts } = require('../../common/echarts');

Page({
  data: {
    echarts,
  },
  onLoad: function () {},
  onTap(event) {
    wx.navigateTo({
      url: `/pages/chart/index?id=${event.target.dataset.id}`,
    });
  },
});
