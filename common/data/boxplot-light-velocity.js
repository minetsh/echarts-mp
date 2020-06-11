module.exports = {
  grid: { bottom: '15%', left: '10%', right: '10%' },
  series: [
    {
      data: [
        [655, 850, 940, 980, 1070],
        [760, 800, 845, 885, 960],
        [780, 840, 855, 880, 940],
        [720, 767.5, 815, 865, 920],
        [740, 807.5, 810, 870, 950],
      ],
      name: 'boxplot',
      tooltip: {},
      type: 'boxplot',
    },
    {
      data: [
        [0, 650],
        [2, 620],
        [2, 720],
        [2, 720],
        [2, 950],
        [2, 970],
      ],
      name: 'outlier',
      type: 'scatter',
    },
  ],
  title: [
    { left: 'center', text: 'Michelson-Morley Experiment' },
    {
      borderColor: '#999',
      borderWidth: 1,
      left: '10%',
      text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
      textStyle: { fontSize: 14 },
      top: '90%',
    },
  ],
  tooltip: { axisPointer: { type: 'shadow' }, trigger: 'item' },
  xAxis: {
    axisLabel: { formatter: 'expr {value}' },
    boundaryGap: true,
    data: ['0', '1', '2', '3', '4'],
    nameGap: 30,
    splitArea: { show: false },
    splitLine: { show: false },
    type: 'category',
  },
  yAxis: {
    name: 'km/s minus 299,000',
    splitArea: { show: true },
    type: 'value',
  },
};
