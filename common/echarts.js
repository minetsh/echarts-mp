let uid = 0;
const guid = () => {
  return ++uid;
};

const echarts = [
  {
    id: guid(),
    title: '折线图',
    thumbnail:
      'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-simple.webp',
    option: require('./data/basic-line-chart'),
  },
  {
    id: guid(),
    title: '柱状图',
    thumbnail:
      'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-background.webp',
    option: require('./data/bar-with-background'),
  },
  {
    id: guid(),
    title: '饼图',
    thumbnail:
      'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-simple.webp',
    option: require('./data/customized-pie'),
  },
  {
    id: guid(),
    title: '散点图',
    thumbnail:
      'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/scatter-simple.webp',
    option: require('./data/bubble-chart'),
  },
  {
    id: guid(),
    title: 'K 线图',
    thumbnail:
      'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/candlestick-simple.webp',
    option: require('./data/shanghai-index'),
  },
  {
    id: guid(),
    title: '雷达图',
    thumbnail:
      'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/radar.webp',
    option: require('./data/aqi-radar-chart'),
  },
  {
    id: guid(),
    title: '盒须图',
    thumbnail:
      'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/data-transform-aggregate.webp',
    option: require('./data/boxplot-light-velocity'),
  },
  {
    id: guid(),
    title: '热力图',
    thumbnail:
      'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/heatmap-cartesian.webp',
    option: require('./data/heatmap-on-cartesian'),
  },
  {
    id: guid(),
    title: '饼图示例',
    thumbnail: 'https://s1.ax1x.com/2020/08/15/dklgv6.th.png',
    option: require('./data/pie-sample'),
  },
  {
    id: guid(),
    title: '柱状图示例',
    thumbnail: '',
    option: require('./data/bar-sample'),
  },
];

module.exports = {
  echarts,
};
