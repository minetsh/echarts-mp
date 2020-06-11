module.exports = {
  backgroundColor: '#2c343c',
  series: [
    {
      animationEasing: 'elasticOut',
      animationType: 'scale',
      center: ['50%', '50%'],
      data: [
        { name: '视频广告', value: 235 },
        { name: '联盟广告', value: 274 },
        { name: '邮件营销', value: 310 },
        { name: '直接访问', value: 335 },
        { name: '搜索引擎', value: 400 },
      ],
      itemStyle: {
        color: '#c23531',
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
      },
      label: { color: 'rgba(255, 255, 255, 0.3)' },
      labelLine: {
        length: 10,
        length2: 20,
        lineStyle: { color: 'rgba(255, 255, 255, 0.3)' },
        smooth: 0.2,
      },
      name: '访问来源',
      radius: '55%',
      roseType: 'radius',
      type: 'pie',
    },
  ],
  title: {
    left: 'center',
    text: 'Customized Pie',
    textStyle: { color: '#ccc' },
    top: 20,
  },
  tooltip: { formatter: '{a} <br/>{b} : {c} ({d}%)', trigger: 'item' },
  visualMap: {
    inRange: { colorLightness: [0, 1] },
    max: 600,
    min: 80,
    show: false,
  },
};
