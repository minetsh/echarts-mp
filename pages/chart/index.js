const { echarts } = require('../../common/echarts');

Page({
  data: {
    chart: null,
  },
  onLoad: function (option) {
    const { id } = option;
    const chart = echarts.find((chart) => chart.id === +id);
    if (!chart) {
      wx.showToast({
        title: `找不到图表：${id}`,
      });
      setTimeout(() => {
        wx.navigateBack({ data: 1 });
      }, 1500);
      return;
    }
    this.setData({
      chart,
    });
    wx.setNavigationBarTitle({
      title: chart.title,
    });
  },
});
