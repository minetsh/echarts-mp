const { echarts } = require('../../common/echarts');

Page({
  data: {
    chart: null,
  },
  instance: null,
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
  onInstance(e) {
    this.instance = e.detail;
  },
  onSaveImage() {
    if (this.instance) {
      const dom = this.instance.getDom();
      if (dom) {
        dom
          .saveAsImage()
          .then((path) => {
            return wx.saveImageToPhotosAlbum({
              filePath: path,
            });
          })
          .then(() => {
            wx.showToast({
              title: '保存成功',
            });
          })
          .catch((e) => {
            console.error(e);
            wx.showToast({
              title: '保存失败',
              icon: 'none',
            });
          });
      }
    }
  },
});
