const { echarts } = require('../../common/echarts');

Page({
  data: {
    echarts,
    option: {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    },
  },
  onTap(event) {
    wx.navigateTo({
      url: `/pages/chart/index?id=${event.currentTarget.dataset.id}`,
    });
  },
  onShareAppMessage() {},
});
