let uid = 0;
const guid = () => {
  return ++uid;
};

const echarts = [
  {
    id: guid(),
    title: '折线图',
    thumbnail:
      'https://echarts.cdn.apache.org/examples//data/thumb/line-simple.jpg',
    option: require('./data/basic-line-chart'),
  },
  {
    id: guid(),
    title: '柱状图',
    thumbnail:
      'https://echarts.cdn.apache.org/examples//data/thumb/bar-background.jpg',
    option: require('./data/bar-with-background'),
  },
  {
    id: guid(),
    title: '饼图',
    thumbnail:
      'https://echarts.cdn.apache.org/examples//data/thumb/pie-custom.jpg',
    option: require('./data/customized-pie'),
  },
  {
    id: guid(),
    title: '散点图',
    thumbnail:
      'https://echarts.cdn.apache.org/examples//data/thumb/bubble-gradient.jpg',
    option: require('./data/bubble-chart'),
  },
  {
    id: guid(),
    title: 'K 线图',
    thumbnail:
      'https://echarts.cdn.apache.org/examples//data/thumb/candlestick-sh.jpg',
    option: require('./data/shanghai-index'),
  },
  {
    id: guid(),
    title: '雷达图',
    thumbnail:
      'https://echarts.cdn.apache.org/examples//data/thumb/radar-aqi.jpg',
    option: require('./data/aqi-radar-chart'),
  },
  {
    id: guid(),
    title: '盒须图',
    thumbnail:
      'https://echarts.cdn.apache.org/examples//data/thumb/boxplot-light-velocity.jpg',
    option: require('./data/boxplot-light-velocity'),
  },
  {
    id: guid(),
    title: '热力图',
    thumbnail:
      'https://echarts.cdn.apache.org/examples//data/thumb/heatmap-cartesian.jpg',
    option: require('./data/heatmap-on-cartesian'),
  },
];

module.exports = {
  echarts,
};
