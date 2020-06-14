const { echarts } = require('../../common/echarts');

Page({
  data: {
    echarts,
  },
  onTap(event) {
    wx.navigateTo({
      url: `/pages/chart/index?id=${event.currentTarget.dataset.id}`,
    });
  },
});
